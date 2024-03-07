import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-full">
      <div>
        <Image
          alt="out team"
          src="/hero_team.svg"
          layout="fill "
          width={100}
          height={100}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[64px] font-bold max-tablet:text-5xl text-nowrap">
        Our Team
      </h1>
    </div>
  );
};

export default Hero;
