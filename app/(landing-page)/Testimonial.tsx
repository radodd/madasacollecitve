import styles from "../../components/scss/Testimonial.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonials } from "@/index";
import { useSyncExternalStore } from "react";

const Testimonial = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {Testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <div className={`${styles.container}`}>
                <div className={styles.arrowContainer}>
                  <CarouselPrevious color="#FFFFFF" />
                  <CarouselNext color="#FFFFFF" />
                </div>
                <div className={styles.textContainer}>
                  <h1>Client Testimonials</h1>
                  <p>{item.text}</p>
                  <span>{item.client}</span>{" "}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Testimonial;
