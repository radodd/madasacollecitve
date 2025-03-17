import "../globals.css";

import Footer from "@/components/Footer";
import Hero from "./sections/Hero";
import OurStory from "./sections/OurStory";
import { Metadata } from "next";
import TeamMembers from "./sections/TeamMembers";
import CTA from "./sections/CTA";

export const metadata: Metadata = {
  title: "Team",
};

const Page = () => {
  // const { isActive } = useNav();
  const isActive = false;
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
