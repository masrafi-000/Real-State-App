import Link from "next/link";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="w-full h-auto- bg-[var(--color-gray_08)] ">
      {/* text & image content */}
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] bg-[var(--color-gray_08)]  ">
        <div className="h-[814px] w-full  bg-[var(--color-gray_08)] pl-[5%] lg:pl-[10%] ">
          <div className=" h-full w-full text-white flex items-start justify-center flex-col gap-[60px]">
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
              <div className="absolute  -top-50 lg:top-0 lg:-right-40 h-[175px] w-[175px] rounded-full border-[1px] border-[var(--color-gray_15)] bg-[var(--color-gray_08)] flex items-center justify-center text-white ">
                <div className="z-[10] h-20 w-20 flex items-center justify-center bg-[var(--color-gray_10)] rounded-full text-white ">
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
            <div className="flex gap-5">
              <Link
                href="/about"
                className="text-white border-[1px] border-[var(--color-gray_15)] h-[63px] w-[139px] rounded-xl flex items-center justify-center cursor-pointer hover:outline-none hover:bg-purple-500 text-lg "
              >
                Learn More
              </Link>
              <Link
                className="text-white rounded-xl flex items-center justify-center h-[63px] w-[191px] bg-[var(--color-purple_60)] hover:bg-gray-950 "
                href="/properties"
              >
                Browse Properties
              </Link>
            </div>
            {/* interactivty card */}
            <div className="flex flex-wrap gap-5 w-full">
              <div className="flex  flex-col   items-start justify-center bg-[var(--color-gray_10)] border-[1px] border-[var(--color-gray_15)] rounded-xl h-[121px] px-4 py-6  ">
                <h1 className="text-4xl font-bold leading-1.2">200+</h1>
                <p className="text-xl  font-medium text-[var(--color-gray_60)] ">
                  Happy Customers
                </p>
              </div>
              <div className="flex  flex-col  items-start justify-center bg-[var(--color-gray_10)] border-[1px] border-[var(--color-gray_15)] rounded-xl h-[121px]  px-4 py-6 ">
                <h1 className="text-4xl font-bold leading-1.2">10k+</h1>
                <p className="text-xl  font-medium text-[var(--color-gray_60)] ">
                  Properties For Clients
                </p>
              </div>
              <div className="flex  flex-col  items-start justify-center bg-[var(--color-gray_10)] border-[1px] border-[var(--color-gray_15)] rounded-xl h-[121px]   px-4 py-6 ">
                <h1 className="text-4xl font-bold leading-1.2">16+</h1>
                <p className="text-xl  font-medium text-[var(--color-gray_60)] ">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="hidden lg:flex items-end justify-center bg-[var(--color-gray_10)] h-[622px]  lg:h-[814px]  ">
          <div className="w-full h-full bg-[url('/images/hero.png')] bg-no-repeat bg-cover  object-cover "></div>
          {/* <Image src="/images/hero.png" alt="hero" width={920} height={814} className="object-cover" /> */}
        </div>
      </div>
      {/* card */}

      <HeroCard className="mt-0.5 w-full bg-[var(--color-gray_08)] h-[320px] border border-[var(--color-gray_15)] ring-2 ring-[var(--color-gray_15)]" />
    </div>
  );
};

export default Hero;
