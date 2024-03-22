"use client";
import Footer from "@/components/Footer";
import CaseStudy from "@/sections/landing-page/CaseStudy";
import Contact from "@/sections/landing-page/Contact";
import Hero from "@/sections/landing-page/Hero";
import Testimonial from "@/sections/landing-page/Testimonial";
import HeroCardsMobile from "../sections/landing-page/MobileCards/HeroCardsMobile";
import { useNav } from "@/context/NavContext";

export default function Home() {
  const { isActive } = useNav();
  return (
    <>
      <section
        className={`${
          isActive ? "blur" : ""
        } bg-no-repeat bg-cover bg-center pb-20 
      max-tablet:pb-16
      max-mobile:mt-8`}
      >
        <Hero />
        <HeroCardsMobile />
      </section>
      <section className="mt-[50px]">
        <CaseStudy />
      </section>
      <section className="mb-[110px] max-tablet:mb-[65px]">
        <Testimonial />
      </section>
      <Contact />
      <Footer currentPage="landing" />
    </>
  );
}
