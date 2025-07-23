"use client";

import { navbarItems } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  openNav: () => void;
  
};

const NavbarMenu = ({ openNav }: Props) => {
  const [isActive, setIsActive] = useState<number | null>(0);

  return (
    <div className=" w-full h-[99px]  bg-[var(--color-gray_10)] text-white ">
      <div className=" w-[90%] mx-auto flex items-center justify-between h-full ">
        {/* logo */}
        <Link href="/" className="flex items-center justify-center gap-2 text-2xl font-bold">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <p>Estatein</p>
        </Link>
        {/* menu */}
        <div className="hidden md:flex items-center justify-center md:gap-6 lg:gap-10">
          {navbarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm md:text-base xl:text-lg cursor-pointer hover:text-purple-400 ${
                isActive === item.id
                  ? "bg-[var(--color-gray_08)] border-[1px] border-[var(--color-gray_15)] h-12 w-28 rounded-2xl flex items-center justify-center"
                  : ""
              } `}
              onClick={() => setIsActive(item.id)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* button */}
        <Link
          onClick={() => setIsActive(null)}
          href="/contact"
          className="hidden md:flex items-center justify-center h-14 w-34 rounded-xl border-[1px] border-[var(--color-gray_15)] shadow-md outline-none cursor-pointer bg-[var(--color-gray_08)] hover:text-purple-400 "
        >
          Contact Us
        </Link>
        {/* Mobile Menu */}
        <button onClick={openNav} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavbarMenu;
