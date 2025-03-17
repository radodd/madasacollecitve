"use client";

import { useNav } from "@/context/NavContext";
import Footer from "@/components/Footer";
import Hero from "./sections/Hero";
import OurStory from "./sections/OurStory";
import CTA from "./sections/CTA";
import TeamMembers from "./sections/TeamMembers";

const Page = () => {
  const { isActive } = useNav();

  return (
    <>
      <div className={`${isActive ? "blur" : ""} min-h-screen`}>
        <Hero />
        <OurStory />
        <TeamMembers />
        <section>
          <CTA />
        </section>
      </div>
      <Footer currentPage="team" />
    </>
  );
};

export default Page;
