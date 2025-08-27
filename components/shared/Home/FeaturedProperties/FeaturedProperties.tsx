"use client";

import { PorpertiesCardItem } from "@/utils/data";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { NextButton, PrevButton, usePrevNextButtons } from "./CaruselArrow";
import FeaturedCard from "./FeaturedCard";

type Props = {
  slides: number[];
  options?: EmblaOptionsType;
};

const FeaturedProperties: React.FC<Props> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
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
    <div className="relative container mx-auto mt-[80px] px-4">
      {/* Heading */}
      <div className="max-w-[1200px] mb-[80px] text-white">
        <h1 className="text-6xl font-semibold leading-[150%] mb-4">
          Featured Properties
        </h1>
        <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
          {`Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click "View Details" for more information.`}
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-2">
          {PorpertiesCardItem.map((item) => (
            <div
              key={item.id}
              className="shrink-0 grow-0 basis-full sm:basis-[80%] md:basis-[40%] lg:basis-[25%] transform translate-x-0 translate-y-0  "
            >
              <FeaturedCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons + Pagination */}
      <div className="mt-10  border-b border-[var(--color-gray_15)]"></div>
      <div className="flex items-center justify-between text-white pb-[80px]">
        <div
          className="embla__progress
         "
        >
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

      {/* CTA Button */}
      <Link
        href="/properties"
        className="md:w-[196px] md:h-[64px] px-6 py-4 bg-[var(--color-gray_10)] rounded-lg text-white border border-[var(--color-gray_15)] absolute bottom-0  md:top-20 md:right-0 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-purple-500 text-sm font-medium leading-[150%]"
      >
        View All Properties
      </Link>
    </div>
  );
};

export default FeaturedProperties;
