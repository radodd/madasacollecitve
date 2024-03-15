"use client";
import Button from "@/components/Button";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import React, { useState } from "react";

const OurStory = () => {
  const isTablet = useMediaQuery("(max-width: 835px)");
  const isDesktop = useMediaQuery("(min-width: 835px)");
  const isMobile = useMediaQuery("(max-width: 740px)");

  const [collapse, setCollapse] = useState(false);
  return (
    <div
      className="flex justify-center items-center gap-14 px-70 py-[104px]
    max-tablet:gap-6
    max-tablet:px-8
    max-tablet:py-12 
    max-extrasmall:flex-col-reverse"
    >
      <div
        className="flex flex-col gap-8 py-14 px-[70px] bg-white rounded-3xl max-w-[900px] shadow-b2xl
      max-tablet:px-8
      max-tablet:py-8
      "
      >
        <h1 className="text-5xl font-bold max-tablet:text-4xl">Our Story</h1>
        <p className="text-2xl max-tablet:text-xl">
          Serina, a project engineer turned product designer, met Ethan, a
          veteran turned software developer in Santa Barbara, CA...
        </p>
        <p className="text-xl ">
          Bonding over their shared experiences and frustrations in the tech
          industry, they saw an opportunity to leverage their diverse
          backgrounds and skill sets. Recognizing the need for a more
          collaborative and inclusive approach to digital product development,
          they founded Madasa Collective.
        </p>
        <div className={`${collapse ? "hidden" : ""}`}>
          <Button
            type="button"
            title="Learn More"
            variant="btn-blue"
            onClick={() => setCollapse((prev) => !prev)}
          />
        </div>

        <div
          className={`${collapse ? "expanded" : ""} flex flex-col long-text`}
        >
          <p className="text-xl">
            With over 4 years of experience in their previous respective fields
            and having done bootcamps and career certificates, they assembled a
            team for themselves and hired industry.
          </p>
          <div className="pt-8">
            <Button
              title="close"
              variant="btn-blue"
              type="button"
              onClick={() => setCollapse((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* See More Content */}

      <div className=" min-w-[416px]">
        {isDesktop && (
          <Image
            src="/ourstory.png"
            width={416}
            height={544}
            alt="founder photo 1"
            className="object-fill shadow-b2xl rounded-3xl"
          />
        )}
        {isTablet && !isMobile && (
          <Image
            src="/ourstory_tablet.png"
            width={373}
            height={636}
            alt="founder photo 2"
            className="shadow-b2xl rounded-3xl"
          />
        )}
      </div>
      <div className="max-w-[329px]">
        {isMobile && (
          <Image
            src="/ourstory.png"
            width={329}
            height={400}
            alt="founder photo 3"
            className="object-fill shadow-b2xl rounded-3xl"
          />
        )}
      </div>
    </div>
  );
};

export default OurStory;
