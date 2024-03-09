"use client";
import { useState } from "react";

import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav2Button from "./Nav2Button";
import Nav2 from "./Nav2";

const variants = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.75, 0, 0.24, 1] },
  },
  close: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, ease: [0.75, 0, 0.24, 1] },
  },
};
const Navbar2 = () => {
  const [isActive, setIsActive] = useState(false);
  console.log("Current state:", isActive);
  return (
    <div className={`${styles.header} z-20`}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "close"}
        initial="closed"
        onAnimationStart={() => console.log("Animation started")}
        onAnimationComplete={() => console.log("Animation completed")}
      >
        <AnimatePresence>{isActive && <Nav2 />}</AnimatePresence>
      </motion.div>
      <Nav2Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Navbar2;
