import Image from "next/image";
import { cards } from "@/index";

import styles from "@/components/scss/ServiceCardsDesktop.module.scss";

interface CardProps {
  icon: string;
  title: string;
  text: string;
  back: string;
  alt: string;
}

const ServiceCardsDesktop = () => {
  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <div key={index} className={" sub-container w-[368px] h-[412px]"}>
          <div
            className={`${styles.card} card-team shadow-b2xl transition-all duration-[800ms] ease-in-out`}
          >
            <CardFront card={card} />
            <CardBack card={card} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CardFront = ({ card }: { card: CardProps }) => {
  return (
    <div className={`${styles.cardFront} front flex flex-col gap-6`}>
      <Image
        src={card.icon}
        alt={card.alt}
        width={256}
        height={256}
        sizes="256px"
      />
      <h1>{card.title}</h1>
    </div>
  );
};

const CardBack = ({ card }: { card: CardProps }) => {
  return (
    <div className={`${styles.cardBack} back`}>
      <div className="absolute" style={{ width: "412px", height: "auto" }}>
        <Image
          src={card.back}
          alt="Custom Madasa Collective designs"
          width={412}
          height={461}
          sizes="412px"
        />
      </div>
      <p>{card.text}</p>
    </div>
  );
};
export default ServiceCardsDesktop;
