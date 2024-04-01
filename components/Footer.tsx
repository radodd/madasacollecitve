import Image from "next/image";

interface FooterProps {
  currentPage: string;
}

const Footer: React.FC<FooterProps> = ({ currentPage }) => {
  const getBackgroundColor = () => {
    switch (currentPage) {
      case "landing":
        return "bg-tertiary";
      case "team":
        return "bg-secondary";
      case "contact":
        return "bg-primary";
    }
  };
  return (
    <div
      className={`flex justify-between px-[70px] py-8 w-full h-[380px] gap-4 
        max-tablet:flex-col 
        max-tablet:justify-center 
        max-tablet:items-center
        max-tablet:px-2
        max-tablet:py-6
        max-tablet:gap-6
        ${getBackgroundColor()}`}
    >
      <div className="flex items-start">
        <Image
          alt="Logo"
          src="/logo/footer.svg"
          width={175}
          height={200}
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
      <div
        className="z-10 flex flex-col text-right text-white text-sm gap-2
            max-tablet:text-center"
      >
        <p>Made in CA</p>
        <p>contact@madasacollective.com</p>
        <div className="flex gap-1 text-xs">
          <Image alt="copyright" src="/copyright.svg" height={15} width={15} />
          <p>2024 Madasa Collective All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
