import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const CaseStudy = () => {
  return (
    <div
      className="flex justify-center items-center px-[70px] py-20 gap-16 bg-secondary 
    max-wide:flex-col
    max-tablet:p-8
    max-tablet:gap-8"
    >
      <Image
        alt="case study image Gen Fulton Consultancy"
        src="/Madasa Collective - Gen Fulton.svg"
        width={654}
        height={450}
      ></Image>
      <div
        className="flex flex-col py-10 px-12 gap-8 bg-white rounded-3xl shadow-b2xl max-w-[654px]
      max-tablet:gap-6
      max-tablet:p-8"
      >
        <h1
          className="font-bold text-5xl
        max-tablet:text-4xl"
        >
          Our Work
        </h1>
        <div>
          <h1
            className="text-4xl 
          max-tablet:text-2xl"
          >
            Gen Fulton Consultancy
          </h1>
          <p
            className="text-2xl
          max-tablet:xl"
          >
            Responsive Website
          </p>
        </div>
        <p
          className="text-xl 
        max-tablet:md"
        >
          Gen Fulton is a psychotherapist & mental performance coach who was
          looking for help designing her website & a brand that encompassed her
          multiple businesses.
        </p>
        <Button type="button" title="View Website" variant="btn-pink" />
      </div>
    </div>
  );
};

export default CaseStudy;
