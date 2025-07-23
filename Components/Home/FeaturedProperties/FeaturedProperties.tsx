'use client';

import { PorpertiesCardItem } from "@/utils/data";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CaruselArrow";
import FeaturedCard from "./FeaturedCard";
import { DotButton, useDotButton } from "./CarouselDot";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

type Props = {
  slides: number[];
  options?: EmblaOptionsType;
};

const FeaturedProperties: React.FC<Props> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative container mx-auto mt-[150px] px-4">
      {/* Heading */}
      <div className="max-w-[1200px] mb-[80px] text-white">
        <h1 className="text-6xl font-semibold leading-[150%] mb-4">
          Featured Properties
        </h1>
        <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
          Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-2">
          {PorpertiesCardItem.map((item) => (
            <div
              key={item.id}
              className="shrink-0 grow-0 basis-full sm:basis-[80%] md:basis-[40%] lg:basis-0 transform translate-x-0 translate-y-0  "
            >
              <FeaturedCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons + Pagination */}
      <div className="mt-10 mb-5 border-b border-[var(--color-gray_15)]"></div>
      <div className="flex items-center justify-between text-white pb-[80px]">
        <div className="embla__dots ">
          {
            scrollSnaps.map((_, index) => {
              return <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
            })
          }
        </div>
        <div className="flex gap-2">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="/properties"
        className="w-[196px] h-[64px] px-6 py-4 bg-[var(--color-gray_10)] rounded-lg text-white border border-[var(--color-gray_15)] absolute top-20 right-0 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-purple-500"
      >
        View All Properties
      </Link>
    </div>
  );
};

export default FeaturedProperties;
