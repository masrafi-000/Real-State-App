import { ExperienceCardData } from "@/utils/data";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section className="container mx-auto py-[40px] flex flex-col items-start justify-center gap-[80px] text-white">
      <div className="flex flex-col items-start justify-center gap-5">
        <h1 className="text-5xl font-semibold leading-[150%]">
          Navigating the Estatein Experience
        </h1>
        <p className="text-xl font-medium leading-[150%] text-[var(--color-gray_60)] w-[75%]">{`At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-10">
        {
          ExperienceCardData.map((items) => {
            return <ExperienceCard key={items.id} title={items.title} description={items.description} index={items.index} />
          })
        }
      </div>
    </section>
  );
}
