"use client";
import Footer from "@/components/Footer";
import CaseStudy from "@/sections/landing-page/CaseStudy";
import Contact from "@/sections/landing-page/Contact";
import Hero from "@/sections/landing-page/Hero";
import Testimonial from "@/sections/landing-page/Testimonial";
// import HeroCardsMobile from "../sections/landing-page/MobileCards/HeroCardsMobile";
import { useNav } from "@/context/NavContext";
import dynamic from "next/dynamic";
import Hero2 from "@/sections/landing-page/Hero2";
import OurServices from "@/sections/landing-page/OurServices";
import styles from "../components/scss/Sections.module.scss";
import Image from "next/image";

const HeroCardsMobile = dynamic(
  () => import("../sections/landing-page/MobileCards/HeroCardsMobile")
);

export default function Home() {
  const { isActive } = useNav();
  return (
    <>
      <section
        className={`${isActive ? "blur" : ""} bg-no-repeat bg-cover bg-center`}
      >
        <Hero2 />
        <HeroCardsMobile />
      </section>
      <section className={`${styles["section-padding"]} flex justify-center`}>
        <OurServices />
      </section>
      <section className={styles["casestudy-padding"]}>
        <CaseStudy />
      </section>
      <section className={styles["section-padding"]}>
        <Testimonial />
      </section>
      <section className="relative border-3 border-green-400">
        <Contact />
      </section>
      {/* <div className={styles["image-container"]}>
        <Image
          src="/contact-icons/circle2.svg"
          alt="contact circle"
          height={1448}
          width={1600}
          // style={{ width: "100%", height: "100%" }}
          // className="absolute object-fit top-[180rem] z-0"
        />
      </div> */}

      <Footer currentPage="landing" />
    </>
  );
}
