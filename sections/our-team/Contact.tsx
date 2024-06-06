"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useNav } from "@/context/NavContext";

const Contact = () => {
  const { isActive } = useNav();
  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } relative z-20 p-70 bg-base flex gap-16  overflow-hidden justify-center items-center max-[1240px]:flex-col
    max-medium:gap-6
    max-tablet:px-8
    max-[832px]:py-12
    max-mobile:gap-8`}
    >
      <Image
        alt="contact circle"
        src="/ourteam_circle.svg"
        height={2000}
        width={1448}
        style={{ width: "100%", height: "100%" }}
        className="absolute object-fit
          max-[1225px]:object-cover 
          max-tablet:h-[475px]
          max-[820px]:h-[780px]
          max-[745px]:h-[800px]
          max-[453px]:h-[950px]
        "
      />
      <div
        className="z-10 flex flex-col gap-8 text-black bg-white rounded-3xl p-14 max-w-[625px]
      max-mobile:p-8
      min-[1225px]:max-h-[378px]
      min-[1225px]:min-w-[562px]
      "
      >
        <h1
          className="text-5xl
        max-mobile:text-4xl"
        >
          Have a project in mind?
        </h1>
        <p className="text-2xl max-mobile:text-xl">
          Let&apos;s team up to create a tailored digital solution that aligns
          with your needs and business goals.
        </p>
        <Button
          title="Schedule a Call"
          type="button"
          variant="btn-pink-fill"
          href="https://calendly.com/madasacollective/60min"
        />
      </div>
      <Image
        src="/group2.jpg"
        alt="Madasa Collective team photo in Santa Barbara, CA - Ethan Flores, Serina Zepeda, and Miguel Castillo"
        width={612}
        height={378}
        className="z-20 rounded-3xl
        max-[831px]:min-h-[248.8px]
        max-[831px]:min-w-[329px]
        max-[467px]:min-h-[100px]
        max-[467px]:min-w-[100px]
        "
      />
    </div>
  );
};

export default Contact;
