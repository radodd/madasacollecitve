import Image from "next/image";
import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <div
      className="flex justify-between items-center px-[90px] py-6 gap-4 bg-tertiary
        max-tablet:flex-col 
        max-tablet:justify-center 
        max-tablet:items-center
        max-tablet:px-[40px]"
    >
      <div className="">
        <Image
          alt="Logo"
          src="/madasa_logo.svg"
          width={175}
          height={200}
        ></Image>
        <p className="text-white font-bold text-4xl">Collective</p>
        {/* <p className='w-[176px] h-[64px] border border-black items-center justify-center flex text-3xl'>Logo</p> */}
      </div>
      <div className="flex text-2xl gap-11 items-center">
        {/* <Link href="/">About us</Link>
                <Link href="/">Services</Link>
                <Link href="/">How We Work</Link>
                <Link href="/">Contact</Link> */}
        <Link
          href="/https://calendly.com/ethanf-flores/30min?month=2024-02"
          target="_blank"
          className="bg-btnColor text-white py-4 px-6 border rounded-full"
        >
          Schedule a Call
        </Link>
      </div>
    </div>
  );
};

export default navbar;
