import Image from "next/image";
import { cards } from "..";

import styles from "../components/scss/HeroCardsDesktop.module.scss";

const HeroCardsDesktop = () => {
  return (
    <div className={`${styles.container}`}>
      {cards.map((item) => (
        <div key={item.title} className="sub-container w-[368px] h-[412px]">
          <div
            className={`${styles.card} card-team shadow-b2xl transition-all duration-[800ms] ease-in-out`}
          >
            <div className={`${styles.cardFront} front flex flex-col gap-6`}>
              <Image
                src={item.icon}
                alt={item.alt}
                width={256}
                height={256}
                sizes="256px"
              />
              <h1>{item.title}</h1>
            </div>
            <div className={`${styles.cardBack} back`}>
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
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCardsDesktop;
