import { LucideLandPlot } from "lucide-react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaBath, FaBed } from "react-icons/fa";

export default function PropertieDetails() {
  return (
    <section className=" container mx-auto text-white my-[40px] h-auto ">
      <div className="flex gap-[50px] w-full h-auto items-start">
        {/* left side */}
        <div className="flex-1 p-[50px] border border-[var(--color-gray_10)] rounded-xl shadow-2xl">
          <h1 className="text-2xl font-semibold leading-[150%]">Description</h1>
          <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
            Discover your own piece of paradise with the Seaside Serenity Villa.
            T With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is the
            epitome of coastal living.
          </p>
          <div className="mt-6 ">
            <hr className="mb-[10px] border-[var(--color-gray_15)]" />
            <div className="grid grid-cols-3 gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <FaBed />
                  <p>Bedrooms</p>
                </div>
                <h2 className="text-2xl font-semibold leading-[150%]">04</h2>
              </div>
              <div className="border-l border-l-[var(--color-gray_15)] pl-[10px] flex flex-col gap-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <FaBath /> <p>Bathrooms</p>
                </div>
                <h2 className="text-2xl font-semibold leading-[150%]">03</h2>
              </div>
              <div className=" border-l border-l-[var(--color-gray_15)] pl-[10px] flex flex-col gap-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <LucideLandPlot />
                  <p>Area</p>
                </div>
                <h2 className="text-2xl font-semibold leading-[150%]">
                  2,500 Square Feet
                </h2>
              </div>
            </div>
          </div>
        </div>

          {/* right side */}
        <div className="flex-1 p-[50px] border border-[var(--color-gray_10)] rounded-xl shadow-2xl">
          <div className="flex flex-col items-start justify-start gap-[50px]">
            <h2 className="text-2xl font-semibold leading-[150%]">
              Key Features and Amenities
            </h2>
            <div className="w-full flex flex-col gap-5">
              <div className="px-[24px] py-[18px] border-l-2 border-l-[var(--color-purple_60)] flex items-center justify-start gap-4 bg-[var(--color-gray_10)] w-full shadow-2xl">
                <AiFillThunderbolt size={24} />
                <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
                  Expansive oceanfront terrace for outdoor entertaining
                </p>
              </div>
              <div className="px-[24px] py-[18px] border-l-2 border-l-[var(--color-purple_60)] flex items-center justify-start gap-4 bg-[var(--color-gray_10)] w-full shadow-2xl">
                <AiFillThunderbolt size={24} />
                <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
                  Expansive oceanfront terrace for outdoor entertaining
                </p>
              </div>
              <div className="px-[24px] py-[18px] border-l-2 border-l-[var(--color-purple_60)] flex items-center justify-start gap-4 bg-[var(--color-gray_10)] w-full shadow-2xl">
                <AiFillThunderbolt size={24} />
                <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
                  Expansive oceanfront terrace for outdoor entertaining
                </p>
              </div>
              <div className="px-[24px] py-[18px] border-l-2 border-l-[var(--color-purple_60)] flex items-center justify-start gap-4 bg-[var(--color-gray_10)] w-full shadow-2xl">
                <AiFillThunderbolt size={24} />
                <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
                  Expansive oceanfront terrace for outdoor entertaining
                </p>
              </div>
              <div className="px-[24px] py-[18px] border-l-2 border-l-[var(--color-purple_60)] flex items-center justify-start gap-4 bg-[var(--color-gray_10)] w-full shadow-2xl">
                <AiFillThunderbolt size={24} />
                <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
                  Expansive oceanfront terrace for outdoor entertaining
                </p>
              </div>
              <div className="px-[24px] py-[18px] border-l-2 border-l-[var(--color-purple_60)] flex items-center justify-start gap-4 bg-[var(--color-gray_10)] w-full shadow-2xl">
                <AiFillThunderbolt size={24} />
                <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">
                  Expansive oceanfront terrace for outdoor entertaining
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
