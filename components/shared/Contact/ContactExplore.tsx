import CEX1 from "@/public/images/c1.png";
import CEX2 from "@/public/images/c2.png";
import CEX3 from "@/public/images/c3.png";
import CEX4 from "@/public/images/c4.png";
import CEX5 from "@/public/images/c5.png";
import CEX6 from "@/public/images/c6.png";
import Image from "next/image";

export default function ContactExplore() {
  return (
    <div className=" container mx-auto border shadow-2xl border-[var(--color-gray_15)] rounded-2xl p-[80px] space-y-5">
      <div className="grid grid-cols-2 w-full gap-5">
        <div className=" relative flex items-center justify-center border border-[var(--color-gray_15)] rounded-xl overflow-hidden w-full h-[236px] bg-transparent">
          <Image
            src={CEX1}
            alt="contactImage"
            fill
            className="object-cover object-center "
          />
        </div>
        <div className=" relative flex items-center justify-center border border-[var(--color-gray_15)] rounded-xl overflow-hidden w-full h-[236px] bg-transparent">
          <Image
            src={CEX2}
            alt="contactImage"
            fill
            className="object-cover object-center "
          />
        </div>
        
       
      </div>
      <div className="grid grid-cols-2 w-full gap-5">
        <div className=" relative flex items-center justify-center border border-[var(--color-gray_15)] rounded-xl overflow-hidden w-full h-[236px] bg-transparent">
          <Image
            src={CEX3}
            alt="contactImage"
            fill
            className="object-cover object-center "
          />
        </div>
        <div className="grid grid-cols-2 gap-4">

        <div className=" relative flex items-center justify-center border border-[var(--color-gray_15)] rounded-xl overflow-hidden w-full h-[236px] bg-transparent">
          <Image
            src={CEX4}
            alt="contactImage"
            fill
            className="object-cover object-center "
          />
        </div>
        <div className=" relative flex items-center justify-center border border-[var(--color-gray_15)] rounded-xl overflow-hidden w-full h-[236px] bg-transparent">
          <Image
            src={CEX5}
            alt="contactImage"
            fill
            className="object-cover object-center "
          />
        </div>
        </div>
        
       
      </div>
      <div className="grid grid-cols-2 w-full gap-5">
        <div className="flex items-start justify-center flex-col gap-4 text-white" >
            <h1 className="text-5xl font-semibold leading-[150%]">Explore Estatein&apos;s World</h1>
            <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
        </div>
        <div className=" relative flex items-center justify-center border border-[var(--color-gray_15)] rounded-xl overflow-hidden w-full h-[236px] bg-transparent">
          <Image
            src={CEX6}
            alt="contactImage"
            fill
            className="object-cover object-center "
          />
        </div>
        
       
      </div>
    </div>
  );
}
