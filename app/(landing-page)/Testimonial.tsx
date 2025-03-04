import { useNav } from "@/context/NavContext";

import styles from "../../components/scss/Testimonial.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonials } from "@/index";

const Testimonial = () => {
  const { isActive } = useNav();
  return (
    <>
      <Carousel>
        <CarouselContent>
          {Testimonials.map((item, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <div
                className={`${
                  isActive ? "blur" : ""
                } z-10 bg-base flex justify-center items-center
     
    `}
              >
                <div
                  className={`${styles.container} shadow-b2xl
    `}
                >
                  <h1
                    className="text-4xl text-white font-bold
        max-tablet:text-2xl"
                  >
                    Client Testimonials
                  </h1>
                  <p
                    className="text-xl text-white
        max-tablet:text-md"
                  >
                    {item.text}
                  </p>
                  <h2
                    className="text-2xl font-bold text-white
        max-tablet:text-xl"
                  >
                    {item.client}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Testimonial;
