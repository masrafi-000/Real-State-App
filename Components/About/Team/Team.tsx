import { TeamMemberData } from "@/utils/data";
import TeamCard from "./TeamCard";

export default function Team() {
    return (
        <div className="container mx-auto py-[80px] flex flex-col items-start justify-center gap-[80px] text-white">
            <div className="flex flex-col items-start justify-center gap-5  ">
                <h1 className="text-5xl font-semibold leading-[150%] ">Meet the Estatein Team</h1>
                <p className=" text-lg font-medium leading-[150%] text-[var(--color-gray_60)] w-[75%] ">At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    TeamMemberData.map((items) => {
                        return (
                            <TeamCard key={items.id} image={items.image} name={items.name} title={items.title} />
                        )
                    })
                }
            </div>
        </div>
    )
}