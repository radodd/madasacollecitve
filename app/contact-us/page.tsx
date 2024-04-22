import "../globals.css";
import Footer from "@/components/Footer";
import ContactForm from "@/sections/contact-us/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

const page = () => {
  return (
    <div>
      <ContactForm />
      <Footer currentPage="contact" />
    </div>
  );
};

export default page;
