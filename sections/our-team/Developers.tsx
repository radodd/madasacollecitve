import { developers } from "@/index";
import Image from "next/image";
import React from "react";

const Developers = () => {
  return (
    <div className="px-70 pt-24 flex flex-col gap-10 bg-base">
      <h1 className="text-5xl font-bold">Development</h1>
      <div className="flex flex-row gap-10">
        {developers.map((developer) => (
          <div
            key={developer.name}
            className="max-w-[430px] p-10 flex flex-col gap-6 shadow-bl2xl rounded-3xl bg-white"
          >
            <Image
              src={developer.pic}
              alt={developer.name}
              width={350}
              height={400}
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">{developer.name}</h1>
              <div>
                <p className="text-xl">{developer.title}</p>
                <p className="text-xl">{developer.secondTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
