import Link from "next/link";
import { ReactNode } from "react";

type buttonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
  href?: string;
  target?: "_self" | "_blank";
  onClick?: () => void;
  children?: ReactNode;
};

const Button = ({
  type,
  title,
  variant,
  href,
  target,
  onClick,
  children,
}: buttonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={`${variant} max-w-48`}
        onClick={onClick}
      >
        {title}
      </Link>
    );
  }

  return (
    <button className={`${variant} max-w-48`} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
{
  /* <a>
          {title && <span>{title}</span>}
          {children}
        </a> 
        
        
        {title && <span>{title}</span>}
      {children} */
}
