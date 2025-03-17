"use client";

import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Set the desired playback speed
    }
  }, []);
  return (
    <div className=" relative flex justify-center items-start bg-base">
      <div className="flex h-full w-full justify-center">
        <video
          autoPlay
          playsInline
          controls={false}
          loop
          muted
          width="100%"
          height="100%"
          ref={videoRef}
          className="flex object-fill"
        >
          <source src="/team.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[64px] font-bold max-tablet:text-5xl max-mobile:text-4xl text-nowrap">
        Our Team
      </h1>
    </div>
  );
};

export default Hero;
