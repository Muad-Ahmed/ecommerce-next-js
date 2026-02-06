"use client"; // Required because we use hooks and forms

import React, { FormEvent, useRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation"; // To redirect user to search page

const SearchBox = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = inputRef.current?.value;

    if (!query || query.trim() === "") return;

    // Redirect user to search results page with the query
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SearchIcon size={26} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSearch}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Product..."
            className="block w-full bg-gray-100 rounded-lg px-6 py-3 mt-4 outline-none border focus:border-blue-500 transition-all"
          />
          <p className="text-xs text-gray-400 mt-2 text-center">
            Press Enter to search
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;
