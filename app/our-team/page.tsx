import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Designers from "@/sections/our-team/Designers";
import Developers from "@/sections/our-team/Developers";
import Hero from "@/sections/our-team/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Designers />
      <Developers />
      <Footer />
    </div>
  );
};

export default page;
