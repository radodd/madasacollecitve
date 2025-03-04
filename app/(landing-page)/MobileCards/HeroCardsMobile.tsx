"use client";
import { useEffect, useRef } from "react";
import Card from "./HeroCardsMobileFormat.jsx";
import { cards } from "@/index";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useNav } from "@/context/NavContext.jsx";

import styles from "./HeroCardsMobile.module.scss";

export default function HeroCardsMobile() {
  // const { isActive } = useNav();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    // <main className={`${styles.main} ${isActive ? "blur" : ""}`}>
    <>
      {cards.map((card, index) => {
        const targetScale = 1 - (cards.length - index) * 0.05;
        return (
          <Card
            key={index}
            i={index}
            {...card}
            progress={scrollYProgress}
            range={[index * 0.333, 1]}
            targetScale={targetScale}
          />
        );
      })}
      {/* </main> */}
    </>
  );
}
