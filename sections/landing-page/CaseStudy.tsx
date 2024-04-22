"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Link from "next/link";
import { useNav } from "@/context/NavContext";

const CaseStudy = () => {
  const isMobile = useMediaQuery("(max-width: 394px");
  const isTablet = useMediaQuery("(max-width: 1512px)");
  const imageWidth = isMobile ? 299 : isTablet ? 654 : 654;
  const imageHeight = isMobile ? 150 : isTablet ? 400 : 400;
  const { isActive } = useNav();

  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } flex justify-center items-center px-[70px] py-20 gap-16 bg-secondary 
    max-[1300px]:flex-col
    max-[1300px]:p-8
    max-[1300px]:gap-8`}
    >
      <div
        className="flex items-center justify-center bg-white
        max-h-[416px] rounded-3xl shadow-b2xl hover:shadow-b3xl
        max-[2500px]:min-w-[654px]
        max-[1300px]:min-w-[770px]
        max-[833px]:min-w-[329px] 
        "
        style={{ height: "auto" }}
      >
        {/* <Image
          alt="A case study of Madasa's previous client Gen Fulton Consultancy (GenFulton.com) - website design, website development, logo design, branding"
          src="/case_study22.png"
          width={imageWidth}
          height={0}
          className="flex items-center justify-center align-middle rounded-3xl transition-all duration-30 ease-in-out bg-white h-auto"
          style={{ width: `${imageWidth}`, height: "auto" }}
        ></Image> */}
        <Image
          alt="TEST"
          src="/case_study22.png"
          width={654}
          height={409}
          sizes="(min-width: 760px) 654px, (min-width: 420px) calc(93.13vw - 35px), calc(7vw + 308px)"
          className="flex rounded-3xl transition-all duration-30 ease-in-out bg-white"
        />
      </div>

      <div
        className="flex flex-col justify-center py-10 px-12 gap-8 bg-white rounded-3xl shadow-b2xl 
        min-[1301px]:min-h-[409px]
        max-[1300px]:max-w-[770px]
        max-[1436px]:py-8
        max-[1300px]:gap-6
        max-[1300px]:py-8
        max-[1300px]:px-8
        max-[1504px]:gap-6


        max-tablet:min-w-[329px]
        
        
        max-[1300px]:min-w-[770px]
      
      
      "
      >
        <h1
          className="text-5xl font-bold
          max-[1300px]:text-4xl
          "
        >
          Our Work
        </h1>
        <h2
          className="text-4xl
      max-[1300px]:text-2xl"
        >
          Responsive Website
        </h2>
        <p
          className="text-xl text-pretty
          
        max-[1300px]:text-md"
        >
          <Link href="https://www.genfulton.com">
            <span className="underline ">GenFulton.com </span>
          </Link>
          is a psychotherapist & mental performance coach who was looking for
          help designing her website & a brand that encompassed her multiple
          businesses.
        </p>
        <Button
          type="button"
          title="View Website"
          variant="btn-pink"
          href="https://genfulton.com/"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default CaseStudy;
// max-[1343px]:max-w-[347px]
