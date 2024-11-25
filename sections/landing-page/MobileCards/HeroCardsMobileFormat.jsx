import Image from "next/image";
import {
  AnimatePresence,
  motion,
  motionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";

import styles from "../../../components/scss/HeroCardsMobileFormat.module.scss";

const Card = ({
  i,
  icon,
  title,
  text,
  back,
  progress = motionValue(0),
  range,
  targetScale,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const variants = {
    visible: { opacity: 1, rotateY: 0 },
    hidden: { opacity: 1, rotateY: 90 },
  };
  const variants1 = {
    visible: { opacity: 1, rotateY: 0 },
    hidden: { opacity: 1, rotateY: -90 },
  };
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`${styles.cardContainer}  `}>
      <AnimatePresence mode="wait">
        {!isFlipped && (
          <motion.div
            key={i}
            initial="hidden"
            animate={isFlipped ? "" : "visible"}
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.3, ease: "linear" }}
            style={{
              scale,
              top: `${i * 200}`,
            }}
            className={`${styles.card} card-landing ${
              i === 0 ? styles.firstCard : styles.secondCard
            }`}
            onClick={flipCard}
          >
            <div className="mobile-front flex flex-col gap-6">
              <Image
                src={icon}
                alt="image"
                width={256}
                height={256}
                sizes="256px"
              />
              <h1 className="text-4xl flex justify-center font-bold">
                {title}
              </h1>
            </div>
          </motion.div>
        )}
        {isFlipped && (
          <motion.div
            key={`back-${i}`}
            initial="hidden"
            animate={isFlipped ? "visible" : "hidden"}
            exit="hidden"
            variants={variants1}
            transition={{ duration: 0.5, ease: "linear" }}
            style={{
              scale,
              top: `calc(-10% + ${i * 25}px)`,
            }}
            className={`${styles.cardFlipped} relative card-landing flex flex-col bg-white justify-center items-center rounded-3xl`}
            onClick={flipCard}
          >
            <div className="">
              <div className=" w-full">
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
