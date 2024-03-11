"use client";
import { designers } from "@/index";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import { useNav } from "@/context/NavContext";

const Designers = () => {
  const { isActive } = useNav();
  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } px-70 pt-24 flex flex-col gap-10 bg-base
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
        {designers.map((designer) => (
          <div key={designer.name} className="sub-container">
            <div
              className="card-team min-w-[430px] min-h-[618px] flex flex-col shadow-bl2xl 
            max-tablet:min-w-[329px] 
            max-tablet:min-h-[489px]"
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
              <div className="back flex flex-col gap-6 px-10">
                <Image
                  src={designer.icon}
                  alt={designer.icon}
                  width={isTablet ? 249 : 350}
                  height={isTablet ? 300 : 400}
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
