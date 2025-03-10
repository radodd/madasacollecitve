"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { CaseStudiesDetailPage } from "@/index";

import styles from "../../components/scss/Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>Featured Projects</h1>
      {CaseStudiesDetailPage.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
};

export default Projects;

type ProjectCardProps = {
  project: {
    title: string;
    image_mobile: string;
    image_desktop: string;
    href: string;
    hrefTEST?: string;
    tags: string[];
  };
};
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [featuredImage, setFeaturedImage] = useState(project.image_desktop);
  const [hoverable, setHoverable] = useState(true);
  useEffect(() => {
    const checkHoverSupport = () => {
      const hoverable = window.matchMedia("(hover: hover)").matches;
      setHoverable(hoverable);
    };
    checkHoverSupport();
    window.addEventListener("resize", checkHoverSupport);

    return () => {
      window.removeEventListener("resize", checkHoverSupport);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverable) {
      setFeaturedImage(project.image_mobile);
    }
  };

  const handleMouseLeave = () => {
    if (hoverable) {
      setFeaturedImage(project.image_desktop);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link
          href={`projects-page/${project.href.replace("/projects-page/", "")}`}
        >
          <Image
            src={featuredImage}
            alt={project.title}
            width={3840}
            height={2160}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>
      </div>
      <div className={styles.titleContainer}>
        <h2>{project.title}</h2>
      </div>

      <div className={styles.tagContainer}>
        {project.tags.map((tag, index) => (
          <span className={styles.tag} key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
