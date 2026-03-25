import Link from "next/link";

type buttonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
  href?: string;
  target?: "_self" | "_blank";
  onClick?: () => void;
};

const Button = ({
  type,
  title,
  variant,
  href,
  target,
  onClick,
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
