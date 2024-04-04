"use client";
import { designers } from "@/index";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import { useNav } from "@/context/NavContext";
import { useState } from "react";
import Link from "next/link";

const Designers = () => {
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
    max-tablet:py-8
    `}
    >
      <h1
        className="text-5xl font-bold
      max-tablet:text-4xl"
      >
        Design
      </h1>
      <div className="container flex gap-10 flex-wrap justify-start max-smallplus:justify-center">
        {designers.map((designer, index) => (
          <div key={designer.name} className="sub-container">
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
                  src={designer.pic}
                  alt={designer.name}
                  width={isTablet ? 249 : 350}
                  height={isTablet ? 300 : 400}
                  quality={100}
                />
                <div className="flex flex-col gap-4 w-full">
                  <h1
                    className="text-4xl font-bold
                max-tablet:text-2xl"
                  >
                    {designer.name}
                  </h1>
                  <div>
                    <p
                      className="text-xl
                  max-tablet:text-md"
                    >
                      {designer.role}
                    </p>
                    <p
                      className="text-xl
                  max-tablet:text-md"
                    >
                      {designer.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="back flex flex-col gap-6 p-10">
                <Image
                  src={designer.icon}
                  alt={designer.icon}
                  width={isTablet ? 249 : 350}
                  height={isTablet ? 300 : 321}
                  className={`${isTablet ? "max-h-[228px]" : "max-h-[320px]"}`}
                />
                <div className="flex flex-col gap-4 w-full">
                  <h1
                    className="text-4xl font-bold
                max-tablet:text-2xl"
                  >
                    {designer.backTitle}
                  </h1>
                  <div>
                    <p
                      className="text-xl
                  max-tablet:text-md"
                    >
                      {designer.backText}
                    </p>
                    <div className="flex gap-8 justify-center pt-6">
                      <a
                        href={designer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/linkedin.png"
                          alt={`link to ${designer.name}'s LinkedIn profile`}
                          height={24}
                          width={24}
                          className=""
                        />
                      </a>
                      <a
                        href={designer.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/portfolio.png"
                          alt={`link to ${designer.name}'s portfolio site`}
                          height={24}
                          width={24}
                          className=""
                        />
                      </a>
                    </div>
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

export default Designers;
