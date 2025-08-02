import Link from "next/link";

const FotterTop = () => {
  return (
    <div className=" h-[367px] bg-[var(--color-gray_08)]  text-white flex items-center justify-between gap-x-[250px] ">
      <div className="max-w-[1100px]">
        <h1 className="text-5xl font-semibold leading-[150%] mb-4">Start Your Real Estate Journey Today</h1>
        <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">{`Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.`}</p>
      </div>
      <Link href="/properties" className="w-[196px] h-[64px] px-6 py-4 bg-[var(--color-purple_60)] rounded-lg text-white border border-[var(--color-gray_15)]  flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-purple-500 text-sm font-medium leading-[150%] ">Explore Properties</Link>
    </div>
  );
};

export default FotterTop;
