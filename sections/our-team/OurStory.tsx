"use client";
import Button from "@/components/Button";
import { useNav } from "@/context/NavContext";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";

import styles from "./OurStory.module.scss";

const OurStory = () => {
  const { isActive } = useNav();
  const isDesktop = useMediaQuery("(min-width: 1321px)");
  const isTablet = useMediaQuery("(max-width: 1320px)");
  const isMobile = useMediaQuery("(max-width: 739px)");

  const [expanded, setExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // const openPDF = ("/slides.pdf") => {
  //   window.open("/slides.pdf", "_blank")
  // }

  useEffect(() => {
    setIsClient(true); // Set isClient to true on the client-side
    console.log(isClient);
  }, []); // Run only once aftn only once after the initial render

  useEffect(() => {
    // Set isClient to true on the client-side
    console.log(isClient);
  }, [isClient]); // Run only once aft

  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } flex justify-center items-center gap-[36px] px-70 py-[104px] bg-primary
    max-[1000px]:gap-6
    max-[1000px]:px-8
    max-[1000px]:py-12 
    max-[840px]:flex-col-reverse`}
    >
      <div className="">
        {isClient && (
          <Fragment>
            {isDesktop && !expanded && (
              <Image
                src="/ourstory_desktop.png"
                width={441}
                height={474}
                sizes="(min-width: 760px) 654px, (min-width: 420px) calc(93.13vw - 35px), calc(7vw + 308px)"
                alt="Founders of Madasa Collective a Santa Barbara company - Ethan Flores (software engineer) and Serina Zepeda (product designer)"
                className="object-fill shadow-b2xl rounded-3xl min-w-[441px]"
              />
            )}

            {isDesktop && expanded && (
              <Image
                src="/ourstory_desktop_open.png"
                width={416}
                height={618}
                sizes="(min-width: 760px) 654px, (min-width: 420px) calc(93.13vw - 35px), calc(7vw + 308px)"
                alt="Founders of Madasa Collective a Santa Barbara company - Ethan Flores (software engineer) and Serina Zepeda (product designer)"
                className="object-fill shadow-b2xl rounded-3xl min-w-[416px]"
              />
            )}

            {isTablet && !isMobile && expanded && (
              <Image
                src="/ourstory_tablet_open.png"
                width={295}
                height={355}
                alt="Founders of Madasa Collective a Santa Barbara company - Ethan Flores (software engineer) and Serina Zepeda (product designer)"
                className="shadow-b2xl rounded-3xl min-w-[282px]"
              />
            )}
            {isTablet && !isMobile && !expanded && (
              <Image
                src="/ourstory_tablet.png"
                width={295}
                height={671}
                sizes="(min-width: 760px) 654px, (min-width: 420px) calc(93.13vw - 35px), calc(7vw + 308px)"
                alt="Founders of Madasa Collective a Santa Barbara company - Ethan Flores (software engineer) and Serina Zepeda (product designer)"
                className="shadow-b2xl rounded-3xl min-w-[282px]"
              />
            )}

            {isMobile && (
              <Image
                src="/ourstory_mobile.png"
                width={329}
                height={432}
                sizes="(min-width: 760px) 654px, (min-width: 420px) calc(93.13vw - 35px), calc(7vw + 308px)"
                alt="Founders of Madasa Collective a Santa Barbara company - Ethan Flores (software engineer) and Serina Zepeda (product designer)"
                className="object-fill shadow-b2xl rounded-3xl"
              />
            )}
          </Fragment>
        )}
      </div>
      {isClient && (
        <div
          className={`flex flex-col justify-center p-16 bg-white rounded-3xl shadow-b2xl w-full 
        max-tablet:min-h-[312px]
      
        max-[1000px]:px-8
        max-[1000px]:py-8
        ${
          expanded
            ? "" + (!isTablet && !isMobile ? "min-h-[682px]" : "min-h-[639px] ")
            : "" + (!isTablet && !isMobile ? "min-h-[474px]" : "")
        }
      `}
        >
          <h1
            className="text-5xl font-bold max-[1320px]:text-4xl text-secondary pb-[64px] 
        max-[1250px]:pb-10
        max-[1320px]:pb-6
        max-mobile:pb-8"
          >
            The Story
          </h1>
          <p
            className={`text-pretty tracking-[-0.01em] 
          max-[1320px]:text-xl
        ${expanded ? "text-2xl" : "text-4xl"}`}
          >
            A Product Designer met a Software Developer in Santa Barbara, CA,
            and founded...
            <span className="text-secondary font-bold text-pretty">
              {" "}
              a digital powerhouse.{" "}
            </span>
          </p>

          <div
            className={`${
              expanded ? "hidden" : ""
            } flex justify-center pt-[64px]
        
        max-[1250px]:pt-12
        max-mobile:pt-8`}
          >
            {/* <Button
            type="button"
            title="THIS WILL BE A DOWN CHEVRON"
            variant="btn-blue"
            onClick={() => setexpanded((prev) => !prev)}
          /> */}
            <Image
              src="/chevron_down.svg"
              width={30}
              height={29}
              alt="We specialize in branding, product design, and software development."
              onClick={() => setExpanded((prev) => !prev)}
              className=""
            />
          </div>

          <div
            className={`${expanded ? "expanded" : ""} flex flex-col long-text`}
          >
            <p className="text-xl text-pretty pt-6 max-[1000px]:text-md">
              Inspired by our previous backgrounds as a Structural Engineer
              (Serina) and Army Combat Engineer Veteran (Ethan),{" "}
              <span className="font-bold text-secondary">
                we are driven by the belief that unconventional backgrounds can
                be harnessed to redefine success.{" "}
              </span>
              As a result, we founded Madasa Collective, a California-based team
              specializing in branding, product design, and software
              development. We assembled a team of talented and experienced
              individuals across multiple disciplines to craft innovative
              solutions. Our collective combines industry expertise with diverse
              perspectives to deliver high-quality products to our clients.
            </p>
            <div className="pt-8 max-[1000px]:pt-6">
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
                  width={30}
                  height={29}
                  alt="up chevron"
                  onClick={() => setExpanded((prev) => !prev)}
                  className="transform rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* See More Content */}
    </div>
  );
};

export default OurStory;
