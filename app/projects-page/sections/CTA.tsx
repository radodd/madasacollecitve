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
          <h1>Like what you see?</h1>
          <p>We would love to work with you!</p>
          <div className={styles.buttonContainer}>
            <Button
              title="Schedule a Call"
              variant="btn-pink-fill"
              type="button"
              href="https://calendly.com/madasacollective/60min?month=2025-04"
              target="_blank"
            />
            <Button
              type="button"
              title="Learn more"
              variant="btn-blue"
              href="https://www.canva.com/design/DAF-mBhPfaA/i8H6H6r_sPlcZJUq6ZRH8g/view?utm_content=DAF-mBhPfaA&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
