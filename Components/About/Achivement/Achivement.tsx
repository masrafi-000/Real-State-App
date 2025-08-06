
import { AchievementsData } from "@/utils/data"
import AchivementCard from "./AchivementCard"



export default function Achivement() {
    return (
        <div className=" container mx-auto py-[80px] flex flex-col items-start justify-center gap-[80px] text-white">
            <div className="flex flex-col items-start justify-center gap-5">
                <h1 className="text-5xl font-semibold leading-[150%]  ">Our Achievements</h1>
                <p className="text-xl font-medium leading-[150%] text-[var(--color-gray_60)] w-[75%] ">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>

            </div>
            {/* Card */}
            <div className="flex flex-wrap w-full justify-between ">
                {
                    AchievementsData.map((items) => {
                        return <AchivementCard key={items.id} title={items.title} description={items.description} />
                    })
                }
            </div>

        </div>
    )
}