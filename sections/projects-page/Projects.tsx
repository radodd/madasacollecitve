"use client";
import React, { useState } from "react";

import styles from "../../components/scss/Projects.module.scss";
import Image from "next/image";
import Link from "next/link";

export const ProjectsList = [
  {
    title: "MRC Rock & Sand | B2B & B2C E-Commerce Platform",
    image_mobile: "/project_mrc_mobile.png",
    image_desktop: "/project_mrc_desktop.png",
    href: "https://mrc-two.vercel.app",
    tags: ["Product Design", "Branding", "Web Development"],
  },
  {
    title: "Gen Fulton Consultancy | Responsive Website",
    image_mobile: "/project_gen_mobile.png",
    image_desktop: "/project_gen_desktop.png",
    href: "https://genfulton.com",
    tags: ["Web Design", "Branding", "Web Development"],
  },
  {
    title: "Madasa Collective | Responsive Website",
    image_mobile: "/project_madasa_mobile.png",
    image_desktop: "/project_madasa_desktop.png",
    href: "https://madasacollective.com",
    tags: ["Web Design", "Branding", "Web Development"],
  },
];

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>Featured Projects</h1>
      {ProjectsList.map((project, index) => (
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
    tags: string[];
  };
};
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [featuredImage, setFeaturedImage] = useState(project.image_desktop);

  const handleMouseEnter = () => {
    setFeaturedImage(project.image_mobile);
  };
  const handleMouseLeave = () => {
    setFeaturedImage(project.image_desktop);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={project.href}>
          <Image
            src={featuredImage}
            alt={project.title}
            width={3840}
            height={2160}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />{" "}
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
