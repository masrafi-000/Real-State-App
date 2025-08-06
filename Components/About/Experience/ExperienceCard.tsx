
type ExperienceCardProps = {
    index: string;
    title: string;
    description: string;
};

export default function ExperienceCard({ title, description, index }: ExperienceCardProps) {
    return(
        <div className="">
            <div className="border-l border-[var(--color-gray_15)] px-[20px] py-4 shadow-2xl  ">
                Step {index}
            </div>
            <div className="border border-[var(--color-gray_15)] rounded-r-xl rounded-b-xl  w-[512px] h-[267px] p-[50px] shadow-2xl bg-[linear-gradient(160deg,_rgba(137,0,235,0.53)_0%,_rgba(255,255,255,0)_18%)] text-white flex flex-col items-start justify-center gap-5">
                <h1 className="text-2xl font-semibold  leading-[150%] ">{title}</h1>
                <p className="leading-[150%] text-lg font-medium text-[var(--color-gray_60)] " >{description}</p>
            </div>
        </div>
    )
}