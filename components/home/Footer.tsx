import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-20 pb-12 mt-20 bg-white/5 backdrop-blur-sm border-t border-white/20">
      {/* define grid system */}
      <div
        className="w-4/5 border-b-[1.2px] pb-12 border-b-gray-200 mx-auto grid grid-cols-1
          md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {/* 1st part */}
        <div>
          <h1 className="text-[25px] uppercase font-black text-gray-800 tracking-tighter">WDW Shop</h1>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            odit veniam necessitatibus in quas soluta neque enim voluptas vero
            consectetur!
          </p>
          <div className="mt-6 p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/40 shadow-sm">
             <p className="text-xs font-bold text-gray-400 uppercase">Contact us</p>
             <p className="text-sm mt-1 text-gray-800 font-medium">
               ( +000 ) 1234 5678 90
             </p>
             <p className="text-sm text-blue-600 font-medium">info@example.com</p>
          </div>
        </div>

        {/* 2nd part */}
        <div className="lg:mx-auto">
          <h1 className="text-gray-900 font-bold mb-6 text-lg">Information</h1>
          <div className="space-y-3">
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">About us</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Privacy Police</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Return Police</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Dropshipping</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Shipping Police</p>
          </div>
        </div>

        {/* 3rd part */}
        <div className="lg:mx-auto">
          <h1 className="text-gray-900 font-bold mb-6 text-lg">Account</h1>
          <div className="space-y-3">
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Dashboard</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">My Orders</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Account Details</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Track Orders</p>
          </div>
        </div>

        {/* 4th part */}
        <div className="lg:mx-auto">
          <h1 className="text-gray-900 font-bold mb-6 text-lg">Shop</h1>
          <div className="space-y-3">
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Affiliate</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Best Sellers</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Latest Products</p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-sm">Sale Products</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between w-4/5 mx-auto gap-6">
        <p className="text-xs text-gray-500 font-medium">
          © Copyright Muad {new Date().getFullYear()} - All Rights Reserved
        </p>
        <div className="bg-white/50 backdrop-blur-sm p-2 rounded-lg border border-white/60">
          <Image
            src="/images/pay.svg"
            alt="pay"
            width={200}
            height={40}
            className="object-contain sm:ml-auto grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;