import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";

type TestimonialItem = {
  id: number | string;
  image: StaticImageData;
  name: string;
  title: string;
  desc: string;
  location: string;
};

const TestimonialCard = ({ item }: { item: TestimonialItem }) => {
  return (
    <div className="w-[512px] h-[442px] p-[50px] flex flex-col items-start justify-between  border border-[var(--color-gray_15)] rounded-2xl gap-[30px] text-white ">
      {/* Rating */}
      <div className="flex gap-2">
        <div className="flex items-center justify-center bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] size-[44px] rounded-full ">
          {" "}
          <FaStar size={24} className="text-yellow-300" />{" "}
        </div>
        <div className="flex items-center justify-center bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] size-[44px] rounded-full ">
          {" "}
          <FaStar size={24} className="text-yellow-300" />{" "}
        </div>
        <div className="flex items-center justify-center bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] size-[44px] rounded-full ">
          {" "}
          <FaStar size={24} className="text-yellow-300" />{" "}
        </div>
        <div className="flex items-center justify-center bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] size-[44px] rounded-full ">
          {" "}
          <FaStar size={24} className="text-yellow-300" />{" "}
        </div>
        <div className="flex items-center justify-center bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] size-[44px] rounded-full ">
          {" "}
          <FaStar size={24} className="text-yellow-300" />{" "}
        </div>
      </div>
      {/* Context */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold leading-[150%]">{item.title}</h1>
        <p className="text-lg font-medium leading-[150%]">{item.desc}</p>
      </div>
      {/* Person */}

      <div className="flex items-center gap-4">
        <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden ">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className=" object-contain object-center "
          />
        </div>
        <div>
          <h1 className="text-xl font-medium leading-[150%]">{item.name}</h1>
          <p className="text-sm font-medium leading-[150%] text-[var(--color-gray_60)]">
            {item.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
