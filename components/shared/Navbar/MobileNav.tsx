"use client";

import { navbarItems } from "@/utils/data";
import Link from "next/link";
import React from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  const [isActive, setIsActive] = React.useState<number | null>(null);

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen `}
      ></div>
      {/* Navlinks */}
      <div
        className={`text-white fixed ${navOpen} inset-0 justify-center flex flex-col h-screen transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[var(--color-gray_10)] space-y-6 z-[1050]`}
      >
        <div className="flex flex-col items-center space-y-10">

        {navbarItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm md:text-base xl:text-lg cursor-pointer hover:text-purple-400 ${
              isActive === item.id
                ? "bg-[var(--color-gray_08)] border-[1px] border-[var(--color-gray_15)] h-12 w-28 rounded-2xl flex items-center justify-center"
                : ""
            } `}
            onClick={() => {
              setIsActive(item.id);
              closeNav();
            }}
          >
            {item.name}
          </Link>
        ))}

        <Link
          onClick={() => {
            setIsActive(null);
            closeNav();
          }}
          href="/contact"
          className=" flex items-center justify-center h-14 w-34 rounded-xl border-[1px] border-[var(--color-gray_15)] shadow-md outline-none cursor-pointer bg-[var(--color-gray_08)] hover:text-purple-400 "
        >
          Contact Us
        </Link>
        </div>
        <button
          onClick={closeNav}
          className="absolute top-[1.5rem] right-[1.5rem]     cursor-pointer w-8 h-8 bg-[var(--color-gray_15)] rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
