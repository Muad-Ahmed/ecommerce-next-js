"use client";
import { getAllCategories } from "@/request/requests";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "@/store/filterSlice";
import { RootState } from "../../store/store";

const Category = ({ id }: { id: string }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState<string[]>([]);
  
  const selectedCategory = useSelector((state: RootState) => state.filter.selectedCategory);

  useEffect(() => {
    const fetchCats = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };
    fetchCats();
  }, []);

  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category));
    const productsSection = document.getElementById("all-products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!categories || categories.length === 0) return null;

  return (
    <div id={id} className="pt-16 pb-12 scroll-mt-20">
      <div className="max-w-[300px] mx-auto bg-white/40 backdrop-blur-md border border-white/60 py-2 rounded-full shadow-md mb-12">
        <h1 className="text-center font-bold text-2xl capitalize text-gray-800 tracking-wide">
          Shop by category
        </h1>
      </div>

      {/* Grid with improved alignment and spacing */}
      <div className="w-[90%] md:w-4/5 mx-auto flex flex-wrap items-center justify-center gap-6">
        
        {/* All Products Button */}
        <div
          onClick={() => handleCategoryClick("all")}
          className={`group min-w-[150px] flex items-center justify-center p-6 rounded-[2rem] cursor-pointer text-center transition-all duration-500 border
            ${selectedCategory === "all" 
              ? "bg-gray-900 border-gray-800 shadow-xl scale-105" 
              : "bg-white/80 backdrop-blur-md border-white shadow-[0_8px_25px_-10px_rgba(0,0,0,0.1)] hover:bg-white hover:shadow-lg hover:-translate-y-1"
            }`}
        >
          <h1 className={`text-sm md:text-base capitalize font-bold transition-colors duration-300
            ${selectedCategory === "all" ? "text-white" : "text-gray-700"}`}>
            All Products
          </h1>
        </div>

        {/* Dynamic Categories Buttons */}
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`group min-w-[150px] flex items-center justify-center p-6 rounded-[2rem] cursor-pointer text-center transition-all duration-500 border
              ${selectedCategory === category 
                ? "bg-gray-900 border-gray-800 shadow-xl scale-105" 
                : "bg-white/80 backdrop-blur-md border-white shadow-[0_8px_25px_-10px_rgba(0,0,0,0.1)] hover:bg-white hover:shadow-lg hover:-translate-y-1"
              }`}
          >
            <h1 className={`text-sm md:text-base capitalize font-bold transition-colors duration-300
              ${selectedCategory === category ? "text-white" : "text-gray-700 group-hover:text-blue-600"}`}>
              {category}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;