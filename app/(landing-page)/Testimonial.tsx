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
  return (
    <>
      <Carousel>
        <CarouselContent className="">
          {Testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <div className={`${styles.container}`}>
                <div className="flex justify-end gap-8 translate-y-[20px]">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
                <h1>Client Testimonials</h1>
                <p>{item.text}</p>
                <span>{item.client}</span>{" "}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Testimonial;
