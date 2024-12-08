"use client";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import styles from "./css/TestimonialCarousel.module.css";

const testimonials = [
  {
    quote:
      "Naiomi is thorough, professional, and trustworthy. My home has never looked better!",
    author: "Sarah M., Uptown",
  },
  {
    quote:
      "Best cleaning service in New Orleans! Always reliable and detail-oriented.",
    author: "John D., French Quarter",
  },
  {
    quote:
      "I've been using Naiomi's services for years. She's simply the best!",
    author: "Maria R., Garden District",
  },
  {
    quote:
      "Exceptional attention to detail. My house sparkles after every visit!",
    author: "Robert B., Marigny",
  },
  {
    quote: "Professional, punctual, and personable. Highly recommended!",
    author: "Lisa K., Bywater",
  },
  {
    quote:
      "The most reliable cleaning service I've ever used. A true professional.",
    author: "David W., Mid-City",
  },
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {testimonials.map((testimonial, index) => (
            <div className={styles.embla__slide} key={index}>
              <Card className={styles.card}>
                <div className={styles.avatar}>
                  <Image
                    src="/avatar.webp"
                    alt="Avatar"
                    width={100}
                    height={100}
                    className={styles.avatarImage}
                    priority={index === 0}
                  />
                </div>
                <CardContent className={styles.cardContent}>
                  <p className={styles.quote}>{testimonial.quote}</p>
                  <span className={styles.attribution}>
                    - {testimonial.author}
                  </span>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`${styles.embla__dot}${
              index === selectedIndex ? ` ${styles.embla__dot__selected}` : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
