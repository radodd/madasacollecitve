import { cards } from "..";
import Image from "next/image";

const CardMobile = () => {
  return (
    <div
      className="z-10 container flex flex-row items-center justify-center gap-[111px] px-[70px] 
  max-wide:flex-col
  max-tablet:px-8
  max-tablet:gap-8
  tablet:hidden"
    >
      {cards.map((item) => (
        <div key={item.title} className=" card-mobile">
          <div
            className="card card-mobile__card flex flex-col gap-6 shadow-b2xl px-16 min-w-[384px] min-h-[493px] 
     max-tablet:max-w-[320px]
     max-tablet:min-w-[320px]
     max-tablet:min-h-[400px]
     max-tablet:px-10"
          >
            <div className="front flex flex-col gap-6">
              <Image src={item.icon} alt={item.alt} width={256} height={256} />
              <h1
                className="text-4xl font-bold
     max-tablet:text-2xl"
              >
                {item.title}
              </h1>
            </div>
            <div className="back p-6">
              <p className="text-xl text-left">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMobile;
