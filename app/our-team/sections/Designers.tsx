"use client";

import { TeamCards } from "@/index";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { TeamCard } from "@/types/team";

import styles from "@/components/scss/Designers.module.scss";

const TeamMembers = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const [flippedIndex, setFlippedIndex] = useState(-1);

  const toggleFlip = (index: number) =>
    setFlippedIndex(index === flippedIndex ? -1 : index);

  return (
    <>
      {TeamCards.map((team, _) => (
        <div className={styles.container}>
          <h1>{team.header}</h1>
          <div className={styles.cardsContainer}>
            {team.member.map((member, index) => (
              <TeamMemberCard
                key={index}
                member={member}
                index={index}
                flippedIndex={flippedIndex}
                toggleFlip={toggleFlip}
                isTablet={isTablet}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
const TeamMemberCard = ({
  member,
  index,
  flippedIndex,
  toggleFlip,
  isTablet,
}: {
  member: TeamCard["member"][0];
  index: number;
  flippedIndex: number;
  toggleFlip: (index: number) => void;
  isTablet: boolean;
}) => {
  const isFlipped = index === flippedIndex;

  return (
    <div key={index} className="sub-container">
      <div
        onClick={() => toggleFlip(index)}
        className={`card-team ${styles.cardWrapper}  
          ${isFlipped ? "flipped" : ""}`}
      >
        <CardFront member={member} />
        <CardBack member={member} isTablet={isTablet} />
      </div>
    </div>
  );
};

const CardFront = ({ member }: { member: TeamCard["member"][0] }) => (
  <div className={`front ${styles.cardFront}`}>
    <div className={styles.imageContainer}>
      <Image
        src={member.cardFront.src}
        alt={member.cardFront.name}
        width={3034}
        height={3468}
        sizes="(min-width: 840px) 350px, 249px"
      />
    </div>
    <div className={styles.textContainer}>
      <h2>{member.cardFront.name}</h2>
      <div>
        <p>{member.cardFront.role}</p>
        <p>{member.cardFront.title}</p>
      </div>
    </div>
  </div>
);

const CardBack = ({
  member,
  isTablet,
}: {
  member: TeamCard["member"][0];
  isTablet: boolean;
}) => (
  <div className={`back ${styles.cardBack}`}>
    <Image
      src={member.cardBack.src}
      alt={member.cardBack.src}
      width={isTablet ? 249 : 350}
      height={isTablet ? 228 : 320}
      className={`${isTablet ? "max-h-[228px]" : "max-h-[320px]"}`}
    />
    <div className={styles.textContainer}>
      <p>
        <span>{member.cardFront.title}</span>
        {member.cardBack.text}
      </p>
      <div>
        <Link
          href={member.cardBack.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.svg"
            alt={`LinkedIn - ${member.cardFront.name}`}
            width={24}
            height={25}
          />
        </Link>
        <a
          href={member.cardBack.portfolio}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/portfolio.svg"
            alt={`Portfolio - ${member.cardFront.name}`}
            width={24}
            height={25}
          />
        </a>
      </div>
    </div>
  </div>
);

export default TeamMembers;
