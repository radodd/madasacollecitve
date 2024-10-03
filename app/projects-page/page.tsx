"use client";
import Footer from "@/components/Footer";
import "../globals.css";

import { Metadata } from "next";
import Contact from "@/sections/landing-page/Contact";
import Projects from "@/sections/projects-page/Projects";

import styles from "../../components/scss/Sections.module.scss";

// export const metadata: Metadata = {
//   title: "Projects",
// };

const page = () => {
  return (
    <div>
      <section>
        <Projects />
      </section>
      {/* <section className="">
        <Contact />
      </section> */}

      <Footer currentPage="team" />
    </div>
  );
};

export default page;
