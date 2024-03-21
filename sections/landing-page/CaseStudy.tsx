"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Link from "next/link";
import { useNav } from "@/context/NavContext";

const CaseStudy = () => {
  const isMobile = useMediaQuery("(max-width: 394px");
  const isTablet = useMediaQuery("(max-width: 835px)");
  const imageWidth = isMobile ? 299 : isTablet ? 654 : 654;
  const imageHeight = isMobile ? 150 : isTablet ? 300 : 409;
  const { isActive } = useNav();

  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } flex justify-center items-center px-[70px] py-20 gap-16 bg-secondary 
    max-wide:flex-col
    max-tablet:p-8
    max-tablet:gap-8`}
    >
      <div className="flex items-center justify-center bg-white max-h-[416px] max-w-[654px] rounded-3xl shadow-b2xl hover:shadow-b3xl ">
        <Image
          alt="case study image Gen Fulton Consultancy"
          src="/case_study22.png"
          width={imageWidth}
          height={imageHeight}
          quality={100}
          className="flex items-center justify-center align-middle rounded-3xl transition-all duration-30 ease-in-out bg-white"
        ></Image>
      </div>
      <div
        className="flex flex-col py-10 px-12 gap-8 bg-white rounded-3xl shadow-b2xl max-w-[654px]
      max-tablet:gap-6
      max-tablet:p-8
      "
      >
        <h1
          className="text-5xl font-bold
          max-tablet:text-4xl
          "
        >
          Our Work
        </h1>
        <h2
          className="text-4xl
      max-tablet:text-2xl"
        >
          Responsive Website
        </h2>
        <p
          className="text-xl text-pretty
        max-tablet:text-md"
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
