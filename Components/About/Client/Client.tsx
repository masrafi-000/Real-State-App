"use client";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/Components/Home/FeaturedProperties/CaruselArrow";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ClientCard from "./ClientCard";

type Props = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Client: React.FC<Props> = ({ slides, options }) => {
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: true });

  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options }, [autoplay]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onNavButtonClick = useCallback(() => {
    if (!autoplay) return;
    autoplay.stop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="container mx-auto py-[80px] text-white ">
      <div className="pb-[40px]">
        <h1 className="text-5xl font-semibold leading-[150%] ">
          Our Valued Clients
        </h1>
        <p className="text-lg text-[var(--color-gray_60)] font-medium leading-[150%] w-[75%] ">
          At Estatein, we have had the privilege of working with a diverse range
          of clients across various industries. Here are some of the clients
          we've had the pleasure of serving
        </p>
      </div>
      {/* Card Carousel */}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-2">
          {
            /* Placeholder for Card Carousel component */
            new Array(6).fill(null).map((_, index) => {
              return (
                <div
                  key={index}
                  className="shrink-0 grow-0 basis-full sm:basis-[80%] md:basis-[40%] lg:basis-0 transform translate-x-0 translate-y-0"
                >
                  <ClientCard />
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="mt-10 mb-5 border-b border-[var(--color-gray_15)]"></div>
      <div className="flex items-center justify-between text-white ">
        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%, 0px, 0px)` }}
          />
        </div>
        <div className="flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default Client;
