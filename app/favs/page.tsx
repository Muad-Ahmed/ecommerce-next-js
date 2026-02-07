"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductCard from "@/components/home/ProductCard";
import Link from "next/link";
import { HeartOff } from "lucide-react";

const FavoritesPage = () => {
  const favItems = useSelector((state: RootState) => state.favorites.items);

  return (
    <div className="min-h-[60vh] pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 text-black">
          My Favorites ({favItems.length})
        </h1>

        {favItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {favItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <HeartOff size={80} className="text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-600">
              Your favorites list is empty
            </h2>
            <p className="text-gray-400 mt-2 mb-8">
              Start adding your favorite products now!
            </p>
            <Link
              href="/"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all"
            >
              Go Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
