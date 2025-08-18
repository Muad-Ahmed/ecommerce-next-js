import { RootState } from "@/store/store";
import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const ShoppingCartButton = () => {
  const items = useSelector((rootState: RootState) => rootState.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <span
        className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 text-center 
      flex items-center justify-center flex-col text-xs text-white rounded-full"
      >
        {totalQuantity}
      </span>
      <ShoppingBagIcon size={26} cursor={"pointer"} />
    </div>
  );
};

export default ShoppingCartButton;
