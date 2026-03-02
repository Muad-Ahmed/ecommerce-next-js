"use client";
import { getAllProducts } from "@/request/requests";
import { Product } from "@/typing";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

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

  return (
    <div className="pt-16 pb-12 relative">
      <div className="max-w-[250px] mx-auto bg-white/20 backdrop-blur-sm border border-white/30 py-2 rounded-full shadow-sm mb-8">
        <h1 className="text-center font-bold text-2xl text-gray-800 uppercase tracking-wider">All Products</h1>
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
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllProducts;