import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div
      className="relative flex justify-between px-70 py-20 w-full items-center bg-base gap-6
    max-tablet:flex-col
    max-tablet:px-10"
    >
      <Image
        src="/contact_circle.svg"
        alt="contact circle"
        height={1448}
        width={1600}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0, // Adjust top positioning
          left: 0, // Adjust left positioning
        }}
      />
      <div className="flex flex-col gap-8 z-10">
        <h1 className="text-5xl">
          Let&apos;s make something incredible together
        </h1>
        <p className="text-2xl">Request a free discovery call.</p>
        <Button type="button" title="Schedule a Call" variant="btn-blue" />
      </div>
      <Image
        alt="schedule call"
        src="/Videocall_Man.svg "
        width={395}
        height={100}
      />
    </div>
  );
};

export default Contact;
