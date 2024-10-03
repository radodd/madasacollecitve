import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero2.module.scss";
import {
  customHeightByIndexMadasa,
  customWidthByIndexMadasa,
  customWidthByIndex,
  customHeightByIndex,
} from "@/lib/CustomDimensions";
import { collectiveLetters, madasaLetters, whoWeAre } from "@/index";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const Hero2 = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1280);
      setIsMobile(window.innerWidth <= 744);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderLetters = (
    letters: Array<{ image: string }>,
    customWidth: (
      index: number,
      isMobile: boolean,
      isTablet: boolean
    ) => number,
    customHeight: (
      index: number,
      isMobile: boolean,
      isTablet: boolean
    ) => number
  ) => {
    return letters.map((letter, index) => (
      <motion.li
        className={styles.letterItem}
        key={index}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index}
      >
        <Image
          src={letter.image}
          alt={`Letter ${index + 1}`}
          width={customWidth(index, isMobile, isTablet)}
          height={customHeight(index, isMobile, isTablet)}
        />
      </motion.li>
    ));
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.bgContainer}>
        <Image
          src="/hero2_bg.svg"
          alt="Background Image"
          layout="fill"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.circleContainer}>
        <Image
          src="/hero2_circle.svg"
          alt="Circle Graphic"
          layout="intrinsic"
          width={800}
          height={800}
          className={styles.image}
        />
        <div className={styles.contentContainer}>
          <ul className={styles.madasaLetters}>
            {renderLetters(
              madasaLetters,
              customWidthByIndexMadasa,
              customHeightByIndexMadasa
            )}
          </ul>
          <ul className={styles.collectiveLetters}>
            {renderLetters(
              collectiveLetters,
              customWidthByIndex,
              customHeightByIndex
            )}
          </ul>
          <h1 className={styles.whoWeAreText}>{whoWeAre}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
