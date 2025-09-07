import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";



export default function OfficeCard() {
    return(
        <div className="p-[50px] bg-[var(--color-gray_08)] border-2 border-[var(--color-gray_10)] rounded-xl shadow-md flex flex-col gap-[20px]">
            <h4 className="text-base font-normal leading-[150%] text-[var(--color-gray_60)]">Main Headquarters</h4>
            <h1 className="text-2xl font-semibold leading-[150%]">123 Estatein Plaza, City Center, Metropolis</h1>
            <p className="text-base font-normal leading-[150%] text-[var(--color-gray_60)] ">Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.</p>
            <div className="flex items-center gap-4">
                <div className="p-2 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] rounded-full flex items-center space-x-2"><IoIosMail className="size-5" /> <p>info@estatein.com</p></div>
                <div className="p-2 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] rounded-full flex items-center space-x-2"><MdPhone className="size-5" /> <p>+1 (123) 456-7890</p></div>
                <div className="p-2 bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] rounded-full flex items-center space-x-2"><FaMapMarkerAlt className="size-5" /> <p>Metropolis</p></div>
            </div>
            <button className="w-full p-4 bg-[var(--color-purple_60)] rounded-lg shadow-2xl text-lg font-normal leading-[150%] cursor-pointer transition-all transform duration-200 hover:scale-101">Get Direction</button>
        </div>
    )
}