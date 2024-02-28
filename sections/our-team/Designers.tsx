import { designers } from "@/index";
import Image from "next/image";
import React from "react";

const Designers = () => {
  return (
    <div className="px-70 pt-24 flex flex-col gap-10 bg-base">
      <h1 className="text-5xl font-bold">Designers</h1>
      <div className="flex gap-10 flex-wrap justify-center">
        {designers.map((designer) => (
          <div
            key={designer.name}
            className="card min-w-[430px] min-h-[618px] flex flex-col shadow-bl2xl max-mobile:min-w-[329px] max-mobile:min-h-[489px]"
          >
            <div className="front flex flex-col gap-6 ">
              <Image
                src={designer.pic}
                alt={designer.name}
                width={350}
                height={400}
                className="max-mobile:min-w-[249px] max-mobile:min-h-[300px]"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold">{designer.name}</h1>
                <div>
                  <p className="text-xl">{designer.title}</p>
                  <p className="text-xl">{designer.secondTitle}</p>
                </div>
              </div>
            </div>
            <div className="back">BACK</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designers;
