import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/sections/CaseStudy";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Testimonial from "@/sections/Testimonial";
// import LandingPage from "@/sections/LandingPage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CaseStudy />
      <Testimonial />
      <Contact />
      {/* <LandingPage/> */}
      <Footer />
    </div>
  );
}
