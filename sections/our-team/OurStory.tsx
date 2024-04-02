"use client";
import Button from "@/components/Button";
import { useNav } from "@/context/NavContext";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import React, { useState } from "react";

const OurStory = () => {
  const { isActive } = useNav();
  const isDesktop = useMediaQuery("(min-width: 1001px)");
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 739px)");

  const [collapse, setCollapse] = useState(false);

  // const openPDF = ("/slides.pdf") => {
  //   window.open("/slides.pdf", "_blank")
  // }
  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } flex justify-center items-center gap-[36px] px-70 py-[104px] bg-primary
    max-[1000px]:gap-6
    max-[1000px]:px-8
    max-[1000px]:py-12 
    max-extrasmall:flex-col-reverse`}
    >
      <div className="">
        {isDesktop && !collapse && (
          <Image
            src="/ourstory_desktop.png"
            width={441}
            height={474}
            alt="founder photo 1"
            className="object-fill shadow-b2xl rounded-3xl min-w-[441px]"
          />
        )}
        {isDesktop && collapse && (
          <Image
            src="/ourstory_desktop_open.png"
            width={441}
            height={724}
            alt="founder photo 2"
            className="object-fill shadow-b2xl rounded-3xl min-w-[416px]"
          />
        )}

        {isTablet && !isMobile && collapse && (
          <Image
            src="/ourstory_tablet_open.png"
            width={441}
            height={636}
            alt="founder photo 2"
            className="shadow-b2xl rounded-3xl min-w-[373px]"
          />
        )}
        {isTablet && !isMobile && !collapse && (
          <Image
            src="/ourstory_tablet.png"
            width={441}
            height={636}
            alt="founder photo 2"
            className="shadow-b2xl rounded-3xl min-w-[282px]"
          />
        )}
      </div>
      <div className="">
        {isMobile && (
          <Image
            src="/ourstory_mobile.png"
            width={329}
            height={400}
            alt="founder photo 3"
            className="object-fill shadow-b2xl rounded-3xl"
          />
        )}
      </div>
      <div
        className="flex flex-col justify-center p-16 bg-white rounded-3xl min-h-[474px] shadow-b2xl
        w-full 
        max-tablet:min-h-[312px]
        max-[1000px]:min-h-[339px]
        max-[1000px]:px-8
        max-[1000px]:py-8
        
      "
      >
        <h1
          className="text-5xl font-bold max-[1000px]:text-4xl text-secondary pb-[64px] 
        max-[1250px]:pb-12
        
        max-mobile:pb-8"
        >
          The Story
        </h1>
        <p className="text-4xl text-pretty tracking-[-0.01em] max-[1250px]:text-2xl max-[1000px]:text-xl">
          A Product Designer met a Software Developer in Santa Barbara, CA, and
          founded...
          <span className="text-secondary font-bold text-pretty block">
            {" "}
            a digital powerhouse.{" "}
          </span>
        </p>

        <div
          className={`${collapse ? "hidden" : ""} flex justify-center pt-[64px]
        
        max-[1250px]:pt-12
        max-mobile:pt-8`}
        >
          {/* <Button
            type="button"
            title="THIS WILL BE A DOWN CHEVRON"
            variant="btn-blue"
            onClick={() => setCollapse((prev) => !prev)}
          /> */}
          <Image
            src="/chevron_down.svg"
            height={32}
            width={32}
            alt="down chevron"
            onClick={() => setCollapse((prev) => !prev)}
            className=""
          />
        </div>

        <div
          className={`${collapse ? "expanded" : ""} flex flex-col long-text`}
        >
          <p className="text-xl text-pretty pt-6">
            Inspired by our previous backgrounds as a Structural Engineer
            (Serina) and Army Combat Engineer Veteran (Ethan),{" "}
            <span className="font-bold text-secondary">
              we are driven by the belief that unconventional backgrounds can be
              harnessed to redefine success.{" "}
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
              variant="btn-blue"
              type="button"
              onClick={() =>
                window.open(
                  "https://www.canva.com/design/DAF-mBhPfaA/i8H6H6r_sPlcZJUq6ZRH8g/view?utm_content=DAF-mBhPfaA&utm_campaign=designshare&utm_medium=link&utm_source=editor",
                  "_blank"
                )
              }
            />
            <div className="flex justify-center mt-6 ">
              <Image
                src="/chevron_down.svg"
                height={32}
                width={32}
                alt="down chevron"
                onClick={() => setCollapse((prev) => !prev)}
                className="transform rotate-180"
              />
            </div>
          </div>
        </div>
      </div>

      {/* See More Content */}
    </div>
  );
};

export default OurStory;
