"use client";

import { RootState } from "@/store/store";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const FavoritesButton = () => {
  const favItems = useSelector((state: RootState) => state.favorites.items);

  return (
    <Link href="/favs" className="relative group cursor-pointer">
      <HeartIcon
        size={26}
        className="transition-transform duration-200 group-hover:scale-110"
      />

      {favItems.length > 0 && (
        <span
          className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 text-center 
      flex items-center justify-center flex-col text-xs text-white rounded-full"
        >
          {favItems.length}
        </span>
      )}
    </Link>
  );
};

export default FavoritesButton;
