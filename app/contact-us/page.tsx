"use client";

import "../globals.css";
import Footer from "@/components/Footer";
import { useNav } from "@/context/NavContext";
import ContactForm from "@/app/contact-us/Form";
import { Metadata } from "next";

import styles from "./ContactForm.module.scss";
import { ContactFormText } from "@/index";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Contact Us",
// };

const page = () => {
  const { isActive } = useNav();
  return (
    <>
      <div
        className={`${isActive ? "blur" : ""} min-h-screen relative
    `}
      >
        <div className="absolute z-10 top-[9rem]">
          <Image
            src="/testbackground.svg"
            alt=""
            width={4000}
            height={4000}
            className=""
          />
        </div>
        <div className={styles.contactFormTextContainer}>
          <h1>Get in touch!</h1>
          <p>{ContactFormText}</p>
        </div>
        <ContactForm />
      </div>
      <Footer currentPage="contact" />
    </>
  );
};

export default page;
