import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/sections/landing-page/CaseStudy";
import Contact from "@/sections/landing-page/Contact";
import Hero from "@/sections/landing-page/Hero";
import Testimonial from "@/sections/landing-page/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="pb-20 bg-base">
        <Hero />
      </section>
      <CaseStudy />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
