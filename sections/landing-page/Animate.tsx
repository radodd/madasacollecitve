"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { suns, whoWeAre } from "../..";
import Card from "../../components/Card";

const Animate = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  return (
    <div className="main">
      {suns.map((sun, index) => {
        return <Card key={index} {...sun} />;
      })}
    </div>
  );
};

export default Animate;
// <div ref={ref} className="h-[200vh] relative">
//   {/* <motion.div
//     // style={{ translateY }}
//     className="sun-mask flex items-center justify-center z-50"
//   >
//     HELLO
//   </motion.div> */}
//   <motion.div
//     style={{ scale }}
//     className="sun-mask items-center pt-[104px] gap-[104px] bg-slate-900 relative overflow-hidden
//   mt-[-145vh] z-40 pb-[500px]"
//   >
//     <div className="flex flex-col">
//       <div className="relative z-50 mt-24 mx-4">
//         {/* Use motion.div for the animated logo */}
//         <div className="pb-3">
//           <Image
//             className="pb-3"
//             alt="Logo"
//             src="/hero_madasa.svg"
//             width={650}
//             height={300}
//           />
//         </div>
//         <Image
//           alt="madasa"
//           src="/hero_collective.svg"
//           width={650}
//           height={300}
//         />
//       </div>
//       <div className="absolute z-40 bg-secondary w-[1600px] h-[1449px] rounded-[100%/100%] -translate-y-20"></div>
//       <div className="text-white max-w-[1140px] mx-8 text-center relative z-50">
//         <h1 className="text-2xl">{whoWeAre}</h1>
//       </div>
//     </div>
//   </motion.div>
// </div>
