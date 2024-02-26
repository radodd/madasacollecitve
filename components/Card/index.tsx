import React from "react";
import "./card.css";
import Image from "next/image";

interface CardProps {
  color: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ color, title }) => {
  return (
    <div className="card-container">
      <div style={{ backgroundColor: color }} className="card">
        <div className="image-container mt-20 ">
          <Image
            className=""
            alt="image"
            src={title}
            height={400}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
