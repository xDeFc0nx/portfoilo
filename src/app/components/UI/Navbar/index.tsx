"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import React from "react";
export const Navbar: FC = () => {
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
      <div className="bg-[#5B5CB4] -z-1 w-[45rem] h-[45rem] rounded-full blur-[10rem]  absolute -mt-96 -ml-14" />
      <div className="bg-[#D225E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  absolute -mt-10 ml-[30rem]" />
      <div className="bg-[#2565E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  absolute -mt-10 ml-[40rem]" />
      <div className="bg-[#CFECFD] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  absolute -mt-10 ml-[50rem]" />
      <div className="pl-24 pr-24">
        <div className="bg-[#1A232E] bg-opacity-30 w-full h-12 flex  backdrop-filter backdrop-blur-3xl rounded-sm border border-[#2759B7] shadow-inner  mt-5">
          <ul className="flex items-center gap-14 pl-[43rem]">
            <li className="bg-transparent text-base  text-white">About me</li>

            <li className="bg-transparent text-base  text-white">Projects</li>

            <li className="bg-transparent text-base  text-white">Contact</li>
          </ul>
          <ul className="flex items-center gap-14 pl-20"></ul>
        </div>
      </div>
    </motion.div>
  );
};
