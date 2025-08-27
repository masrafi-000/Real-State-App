import Image from "next/image";


export default function OurJourney() {
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 py-[40px] gap-[80px] ">
            <div className="flex flex-col items-start justify-center gap-5 text-white">
                <div className="flex flex-col items-start justify-center gap-5">
                    <h1 className="text-5xl font-semibold leading-[150%] ">Our Journey</h1>
                    <p className="text-xl font-medium leading-[150%] text-[var(--color-gray_60)] ">{`Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.`}</p>
                </div>
                <div className="flex flex-wrap gap-5 w-full  md:mb-0">
              <div className="aboutInteractiveCard">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-[150%]">
                  200+
                </h1>
                <p className=" text-base md:text-[16px]  font-medium leading-[150%] text-[var(--color-gray_60)] text-center ">
                  Happy Customers
                </p>
              </div>
              <div className="aboutInteractiveCard ">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-[150%]">10k+</h1>
                <p className="text-base md:text-[16px]   font-medium leading-[150%] text-[var(--color-gray_60)] text-center ">
                  Properties For Clients
                </p>
              </div>
              <div className="aboutInteractiveCard ">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-[150%]">16+</h1>
                <p className="text-base md:text-[16px]   font-medium leading-[150%] text-[var(--color-gray_60)] text-center ">
                  Years of Experience
                </p>
              </div>
            </div>
            </div>
            {/* Image Section */}
            <div className=" relative flex items-center justify-center border border-[var(--color-gray_15)] rounded-xl overflow-hidden w-full h-[546px] bg-transparent">
                <Image src="/images/about.png" alt="About Us" fill className="object-cover object-center " />
            </div>
            
        </section>
    )
}