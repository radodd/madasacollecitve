"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useNav } from "@/context/NavContext";

import styles from "../../components/scss/CaseStudy.module.scss";

const CaseStudy = () => {
  const { isActive } = useNav();

  return (
    <div className={`${isActive ? "blur" : ""} ${styles.container}`}>
      <div className={styles["image-container"]}>
        <Image
          alt="GenFulton.com Case Study"
          src="/case_study22.png"
          width={654}
          height={409}
          // sizes="(min-width: 760px) 654px, (min-width: 420px) calc(93.13vw - 35px), calc(7vw + 308px)"
          // className="rounded-3xl transition-all duration-300 ease-in-out"
        />
      </div>

      <div className={styles.content}>
        <h1 className="text-5xl font-bold max-[1300px]:text-4xl">Our Work</h1>
        <h2 className="text-4xl max-[1300px]:text-2xl">Responsive Website</h2>
        <p className="text-xl text-pretty max-[1300px]:text-md">
          <Link href="https://www.genfulton.com">
            <span className="underline">GenFulton.com</span>
          </Link>
          is a psychotherapist & mental performance coach who needed a website
          and a brand to encompass her multiple businesses.
        </p>
        <Button
          type="button"
          title="View Website"
          variant="btn-pink"
          href="https://genfulton.com/"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default CaseStudy;
