"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { cards, whoWeAre } from "../..";
import { motion, useAnimation } from "framer-motion";
import "hamburgers/dist/hamburgers.css";

const Hero = () => {
  // const controls = useAnimation();

  // const handleScroll = () => {
  //   // Get the scroll position
  //   const scrollY = window.scrollY || window.scrollY;

  //   // Define the range for the animation to take place
  //   const startRange = 0;
  //   const endRange = 500; // Adjust this value based on when you want the transition to complete

  //   // Calculate the opacity based on the scroll position
  //   const opacity = Math.min(1, scrollY / endRange);

  //   // Update the animation controls
  //   controls.start({ opacity });
  // };

  // // Add a scroll event listener
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="flex flex-col items-center pb-40 gap-[104px] bg-base relative overflow-hidden">
      <Image
        src="/Hero_Section_Circle.svg"
        alt="circle"
        height={1448}
        width={1600}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        className="absolute"
      />
      <div className="z-10 mt-[128px]">
        {/* Use motion.div for the animated logo */}

        <Image
          alt="Madasa Logo"
          src="/hero_madasa.svg"
          width={836}
          height={136.613}
          className="pb-[29.79px] "
        />

        <Image
          alt="Masasa Collective Logo"
          src="/hero_collective.svg"
          width={836}
          height={97.5}
          className="mb-[33.9px]"
        />
        {/* <p className='text-white font-bold text-9xl'>Collective</p> */}
      </div>
      {/* <div className="absolute z-40 bg-[#F07C49] w-[1600px] h-[1449px] rounded-[100%/100%] -translate-y-20"></div> */}

      <h1 className="z-10 text-lg text-white max-w-[1140px] mx-8 text-center">
        {whoWeAre}
      </h1>

      {/* <div className='flex justify-between gap-6'>
        <button className='py-4 px-8 border-black border rounded-full'>How We Work</button>
        <button className='py-4 px-8 bg-black text-white border-black border rounded-full'>Contact Us</button>
    </div> */}
      <div
        className="flex flex-row gap-28 px-[70px] mb-56 relative z-50 
      max-wide:flex-col"
      >
        {cards.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-6 items-center shadow-br2xl py-8 px-16 max-w-[384px] rounded-3xl bg-white"
          >
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={256}
              height={256}
            />
            <h1 className="text-[32px] font-bold w-max">{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
