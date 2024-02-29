import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div
      className="sun-media relative z-10 p-70 bg-base flex gap-[148px]  overflow-hidden items-center max-wide:flex-col
    max-wide:gap-16
    max-tablet:px-8
    max-tablet:py-16"
    >
      <Image
        alt="contact circle"
        src="/contact_circle.svg"
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
      {/* <div className="bg-secondary w-[1600px] h-[1448px] absolute -translate-x-20 -translate-y-16 rounded-t-full"></div> */}

      <div className="z-10 max-w-[746px] flex flex-col gap-10 text-black bg-white rounded-3xl p-5">
        <h1 className="text-5xl">Have a Project in mind?</h1>
        <p className="text-2xl">
          Let&apos;s team up to create a tailored digital solution that aligns
          with your needs and business goals.
        </p>
        <Button title="Schdule a call" type="button" variant="btn-blue" />
      </div>
      <Image
        src="/Vector.svg"
        alt="vector"
        width={375}
        height={375}
        className="z-20"
      />
    </div>
  );
};

export default Contact;
