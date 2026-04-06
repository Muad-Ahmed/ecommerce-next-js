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

function normalizeImageUrl(url: string) {
  if (url.includes("_t.png")) return url;
  return url.replace(/_?\.(jpe?g|png)$/i, "_t.png");
}

const ProductCard = ({ product }: Props) => {
  const [src, setSrc] = useState(() => normalizeImageUrl(product.image));
  const ratingArray = Array(Math.round(product.rating?.rate || 0)).fill(0);

  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

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
    <div className="p-5 bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] rounded-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 group flex flex-col justify-between h-full">
      <div>
        {/* Product Image Container */}
        <div className="w-full h-[180px] bg-white rounded-xl overflow-hidden relative group-hover:scale-95 transition-transform duration-500 shadow-sm border border-gray-50">
          <Image
            src={src}
            alt={product.title}
            fill
            className="object-contain p-4 drop-shadow-sm"
            onError={() => setSrc(product.image)}
          />
        </div>

        {/* Product Category */}
        <p className="mt-5 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          {product.category}
        </p>

        {/* Product Title */}
        <Link href={`/product/product-details/${product.id}`}>
          <h1 className="text-md cursor-pointer hover:text-blue-700 transition-all sm:w-full sm:truncate mt-1 text-gray-800 font-bold">
            {product.title}
          </h1>
        </Link>

        {/* Rating Stars */}
        <div className="flex items-center mt-2 space-x-0.5">
          {ratingArray.map((_, i) => (
            <StarIcon
              key={i}
              size={14}
              fill="#f59e0b"
              className="text-amber-500"
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-2">
            ({product.rating?.count})
          </span>
        </div>
      </div>

      <div>
        {/* Pricing Section */}
        <div className="flex mt-4 items-baseline space-x-2">
          <p className="text-gray-900 text-xl font-black">${product.price}</p>
          <p className="text-gray-400 text-sm line-through font-medium italic">
            {`$${(product.price + 10).toFixed(2)}`}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center space-x-3">
          <Button
            size={"icon"}
            onClick={handleCartClick}
            className={`flex-1 flex items-center justify-center gap-2 transition-all duration-300 rounded-xl shadow-md border ${
              !isInCart
                ? "bg-gray-900 hover:bg-black border-gray-800 text-white"
                : "bg-red-500/90 hover:bg-red-600 border-red-400/30 text-white"
            }`}
          >
            <ShoppingBag size={18} />
            <span className="text-xs font-bold uppercase">
              {isInCart ? "Remove" : "Add"}
            </span>
          </Button>

          <Button
            size={"icon"}
            onClick={() => toggleFavHandler(product)}
            className={`w-12 h-10 rounded-xl transition-all duration-300 shadow-sm border ${
              isFavorite
                ? "bg-rose-50 border-rose-100 text-rose-500"
                : "bg-gray-50 border-gray-100 text-gray-400 hover:text-rose-500 hover:bg-rose-50"
            }`}
          >
            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;