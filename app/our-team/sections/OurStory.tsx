"use client";

import Image from "next/image";
import Button from "@/components/Button";

import styles from "../../../components/scss/OurStory.module.scss";

const OurStory2 = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.storyContainer}>
        <h1>Our Story</h1>
        <p>
          A Product Designer met a Software Developer in Santa Barbara, CA, and
          founded....
          <span>a digital powerhouse.</span>
        </p>
        <p>
          Inspired by our previous backgrounds as a Structural Engineer (Serina)
          and Army Combat Engineer Veteran (Ethan), we are driven by the belief
          that unconventional backgrounds can be harnessed to redefine success.{" "}
          As a result, we founded Madasa Collective, a California-based team
          specializing in branding, product design, and software development. We
          assembled a team of talented and experienced individuals across
          multiple disciplines to craft innovative solutions. Our collective
          combines industry expertise with diverse perspectives to deliver
          high-quality products to our clients.
        </p>
        <Button
          title="Learn More"
          variant="btn-blue"
          type="button"
          onClick={() =>
            window.open(
              "https://www.canva.com/design/DAF-mBhPfaA/i8H6H6r_sPlcZJUq6ZRH8g/view?utm_content=DAF-mBhPfaA&utm_campaign=designshare&utm_medium=link&utm_source=editor",
              "_blank"
            )
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <div className={styles.imageContainer}>
          <Image src="/our_story.png" alt="" width={1979} height={2474} />
        </div>
      </div>
    </section>
  );
};

export default OurStory2;
