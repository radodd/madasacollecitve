import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/sections/CaseStudy";
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
      {/* <LandingPage/> */}
      <Footer />
    </div>
  );
}
