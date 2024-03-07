import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="flex justify-between bg-white px-[70px] py-8 w-full gap-4 
        max-tablet:flex-col 
        max-tablet:justify-center 
        max-tablet:items-center
        max-tablet:px-2
        max-tablet:py-6
        max-tablet:gap-6"
    >
      <div className="flex items-center">
        <Image alt="Logo" src="/logo/footer.svg" width={175} height={200} />
      </div>
      <div
        className="flex flex-col text-right text-black text-md gap-2
            max-tablet:text-center"
      >
        <p>Made in CA</p>
        <p>contact@madasacollective.com</p>
        <div className="flex gap-1 text-md">
          <Image alt="copyright" src="/copyright.svg" height={24} width={24} />
          <p>2024 Madasa Collective All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
