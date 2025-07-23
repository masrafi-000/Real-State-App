import Link from "next/link";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="w-full h-auto bg-[var(--color-gray_08)] ">
      {/* Top Image Section */}

      <div className="mt-10  min-w-[320px] min-h-[302px] sm:min-h-[400px] md:min-h-[500px] mx-[5%] border border-[var(--color-gray_15)] rounded-xl lg:hidden bg-[var(--color-gray_10)] bg-[url('/images/hero.png')] bg-no-repeat bg-cover bg-center mb-14  ">
      
      </div>

      {/* text & image content */}
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] bg-[var(--color-gray_08)]   ">
        <div className="h-auto w-full  bg-[var(--color-gray_08)] pl-[5%] pr-[5%] lg:pr-0 lg:pl-[10%] mb-2 ">
          <div className=" h-full w-full text-white flex items-start justify-start lg:justify-center flex-col gap-[60px]">
            {/* heading */}
            <div className="relative">
              <div className="flex flex-col gap-6 ">
                <h1 className="text-3xl md:text-4xl lg:text-[44px] xl:text-[56px] font-semibold leading-1.2 ">
                  Discover Your Dream <br /> Property with Estatein
                </h1>
                <p className=" text-base xl:text-lg font-medium">
                  Your journey to finding the perfect property begins here.
                  Explore our listings to find the home that matches your
                  dreams.
                </p>
              </div>
              {/* circle */}
              <div className="absolute -top-30 lg:top-0 lg:-right-35  xl:-right-40 size-[117px] lg:size-[129px]  xl:size-[175px] rounded-full border-[1px] border-[var(--color-gray_15)] bg-[var(--color-gray_08)] flex items-center justify-center text-white ">
                <div className="z-[10] size-[53.18px] lg:size-[58.64px] xl:size-20 flex items-center justify-center bg-[var(--color-gray_10)] rounded-full text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <svg
                  className="absolute inset-0 w-full h-full "
                  viewBox="0 0 200 200"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text
                    fill="white"
                    fontSize="15px"
                    fontWeight="bold"
                    letterSpacing="1"
                  >
                    <textPath
                      href="#circlePath"
                      startOffset="0"
                      textLength="471"
                    >
                      ✨Discover Your Dream Property
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            {/* buttons */}
            <div className="flex gap-5 flex-col sm:flex-row w-full  ">
              <Link
                href="/about"
                className="text-white border-[1px] border-[var(--color-gray_15)]   h-[63px]  sm:w-[139px] rounded-xl flex items-center justify-center cursor-pointer hover:outline-none hover:bg-purple-500 text-lg "
              >
                Learn More
              </Link>
              <Link
                className="text-white  h-[63px]  sm:w-[191px] rounded-xl flex items-center justify-center  bg-[var(--color-purple_60)] hover:bg-gray-950 "
                href="/properties"
              >
                Browse Properties
              </Link>
            </div>
            {/* interactivty card */}
            <div className="flex flex-wrap gap-5 w-full  md:mb-0">
              <div className="heroInteractiveCard ">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-[150%]">
                  200+
                </h1>
                <p className=" text-base md:text-[16px]  xl:text-xl  font-medium leading-[150%] text-[var(--color-gray_60)] text-center ">
                  Happy Customers
                </p>
              </div>
              <div className="heroInteractiveCard ">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-[150%]">10k+</h1>
                <p className="text-base md:text-[16px]  xl:text-xl  font-medium leading-[150%] text-[var(--color-gray_60)] text-center ">
                  Properties For Clients
                </p>
              </div>
              <div className="heroInteractiveCard">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-[150%]">16+</h1>
                <p className="text-base md:text-[16px]  xl:text-xl  font-medium leading-[150%] text-[var(--color-gray_60)] text-center ">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="hidden lg:flex items-end justify-center bg-[var(--color-gray_10)] h-[622px]  lg:h-[814px]  ">
          <div className="w-full h-full bg-[url('/images/hero.png')] bg-no-repeat bg-cover  object-cover "></div>
          
        </div>
      </div>
      {/* card */}

      <div className="mt-10 md:mt-0.5 p-[10px] lg:p-5  w-full h-auto bg-[var(--color-gray_08)] border border-[var(--color-gray_15)] ring-2 ring-[var(--color-gray_15)] ">
        <HeroCard className="w-full h-auto bg-[var(--color-gray_08)] flex flex-wrap items-center justify-center gap-3 " />
      </div>
    </div>
  );
};

export default Hero;
