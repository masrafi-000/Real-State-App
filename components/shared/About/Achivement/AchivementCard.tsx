
type AchivementCardProps = {
    title: string;
    description: string;
};

export default function AchivementCard({ title, description }: AchivementCardProps) {
    return (
        <div className="border border-[var(--color-gray_15)] rounded-xl p-[50px] w-[505px] shadow-2xl ">
            <div className="flex flex-col items-start justify-center gap-5 ">
                <h1 className="text-2xl font-semibold leading-[150%]">{title}</h1>
                <p className="text-sm text-[var(--color-gray_60)]">{description}</p>
            </div>
        </div>
    )
}