import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import styles from "@/components/scss/Projects.module.scss";

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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 744);
  }, []);

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
      setIsTransitioning(true);
      setTimeout(() => {
        setFeaturedImage(project.image_mobile);
      }, 150);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleMouseLeave = () => {
    if (hoverable) {
      setIsTransitioning(true);
      setTimeout(() => {
        setFeaturedImage(project.image_desktop);
      }, 150);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link
          href={`projects-page/${project.href.replace("/projects-page/", "")}`}
          // href={project.href}
        >
          {isMobile ? (
            <Image
              src={featuredImage}
              alt={project.title}
              width={3840}
              height={2160}
            />
          ) : (
            <>
              <motion.img
                src={featuredImage}
                alt={project.title}
                width={3840}
                height={2160}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                className={`${isTransitioning ? "transitioning" : ""}`}
                animate={{
                  filter: isTransitioning ? "blur(10px)" : "blur(0px)",
                }}
                // transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1]  }}
                // transition={{ type: "spring", stiffness: 100, damping: 20 }}
                // transition={{ type: "spring", stiffness: 120, damping: 15 }}
              />
              <div
                className={styles.hoverZone}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </>
          )}
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

export default ProjectCard;
