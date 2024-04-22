import Image from "next/image";
import styles from "./style.module.scss";
import {
  AnimatePresence,
  motion,
  motionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";

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
    <div className={`${styles.cardContainer} `}>
      <AnimatePresence mode="wait">
        {!isFlipped && (
          <motion.div
            key={i}
            initial="hidden"
            animate={isFlipped ? "" : "visible"}
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5, ease: "linear" }}
            style={{
              scale,
              top: `calc(-10% + ${i * 25}px)`,
            }}
            className={`${styles.card}  card-landing flex bg-white justify-center items-center rounded-3xl`}
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
            className={`${styles.card} relative card-landing flex flex-col bg-white justify-center items-center rounded-3xl`}
            onClick={flipCard}
          >
            <div className="">
              <div className="">
                <Image
                  src={back}
                  alt="card"
                  width={412}
                  height={462}
                  sizes="412px"
                />
              </div>
              <p className="z-30 text-pretty text-xl text-left absolute bottom-[100px] left-[41px] bg-white rounded-3xl py-10 px-5 w-[256px]">
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

// <div className={styles.mobileCardContainer}>
//   <AnimatePresence mode="wait">
//     <motion.div
//       key={i}
//       initial="hidden"
//       animate={isFlipped ? "hidden" : "visible"}
//       variants={variants}
//       transition={{ duration: 0.5 }}
//       style={{
//         scale,
//         top: `calc(-10% + ${i * 25}px)`,
//       }}
//       className={styles.mobileCard}
//       onClick={flipCard}
//     >
//       <div className={styles.mobileCardFront}>FRONT</div>
//       <div className={styles.mobileCardBack}>
//         <h1>BACK</h1>
//       </div>
//     </motion.div>
//   </AnimatePresence>
// </div>
