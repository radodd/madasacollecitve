import { useNav } from "@/context/NavContext";

const Testimonial = () => {
  const { isActive } = useNav();
  return (
    <div
      className={`${
        isActive ? "blur" : ""
      } z-10 bg-base flex justify-center items-center
     
    `}
    >
      <div
        className="flex flex-col py-14 px-70 gap-8 bg-primary max-w-[1184px] rounded-3xl shadow-b2xl
      max-tablet:py-10
      max-tablet:px-8
      max-tablet:max-w-[650px]"
      >
        <h1
          className="text-4xl text-white font-bold
        max-tablet:text-2xl"
        >
          Client Testimonials
        </h1>
        <p
          className="text-xl text-white
        max-tablet:text-md"
        >
          “I want to give a big shoutout to my amazing website development team
          for designing my business cards, ensuring delivery of them before an
          important networking event, and for creating my website from scratch
          in a tight window (GenFulton.com). You guys completely blew me away
          with your design ideas, communication, professionalism, research,
          openness to feedback and delivery. Thank you for being an awesome
          team!!”
        </p>
        <h2
          className="text-2xl font-bold text-white
        max-tablet:text-xl"
        >
          Gen Fulton, Owner of Gen Fulton Consultancy
        </h2>
      </div>
    </div>
  );
};

export default Testimonial;
