import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import CaseStudy from "@/sections/CaseStudy";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Testimonial from "@/sections/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CaseStudy />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
