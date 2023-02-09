"use client";

import { motion } from "framer-motion";
import { textVariant2 } from "../utils/motion";

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={` mt-top-[8px] font-bold md:text-[25px] text-[20px] text-[#575765] opacity-70 ${textStyles}`}
  >
    {title}
  </motion.h2>
);
