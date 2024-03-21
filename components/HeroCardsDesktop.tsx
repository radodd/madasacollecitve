import Image from "next/image";
import { cards } from "..";

const HeroCardsDesktop = () => {
  return (
    <div
      className="z-10 container flex flex-row items-center justify-center gap-[111px] px-[70px] 
    max-wide:flex-col
    max-tablet:px-8
    max-tablet:gap-8
    max-tablet:hidden"
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
              <Image src={item.icon} alt="card" width={256} height={256} />
              <h1
                className="text-4xl font-bold
       max-tablet:text-2xl"
              >
                {item.title}
              </h1>
            </div>
            <div className="back p-6 overflow-hidden">
              <div className="absolute">
                <Image src={item.back} alt="card" width={412} height={412} />
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
