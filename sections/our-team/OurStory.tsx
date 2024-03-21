"use client";
import Button from "@/components/Button";
import { useNav } from "@/context/NavContext";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import React, { useState } from "react";

const OurStory = () => {
  const { isActive } = useNav();
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 740px)");

  const [collapse, setCollapse] = useState(false);

  // const openPDF = ("/slides.pdf") => {
  //   window.open("/slides.pdf", "_blank")
  // }
  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } flex justify-center items-center gap-14 px-70 py-[104px]
    max-[1000px]:gap-6
    max-[1000px]:px-8
    max-[1000px]:py-12 
    max-extrasmall:flex-col-reverse`}
    >
      <div
        className="flex flex-col gap-8 py-14 px-[70px] bg-white rounded-3xl max-w-[900px] shadow-b2xl
      max-[1000px]:px-8
      max-[1000px]:py-8
      "
      >
        <h1 className="text-5xl font-bold max-[1000px]:text-4xl">Our Story</h1>
        <p className="text-2xl max-[1000px]:text-xl">
          A Product Designer met a Software Developer in Santa Barbara, CA, and
          founded... a digital powerhouse.
        </p>

        <div className={`${collapse ? "hidden" : ""}`}>
          <Button
            type="button"
            title="THIS WILL BE A DOWN CHEVRON"
            variant="btn-blue"
            onClick={() => setCollapse((prev) => !prev)}
          />
        </div>

        <div
          className={`${collapse ? "expanded" : ""} flex flex-col long-text`}
        >
          <p className="text-xl ">
            Inspired by our previous backgrounds as a Structural Engineer
            (Serina) and Army Combat Engineer Veteran (Ethan),{" "}
            <span className="font-semibold">
              we are driven by the belief that unconventional backgrounds can be
              harnessed to redefine success.
            </span>
            As a result, we founded Madasa Collective, a California-based team
            specializing in branding, product design, and software development.
            We assembled a team of talented and experienced individuals across
            multiple disciplines to craft innovative solutions. Our collective
            combines industry expertise with diverse perspectives to deliver
            high- quality products to our clients.
          </p>
          <div className="pt-8">
            <Button
              title="Learn More"
              variant="btn-pink-fill"
              type="button"
              onClick={() => window.open("/slides.pdf", "_blank")}
            />
            <Button
              title="THIS WILL BE AN UP CHEVRON"
              variant="btn-blue"
              type="button"
              onClick={() => setCollapse((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* See More Content */}

      <div className="">
        {isDesktop && (
          <Image
            src="/ourstory.png"
            width={416}
            height={544}
            alt="founder photo 1"
            className="object-fill shadow-b2xl rounded-3xl min-w-[416px]"
          />
        )}
        {isTablet && !isMobile && (
          <Image
            src="/ourstory_tablet.png"
            width={373}
            height={636}
            alt="founder photo 2"
            className="shadow-b2xl rounded-3xl min-w-[373px]"
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
