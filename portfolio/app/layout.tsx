import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Dilip teja is a full stack developer with 3 years if experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  bg-[#0f172a]`}
      >
        {children}
      </body>
    </html>
  );
}
