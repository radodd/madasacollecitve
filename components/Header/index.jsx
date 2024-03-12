"use client";

import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav2Button from "./Nav2Button";
import Nav2 from "./Nav2";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/index";
import { useNav } from "@/context/NavContext";

const variants = {
  open: {
    width: 500,
    height: 350,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.75, 0, 0.24, 1] },
  },
  close: {
    width: 0,
    height: 0,
    top: "5px",
    right: "5px",
    transition: { duration: 0.85, ease: [0.75, 0, 0.24, 1] },
  },
};
const Navbar2 = () => {
  const { isActive, setIsActive } = useNav(false);

  console.log("Current state:", isActive);

  return (
    <>
      <nav
        className="relative flex h-[96px] justify-between items-center px-[90px] py-6 gap-4 bg-base
      max-tablet:flex-row 
      max-tablet:pl-8
      max-tablet:pr-7
      "
      >
        <div className="">
          <Link href="/">
            <Image
              alt="Logo"
              src="/logo/short.svg"
              width={54}
              height={54}
              className="my-[20px]"
            />
          </Link>
        </div>

        <div className="flex text-2xl gap-16 items-center text-fifth max-small:hidden">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={index !== navLinks.length - 1 ? "" : "_blank"}
              className={`hover:underline ${
                index === navLinks.length - 1 ? "btn-blue" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Hamburger menu for small screens */}

        <div className={`${styles.header} z-30 small:hidden`}>
          <motion.div
            className={`${styles.menu} max-mobile:max-w-[385px] `}
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

        {/* <div
          className="inline-block cursor-pointer mx-8 max-tablet:mx-0"
          onClick={() => {
            console.log("Toggling dropdownOpen");
            setDropdownOpen(!dropdownOpen);
          }}
        > */}
        {/* Hamburger Icon */}
        {/* <button
          className={`hamburger hamburger--collapse ${
            dropdownOpen ? "is-active" : ""
          } `}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button> */}
        {/* <Navbar2Button isActive={isActive} setIsActive={setIsActive} /> */}
        {/* </div> */}

        {/* Conditionally render Dropdown menu for small screens */}
        {/* <AnimatePresence>{dropdownOpen && <DropdownMenu />}</AnimatePresence> */}
      </nav>
    </>
  );
};

export default Navbar2;
