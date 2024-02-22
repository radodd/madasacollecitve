import Link from "next/link";
import React from "react";

type buttonProps = {
  type: "button" | "submit";
  title: string;
  width?: number
  href?: string
  target?: "_self" | "_blank"
}

const Button = ({
  type,
  title,
  width,
  href,
  target
}: buttonProps) => {

  if(href){
    return(
    <Link
    href={href}
    target={target}
    className="bg-btnColor text-white text-center py-4 px-8 rounded-full max-w-48"
    >
      {title}
    </Link>
    )
  }


  return (
    <button 
    className={`bg-btnColor text-white text-center py-4 px-8 rounded-full max-w-48 `}
    type={type}
    >
      {title}
    </button>
  );
};
//maybe try making a button component?? no pressure lol

export default Button;
