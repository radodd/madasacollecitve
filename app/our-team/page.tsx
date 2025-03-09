import "../globals.css";

import Footer from "@/components/Footer";
import Contact from "./sections/Contact";
import Designers from "./sections/Designers";
// import Developers from "./sections/Developers";
import Hero from "./sections/Hero";
import OurStory from "./sections/OurStory";
import { Metadata } from "next";
import TeamMembers from "./sections/Designers";

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
        {/* <Designers />
         */}
        <TeamMembers />
        <section className="">{/* <Developers /> */}</section>
        <section className="max-[340px]:hidden">
          <Contact />
        </section>
      </div>
      <Footer currentPage="team" />
    </>
  );
};

export default Page;
