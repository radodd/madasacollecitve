"use client";

import { useNav } from "@/context/NavContext";
import Footer from "@/components/Footer";
import CaseStudy from "@/app/(landing-page)/CaseStudy";
import Testimonial from "@/app/(landing-page)/Testimonial";
import Hero from "@/app/(landing-page)/Hero";
import OurServices from "@/app/(landing-page)/OurServices";
import CallToAction from "@/app/(landing-page)/CallToAction";

import styles from "../components/scss/Sections.module.scss";

export default function Home() {
  const { isActive } = useNav();
  return (
    <>
      <div className={`${isActive ? "blur" : ""} min-h-screen`}>
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
          <CallToAction />
        </section>
      </div>
      <Footer currentPage="landing" />
    </>
  );
}
