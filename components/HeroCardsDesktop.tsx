import Image from "next/image";
import { cards } from "..";

const HeroCardsDesktop = () => {
  return (
    <div
      className="z-10 container flex flex-wrap items-center justify-center gap-10 px-[70px] 
    max-smallplus:gap-8
    max-smallplus:px-8
    max-tablet:px-8
    max-tablet:gap-8
    max-mobileplus:hidden"
    >
      {cards.map((item) => (
        <div key={item.title} className="sub-container w-[368px] h-[412px]">
          <div
            className="card-team flex flex-col gap-6 shadow-b2xl px-16  min-h-[412px] transition-all duration-[800ms] ease-in-out 
       max-w-[368px]
       min-w-[368px]
       max-tablet:px-10"
          >
            <div className="front flex flex-col gap-6">
              <Image
                src={item.icon}
                alt={item.alt}
                width={256}
                height={256}
                sizes="256px"
              />
              <h1
                className="text-4xl font-bold
       "
              >
                {item.title}
              </h1>
            </div>
            <div className="back p-6 overflow-hidden">
              <div
                className="absolute"
                style={{ width: "412px", height: "auto" }}
              >
                <Image
                  src={item.back}
                  alt="Custom Madasa Collective designs"
                  width={412}
                  height={461}
                  sizes="412px"
                />
              </div>
              <p className="z-10 text-2xl text-left bg-white py-10 px-6 rounded-3xl over tracking-[0.96px]">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCardsDesktop;
