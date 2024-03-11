"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useNav } from "../../context/NavContext";

const Hero = () => {
  const { isActive } = useNav();
  console.log("isActive from Team Page", isActive);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Set the desired playback speed
    }
  }, []);
  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } relative flex justify-center items-start bg-base`}
    >
      <div className="flex bg-base">
        {/* <Image
          alt="out team"
          src="/hero_team.svg"
          layout="fill "
          width={100}
          height={100}
          style={{ width: "100%", height: "100%" }}
        /> */}
        <video
          autoPlay
          loop
          muted // Add controls for play, pause, etc.
          className="flex  top-0 bottom-0 object-top "
          width="100%"
          height="100%"
          ref={videoRef}
        >
          <source src="/team.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[64px] font-bold max-tablet:text-5xl text-nowrap">
        Our Team
      </h1>
    </div>
  );
};

export default Hero;
