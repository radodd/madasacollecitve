"use client";

import React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/SendEmail";
import Button from "@/components/Button";
import Image from "next/image";

export default function ContactForm() {
  return (
    // <motion.section
    //   id="contact"
    //   className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    //   initial={{
    //     opacity: 0,
    //   }}
    //   whileInView={{
    //     opacity: 1,
    //   }}
    //   transition={{
    //     duration: 1,
    //   }}
    //   viewport={{
    //     once: true,
    //   }}
    // >
    <div
      className="sun-media relative flex flex-col justify-center bg-base overflow-hidden 
    "
    >
      <Image
        src="/Hero_Section_Circle.svg"
        alt="circle"
        height={1448}
        width={1600}
        style={{
          width: "100%",
          height: "100%",
        }}
        className="absolute translate-y-[200px]"
      />
      <div className="z-10 flex flex-col justify-center items-center py-20 gap-1 max-tablet:py-8">
        <h1 className="text-hero font-bold">Get in Touch</h1>
        <p className="text-gray-700 text-center max-tablet:mx-6">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:ethan.flores.js@gmail.com">
            Contact@MadasaCollective.com
          </a>{" "}
          or via this form.
        </p>
      </div>

      <form
        className="z-10 tablet:grid tablet:grid-cols-2 justify-center gap-10 mx-[70px] max-w-[704px]
        max-tablet:gap-6 
        max-tablet:flex 
        max-tablet:flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            alert(error);
            return;
          }
          alert("Email sent successfully!");
        }}
      >
        <div className="flex flex-col">
          <label className="text-2xl font-bold">Your name:</label>
          <input
            className="h-[57px] px-4 rounded-lg "
            name="name"
            id="name"
            type="text"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="text-2xl font-bold ">Your company:</label>
          <input
            className="h-[57px] px-4 rounded-lg "
            name="company"
            type="text"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="text-2xl font-bold ">Your email:</label>
          <input
            className="h-[57px] px-4 rounded-lg "
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="text-2xl font-bold ">Your phone number:</label>
          <input
            className="h-[57px] px-4 rounded-lg "
            name="phoneNumber"
            type="number"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="text-2xl font-bold">Message:</label>
          <textarea
            className="h-[380px] my-3 rounded-lg p-4 "
            name="message"
            placeholder="Start typing here..."
            required
            maxLength={5000}
          />
        </div>
        <div className="flex justify-center items-center col-span-2 py-20 min-w-[209px] max-tablet:py-8">
          <Button type="submit" variant="btn-pink-fill" title="Submit" />
        </div>
      </form>
    </div>
    // </motion.section>
  );
}
