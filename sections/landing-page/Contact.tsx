import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div
      className="sun-media relative flex justify-center items-center px-[70px] py-[104px] gap-[148px] bg-base 
    max-wide:flex-col
    max-wide:gap-16
    max-tablet:px-8
    max-tablet:py-16"
    >
      <Image
        src="/contact-icons/circle.svg"
        alt="contact circle"
        height={1448}
        width={1600}
        style={{
          width: "100%",
          height: "100%",

          top: 0, // Adjust top positioning
          left: 0, // Adjust left positioning
        }}
        className="absolute justify-center"
      />
      <div
        className="z-10 flex flex-col py-14 px-[70px] bg-white rounded-3xl 
      max-tablet:p-8"
      >
        <div
          className="flex flex-col gap-8 max-w-[485px] 
        "
        >
          <h1
            className="text-pretty text-5xl
          max-mobile:text-4xl"
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
            variant="btn-blue"
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
        className="z-10"
      />
    </div>
  );
};

export default Contact;
