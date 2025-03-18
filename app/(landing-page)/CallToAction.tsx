import Button from "@/components/Button";
import { useNav } from "@/context/NavContext";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

// import styles from "../../components/scss/CallToAction.module.scss";
import styles from "../../components/scss/CallToAction.module.scss";
import CTABackground from "@/components/CTABackground";

const CallToAction = () => {
  return (
    <div className={styles.container}>
      <CTABackground color="#56B7CB" />
      <div className={styles.CTAContainer}>
        <div className={styles.textContainer}>
          <h1>Let&apos;s make something incredible together</h1>
          <p>Request a free discovery call.</p>

          <div className={styles.buttonContainer}>
            <Button
              title="Schedule a Call"
              variant="btn-pink-fill"
              type="button"
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

        <Image
          src="/contact-icons/icon.png"
          alt=""
          width={4096}
          height={2359}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default CallToAction;
