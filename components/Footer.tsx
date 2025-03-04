import Image from "next/image";

interface FooterProps {
  currentPage: string;
}

const Footer: React.FC<FooterProps> = ({ currentPage }) => {
  const getBackgroundColor = () => {
    switch (currentPage) {
      case "landing":
        return "bg-[#56b7cb]";
      case "team":
        return "bg-[#467ad4]";
      case "contact":
        return "bg-[#e3712e]";
    }
  };
  const getHeight = () => {
    switch (currentPage) {
      case "contact":
        return "";
    }
  };
  return (
    <div
      className={`flex justify-between px-[70px] py-8 w-full  gap-4 
        max-tablet:flex-col 
        max-tablet:justify-center 
        max-tablet:items-center
        max-tablet:px-2
        max-tablet:py-6
        max-tablet:gap-6
        ${getHeight()}
        ${getBackgroundColor()}`}
    >
      <div className="z-10 flex items-end">
        <Image
          alt="Logo"
          src="/logo/footer.png"
          width={175}
          height={63}
          sizes="175px"
        />
      </div>
      <div
        className="z-10 flex flex-col tablet:text-right justify-end text-white text-sm gap-2
            max-tablet:text-center"
      >
        <p>Made in CA</p>
        <p>contact@madasacollective.com</p>
        <div className="flex gap-1 text-xs">
          <Image
            alt="copyright"
            src="/copyright.png"
            width={19}
            height={19}
            sizes="15"
          />
          <p>2024 Madasa Collective All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
