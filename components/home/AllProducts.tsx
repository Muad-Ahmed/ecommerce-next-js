"use client";
import { getAllProducts } from "@/request/requests";
import { Product } from "@/typing";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const products: Product[] = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  const selectedCategory = useSelector(
    (state: RootState) => state.filter.selectedCategory,
  );
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter((product) => product.category === selectedCategory);

  return (
    <div id="all-products" className="pt-16 pb-12 relative scroll-mt-10">
      <div className="max-w-[350px] mx-auto bg-white/40 backdrop-blur-md border border-white/60 py-2 rounded-full shadow-md mb-8">
        <h1 className="text-center font-bold text-2xl text-gray-800 capitalize tracking-wider">
          {selectedCategory === "all" ? "All Products" : selectedCategory}
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-32">
          <div className="p-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-xl">
            <Loader size={40} className="animate-spin text-blue-600" />
          </div>
        </div>
      ) : (
        <div
          className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          lg:grid-cols-4 gap-12"
        >
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
