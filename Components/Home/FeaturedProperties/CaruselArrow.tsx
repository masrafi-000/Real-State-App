"use client";

import { EmblaCarouselType } from "embla-carousel";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

// Button Types
type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { ...restProp } = props;

  return (
    <button
      className="text-white size-10 rounded-full flex items-center justify-center cursor-pointer bg-[var(--color-gray_10)] embla__button embla__button--prev disabled:opacity-50"
      type="button"
      {...restProp}
    >
      <GoArrowLeft size={24} />
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { ...restProp } = props;

  return (
    <button
      className="text-white size-10 rounded-full flex items-center justify-center cursor-pointer bg-[var(--color-gray_10)] embla__button embla__button--next disabled:opacity-50"
      type="button"
      {...restProp}
    >
      <GoArrowRight size={24} />
    </button>
  );
};
