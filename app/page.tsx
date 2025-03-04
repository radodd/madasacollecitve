"use client";

import Footer from "@/components/Footer";
import CaseStudy from "@/app/(landing-page)/CaseStudy";
import Contact from "@/app/(landing-page)/CallToAction";
import Testimonial from "@/app/(landing-page)/Testimonial";
import { useNav } from "@/context/NavContext";
import Hero from "@/app/(landing-page)/Hero";
import OurServices from "@/app/(landing-page)/OurServices";
import dynamic from "next/dynamic";

import styles from "../components/scss/Sections.module.scss";

const HeroCardsMobile = dynamic(
  () => import("./(landing-page)/MobileCards/HeroCardsMobile")
);

export default function Home() {
  const { isActive } = useNav();
  return (
    <>
      <div className="min-h-screen ">
        <section
          className={`${
            isActive ? "blur" : ""
          } bg-no-repeat bg-cover bg-center`}
        >
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
        <section className={styles["section-padding"]}>
          <Testimonial />
        </section>
        <section className="relative border-3 border-green-400">
          <Contact />
        </section>
      </div>
      <Footer currentPage="landing" />
    </>
  );
}
