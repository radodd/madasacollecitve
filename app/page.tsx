"use client";
import Footer from "@/components/Footer";
import CaseStudy from "@/sections/landing-page/CaseStudy";
import Contact from "@/sections/landing-page/Contact";
import Hero from "@/sections/landing-page/Hero";
import Testimonial from "@/sections/landing-page/Testimonial";
import HeroCardsMobile from "../sections/landing-page/cards/HeroCardsMobile";

export default function Home() {
  return (
    <>
      <section
        className=" bg-football bg-no-repeat bg-cover bg-center pb-20 
      max-tablet:pb-16
      max-mobile:mt-8"
      >
        <Hero />
        <HeroCardsMobile />
      </section>
      <section className="mt-[50px] ">
        <CaseStudy />
      </section>

      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
