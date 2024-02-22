import React from "react";

const Testimonial = () => {
  return (
    <div
      className="bg-[#EB8F66] p-20 flex justify-center items-center
      max-tablet:p-9
    "
    >
      <div
        className="flex flex-col py-14 px-70 gap-8 bg-white max-w-[1140px] rounded-3xl shadow-b2xl
      max-tablet:py-10
      max-tablet:px-8
      max-tablet:max-w-[650px]"
      >
        <h1 className="text-[32px] font-bold">Client Testimonials</h1>
        <p className="text-[20px]">
          “I want to give a big shoutout to my amazing website development team
          for designing my business cards, ensuring delivery of them before an
          important networking event, and for creating my website from scratch
          in a tight window (GenFulton.com). You guys completely blew me away
          with your design ideas, communication, professionalism, research,
          openness to feedback and delivery. Thank you for being an awesome
          team!!”
        </p>
        <h1 className="text-2xl font-bold">
          Gen Fulton, Owner of Gen Fulton Consultancy
        </h1>
      </div>
    </div>
  );
};

export default Testimonial;
