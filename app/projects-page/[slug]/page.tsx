"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { CaseStudiesDetailPage } from "@/index";
import Button from "@/components/Button";
import { Project } from "@/types/project";
import { useState } from "react";
import { join } from "path";

import styles from "../../../components/scss/ProjectDetail.module.scss";
import CTABackground from "@/components/CTABackground";

const ProjectDetail = () => {
  const [imageError, setImageError] = useState(false);
  const params = useParams<{ slug: string }>();

  const project = CaseStudiesDetailPage.find(
    (p) => p.href === `${params.slug}`
  );

  if (!params?.slug) {
    return <div>Project not found PARAMS</div>;
  }
  if (!project) {
    return <div>Project not found PROJECT</div>;
  }

  return (
    <>
      <Hero project={project} />
      <div className={styles.container}>
        <Header project={project} />
        <Overview project={project} />
      </div>
      <TheChallenge project={project} />
      <TheApproach project={project} />
      <TheSolution project={project} />
      <TheImpact
        project={project}
        imageError={imageError}
        setImageError={setImageError}
      />
      <TheClient project={project} />
      <CTA />
    </>
  );
};

const Hero = ({ project }: { project: Project }) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={project.image_desktop}
        alt={project.title}
        width={2592}
        height={1280}
        className={styles.image}
        quality={100}
        priority={true}
      />
    </div>
  );
};

const Header = ({ project }: { project: Project }) => {
  return (
    <div className={styles.header}>
      <h1>{project.title}</h1>
      <span>{project.subtitle}</span>
      {/* Tags Section */}
      <Tags project={project} />
    </div>
  );
};

const Tags = ({ project }: { project: Project }) => {
  return (
    <div className={styles.tagsContainer}>
      {project.tags.map((item, index) => (
        <span key={index} className={styles.tag}>
          {item}
        </span>
      ))}
    </div>
  );
};

const Overview = ({ project }: { project: Project }) => {
  return (
    <div className={styles.overviewContainer}>
      <h1>Overview</h1>
      <p dangerouslySetInnerHTML={{ __html: project.overview.text }} />
      <Button type="button" title="View Website" variant="btn-blue" />
    </div>
  );
};

const TheChallenge = ({ project }: { project: Project }) => {
  return (
    <div className={styles.challengeContainer}>
      <div className={styles.textContainer}>
        <h1>The Challenge</h1>
        <p dangerouslySetInnerHTML={{ __html: project.challenge.text }} />
      </div>
      <div className={styles.imageContainer}>
        <Image src="/mrc_website_old.png" alt="" width={3804} height={1912} />
      </div>
    </div>
  );
};

const TheApproach = ({ project }: { project: Project }) => {
  return (
    <div className={styles.approachContainer}>
      <h1>The Approach</h1>
      <ul>
        {project.approach?.list.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
      <div className={styles.imageGrid}>
        {project.approach?.images.map((item, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const TheSolution = ({ project }: { project: Project }) => {
  return (
    <div className={styles.solutionContainer}>
      <h1>The Solution</h1>
      <ul>
        {project.solution?.list.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
      <div className={styles.imageGrid}>
        {project.solution?.images.map((item, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const TheImpact = ({
  project,
  imageError,
  setImageError,
}: {
  project: Project;
  imageError: boolean;
  setImageError: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.impactContainer}>
      <h1>The Impact</h1>
      <ul>
        {project.impact?.list.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
      <div className={styles.imageContainer}>
        <Image
          src={
            imageError || !project.impact?.image.src
              ? "/team/headshot_ethan.png"
              : project.impact?.image?.src
          }
          alt=""
          width={project.impact?.image.width}
          height={project.impact?.image.height}
          onError={() => setImageError(true)}
        />
      </div>
    </div>
  );
};

const TheClient = ({ project }: { project: Project }) => {
  return (
    <div className={styles.clientContainer}>
      <h1>The Client</h1>
      <p>{project.client?.review}</p>
      <span>{project.client?.reviewer}</span>
      <Button
        type="button"
        variant="btn-blue"
        title="View Website"
        href="https//mrc-two.vercel.app"
      />
    </div>
  );
};

const CTA = () => {
  return (
    <div className="relative w-full max-h-[20rem]">
      <CTABackground color="#E3712E" />

      <div className={styles.CTAContainer}>
        <div className={styles.textContainer}>
          <h1>Like what you see?</h1>
          <div>
            <p>We would love to work with you!</p>
            <p>Request a free discover call.</p>
          </div>

          <Button
            title="Schedule a Call"
            variant="btn-pink-fill"
            type="button"
          />
        </div>
        <div className={styles.imageContainer}>
          <Image src="/group4.png" alt="" width={4096} height={2359} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
