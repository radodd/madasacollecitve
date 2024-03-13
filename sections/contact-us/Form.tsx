"use client";

import { motion } from "framer-motion";
import { sendEmail } from "@/actions/SendEmail";
import Button from "@/components/Button";
import Image from "next/image";
import styles from "./contact.module.scss";
import { useNav } from "@/context/NavContext";

export default function ContactForm() {
  const { isActive } = useNav();
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
      className={`${
        isActive ? "blur" : ""
      } sun-media relative flex flex-col justify-center items-center bg-base overflow-hidden
    `}
    >
      <Image
        src="/hero_circle.svg"
        alt="circle"
        height={1448}
        width={1600}
        style={{
          width: "100%",
          height: "100%",
        }}
        className="absolute translate-y-[200px]
        max-tablet:translate-y-[110px]"
      />
      <div
        className="z-10 flex flex-col justify-center items-center pt-20 pb-24 gap-1 
      max-tablet:pt-8
      max-tablet:pb-12"
      >
        <h1 className="text-hero font-bold max-mobileplus:text-5xl">
          Get in touch!
        </h1>
      </div>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          console.log(formData.get("fullName"));
          console.log(formData.get("company"));
          console.log(formData.get("email"));
          console.log(formData.get("phoneNumber"));
          console.log(formData.get("message"));

          if (error) {
            alert(error);
            return;
          }
          alert("Email sent successfully!");
        }}
        id="loginform"
        className={`${styles.form} z-10 mb-40 tablet:grid tablet:grid-cols-2 justify-center max-tablet:flex 
        max-tablet:flex-col`}
      >
        <div className={`${styles.animateLabel} flex flex-col`}>
          <input
            type="text"
            name="fullName"
            className={`${styles.input} h-[57px] px-4 mt-3 rounded-md `}
            autoComplete="off"
            required
          />
          <label className="text-md px-4">Full name *</label>
          <line></line>
        </div>
        <div className={`${styles.animateLabel} flex flex-col`}>
          <input
            type="text"
            name="company"
            className={`${styles.input} h-[57px] px-4 mt-3 rounded-md `}
            autoComplete="off"
            required
          />
          <label className="text-md px-4">Your company</label>
          <line></line>
        </div>
        <div className={`${styles.animateLabel} flex flex-col`}>
          <input
            type="text"
            name="email"
            className={`${styles.input} h-[57px] px-4 mt-3 rounded-md `}
            autoComplete="off"
            required
          />
          <label className="text-md px-4">Your email *</label>
          <line></line>
        </div>
        <div className={`${styles.animateLabel} flex flex-col`}>
          <input
            type="number"
            name="phoneNumber"
            className={`${styles.input} h-[57px] px-4 mt-3 rounded-md `}
            autoComplete="off"
            required
          />
          <label className="text-md px-4">Phone number</label>
          <line></line>
        </div>
        <div className={`${styles.animateLabelMessage} col-span-2`}>
          <textarea
            name="message"
            className={`${styles.input}  px-4 mt-3 rounded-md`}
            // rows={6}
            autoComplete="off"
            required
          />
          <label className="text-md px-4 col-span-2">Message</label>
          <line></line>
        </div>
        <div
          className="flex justify-center items-center col-span-2 pb-10 
        max-tablet:pb-8"
        >
          <Button type="submit" variant="btn-blue-white" title="Submit" />
        </div>
      </form>
    </div>
    // </motion.section>
  );
}
{
  /* <form
        className="z-10 extrasmall:grid extrasmall:grid-cols-2 justify-center gap-10 mx-[70px] max-w-[700px] 
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
          <label className="text-md font-bold text-white">Your name:</label>
          <input
            className="h-[57px] px-4 mt-3 rounded-lg "
            name="name"
            id="name"
            type="text"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-bold text-white">Your company:</label>
          <input
            className="h-[57px] px-4 mt-3 rounded-lg "
            name="company"
            type="text"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-bold text-white">Your email:</label>
          <input
            className="h-[57px] px-4 mt-3 rounded-lg "
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-bold text-white">
            Your phone number:
          </label>
          <input
            className="h-[57px] px-4 mt-3 rounded-lg "
            name="phoneNumber"
            type="number"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="text-md font-bold text-white">Message:</label>
          <textarea
            className="h-[350px] mt-3 rounded-lg p-4 "
            name="message"
            placeholder="Start typing here..."
            required
            maxLength={5000}
          />
        </div>
        <div
          className="flex justify-center items-center col-span-2 pb-10 
        max-tablet:pb-8"
        >
          <Button type="submit" variant="btn-blue-white" title="Submit" />
        </div>
      </form> */
}
