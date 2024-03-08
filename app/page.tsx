import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/sections/landing-page/CaseStudy";
import Contact from "@/sections/landing-page/Contact";
import Hero from "@/sections/landing-page/Hero";
import Testimonial from "@/sections/landing-page/Testimonial";
import HeroCardsMobile from "../sections/landing-page/cards/HeroCardsMobile";

export default function Home() {
  return (
    <div className="bg-base">
      <Navbar />
      <section className=" bg-football bg-no-repeat bg-cover bg-center pb-20 bg-base max-tablet:pb-16">
        <Hero />
        <HeroCardsMobile />
      </section>
      <section className="mt-[100px] ">
        <CaseStudy />
      </section>

      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
