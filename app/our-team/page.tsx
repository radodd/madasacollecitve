import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/sections/our-team/Contact";
import Designers from "@/sections/our-team/Designers";
import Developers from "@/sections/our-team/Developers";
import Hero from "@/sections/our-team/Hero";
import OurStory from "@/sections/our-team/OurStory";

const page = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <Designers />
      <section className="">
        <Developers />
      </section>
      <section className="">
        <Contact />
      </section>

      <Footer currentPage="team" />
    </div>
  );
};

export default page;
