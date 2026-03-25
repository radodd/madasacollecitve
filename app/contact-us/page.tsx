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
        className={`${isActive ? "blur" : ""} min-h-[80vh] relative
    `}
      >
        <div className="absolute inset-x-0 z-10 top-[9rem] bottom-0">
          <Image
            src="/testbackground.svg"
            alt=""
            role="presentation"
            fill
            className="object-cover"
          />
        </div>
        <div className={styles.contactFormTextContainer}>
          <h1>Get in touch!</h1>
          <p className="bg-[#e3712e] rounded-t-full">{ContactFormText}</p>
        </div>
        <ContactForm />
      </div>
      <Footer currentPage="contact" />
    </>
  );
};

export default Page;
