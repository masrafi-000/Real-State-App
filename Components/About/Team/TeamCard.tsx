import Image, { StaticImageData } from "next/image";
import { IoIosSend } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

type TeamCardProps = {
  image: StaticImageData | string;
  name: string;
  title: string;
};

export default function TeamCard({ image, name, title }: TeamCardProps) {
  return (
    <div className="p-[30px] border border-[var(--color-gray_15)] rounded-xl shadow-2xl  text-white flex flex-col items-start justify-center gap-5 w-[376px] ">
      <div className="w-full h-[254px] relative">
        <div className="relative w-full h-[254px] rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute flex items-center justify-center bg-[var(--color-purple_60)] text-white w-[76px] h-[54px] rounded-full -bottom-[10%] left-[35%]">
            <FaTwitter size={24}  />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-2 text-center w-full pt-6">
        <h1 className="text-2xl font-medium leading-[150%] ">{name}</h1>
        <p className="text-[var(--color-gray_60)] text-base leading-[150%] ">
          {title}
        </p>
      </div>
      <div className="relative w-full h-[72px] bg-[var(--color-gray_15)] rounded-full p-6  ">
        <input type="text" placeholder="Say Hello"  className="w-full text-xl text-white font-medium bg-transparent border-none outline-none placeholder:text-white placeholder:text-lg placeholder:font-medium" />
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2 size-[40px] bg-[var(--color-purple_60)] rounded-full flex items-center justify-center">

        <IoIosSend size={28} />
        </button>
      </div>
    </div>
  );
}
