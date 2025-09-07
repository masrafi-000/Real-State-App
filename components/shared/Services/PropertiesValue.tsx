import { PropertiesValueCardData } from "@/utils/data";
import ServiceCard from "./ServiceCard";

export default function PropertiesValue() {
  return (
    <section className=" container mx-auto py-[40px] text-white">
      <div className="flex items-start justify-center flex-col gap-4 pb-[40px]  ">
        <h1 className="text-5xl font-semibold leading-[150%] ">
          Unlock Property Value
        </h1>
        <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)] w-[80%] ">
          Selling your property should be a rewarding experience, and at
          Estatein, we make sure it is. Our Property Selling Service is designed
          to maximize the value of your property, ensuring you get the best deal
          possible. Explore the categories below to see how we can help you at
          every step of your selling journey
        </p>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-3 gap-[20px]">
        {PropertiesValueCardData.map((items) => {
          return (
            <ServiceCard
              key={items.id}
              icon={items.icon}
              title={items.title}
              desc={items.desc}
            />
          );
        })}
        <div className=" border border-[var(--color-gray_10)] p-[50px] col-span-2 rounded-xl bg-[var(--color-gray_10)] shadow-2xl flex flex-col items-start justify-center gap-[30px] hover:shadow transition-all duration-300">
          <div className="flex items-center justify-between gap-2 w-full">
            <h1 className="text-3xl font-bold leading-[150%] ">
              Unlock the Value of Your Property Today
            </h1>
            <button className="flex items-center justify-center border border-[var(--color-gray_15)] rounded-xl px-6 py-[18px] bg-[var(--color-gray_08)] hover:bg-purple-600 transition-all duration-300 text-lg font-medium leading-[150%]  cursor-pointer ">
              Learn More
            </button>
          </div>
          <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)] ">
            Ready to unlock the true value of your property? Explore our
            Property Selling Service categories and let us help you achieve the
            best deal possible for your valuable asset.
          </p>
        </div>
      </div>
    </section>
  );
}
