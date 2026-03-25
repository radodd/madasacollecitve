import HeroCardsDesktop from "@/app/(landing-page)/(cards-desktop)/HeroCardsDesktop";
import React from "react";

import styles from "./OurServices.module.scss";
import HeroCardsMobile from "./(cards-mobile)/ScrollingHeroCardsMobile";

const OurServices = () => {
  return (
    <div>
      <h1 className={styles.header}>Our Services</h1>
      <HeroCardsDesktop />
      <HeroCardsMobile />
    </div>
  );
};

export default OurServices;
