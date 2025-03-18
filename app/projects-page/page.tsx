"use client";

import { CaseStudiesDetailPage } from "@/index";
import { useNav } from "@/context/NavContext";
import CTA from "./sections/CTA";
import Footer from "@/components/Footer";
import ProjectCard from "./sections/ProjectCard";

import styles from "../../components/scss/Projects.module.scss";

const Projects = () => {
  const { isActive } = useNav();
  return (
    <>
      <div className={` ${isActive ? "blur" : ""}`}>
        <div className={styles.container}>
          <h1>Featured Projects</h1>
          {CaseStudiesDetailPage.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
        <CTA />
      </div>
      <Footer currentPage="contact" />
    </>
  );
};

export default Projects;
