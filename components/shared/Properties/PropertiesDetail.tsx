"use client";
import Image from "next/image";

type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
};

export default function PropertyDetails({ property }: { property: Property }) {
  return (
    <div className="bg-[var(--color-gray_08)] text-white">
      <div className="container mx-auto min-h-screen">
        <div className="flex items-center justify-between mt-[40px]">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-medium">{property.title}</h2>
            <p className="p-1 border border-gray-300 rounded-lg">
              {property.location}
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-medium text-[var(--color-gray_60)]">
              Price
            </h4>
            <p className="text-base font-normal text-white">{property.price}</p>
          </div>
        </div>

        <div className="mt-[40px] bg-[var(--color-gray_10)] w-full p-[50px] flex flex-col items-center space-y-6 border border-[var(--color-gray_15)] rounded-xl shadow-xl">
          <div className="w-full h-[120px] bg-[var(--color-gray_08)] border border-[var(--color-gray_15)] rounded-lg flex items-center p-2" />

          <div className="grid grid-cols-2 gap-[30px] w-full">
            <div className="relative w-full h-[500px]">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full h-[500px]">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="flex items-center justify-between space-x-6 border border-[var(--color-gray_15)] rounded-full bg-[var(--color-gray_08)] shadow-xl w-[300px] h-[60px] p-1">
            <button className="bg-[var(--color-gray_10)] p-6 rounded-full border border-[var(--color-gray_15)] flex items-center justify-center" />
            <button className="bg-[var(--color-gray_10)] p-6 rounded-full border border-[var(--color-gray_15)] flex items-center justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
