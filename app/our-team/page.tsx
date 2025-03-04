import "../globals.css";

import Footer from "@/components/Footer";
import Contact from "./sections/Contact";
import Designers from "./sections/Designers";
import Developers from "./sections/Developers";
import Hero from "./sections/Hero";
import OurStory from "./sections/OurStory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

const Page = () => {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <OurStory />
        <Designers />
        <section className="">
          <Developers />
        </section>
        <section className="">
          <Contact />
        </section>
      </div>
      <Footer currentPage="team" />
    </>
  );
};

export default Page;
