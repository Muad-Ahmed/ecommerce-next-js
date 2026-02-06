import { getAllProducts } from "@/request/requests";
import React from "react";
import ProductCard from "@/components/home/ProductCard";

interface SearchProps {
  searchParams: { q?: string };
}

const SearchPage = async ({ searchParams }: SearchProps) => {
  // Extract query from URL params, default to empty string
  const query = searchParams.q || "";

  // Fetch all products from the API
  const allProducts = await getAllProducts();

  // Filter products based on search query (Case-insensitive)
  const filteredProducts = allProducts.filter((product: any) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Search header and results count */}
        <div className="mb-8 border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Search Results for: <span className="text-blue-600">"{query}"</span>
          </h1>
          <p className="text-gray-500 mt-2 italic">
            Found {filteredProducts.length} items matching your search
          </p>
        </div>

        {/* Conditional rendering for search results */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product: any) => (
              <div
                key={product.id}
                className="transition-transform duration-300 hover:scale-[1.02]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty state UI when no products match */
          <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl shadow-sm border border-dashed">
            <h2 className="text-2xl font-semibold text-gray-800">
              No matches found!
            </h2>
            <p className="text-gray-500 mt-2 max-w-md text-center">
              We couldn&apos;t find any products matching your search. Try using
              different keywords like &quot;gold&quot; or &quot;cotton&quot;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
