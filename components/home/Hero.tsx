import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex flex-col justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100 via-white to-rose-50">
      {/* Define grid */}
      <div className="w-10/12 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12 bg-white/30 backdrop-blur-md border border-white/40 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
        {/* Content */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black uppercase font-bold">
            mega sale <span className="text-rose-600">Special</span> Offer up to{" "}
            <span className="text-orange-500">60%</span> off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            soluta sed iusto voluptates labore, porro molestias quaerat a
            consequuntur dolorem! Libero unde iusto officiis sapiente ullam ab
            aperiam ad alias?
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Link href="#category">
              <Button
                size={"lg"}
                className="bg-blue-700/80 backdrop-blur-sm hover:bg-blue-700 border border-white/20 shadow-lg"
              >
                shop now
              </Button>
            </Link>
            <Link href="#category">
              <Button
                size={"lg"}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-black/10 text-black"
              >
                Explore More
              </Button>
            </Link>
          </div>
        </div>
        {/* Image content */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full"></div>
          <Image
            src="/images/hero.svg"
            alt="hero"
            width={600}
            height={600}
            className="lg:h-[70%] lg:w-[70%] xl:w-[80%] xl:h-[80%] mx-auto relative z-10 drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
