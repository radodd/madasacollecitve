"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useNav } from "@/context/NavContext";

import styles from "../../components/scss/CaseStudy.module.scss";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CaseStudiesLandingPage } from "@/index";
import CarouselIndicator from "@/components/CarouselIndicator";

const CaseStudy = () => {
  const { isActive } = useNav();
  const [current, setCurrent] = useState(-1);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    console.log("Initial snap:", api.selectedScrollSnap()); // Debugging

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      console.log("Updated snap:", api.selectedScrollSnap()); // Debugging
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {CaseStudiesLandingPage.map((item, index) => (
            <CarouselItem key={index}>
              <div className={`${isActive ? "blur" : ""} ${styles.container}`}>
                <div className={styles["image-container"]}>
                  <Image
                    alt={item.image.alt}
                    src={item.image.src}
                    width={654}
                    height={409}
                  />
                </div>

                <div className={styles.content}>
                  <div className="flex justify-between items-center">
                    <h1>{item.title}</h1>
                    <div className="flex items-end gap-4 border border-red-200">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </div>

                  <h2>{item.subtitle}</h2>
                  <p>
                    <Link href="https://www.genfulton.com">
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
        {/* <CarouselPrevious />
        <CarouselNext /> */}
        <CarouselIndicator
          current={current}
          total={CaseStudiesLandingPage.length}
        />
      </Carousel>
    </>
  );
};

export default CaseStudy;
