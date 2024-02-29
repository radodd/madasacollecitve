"use client";
import { developers } from "@/index";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

const Developers = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <div
      className="px-70 py-24 flex flex-col gap-10 bg-base
    max-tablet:px-8
    max-tablet:py-8"
    >
      <h1
        className="text-5xl font-bold
      max-tablet:text-4xl"
      >
        Development
      </h1>
      <div className="flex flex-row gap-10 flex-wrap justify-center ">
        {developers.map((developer) => (
          <div
            key={developer.name}
            className="card min-w-[430px] min-h-[618px] flex flex-col shadow-bl2xl 
            max-tablet:min-w-[329px] 
            max-tablet:min-h-[489px]"
          >
            <div className="front flex flex-col gap-6 px-10">
              <Image
                src={developer.pic}
                alt={developer.name}
                width={isTablet ? 249 : 350}
                height={isTablet ? 300 : 400}
              />
              <div className="flex flex-col gap-4 w-full">
                <h1
                  className="text-4xl font-bold
                max-tablet:text-2xl"
                >
                  {developer.name}
                </h1>
                <div>
                  <p
                    className="text-xl
                  max-tablet:text-md"
                  >
                    {developer.title}
                  </p>
                  <p
                    className="text-xl
                  max-tablet:text-md"
                  >
                    {developer.secondTitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="back">BACK</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
