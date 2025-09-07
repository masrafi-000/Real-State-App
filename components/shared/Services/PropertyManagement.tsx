import { PropertyManagementCardData } from "@/utils/data";
import ServiceCard from "./ServiceCard";

const PropertyManagement = () => {
  return (
    <section className="container mx-auto py-[40px] text-white">
      <div className="flex items-start justify-center flex-col gap-4 pb-[40px]">
        <h1 className="text-5xl font-semibold leading-[150%]">
          Effortless Property Management
        </h1>
        <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)] w-[80%]">{`Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you`}</p>
      </div>

      <div className="grid grid-cols-3 gap-[20px]">
        {PropertyManagementCardData.map((items) => {
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
              Experience Effortless Property Management
            </h1>
            <button className="flex items-center justify-center border border-[var(--color-gray_15)] rounded-xl px-6 py-[18px] bg-[var(--color-gray_08)] hover:bg-purple-600 transition-all duration-300 text-lg font-medium leading-[150%]  cursor-pointer ">
              Learn More
            </button>
          </div>
          <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)] ">
            Ready to experience hassle-free property management? Explore our
            Property Management Service categories and let us handle the
            complexities while you enjoy the benefits of property ownership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyManagement;
