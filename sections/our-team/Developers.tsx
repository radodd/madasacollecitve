"use client";
import { developers } from "@/index";
import Image from "next/image";
import React, { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { useNav } from "@/context/NavContext";

const Developers = () => {
  const { isActive } = useNav();
  const isTablet = useMediaQuery("(max-width: 768px)");

  const [flippedIndex, setFlippedIndex] = useState(-1);
  const flipCard = (index: number) => {
    setFlippedIndex(index === flippedIndex ? -1 : index);
  };

  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } px-70 py-24 flex flex-col gap-10 bg-base
    max-tablet:px-8
    max-tablet:py-8`}
    >
      <h1
        className="text-5xl font-bold
      max-tablet:text-4xl"
      >
        Development
      </h1>
      <div className="container flex flex-row gap-10 flex-wrap justify-start max-smallplus:justify-center">
        {developers.map((developer, index) => (
          <div key={developer.name} className="sub-container">
            <div
              onClick={() => flipCard(index)}
              className={`${
                index === flippedIndex ? "flipped" : ""
              } card-team min-w-[430px] min-h-[618px] flex flex-col shadow-bl2xl 
            max-tablet:min-w-[329px] 
            max-tablet:min-h-[489px]`}
            >
              <div className="front flex flex-col gap-6 px-10">
                <Image
                  src={developer.pic}
                  alt={developer.name}
                  width={isTablet ? 249 : 350}
                  height={isTablet ? 285 : 400}
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
                      {developer.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="back flex flex-col gap-6 px-10">
                <Image
                  src={developer.icon}
                  alt={developer.icon}
                  width={isTablet ? 249 : 350}
                  height={isTablet ? 228 : 350}
                />
                <div className="flex flex-col gap-4 w-full">
                  <h1
                    className="text-4xl font-bold
                max-tablet:text-2xl"
                  >
                    {developer.backTitle}
                  </h1>
                  <div>
                    <p
                      className="text-xl
                  max-tablet:text-md"
                    >
                      {developer.backText}
                    </p>
                  </div>
                  <div className="flex gap-8 justify-center pt-6">
                    <a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/linkedin.png"
                        alt={`link to ${developer.name}'s LinkedIn profile`}
                        width={24}
                        height={25}
                        className=""
                      />
                    </a>
                    <a
                      href={developer.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/portfolio.png"
                        alt={`link to ${developer.name}'s portfolio site`}
                        width={24}
                        height={25}
                        className=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
