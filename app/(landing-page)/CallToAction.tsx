import Button from "@/components/Button";
import { useNav } from "@/context/NavContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// import styles from "../../components/scss/CallToAction.module.scss";
import styles from "../../components/scss/ProjectDetail.module.scss";

const CallToAction = () => {
  const { isActive } = useNav();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobilePlus, setIsMobilePlus] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isDesktopPlus, setIsDesktopPlus] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // setIsTablet(window.innerWidth <= 1280);
      setIsMobile(window.innerWidth <= 468);
      setIsMobilePlus(window.innerWidth >= 469 && window.innerWidth <= 744);
      setIsDesktop(window.innerWidth >= 1512);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const imageSrc = isMobile
    ? "/contact_background_mobile.svg"
    : isMobilePlus
    ? "/contact_background_mobileplus.svg"
    : isDesktop
    ? "/contact_background_desktopplus.svg"
    : "/contact-icons/circle2.svg";
  return (
    <div className="relative w-full">
      <Image
        src="/testbackground_landing_page.svg"
        alt=""
        width={4000}
        height={4000}
        className="min-h-[5rem] "
      />

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
        <div className={styles.imageContainerLanding}>
          <Image
            src="/contact-icons/icon.png"
            alt=""
            width={4096}
            height={2359}
            className="h-[256px] w-[267px]"
          />
        </div>
      </div>
    </div>
    // <div className={`${isActive ? "blur" : ""} ${styles.CTAContainer}`}>
    //   <div className={styles.imageContainer}>
    //     <Image
    //       src="/testbackground_landing_page.svg"
    //       alt="contact circle"
    //       height={3300}
    //       width={1500}
    //     />
    //   </div>
    //   <div className={styles.contentContainer}>
    //     <div className={styles.textContainer}>
    //       <h1>Let&apos;s make something incredible together</h1>
    //       <p>Request a free discovery call.</p>
    //       <div className={styles.buttonContainer}>
    //         <Button
    //           type="button"
    //           title="Schedule a Call"
    //           variant="btn-pink-fill"
    //           href="https://calendly.com/madasacollective/60min"
    //           target="_blank"
    //         />
    //         <Button
    //           type="button"
    //           title="Learn more"
    //           variant="btn-blue"
    //           href="https://www.canva.com/design/DAF-mBhPfaA/i8H6H6r_sPlcZJUq6ZRH8g/view?utm_content=DAF-mBhPfaA&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    //           target="_blank"
    //         />
    //       </div>
    //     </div>
    //     <div className={styles["image-container"]}>
    //       <Image
    //         alt="schedule call"
    //         src="/contact-icons/icon.png"
    //         width={341}
    //         height={355}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default CallToAction;
