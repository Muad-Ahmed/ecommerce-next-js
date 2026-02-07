"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <SearchIcon
          size={26}
          className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Product..."
            className="block w-full bg-gray-100 border border-gray-200 rounded-lg px-6 py-3 mt-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;
