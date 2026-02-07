"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getAllProducts } from "../../request/requests";
import ProductCard from "../../components/home/ProductCard";
import { Product } from "../../typing";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndFilterProducts = async () => {
      setLoading(true);
      try {
        const allProducts = await getAllProducts();
        const filtered = allProducts.filter((product: Product) =>
          product.title.toLowerCase().includes(query.toLowerCase()),
        );
        setProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFilterProducts();
  }, [query]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-12">
      <h1 className="text-2xl font-bold mb-8">
        Results for: <span className="text-blue-600">&quot;{query}&quot;</span>
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">
            No products found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
