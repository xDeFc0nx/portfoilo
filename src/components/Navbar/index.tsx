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
      <nav className="px-24">
        <div className="bg-gray-700/60 w-full h-12 flex items-center justify-center backdrop-blur-3xl rounded-sm border border-gray-600/80  mt-6">
          <ul className="flex items-center gap-14">
            <li className="text-base text-white">About Me</li>
            <li className="text-base text-white">Projects</li>
            <li className="text-base text-white">Contact</li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};
