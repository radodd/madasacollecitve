"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CaseStudiesLandingPage } from "@/index";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import CarouselIndicator from "@/components/CarouselIndicator";

import styles from "../../components/scss/CaseStudy.module.scss";

const CaseStudy = () => {
  const [current, setCurrent] = useState(-1);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (!api) return;

    console.log("Initial snap:", api.selectedScrollSnap());

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      console.log("Updated snap:", api.selectedScrollSnap());
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 1280);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {CaseStudiesLandingPage.map((item, index) => (
            <CarouselItem key={index} className="min-[1285px]:h-[490px]">
              <div className={styles.container}>
                <div className={styles["image-container"]}>
                  <Image
                    alt={item.image.alt}
                    src={item.image.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-cover"
                  />
                </div>

                <div className={styles.content}>
                  <div className={styles.arrowWrapper}>
                    <h1>{item.title}</h1>
                    <div className={styles.arrowContainer}>
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </div>

                  <h2>{item.subtitle}</h2>
                  <p>
                    <Link href={item.button.href} target="_blank">
                      <span className="underline">{item.link}</span>
                    </Link>
                    {item.text}
                  </p>
                  <Button
                    type="button"
                    title={item.button.title}
                    variant={item.button.variant}
                    href={item.button.href}
                    target="_blank"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicator
          current={current}
          total={CaseStudiesLandingPage.length}
        />
      </Carousel>
    </>
  );
};

export default CaseStudy;
