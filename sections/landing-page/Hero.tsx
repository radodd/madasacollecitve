"use client";
import Image from "next/image";
import { cards, collectiveLetters, madasaLetters, whoWeAre } from "../..";
import "hamburgers/dist/hamburgers.css";
import CardFlip from "@/components/HeroCardsDesktop";
import CardMobile from "@/components/CardMobile";
import Card from "@/sections/landing-page/cards/HeroCardsMobileFormat";
import Home from "@/sections/landing-page/cards/HeroCardsMobile";
import Test from "@/sections/landing-page/cards/HeroCardsMobile";
import HeroCardsDesktop from "@/components/HeroCardsDesktop";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { useNav } from "@/context/NavContext";

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
        return "45px";
      case 1:
        return "50px";
      case 2:
      case 3:
        return "35px";
      case 4:
      case 9:
        return "35px";
      case 6:
        return "40px";
      case 7:
        return "15px";
      case 8:
        return "45px";
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
        return "55px";
      case 1:
        return "50px";
      case 2:
      case 3:
        return "55px";
      case 4:
      case 9:
        return "50px";
      case 6:
        return "50px";
      case 7:
        return "50px";
      case 8:
        return "50px";
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
      setIsMobile(window.innerWidth <= 556);
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
      } sun-media relative flex flex-col items-center pb-[100px] overflow-hidden`}
    >
      {/* <Image
        src="/hero_circle.svg"
        alt="circle"
        height={1448}
        width={1600}
        style={{
          width: "100%",
          height: "100%",
        }}
        className="absolute"
      /> */}
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
              style={{
                width: isMobile
                  ? index === 2
                    ? "31px"
                    : "42px"
                  : !isMobile && isTablet
                  ? index === 2
                    ? "62px"
                    : "83px"
                  : !isMobile && !isTablet && index !== 2
                  ? "135px"
                  : "100px",
              }}
            >
              <Image
                src={letter.image}
                alt={`Skill ${index + 1}`}
                width={135}
                height={135}

                // style={{ maxWidth: "65px", maxHeight: "65px" }}
              />
            </motion.li>
          ))}
        </ul>

        <ul
          className="flex gap-[8.5px]
        max-mobile:gap-1"
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

                // style={{ maxWidth: "65px", maxHeight: "65px" }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
      <h1
        className="z-10 text-4xl text-white max-w-[1140px] mx-8 pb-36 text-center
      max-tablet:text-nav
      max-tablet:pb-16
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
