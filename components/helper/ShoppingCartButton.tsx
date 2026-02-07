"use client";

import { RootState } from "@/store/store";
import { ShoppingBagIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SheetTrigger, Sheet, SheetContent } from "../ui/sheet";
import CartSidebar from "./CartSidebar";

const ShoppingCartButton = () => {
  // State to track if the component has mounted to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  // Access cart items from Redux store
  const items = useSelector((rootState: RootState) => rootState.cart.items);

  // Calculate total quantity of items in the cart
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  // Trigger mounting state change on client-side load
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return a static version during SSR to match server-side HTML
  if (!isMounted) {
    return (
      <div className="relative cursor-pointer">
        <ShoppingBagIcon size={26} />
      </div>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative group cursor-pointer transition-transform duration-200 active:scale-90">
          {/* Badge showing total quantity, only rendered on client-side after mount */}
          <span
            className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 text-center 
              flex items-center justify-center text-xs text-white rounded-full font-bold
              shadow-md z-10 transition-all duration-300 group-hover:bg-red-600"
          >
            {totalQuantity}
          </span>

          <ShoppingBagIcon
            size={26}
            className="transition-colors duration-200 group-hover:text-red-500"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-auto h-full">
        {/* Sidebar component to display cart items */}
        <CartSidebar items={items} />
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartButton;
