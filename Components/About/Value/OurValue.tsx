import { BsFillShieldLockFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

export default function OurValue() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-[80px] gap-[80px] text-white">
      <div className="col-span-1 flex flex-col items-start justify-center gap-5">
        <h1 className="text-5xl font-semibold leading-[150%] ">Our Value</h1>
        <p className="text-xl font-medium leading-[150%] text-[var(--color-gray_60)]">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>
      <div className="col-span-2 border border-[var(--color-gray_15)] rounded-xl shadow-lg  ">
        <div className=" w-full h-full flex flex-col items-center justify-center p-[60px] gap-[30px]">
            <div className="grid grid-cols-2 items-center justify-between w-full">
                <div className="pr-[30px] flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        {/* icon */}
                        <div className="size-[74px] rounded-full border border-[var(--color-purple_60)] flex items-center justify-center">
                            <BsFillShieldLockFill size={30} className="text-[var(--color-purple_75)]" />
                        </div>
                        <h1 className="text-4xl text-white font-semibold leading-[150%] ">Trust</h1>
                    </div>
                    <p className="text-lg text-[var(--color-gray_60)] font-medium leading-[150%] ">Trust is the cornerstone of every successful real estate transaction.</p>
                </div>
                <div className="border-l border-[var(--color-gray_15)]  pl-[30px] flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="size-[74px] rounded-full border border-[var(--color-purple_60)] flex items-center justify-center">
                            <FaGraduationCap size={30} className="text-[var(--color-purple_75)]" />
                        </div>
                        <h1 className="text-4xl text-white font-semibold leading-[150%] ">Excellence</h1>
                    </div>
                    <p className="text-lg text-[var(--color-gray_60)] font-medium leading-[150%] ">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
                </div>
            </div>
            <div className="w-full border-b border-[var(--color-gray_15)] " />
            <div className="grid grid-cols-2 items-center justify-between w-full">
                <div className="pr-[30px] flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        {/* icon */}
                        <div className="size-[74px] rounded-full border border-[var(--color-purple_60)] flex items-center justify-center">
                            <MdGroups size={30} className="text-[var(--color-purple_75)]" />
                        </div>
                        <h1 className="text-4xl text-white font-semibold leading-[150%] ">Client-Centric</h1>
                    </div>
                    <p className="text-lg text-[var(--color-gray_60)] font-medium leading-[150%] ">Your dreams and needs are at the center of our universe. We listen, understand.</p>
                </div>
                <div className="border-l border-[var(--color-gray_15)]  pl-[30px] flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <div className="size-[74px] rounded-full border border-[var(--color-purple_60)] flex items-center justify-center">
                            <IoIosStar size={30} className="text-[var(--color-purple_75)]" />
                        </div>
                        <h1 className="text-4xl text-white font-semibold leading-[150%] ">Our Commitment</h1>
                    </div>
                    <p className="text-lg text-[var(--color-gray_60)] font-medium leading-[150%] ">We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
