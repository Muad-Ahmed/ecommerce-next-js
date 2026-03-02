import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] bg-[radial-gradient(at_top_left,_rgba(255,255,255,1)_0%,_rgba(241,245,249,1)_50%,_rgba(226,232,240,0.3)_100%)]">
      <Hero />
      <div className="relative z-10 space-y-24 pb-20">
        <Category id="category" />
        <AllProducts />
      </div>
    </div>
  );
};

export default Home;