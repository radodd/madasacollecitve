"use client";

import Image from "next/image";
import { collectiveLetters, madasaLetters, whoWeAre } from "../..";
import "hamburgers/dist/hamburgers.css";
// import HeroCardsDesktop from "@/components/HeroCardsDesktop";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNav } from "@/context/NavContext";
import dynamic from "next/dynamic";

const HeroCardsDesktop = dynamic(() => import("@/components/HeroCardsDesktop"));

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const customWidthByIndexMadasa = (
  index: number,
  isMobile: boolean,
  isTablet: boolean
) => {
  if (isMobile) {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 5:
        return "42";
      case 2:
        return "31";
    }
  } else if (isTablet) {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 5:
        return "102";
      case 2:
        return "75";
    }
  } else {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 5:
        return "135";
      case 2:
        return "100";
    }
  }
};

const customHeightByIndexMadasa = (
  index: number,
  isMobile: boolean,
  isTablet: boolean
) => {
  if (isMobile) {
    switch (index) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return "42";
    }
  } else if (isTablet) {
    switch (index) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return "102";
    }
  } else {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 5:
        return "135";
      case 2:
        return "136";
    }
  }
};

const customWidthByIndex = (
  index: number,
  isMobile: boolean,
  isTablet: boolean
) => {
  if (isMobile) {
    switch (index) {
      case 0:
      case 5:
        return "27px";
      case 1:
        return "28px";
      case 2:
      case 3:
        return "19px";
      case 4:
      case 9:
        return "20px";
      case 6:
        return "25px";
      case 7:
        return "6px";
      case 8:
        return "29px";
    }
  } else if (isTablet) {
    switch (index) {
      case 0:
      case 5:
        return "66px";
      case 1:
        return "68px";
      case 2:
      case 3:
        return "48px";
      case 4:
      case 9:
        return "49px";
      case 6:
        return "60px";
      case 7:
        return "15px";
      case 8:
        return "70px";
    }
  } else {
    switch (index) {
      case 0:
      case 5:
        return "87px";
      case 1:
        return "91px";
      case 2:
      case 3:
        return "62px";
      case 4:
      case 9:
        return "65px";
      case 6:
        return "80px";
      case 7:
        return "20px";
      case 8:
        return "93px";
    }
  }
};

const customHeightByIndex = (
  index: number,
  isMobile: boolean,
  isTablet: boolean
) => {
  if (isMobile) {
    switch (index) {
      case 0:
      case 5:
        return "30px";
      case 1:
        return "30px";
      case 2:
      case 3:
        return "29px";
      case 4:
      case 9:
        return "29px";
      case 6:
        return "29px";
      case 7:
        return "29px";
      case 8:
        return "29px";
    }
  } else if (isTablet) {
    switch (index) {
      case 0:
      case 5:
        return "73px";
      case 1:
        return "73px";
      case 2:
      case 3:
        return "71px";
      case 4:
      case 9:
        return "71px";
      case 6:
        return "71px";
      case 7:
        return "71px";
      case 8:
        return "71px";
    }
  }
};

const Hero = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isActive } = useNav();

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 887);
      setIsMobile(window.innerWidth <= 620);
    };

    // Initial measurement on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount
  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } relative flex flex-col items-center pb-[100px]`}
    >
      <Image
        src="/hero_football.svg"
        alt="circle"
        height={1448}
        width={1600}
        style={{
          width: "100%",
          height: "100%",
        }}
        className="absolute max-[1440px]:object-cover max-[469px]:min-h-[2000px]
        max-[457px]:min-h-[2030px]
        max-[453px]:min-h-[2030px]
        max-[393px]:min-h-[1990px]
        max-[362px]:min-h-[1950px]
        max-[359px]:min-h-[1940px]
        max-[356px]:min-h-[1980px]"
      />
      <div
        className="z-10 mt-[128px] pb-[70px] 
      max-tablet:mt-[64px]
      max-mobile:pb-12"
      >
        <ul
          className="flex flex-wrap justify-center gap-[3.75px] pb-4
        max-mobile:pb-[9px]"
        >
          {madasaLetters.map((letter, index) => (
            <motion.li
              className=""
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              // style={{
              //   width: isMobile
              //     ? index === 2
              //       ? "31px"
              //       : "42px"
              //     : !isMobile && isTablet
              //     ? index === 2
              //       ? "75px"
              //       : "102px"
              //     : !isMobile && !isTablet && index !== 2
              //     ? "135px"
              //     : "100px",
              //   height: "auto",
              // }}
            >
              <Image
                src={letter.image}
                alt={`Skill ${index + 1}`}
                width={customWidthByIndexMadasa(index, isMobile, isTablet)}
                height={customHeightByIndexMadasa(index, isMobile, isTablet)}
              />
            </motion.li>
          ))}
        </ul>

        <ul
          className="flex gap-[8.5px]
        max-[620px]:gap-1"
        >
          {collectiveLetters.map((letter, index) => (
            <motion.li
              className="flex"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              style={{
                width: customWidthByIndex(index, isMobile, isTablet),
                height: customHeightByIndex(index, isMobile, isTablet),
              }}
            >
              <Image
                src={letter.image}
                alt={`Skill ${index + 1}`}
                width={94}
                height={94}
              />
            </motion.li>
          ))}
        </ul>
      </div>
      <h1
        className="z-10 text-4xl text-white max-w-[1140px] mx-8 pb-[104px] text-center
      max-tablet:text-nav
      max-tablet:pb-12
      max-mobile:text-2xl
      max-mobile:pb-12"
      >
        {whoWeAre}
      </h1>
      <HeroCardsDesktop />
    </div>
  );
};

export default Hero;
