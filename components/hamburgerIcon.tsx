"use client";
import React from "react";
import { useNav } from "@/context/NavContext";

const HamburgerIcon = () => {
  const { isActive, setIsActive } = useNav();
  return (
    <div id="dropdown" className=" z-20">
      <div
        className="inline-block cursor-pointer mx-8 max-tablet:mx-0"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {" "}
        {/* Hamburger Icon */}
        <button
          className={` hamburger hamburger--collapse ${
            isActive ? "is-active" : ""
          } `}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>{" "}
      </div>
    </div>
  );
};

export default HamburgerIcon;
