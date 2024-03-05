"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "..";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const DropdownMenu = () => (
    <motion.ul
      initial={{ opacity: 1, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="z-20 absolute top-full w-screen left-0 text-center bg-base shadow-md rounded-b-2xl "
    >
      <div className="my-4 gap-3 max-mobile:my-6 max-mobile:gap-6">
        {navLinks.map((link, index) => (
          <li key={link.title} className="pb-3 last:pb-0">
            <a
              href={link.href}
              target={index !== navLinks.length - 1 ? "" : "_blank"}
              className={`block text-md font-normal text-fifth hover:font-bold ${
                index === navLinks.length - 1
                  ? "font-semibold no-underline"
                  : ""
              }`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </div>
    </motion.ul>
  );
  return (
    <nav
      className="relative flex justify-between items-center px-[90px] py-6 gap-4 bg-base
        max-tablet:flex-row 
        max-tablet:pl-8
        max-tablet:pr-7
        "
    >
      <div className="py-6">
        <Link href="/">
          <Image alt="Logo" src="/short_logo.svg" width={54} height={54} />
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
      <div id="hamburger-hidden">
        <div
          className="inline-block cursor-pointer mx-8 max-tablet:mx-0"
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
        >
          {/* Hamburger Icon */}
          <button
            className={`hamburger hamburger--collapse ${
              dropdownOpen ? "is-active" : ""
            } `}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Conditionally render Dropdown menu for small screens */}
      <AnimatePresence>{dropdownOpen && <DropdownMenu />}</AnimatePresence>
    </nav>
  );
};

export default Navbar;
