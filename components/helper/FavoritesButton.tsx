"use client";

import { RootState } from "@/store/store";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FavoritesButton = () => {
  // Use state to track if the component has mounted to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  // Get favorite items from Redux store
  const favItems = useSelector((state: RootState) => state.favorites.items);

  // Set mounted to true once the component enters the browser environment
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return a stable placeholder during server-side rendering
  if (!isMounted) {
    return (
      <div className="relative">
        <HeartIcon size={26} />
      </div>
    );
  }

  return (
    <Link href="/favs" className="relative group cursor-pointer">
      <HeartIcon
        size={26}
        className="transition-transform duration-200 group-hover:scale-110"
      />

      {/* Only show the badge if there are items in the favorites list */}
      {favItems.length > 0 && (
        <span
          className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 text-center 
          flex items-center justify-center text-xs text-white rounded-full font-bold shadow-sm"
        >
          {favItems.length}
        </span>
      )}
    </Link>
  );
};

export default FavoritesButton;
