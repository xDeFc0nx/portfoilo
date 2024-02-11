import Image from "next/image";
import React from "react";
import { FC } from "react";
import code from "./code.svg";

export const Hero: FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <span className="text-[60px] text-white z-auto flex pt-[15rem] ml-24 ">
          Transforming ideas into reality <br />
          where vision meets precision
        </span>
        <span className="text-[32px] pt-5 text-[#746E6E]  z-auto flex ml-24 ">
          Nehar Tale, Your hero programmer and web developer, <br />
          leading us to victory in the war against unmaintainable code.
        </span>
      </div>
      <div className="ml-24 pt-[10rem]">
        <Image className="w-[40rem] h-[40rem] " alt="" src={code} />
      </div>
      <div className="bg-[#2565E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  fixed mt-[20rem] ml-[120rem]" />
      <div className="bg-[#CFECFD] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  fixed mt-[35rem] ml-[120rem]" />
    </div>
  );
};
