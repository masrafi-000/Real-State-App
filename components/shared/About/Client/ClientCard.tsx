import { RxDashboard, RxLightningBolt } from "react-icons/rx";

export default function ClientCard() {
  return (
    <div className=" border border-[var(--color-gray_15)] p-[50px] rounded-2xl shadow-2xl transition-shadow duration-300 w-[773px]  ">
      <div className="flex flex-col items-start justify-center gap-[40px]">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
              Since 2019
            </h3>
            <h1 className="text-3xl leading-[150%] font-semibold ">
              ABC Corporation
            </h1>
          </div>
          <button className="bg-[var(--color-gray_10)] w-[148px] h-[63px] border border-[var(--color-gray_15)] rounded-2xl shadow-xl flex items-center justify-center hover:bg-purple-600 transition-all duration-300 ">
            Visit Website
          </button>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="flex items-center justify-center gap-2 text-[var(--color-gray_60)] text-lg font-normal ">
              <RxDashboard />
              <p>Domain</p>
            </div>
            <h2 className="text-xl font-medium leading-[150%]">
              Commercial Real Estate
            </h2>
          </div>
          <div className=" border-l border-[var(--color-gray_60)] h-[65px] "></div>
          <div className=" flex flex-col items-start justify-center gap-2 ">
            <div className="flex items-center justify-center gap-2 text-[var(--color-gray_60)] text-lg font-normal">
              <RxLightningBolt />
              <p>Category</p>
            </div>
            <h2 className="text-xl font-medium leading-[150%]">
              Luxury Home Development
            </h2>
          </div>
        </div>
        <div className="p-[30px] flex flex-col gap-4 items-start justify-center border border-[var(--color-gray_15)] rounded-2xl shadow-2xl hover:shadow transition-all duration-300  ">
            <h2 className="text-lg font-normal leading-[150%] text-[var(--color-gray_60)] ">What They Said 🤗</h2>
            <p className="text-lg font-semibold leading-[150%] text-white ">Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.</p>
        </div>
      </div>
    </div>
  );
}
