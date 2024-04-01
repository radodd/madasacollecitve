import Footer from "@/components/Footer";
import ContactForm from "@/sections/contact-us/Form";

const page = () => {
  return (
    <div>
      <ContactForm />
      <Footer currentPage="contact" />
    </div>
  );
};

export default page;
