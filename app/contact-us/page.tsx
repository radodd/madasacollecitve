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
          <p className="bg-[#e3712e] rounded-t-full">{ContactFormText}</p>
        </div>
        <ContactForm />
      </div>
      <Footer currentPage="contact" />
    </>
  );
};

export default Page;
