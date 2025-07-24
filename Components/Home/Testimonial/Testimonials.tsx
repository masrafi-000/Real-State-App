"use client";

import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

import { NextButton, PrevButton, usePrevNextButtons } from "../FeaturedProperties/CaruselArrow";
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import TestimonialCard from './TestimonialCard';
import { TestimonialCardData } from '@/utils/data';

type Props = {
  slides: number[];
  options?: EmblaOptionsType;
}
 

const Testimonials: React.FC<Props> = (props) => {
  const {slides, options} = props

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0)

  const  onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
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
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100);
    
  }, [] )

  useEffect(() => {
      if(!emblaApi) return;

      onScroll(emblaApi)
      emblaApi
        .on('reInit', onScroll)
        .on('scroll', onScroll)
        .on( 'slideFocus', onScroll)

    
    }, [emblaApi, onScroll])


  return (
    <div className="relative container mx-auto mt-[150px] px-4">
      {/* Heading */}
      <div className="max-w-[1200px] mb-[80px] text-white">
        <h1 className="text-6xl font-semibold leading-[150%] mb-4">
          What Our Clients Say
        </h1>
        <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
         Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-2">
          {TestimonialCardData.map((item) => (
            <div
              key={item.id}
              className="shrink-0 grow-0 basis-full sm:basis-[80%] md:basis-[40%] lg:basis-0 transform translate-x-0 translate-y-0  "
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons + Pagination */}
      <div className="mt-10 mb-5 border-b border-[var(--color-gray_15)]"></div>
      <div className="flex items-center justify-between text-white pb-[80px]">
        <div className="embla__progress
         ">
         <div className="embla__progress__bar" style={{transform: `translate3d(${scrollProgress}%, 0px, 0px)`}} />
        </div>
        <div className="flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="#"
        className="w-[196px] h-[64px] px-6 py-4 bg-[var(--color-gray_10)] rounded-lg text-white border border-[var(--color-gray_15)] absolute top-20 right-0 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-purple-500 text-lg font-medium leading-[150%]"
      >
        View All Testimonials
      </Link>
    </div>
  )
}

export default Testimonials