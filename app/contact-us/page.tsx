"use client";

import { useNav } from "@/context/NavContext";
import { ContactFormText } from "@/index";
import Footer from "@/components/Footer";
import ContactForm from "@/app/contact-us/Form";
import Image from "next/image";

import styles from "./ContactForm.module.scss";

const Page = () => {
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

export default Page;
