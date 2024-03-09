import React from "react";
import styles from "./style.module.scss";
import { navLinks } from "@/index";
import Link from "next/link";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (index: any) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + index * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
const index = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {navLinks.map((link, index) => {
          return (
            <div key={index} className={styles.linkContainer}>
              <motion.div
                custom={index}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <Link href={link.href}>{link.title}</Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
