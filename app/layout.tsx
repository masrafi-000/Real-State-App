import Footer from "@/components/shared/Home/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estatein",
  description: "Estatein is a real estate platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased bg-[var(--color-gray_08)]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
