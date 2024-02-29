"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

const CaseStudy = () => {
  const isMobile = useMediaQuery("(max-width: 394px");
  const isTablet = useMediaQuery("(max-width: 835px)");
  const imageWidth = isMobile ? 299 : isTablet ? 500 : 570;
  const imageHeight = isMobile ? 150 : isTablet ? 300 : 335;

  return (
    <div
      className="flex justify-center items-center px-[70px] py-20 gap-16 bg-secondary 
    max-wide:flex-col
    max-tablet:p-8
    max-tablet:gap-8"
    >
      <Image
        alt="case study image Gen Fulton Consultancy"
        src="/Final Deliverables.svg"
        width={imageWidth}
        height={imageHeight}
        quality={100}
        className="bg-white rounded-3xl scale-[1.1] shadow-b2xl mx-7
        wide:min-w-[570px]
        max-mob"
      ></Image>
      <div
        className="flex flex-col py-10 px-12 gap-8 bg-white rounded-3xl shadow-b2xl max-w-[654px]
      max-tablet:gap-6
      max-tablet:p-8
      "
      >
        <h1
          className="text-4xl font-semibold pb-2
          max-tablet:text-3xl
          "
        >
          Responsive Website
        </h1>

        <p
          className="text-xl 
        max-tablet:md"
        >
          GenFulton.com is a psychotherapist & mental performance coach who was
          looking for help designing her website & a brand that encompassed her
          multiple businesses.
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
