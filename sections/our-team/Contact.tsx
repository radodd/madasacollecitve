"use client";
import Button from "@/components/Button";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      className="sun-media relative z-20 p-70 bg-base flex gap-[90px]  overflow-hidden justify-center items-center max-medium:flex-col
    max-medium:gap-16
    max-tablet:px-8
    max-tablet:py-16"
    >
      <Image
        alt="contact circle"
        src="/contact_circle.svg"
        height={1600}
        width={1448}
        style={{
          width: "100%",
          height: "100%",

          top: 0, // Adjust top positioning
          left: 0, // Adjust left positioning
        }}
        className="absolute justify-center medium:scale-[1.35] wide:translate-y-[100px]"
      />
      {/* <div className="bg-secondary w-[1600px] h-[1448px] absolute -translate-x-20 -translate-y-16 rounded-t-full"></div> */}

      <div className="z-10 flex flex-col gap-10 text-black bg-white rounded-3xl p-14 max-w-[625px]">
        <h1 className="text-5xl">Have a Project in mind?</h1>
        <p className="text-2xl">
          Let&apos;s team up to create a tailored digital solution that aligns
          with your needs and business goals.
        </p>
        <Button
          title="Schedule a call"
          type="button"
          variant="btn-blue"
          href="https://calendly.com/ethanf-flores/30min?month=2024-02"
        />
      </div>
      <Image
        src="/Vector.svg"
        alt="vector"
        width={355}
        height={355}
        className="z-20"
      />
    </div>
  );
};

export default Contact;
