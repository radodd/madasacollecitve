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
      } relative z-20 p-70 bg-base flex gap-14  overflow-hidden justify-center items-center max-medium:flex-col
    max-medium:gap-6
    max-tablet:px-8
    max-tablet:py-16
    max-mobile:gap-8`}
    >
      <Image
        alt="contact circle"
        src="/ourteam_circle.svg"
        height={2000}
        width={1448}
        // style={{
        //   width: "100%",
        //   height: "100%",

        //   top: 0, // Adjust top positioning
        //   left: 0, // Adjust left positioning
        // }}
        style={{ width: "100%", height: "100%" }}
        className="absolute object-fit
          max-[1225px]:object-cover 
          max-tablet:h-[475px]
          max-[820px]:h-[780px]
          max-[745px]:h-[800px]
          max-[453px]:h-[950px]
        "
      />

      {/* <div className="bg-secondary w-[1600px] h-[1448px] absolute -translate-x-20 -translate-y-16 rounded-t-full"></div> */}

      <div
        className="z-10 flex flex-col gap-8 text-black bg-white rounded-3xl p-14 max-w-[625px]
      max-mobile:p-8"
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
      {/* <Image
        src="/contact-icons/icon2.svg"
        alt="vector"
        width={355}
        height={355}
        className="z-20"
      /> */}
      <Image
        src="/ourteam_contact.png"
        alt="our team group photo"
        width={612}
        height={378}
        className="z-20"
      />
    </div>
  );
};

export default Contact;
