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
        src="/Final Deliverables.svg"
        width={654}
        height={450}
        quality={100}
        className="bg-white rounded-3xl scale-[1.1] shadow-b2xl"
      ></Image>
      <div
        className="flex flex-col py-10 px-12 gap-8 bg-white rounded-3xl shadow-b2xl max-w-[654px]
      max-tablet:gap-6
      max-tablet:p-8"
      >
        {/* <h1
          className="font-bold text-5xl
        max-tablet:text-4xl"
        >
          Our Work
        </h1> */}
        <div>
          <h1
            className="text-4xl pb-2
          max-tablet:text-2xl"
          >
            Responsive Website
          </h1>
          <p
            className="text-2xl
          max-tablet:xl"
          >
            Gen Fulton Consultancy
          </p>
        </div>
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
