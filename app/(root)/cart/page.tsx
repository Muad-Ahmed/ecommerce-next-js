"use client";

import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  // Get our cart items
  const items = useSelector((rootState: RootState) => rootState.cart.items);
  // Calculate total quantity
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  // Calculate the total price
  const totalPrice = items
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);
  // Calculate vat (15%)
  const vat = (+totalPrice * 0.15).toFixed(2);
  // Total price with vat
  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

  // Get authenticate user
  const { user } = useUser();

  return (
    <div className="mt-8 min-h-[60vh]">
      {/* Check if cart is empty */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/cart.svg"
            alt="empty_cart"
            width={400}
            height={400}
            className="object-cover mx-auto"
          />
          <h1 className="my-8 text-2xl font-semibold">Your cart is empty</h1>
          <Link href="/">
            <Button>Shop Now</Button>
          </Link>
        </div>
      )}
      {/* If cart item exist  */}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-16">
          {/* Cart Items */}
          <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
            <h1 className="p-4 text-xl mb-5 sm:text-2xl md:text-3xl font-bold text-white bg-blue-700">
              Your Cart ({totalQuantity} Items)
            </h1>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div
                    className="flex items-center pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25
                   border-gray-700 space-x-10"
                  >
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl text-base font-bold text-black">
                        {item.title}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Category : {item.category}
                      </h1>
                      <h1 className="md:text-2xl text-lg font-bold text-blue-950">
                        ${item.price}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Quantity : {item.quantity}
                      </h1>
                      <div className="flex items-center mt-4 space-x-2">
                        <Button>Add More</Button>
                        <Button variant={"destructive"}>Remove</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Cart summary */}
          <div className="xl:col-span-2">
            <div className="bg-indigo-950 sticky top-[25vh] p-6 rounded-lg">
              <h1 className="text-center mt-8 mb-8 text-white text-3xl font-semibold">
                Summary
              </h1>
              <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
              <div
                className="flex mt-4 text-xl uppercase font-semibold text-white items-center
                justify-between"
              >
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div
                className="flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center
                justify-between"
              >
                <span>Vat</span>
                <span>${vat}</span>
              </div>
              <div
                className="flex mt-6 mb-4 text-xl uppercase font-semibold text-white items-center
                justify-between"
              >
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
              <div
                className="flex mt-6 mb-6 text-xl uppercase font-semibold text-white items-center
                justify-between"
              >
                <span>Total</span>
                <span>${totalPriceWithVat}</span>
              </div>

              {!user && (
                <Link href="/sign-in">
                  <Button className="bg-orange-500 w-full">
                    Sign In to Checkout
                  </Button>
                </Link>
              )}
              {user && (
                // Paypal Button
                <Button className="bg-orange-500 w-full">Paypal</Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
