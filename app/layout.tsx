import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

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
      <body
        className={`${urbanist.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
