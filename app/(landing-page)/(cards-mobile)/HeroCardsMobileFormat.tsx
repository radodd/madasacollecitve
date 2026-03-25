import Image from "next/image";
import { motion, motionValue, useTransform } from "framer-motion";
import { useState } from "react";

import styles from "../../../components/scss/HeroCardsMobileFormat.module.scss";

interface CardProps {
  i: number;
  icon: string;
  title: string;
  text: string;
  back: string;
  alt: string;
  progress?: any;
  range: number[];
  targetScale: number;
}

const Card = ({
  i,
  icon,
  title,
  text,
  back,
  progress = motionValue(0),
  range,
  targetScale,
}: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`${styles.cardContainer}`} style={{ perspective: "700px" }}>
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{
          scale,
          top: `${i * 200}`,
          transformStyle: "preserve-3d",
        }}
        className={`${styles.card} card-landing ${
          i === 0 ? styles.firstCard : styles.secondCard
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front face */}
        <div
          className="mobile-front flex flex-col gap-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={icon}
            alt="image"
            width={256}
            height={256}
            sizes="256px"
          />
          <h1 className="text-4xl flex justify-center font-bold">{title}</h1>
        </div>

        {/* Back face */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            inset: 0,
          }}
          className="flex flex-col bg-white justify-center items-center rounded-3xl"
        >
          <div className="w-full">
            <Image
              src={back}
              alt="card"
              width={412}
              height={462}
              sizes="412px"
            />
          </div>
          <p className="z-30 text-center text-pretty text-xl absolute top-[17%] left-[0px] bg-white rounded-3xl py-10 px-6">
            {text}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
