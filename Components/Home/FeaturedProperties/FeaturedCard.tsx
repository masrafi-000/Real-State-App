import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { IoBed } from "react-icons/io5";

type PropertyItem = {
  id: number | string;
  image: StaticImageData;
  title: string;
  desc: string;
  icon_1_desc: string;
  icon_2_desc: string;
  icon_3_desc: string;
  price: string;
};

const FeaturedCard = ({ item }: { item: PropertyItem }) => {
  return (
    <div className="md:w-[413px] 2xl:w-[512px] h-auto p-10 flex items-center justify-start flex-col text-white border border-[var(--color-gray_15)] rounded-2xl gap-[30px] ">
      {/* Image */}
      <div className="relative w-full h-[300px] border border-[var(--color-gray_15)] rounded-2xl overflow-hidden  ">
        <Image
          src={item.image}
          alt="hero"
          fill
          className="object-cover object-center "
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-2xl font-semibold leading-[150%] ">
          {item.title}
        </h1>
        <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)] ">
          {item.desc}{" "}
          <span className="text-white cursor-pointer">Read More</span>
        </p>
      </div>

      {/* Tags */}
      <div className="flex gap-1 w-full justify-start">
        <div className="flex items-center px-[10px]  2xl:px-[14px] py-1 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] rounded-full ">
          <IoBed size={24} />
          <span className="text-sm">{item.icon_1_desc}</span>
        </div>
        <div className="flex items-center px-[10px]  2xl:px-[14px] py-1 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] rounded-full  ">
          <FaBath size={24} />
          <span className="text-sm">{item.icon_2_desc}</span>
        </div>
        <div className="flex items-center px-[10px]  2xl:px-[14px] py-1 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] rounded-full  ">
          <HiMiniBuildingOffice size={24} />
          <span className="text-sm">{item.icon_3_desc}</span>
        </div>
      </div>

      {/* Price and Button */}
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)] ">
            Price
          </h2>
          <p className=" text-xl 2xl:text-2xl font-semibold leading-[150%] ">
            {item.price}
          </p>
        </div>
        <Link
          href={`/properties/${item.id}`}
          className=" px-4 2xl:px-6 py-4 bg-[var(--color-purple_60)] rounded-2xl text-lg font-medium leading-[150%] flex items-center justify-center "
          >
          View Property Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
