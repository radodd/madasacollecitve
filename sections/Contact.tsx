import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div
      className="flex justify-between px-70 py-20 w-full items-center bg-white gap-6
    max-tablet:flex-col
    max-tablet:px-10"
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-[40px]">
          Let&apos;s make something incredible together
        </h1>
        <p className="text-2xl">Request a free discovery call.</p>
        <Button
        type="button"
        title="Schedule a Call"
        width={7}
        />
      </div>
      <Image
        alt="schedule call"
        src="/schedule-call.png"
        width={395}
        height={100}
      />
    </div>
  );
};

export default Contact;
