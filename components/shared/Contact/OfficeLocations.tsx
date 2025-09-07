import OfficeCard from "./OfficeCard";



export default function OfficeLocation() {
    return(
        <section className=" container mx-auto text-white my-[40px]">
            <div className="flex flex-col space-y-4">
                <h1 className="text-5xl font-semibold leading-[150%] ">Discover Our Office Locations</h1>
                <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)]">Estatein is here to serve you across multiple locations. Whether you&apos;re looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you</p>
            </div>

            {/* filter */}
            <div></div>
            {/* Card */}
            <div className="grid grid-cols-2 gap-10 mt-10">
                <OfficeCard />
                <OfficeCard />
            </div>
        </section>
    )
}