import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="p-70 bg-secondary flex gap-[148px] max-tablet:flex-col">
      <div className="max-w-[746px] flex flex-col gap-10 text-white">
        <h1 className="text-5xl">Have a Project in mind?</h1>
        <p className="text-2xl">
          Let's team up to create a tailored digital solution that aligns with
          your needs and business goals.
        </p>
        <Button title="Schdule a call" type="button" variant="btn-white" />
      </div>
      <Image src="/Vector.svg" alt="vector" width={375} height={375} />
    </div>
  );
};

export default Contact;
