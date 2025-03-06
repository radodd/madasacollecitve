"use client";

import Footer from "@/components/Footer";
import CaseStudy from "@/app/(landing-page)/CaseStudy";
import Contact from "@/app/(landing-page)/CallToAction";
import Testimonial from "@/app/(landing-page)/Testimonial";
import { useNav } from "@/context/NavContext";
import Hero from "@/app/(landing-page)/Hero";
import OurServices from "@/app/(landing-page)/OurServices";
// import dynamic from "next/dynamic";

import styles from "../components/scss/Sections.module.scss";

// const HeroCardsMobile = dynamic(
//   () => import("./(landing-page)/(cards-mobile)/ScrollingHeroCardsMobile")
// );

export default function Home() {
  const { isActive } = useNav();
  return (
    <>
      <div
        className={`${isActive ? "blur" : ""} bg-no-repeat bg-cover bg-center`}
      >
        <section className={"bg-no-repeat bg-cover bg-center"}>
          <Hero />
        </section>
        <section
          className={`${styles["section-padding"]}  flex justify-center`}
        >
          <OurServices />
        </section>
        <section className={styles["casestudy-padding"]}>
          <CaseStudy />
        </section>
        {/* <section className={styles["section-padding"]}> */}
        <Testimonial />
        {/* </section> */}
        <section className="relative">
          <Contact />
        </section>
      </div>
      <Footer currentPage="landing" />
    </>
  );
}
