import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nehar Tale",
  description: "Nehar Tale Developer: your hero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute z-[-1]">
          <div className="bg-[#5B5CB4] -z-1 w-[45rem] h-[45rem] rounded-full blur-[10rem] -mt-96 -ml-14" />
          <div className="bg-[#D225E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem] -mt-10 ml-[30rem]" />
          <div className="bg-[#2565E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem] -mt-10 ml-[40rem]" />
          <div className="bg-[#CFECFD] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem] -mt-10 ml-[50rem]" />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
