"use client";
import Image from "next/image";
import { cards, whoWeAre } from "../..";
import "hamburgers/dist/hamburgers.css";
import CardFlip from "@/components/CardFlip";

const Hero = () => {
  return (
    <div className="sun-media relative flex flex-col items-center pb-[100px] bg-base overflow-hidden">
      <Image
        src="/hero_circle.svg"
        alt="circle"
        height={1448}
        width={1600}
        style={{
          width: "100%",
          height: "100%",
        }}
        className="absolute"
      />
      <div className="z-10 mt-[128px] mx-4 max-tablet:mt-[80px]">
        <Image
          alt="Madasa Logo"
          src="/logo/hero_madasa.svg"
          width={836}
          height={136}
          className="pb-[29.79px] 
          max-mobile:w-[261px]
          "
        />

        <Image
          alt="Masasa Collective Logo"
          src="/logo/hero_collective.svg"
          width={836}
          height={97.5}
          className="pb-16 
          max-mobile:w-[261px] 
          "
        />
      </div>

      <h1
        className="z-10 text-4xl text-white max-w-[1140px] mx-8 pb-36 text-center
      max-tablet:text-nav
      max-tablet:pb-16"
      >
        {whoWeAre}
      </h1>
      <CardFlip />
    </div>
  );
};

export default Hero;
