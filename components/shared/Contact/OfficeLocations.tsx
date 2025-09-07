"use client";
import { useState } from "react";
import OfficeCard from "./OfficeCard";

interface filter {
  id: number;
  field: string;
}

const filterdata: filter[] = [
  {
    id: 1,
    field: "All",
  },
  {
    id: 2,
    field: "Regional",
  },
  {
    id: 3,
    field: "International",
  },
];

export default function OfficeLocation() {
  const [isActive, setIsActive] = useState<number | null>(1);

  return (
    <section className=" container mx-auto text-white my-[40px]">
      <div className="flex flex-col space-y-4">
        <h1 className="text-5xl font-semibold leading-[150%] ">
          Discover Our Office Locations
        </h1>
        <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
          Estatein is here to serve you across multiple locations. Whether
          you&apos;re looking to meet our team, discuss real estate
          opportunities, or simply drop by for a chat, we have offices
          conveniently located to serve your needs. Explore the categories below
          to find the Estatein office nearest to you
        </p>
      </div>

      {/* filter */}
      <div className="border border-[var(--color-gray_15)] bg-[var(--color-gray_10)] p-[10px] w-[490px]  flex items-center justify-center gap-2 rounded-xl mt-[50px] shadow-2xl">
        {filterdata.map((item, id) => {
          return (
            <div
              key={id}
              className={`w-[150px] h-[63px] ${
                isActive === item.id
                  ? "bg-[var(--color-gray_08)]"
                  : " bg-[var(--color-gray_10)]"
              } border border-[var(--color-gray_15)]  text-lg font-normal leading-[150%] rounded-2xl flex items-center justify-center cursor-pointer`}
              onClick={() => setIsActive(item.id)}
            >
              {item.field}
            </div>
          );
        })}
      </div>
      {/* Card */}
      <div className="grid grid-cols-2 gap-10 mt-10">
        <OfficeCard />
        <OfficeCard />
      </div>
    </section>
  );
}
