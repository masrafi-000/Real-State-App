import { PorpertiesCardItem } from "@/utils/data";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { NextButton, PrevButton, usePrevNextButtons } from "./CaruselArrow";
import FeaturedCard from "./FeaturedCard";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const FeaturedProperties: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative container mx-auto mt-[150px]">
      {/* top heading and button */}
      <div className="max-w-[1200px] h-[150px] mb-[80px]">
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-6xl font-semibold leading-[150%] ">
            Featured Properties
          </h1>
          <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)] ">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click "View Details" for more
            information.
          </p>
        </div>
      </div>
      {/* Carousel Card */}
      <div className="flex flex-wrap gap-6">
        {PorpertiesCardItem.map((item) => {
          return <FeaturedCard key={item.id} item={item} />;
        })}
        <div>
          <div className="mt-10 mb-5  border-b-[1px] w-full border-[var(--color-gray_15)]"></div>
          {/* Carousel Button and Page */}
          <div className="text-white flex items-center justify-between  pb-[80px] ">
            {/* Page */}
            <div className="">1 of 60</div>
            <div className="flex items-center justify-center gap-2 ">
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
        </div>
      </div>
      <Link
        href="/properties"
        className="w-[196px] h-[64px] px-6 py-4 bg-[var(--color-gray_10)] rounded-lg text-white border border-[var(--color-gray_15)] absolute top-20 right-0 flex items-center justify-center cursor-pointer transition-all delay-75 hover:bg-purple-500  "
      >
        View All Properties
      </Link>
    </div>
  );
};

export default FeaturedProperties;
