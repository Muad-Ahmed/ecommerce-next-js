import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Category id="category" />
      <AllProducts/>
    </>
  );
};

export default Home;
