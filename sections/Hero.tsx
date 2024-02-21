"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { cards, whoWeAre } from "..";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    // Get the scroll position
    const scrollY = window.scrollY || window.scrollY;

    // Define the range for the animation to take place
    const startRange = 0;
    const endRange = 500; // Adjust this value based on when you want the transition to complete

    // Calculate the opacity based on the scroll position
    const opacity = Math.min(1, scrollY / endRange);

    // Update the animation controls
    controls.start({ opacity });
  };

  // Add a scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="flex flex-col items-center pt-[104px] gap-[104px] bg-base relative z-50 overflow-hidden">
      <div className="relative z-50 mt-24 mx-4">
        {/* Use motion.div for the animated logo */}
        <motion.div
          className="pb-3"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="pb-3"
            alt="Logo"
            src="/hero_madasa.svg"
            width={650}
            height={300}
          />
        </motion.div>
        <Image
          alt="madasa"
          src="/hero_collective.svg"
          width={650}
          height={300}
        />
        {/* <p className='text-white font-bold text-9xl'>Collective</p> */}
      </div>
      <div className="absolute z-40 bg-primary w-[1600px] h-[1449px] rounded-[100%/100%] -translate-y-20"></div>
      <div className="text-white max-w-[1140px] mx-8 text-center relative z-50">
        <h1 className="text-2xl">{whoWeAre}</h1>
      </div>
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
            className="flex flex-col gap-6 items-center shadow-br2xl py-8 px-16 rounded-3xl bg-white"
          >
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={256}
              height={256}
            />
            <h1 className="text-[32px] font-bold">{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
