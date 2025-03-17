"use client";

import Button from "@/components/Button";
import Image from "next/image";
import CTABackground from "@/components/CTABackground";

import styles from "@/components/scss/CallToAction.module.scss";

const CTA = () => {
  return (
    <div className={styles.container}>
      <CTABackground color="#E3712E" />

      <div className={styles.CTAContainerTeam}>
        <div className={styles.imageContainerTeam}>
          <Image src="/group4.png" alt="" width={4096} height={2359} />
        </div>
        <div className={styles.textContainerTeam}>
          <h1>Have a project in mind?</h1>
          <p>
            Let&apos;s team up to create a tailored digital solution that aligns
            with your needs and business goals.
          </p>

          <Button
            title="Schedule a Call"
            variant="btn-pink-fill"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
