"use client";

import React from "react";

// [#1A1A1A]

const NavbarAd = () => {

  const [showAd, setShowAd] = React.useState(true);

  return (
    <div className={`${showAd ? "block" : "hidden"} inset-0 w-full h-[63px] bg-[var(--color-gray_10)]/95`}>
      <div className="w-full h-full relative  text-white ">
        <h2 className="text-xs pl-1.5 md:pl-0 sm:text-sm md:text-xl h-full flex justify-start md:justify-center items-center gap-1.5 md:gap-2.5  ">
          ✨Discover Your Dream Property with Estatein{" "}
          <span className="underline cursor-pointer">Learn More</span>
        </h2>
        <button onClick={() => setShowAd(false)} className="absolute right-1.5 md:right-8 top-5 md:top-4 cursor-pointer bg-white/10 w-6 h-6 md:h-8  md:w-8 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 md:size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavbarAd;
