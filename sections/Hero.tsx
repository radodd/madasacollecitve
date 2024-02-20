import Image from "next/image";
import React from "react";
import { cards, whoWeAre } from "..";

const Hero = () => {
  return (
    <div className="flex flex-col items-center pt-[104px] gap-[104px] bg-base relative z-50 overflow-hidden">
      <div className="relative z-50 mt-24 mx-4">
        <Image
          className="pb-3"
          alt="Logo"
          src="/hero_madasa.svg"
          width={650}
          height={300}
        />
        <Image
          alt="madasa"
          src="/hero_collective.svg"
          width={650}
          height={300}
        />
        {/* <p className='text-white font-bold text-9xl'>Collective</p> */}
      </div>
      <div className="absolute z-40 bg-orange w-[1600px] h-[1449px] rounded-[100%/100%] -translate-y-20"></div>
      <div className="text-white max-w-[1140px] mx-8 text-center relative z-50">
        <h1 className="text-2xl">{whoWeAre}</h1>
      </div>
      {/* <div className='flex justify-between gap-6'>
        <button className='py-4 px-8 border-black border rounded-full'>How We Work</button>
        <button className='py-4 px-8 bg-black text-white border-black border rounded-full'>Contact Us</button>
    </div> */}
      <div
        className="flex flex-row gap-28 px-[70px] mb-56 relative z-50 
      max-wide:flex-col"
      >
        {cards.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-6 items-center shadow-br2xl py-8 px-16 rounded-3xl bg-white"
          >
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={256}
              height={256}
            />
            <h1 className="text-[32px] font-bold">{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}

        {/* {footerConnections.map((item) => (
              <div key={item.name} className="flex gap-2">
                <img src={item.icon} alt={`${item.name} icon`} />
                <Link
                  href={item.href}
                  target="_blank"
                  className="curser-pointer hover:text-slate-300"
                >
                  {item.name}
                </Link> */}
        {/* <div className="flex flex-col  gap-6 items-center shadow-br2xl py-8 px-16 rounded-3xl bg-white">
          <div className=" flex justify-center items-center">
            <Image
              alt="product design"
              src="/product-design.png"
              width={256}
              height={256}
            ></Image>
          </div>
          <h1 className="text-[32px] font-bold">Product Design</h1>
          <p>
            We meticulously structure the website layout to optimize user
            experience.
          </p>
        </div>
        <div className="flex flex-col  gap-6 items-center shadow-br2xl py-8 px-16 rounded-3xl bg-white">
          <div className=" flex justify-center items-center">
            <Image
              alt="development design"
              src="/development-design.png"
              width={256}
              height={256}
            ></Image>
          </div>
          <h1 className="text-[32px] font-bold">Development</h1>
          <p>
            We meticulously structure the website layout to optimize user
            experience.
          </p>
        </div>
        <div className="flex flex-col  gap-6 items-center shadow-br2xl py-8 px-16 rounded-3xl bg-white">
          <div className=" flex justify-center items-center">
            <Image
              alt="branding design"
              src="/branding-design.png"
              width={256}
              height={256}
            ></Image>
          </div>
          <h1 className="text-[32px] font-bold">Branding</h1>
          <p>
            We meticulously structure the website layout to optimize user
            experience.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
