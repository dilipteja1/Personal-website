import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//default metadata
export const metadata: Metadata = {
  title: "Dilip Teja | Portfolio",
  description: "Dilip teja is a full stack developer with 3 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-gray_50 text-gray_950 relative` } > 
        <div className="bg-light_pink absolute -top-[6rem] right-[11rem] h-[31.25rem] w-[31.25rem] 
        rounded-full  blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-light_blue absolute -top-[1rem] -left-[35rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <Header /> 
        {children}
      </body>
    </html>
  );
}
