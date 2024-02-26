import Link from "next/link";

type buttonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
  href?: string;
  target?: "_self" | "_blank";
};

const Button = ({ type, title, variant, href, target }: buttonProps) => {
  if (href) {
    return (
      <Link href={href} target={target} className={`${variant} max-w-48`}>
        {title}
      </Link>
    );
  }

  return (
    <button className={`${variant} max-w-48`} type={type}>
      {title}
    </button>
  );
};

export default Button;
