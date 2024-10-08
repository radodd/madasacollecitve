"use client";
import Footer from "@/components/Footer";
import CaseStudy from "@/sections/landing-page/CaseStudy";
import Contact from "@/sections/landing-page/Contact";
import Hero from "@/sections/landing-page/Hero";
import Testimonial from "@/sections/landing-page/Testimonial";
import { useNav } from "@/context/NavContext";
import dynamic from "next/dynamic";
import Hero2 from "@/sections/landing-page/Hero2";
import OurServices from "@/sections/landing-page/OurServices";
import styles from "../components/scss/Sections.module.scss";

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
      </section>
      <section className={`${styles["section-padding"]}  flex justify-center`}>
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

      <Footer currentPage="landing" />
    </>
  );
}
