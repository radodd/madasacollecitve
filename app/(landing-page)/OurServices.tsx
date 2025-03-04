import HeroCardsDesktop from "@/components/HeroCardsDesktop";
import React from "react";

import styles from "./OurServices.module.scss";
import HeroCardsMobile from "./MobileCards/HeroCardsMobile";

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
