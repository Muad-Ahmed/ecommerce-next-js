"use client";
import { Product } from "@/typing";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/cartSlice";
import { toast } from "sonner";
import { toggleFavorite } from "../../store/favsSlice";
import { RootState } from "../../store/store";

type Props = {
  product: Product;
};

// Normalizing image URLs for compatibility with fakestoreapi changes
function normalizeImageUrl(url: string) {
  if (url.includes("_t.png")) return url;
  return url.replace(/_?\.(jpe?g|png)$/i, "_t.png");
}

const ProductCard = ({ product }: Props) => {
  const [src, setSrc] = useState(() => normalizeImageUrl(product.image));
  const ratingArry = Array(Math.round(product.rating?.rate || 0)).fill(0);

  const dispatch = useDispatch();

  // 1. Favorites Logic (Check if item exists)
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  // 2. Cart Logic (Check if item exists)
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleCartClick = () => {
    dispatch(toggleCart(product));
    if (isInCart) {
      toast.error("Removed from Cart");
    } else {
      toast.success("Added to Cart");
    }
  };

  const toggleFavHandler = (product: Product) => {
    dispatch(toggleFavorite(product));
    if (isFavorite) {
      toast.error("Removed from Favorites");
    } else {
      toast.success("Added to Favorites");
    }
  };

  return (
    <div className="p-4 border rounded-lg hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="w-[200px] h-[150px] mx-auto overflow-hidden">
        <Image
          src={src}
          alt={product.title}
          width={100}
          height={100}
          className="w-full h-full object-contain"
          onError={() => setSrc(product.image)}
        />
      </div>

      {/* Product Category */}
      <p className="mt-5 text-xs capitalize text-gray-600">
        {product.category}
      </p>

      {/* Product Title */}
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">
          {product.title}
        </h1>
      </Link>

      {/* Rating Stars */}
      <div className="flex items-center">
        {ratingArry.map((_, i) => (
          <StarIcon
            key={i}
            size={16}
            fill="yellow"
            className="text-yellow-500"
          />
        ))}
      </div>

      {/* Pricing Section */}
      <div className="flex mt-2 items-center space-x-2">
        <p className="text-black text-base line-through font-semibold opacity-50">
          {`$${(product.price + 10).toFixed(2)}`}
        </p>
        <p className="text-black text-lg font-bold opacity-80">
          ${product.price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex items-center space-x-2">
        {/* Cart Button with Enhanced Dynamic Styling */}
        <Button
          size={"icon"}
          onClick={handleCartClick}
          variant="ghost"
          className={`transition-all duration-300 active:scale-95 shadow-md border ${
            !isInCart
              ? "!bg-[#001f3f] hover:!bg-[#002d5b] border-[#001f3f]"
              : "!bg-red-100 hover:!bg-red-200 border-red-200 shadow-inner"
          }`}
        >
          <ShoppingBag
            size={18}
            className={`transition-colors duration-300 ${
              isInCart
                ? "text-red-600 stroke-[2.5px]"
                : "text-white stroke-[2px]"
            }`}
          />
        </Button>

        {/* Favorite Button */}
        <Button
          size={"icon"}
          onClick={() => toggleFavHandler(product)}
          className="bg-red-500 hover:bg-red-600 transition-all duration-300 active:scale-90"
        >
          <Heart
            size={18}
            fill={isFavorite ? "white" : "none"}
            className={isFavorite ? "text-white" : "text-gray-200"}
          />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
