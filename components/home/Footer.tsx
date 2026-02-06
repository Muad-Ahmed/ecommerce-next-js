import React from "react";
import Image from "next/image";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-20 pb-12">
      {/* define grid system */}
      <div
        className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1
         md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {/* 1st part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold">WDW Shop</h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            odit veniam necessitatibus in quas soluta neque enim voluptas vero
            consectetur!
          </p>
          <p className="text-base mt-6 text-black opacity-80">
            ( +000 ) 1234 5678 90 - info@example.com
          </p>
        </div>

        {/* 2nd part */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Information</h1>
          <p className="footer__link">About us</p>
          <p className="footer__link">Privacy Police</p>
          <p className="footer__link">Return Police</p>
          <p className="footer__link">Dropshipping</p>
          <p className="footer__link">Shipping Police</p>
        </div>

        {/* 3rd part */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Account</h1>
          <p className="footer__link">Dashboard</p>
          <p className="footer__link">My Orders</p>
          <p className="footer__link">Account Details</p>
          <p className="footer__link">Track Orders</p>
        </div>

        {/* 4th part */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Shop</h1>
          <p className="footer__link">Affiliate</p>
          <p className="footer__link">Best Sellers</p>
          <p className="footer__link">Latest Products</p>
          <p className="footer__link">Sale Products</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">
          © NextShop. All rights reserved. {currentYear}
        </p>
        <Image
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
