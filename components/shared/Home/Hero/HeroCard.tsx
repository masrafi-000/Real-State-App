type Props = {
  className: string;
};

const HeroCard = ({ className }: Props) => {
  return (
    <div
      className={`${className}  `}
    >
      {/* 1st Card  */}
      <div className="relative flex flex-col items-center justify-center gap-4 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)]  h-[144px] w-[164px] lg:h-[160px] lg:w-[347px] 2xl:h-[212px]  2xl:w-[455px]  rounded-xl ">
        {/* icon */}
        <div className=" size-[48px] lg:size-[60px] 2xl:size-[82px] rounded-full border flex items-center justify-center border-[var(--color-purple_75)]  ">
          <div className="size-[36px]  lg:size-[44px] 2xl:size-[62px] rounded-full border flex items-center justify-center border-[var(--color-purple_75)]/80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 lg:size-6 2xl:size-8 text-[var(--color-purple_75)] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
          </div>
        </div>
        {/* content */}
        <h1 className="text-sm lg:text-base 2xl:text-xl font-semibold 2xl:font-medium leading-[150%] text-white text-center w-[136px] lg:w-auto ">
          Find Your Dream Home
        </h1>
        {/* button */}
        <div className="absolute top-5 right-5 cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-[26px] 2xl:size-8 text-[var(--color-gray_30)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
      {/* 2nd Card  */}
      <div className=" relative flex flex-col items-center justify-center gap-4 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)]  h-[144px] w-[164px] lg:h-[160px] lg:w-[347px] 2xl:h-[212px]  2xl:w-[455px]  rounded-xl">
        {/* icon */}
        <div className=" size-[48px] lg:size-[60px] 2xl:size-[82px] rounded-full border flex items-center justify-center border-[var(--color-purple_75)]  ">
          <div className="size-[36px]  lg:size-[44px] 2xl:size-[62px] rounded-full border flex items-center justify-center border-[var(--color-purple_75)]/80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 lg:size-6 2xl:size-8 text-[var(--color-purple_75)]"
            >
              <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              <path
                fillRule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                clipRule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
            </svg>
          </div>
        </div>
        {/* content */}
        <h1 className="text-sm lg:text-base 2xl:text-xl font-semibold 2xl:font-medium leading-[150%] text-white text-center w-[136px] lg:w-auto ">
          Unlock Property Value
        </h1>
        {/* button */}
        <div className="absolute top-5 right-5 cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-[26px] 2xl:size-8 text-[var(--color-gray_30)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
      {/* 3rd Card  */}
      <div className=" relative flex flex-col items-center justify-center gap-4 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)]  h-[144px] w-[164px] lg:h-[160px] lg:w-[347px] 2xl:h-[212px]  2xl:w-[455px]  rounded-xl">
        {/* icon */}
        <div className=" size-[48px] lg:size-[60px] 2xl:size-[82px] rounded-full border flex items-center justify-center border-[var(--color-purple_75)]  ">
          <div className="size-[36px]  lg:size-[44px] 2xl:size-[62px] rounded-full border flex items-center justify-center border-[var(--color-purple_75)]/80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 lg:size-6 2xl:size-8 text-[var(--color-purple_75)]"
            >
              <path
                fillRule="evenodd"
                d="M1 2.75A.75.75 0 0 1 1.75 2h10.5a.75.75 0 0 1 0 1.5H12v13.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5H2v-13h-.25A.75.75 0 0 1 1 2.75ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM8 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM8.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM14.25 6a.75.75 0 0 0-.75.75V17a1 1 0 0 0 1 1h3.75a.75.75 0 0 0 0-1.5H18v-9h.25a.75.75 0 0 0 0-1.5h-4Zm.5 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* content */}
        <h1 className="text-sm lg:text-base 2xl:text-xl font-semibold 2xl:font-medium leading-[150%] text-white text-center w-[136px] lg:w-auto ">
          Effortless Property Management
        </h1>
        {/* button */}
        <div className="absolute top-5 right-5 cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-[26px] 2xl:size-8 text-[var(--color-gray_30)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
      {/* 4th Card  */}
      <div className=" relative flex flex-col items-center justify-center gap-4 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)]  h-[144px] w-[164px] lg:h-[160px] lg:w-[347px] 2xl:h-[212px]  2xl:w-[455px]  rounded-xl">
        {/* icon */}
        <div className=" size-[48px] lg:size-[60px] 2xl:size-[82px] rounded-full border flex items-center justify-center border-[var(--color-purple_75)] ">
          <div className="size-[36px]  lg:size-[44px] 2xl:size-[62px] rounded-full border flex items-center justify-center border-[var(--color-purple_75)]/80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 lg:size-6 2xl:size-8 text-[var(--color-purple_75)]"
            >
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          </div>
        </div>
        {/* content */}
        <h1 className="text-sm lg:text-base 2xl:text-xl font-semibold 2xl:font-medium leading-[150%] text-white text-center w-[136px] lg:w-auto ">
          Smart Investments, Informed Decisions
        </h1>
        {/* button */}
        <div className="absolute top-5 right-5 cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-[26px] 2xl:size-8 text-[var(--color-gray_30)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
