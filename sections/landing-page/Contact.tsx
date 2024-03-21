import Button from "@/components/Button";
import { useNav } from "@/context/NavContext";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const { isActive } = useNav();
  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } relative flex justify-center items-center px-[70px] py-[104px] gap-[148px] bg-base 
    max-[820px]:flex-col
    max-wide:gap-16
    max-smallplus:px-8
    max-tablet:py-16`}
    >
      <Image
        src="/contact-icons/circle2.svg"
        alt="contact circle"
        height={1448}
        width={1600}
        className="absolute z-10 justify-center w-full h-[650px] max-tablet:h-[475px]
        max-[820px]:h-[780px]
        max-[745px]:h-[800px]
        max-[453px]:h-[950px]
        "
      />

      <div
        className="z-20 flex flex-col py-14 px-[70px] bg-white rounded-3xl 
      max-smallplus:p-8"
      >
        <div
          className="flex flex-col gap-8 max-w-[673px] tablet:min-w-[390px]
        "
        >
          <h1
            className="text-pretty text-5xl
          max-tablet:text-4xl
            "
          >
            Let&apos;s make something incredible together
          </h1>
          <p
            className="text-pretty text-2xl
          max-mobile:text-xl"
          >
            Request a free discovery call.
          </p>
          <Button
            type="button"
            title="Schedule a Call"
            variant="btn-pink-fill"
            href="https://calendly.com/ethanf-flores/30min?month=2024-02"
            target="_blank"
          />
        </div>
      </div>

      <Image
        alt="schedule call"
        src="/contact-icons/icon.svg"
        width={341}
        height={354}
        className="z-10 max-small:max-w-[287px]"
      />
    </div>
  );
};

export default Contact;
