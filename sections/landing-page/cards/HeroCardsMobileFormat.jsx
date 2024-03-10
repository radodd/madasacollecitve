import Image from "next/image";
import styles from "./style.module.scss";
import {
  AnimatePresence,
  motion,
  motionValue,
  MotionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";

// interface CardProps {
//   icon: string;
//   title: string;
//   text: string;
//   i: number;
//   progress: MotionValue<number> | number;
//   range?: number[];
//   targetScale?: number;

const Card = ({
  i,
  icon,
  title,
  text,
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
            className={`${styles.card}  card-landing flex bg-white justify-center items-center bl2xl rounded-3xl`}
            onClick={flipCard}
          >
            <div className="mobile-front flex flex-col gap-6">
              <Image src={icon} alt="image" width={216} height={216} />
              <h1
                className="text-4xl font-bold
   max-tablet:text-2xl"
              >
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
            className={`${styles.card} card-landing flex flex-col bg-white justify-center items-center bl2xl rounded-3xl`}
            onClick={flipCard}
          >
            <div className=" p-6">
              <p className="text-xl text-left">{text}</p>
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
