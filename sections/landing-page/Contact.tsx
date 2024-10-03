import Button from "@/components/Button";
import { useNav } from "@/context/NavContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import styles from "../../components/scss/Contact.module.scss";

const Contact = () => {
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
    <div className={`${isActive ? "blur" : ""} ${styles.container}`}>
      <div className={styles["background-container"]}>
        <Image
          src={imageSrc}
          alt="contact circle"
          height={3300}
          width={1500}
          // style={{ width: "100%", height: "100%" }}
          // className="absolute object-fit top-[180rem] z-0"
        />
      </div>
      {/* <Image
        src="/contact-icons/circle2.svg"
        alt="contact circle"
        height={1448}
        width={1600}
        style={{ width: "100%", height: "100%" }}
        className="absolute object-fit
       
          max-[1210px]:object-cover  max-tablet:h-[475px]
        max-[820px]:h-[780px]
        max-[745px]:h-[800px]
        max-[453px]:h-[950px]
       

        "
      /> */}
      <div className={styles["content-container"]}>
        <div className={styles["text-container"]}>
          <h1>Let&apos;s make something incredible together</h1>
          <p
            className="text-pretty text-2xl
          max-mobile:text-xl"
          >
            Request a free discovery call.
          </p>
          <Button
            type="button"
            title="Schedule a Call"
            variant="btn-pink-fill"
            href="https://calendly.com/madasacollective/60min"
            target="_blank"
          />
        </div>
        <div className={styles["image-container"]}>
          <Image
            alt="schedule call"
            src="/contact-icons/icon.png"
            width={341}
            height={355}
            // className="z-10 max-small:max-w-[287px] h-auto"
            // sizes="(min-width: 960px) 319px, 287px"
            // style={{ width: "341px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
