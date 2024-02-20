import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/sections/CaseStudy";
import Hero from "@/sections/Hero";
// import LandingPage from "@/sections/LandingPage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CaseStudy />
      {/* <LandingPage/> */}
      <Footer />
    </div>
  );
}
