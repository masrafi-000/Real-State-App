import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto bg-[var(--color-gray_08)] ">
      <div className="grid grid-cols-[0, 2fr] ">
        {/* logo and input */}
        <div>
          <div className="text-white">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-2xl font-bold"
            >
              <Image src="/images/logo.png" alt="logo" width={40} height={40} />
              <p>Estatein</p>
            </Link>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full h-[63px]  sm:w-[191px] rounded-xl flex items-center justify-center  bg-[var(--color-gray_10)] hover:bg-gray-950 "
            />
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
