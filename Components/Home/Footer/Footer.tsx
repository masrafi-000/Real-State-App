import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import FotterTop from "./FotterTop";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto bg-[var(--color-gray_08)] ">
        <FotterTop />
        <div className="grid grid-cols-3  gap-[80px] p-4 sm:p-8">
          {/* logo and input */}
          <div className="text-white flex flex-col items-start gap-8">
            <div className="text-white">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 text-2xl font-bold"
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                <p>Estatein</p>
              </Link>
            </div>
            <div className="h-[63px]  sm:w-[191px] md:w-[443px] rounded-xl flex items-center justify-center bg-[var(--color-gray_10)]  transition-all duration-300 shadow-md border border-[var(--color-gray_09)] px-4 ">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="  w-full h-full text-white text-xl font-semibold  border-none outline-none placeholder:text-white placeholder:font-semibold "
              />
              <FaTelegramPlane
                size={24}
                className="text-white cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-start justify-between flex-wrap col-span-2">
            <div className=" text-xl font-medium">
              <h3 className="text-[var(--color-gray_60)] mb-7">Home</h3>
              <ul className="text-white flex flex-col gap-2">
                <li>Hero Section</li>
                <li>Features</li>
                <li>Poperties</li>
                <li>Testimonials</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className=" text-xl font-medium">
              <h3 className="text-[var(--color-gray_60)] mb-7">About Us</h3>
              <ul className="text-white flex flex-col gap-2">
                <li>Our Story</li>
                <li>Our Works</li>
                <li>How It Works</li>
                <li>Our Team</li>
                <li>Our Clients</li>
              </ul>
            </div>
            <div className=" text-xl font-medium">
              <h3 className="text-[var(--color-gray_60)] mb-7">Properties</h3>
              <ul className="text-white flex flex-col gap-2">
                <li>Portfolio</li>
                <li>Categories</li>
              </ul>
            </div>
            <div className=" text-xl font-medium">
              <h3 className="text-[var(--color-gray_60)] mb-7">Services</h3>
              <ul className="text-white flex flex-col gap-2">
                <li>Valuation Mastery</li>
                <li>Strategic Marketing</li>
                <li>Negotiation Wizardry</li>
                <li>Closing Success</li>
                <li>Property Management</li>
              </ul>
            </div>
            <div className=" text-xl font-medium">
              <h3 className="text-[var(--color-gray_60)] mb-7">Contact Us</h3>
              <ul className="text-white flex flex-col gap-2">
                <li>Contact Form</li>
                <li>Our Offices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-[var(--color-gray_15)]">
        <div className="container mx-auto flex items-center justify-between p-4 sm:p-8 bg-[var(--color-gray_09)]">
          <div className="flex items-center gap-4">
            <p className="text-[var(--color-gray_60)] text-base-">
              © 2023 Estatein. All rights reserved.
            </p>
            <Link
              href="#"
              className="text-white hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              Privacy & Policy
            </Link>
          </div>
          <div className="flex items-center gap-4  ">
            <Link href={"#"} className="size-[40px] rounded-full border-none bg-[var(--color-gray_10)] flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300  " >
            <FaFacebookF size={20} className="text-white cursor-pointer" />
            </Link>
            <Link href={"#"} className="size-[40px] rounded-full border-none bg-[var(--color-gray_10)] flex items-center justify-center hover:bg-[#0077B5] transition-all duration-300 " >
            <FaLinkedin size={20} className="text-white cursor-pointer" />
            </Link>
            <Link href={"#"} className="size-[40px] rounded-full border-none bg-[var(--color-gray_10)] flex items-center justify-center hover:bg-[#1DA1F2] transition-all duration-300 " >
            <FaTwitter size={20} className="text-white cursor-pointer" />
            </Link>
            <Link href={"#"} className="size-[40px] rounded-full border-none bg-[var(--color-gray_10)] flex items-center justify-center hover:bg-[#FF0000] transition-all duration-300 " >
            <FaYoutube size={20} className="text-white cursor-pointer" />
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
