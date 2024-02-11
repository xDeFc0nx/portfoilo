import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div>
      <div className="bg-[#5B5CB4] -z-1 w-[45rem] h-[45rem] rounded-full blur-[10rem]  absolute -mt-96 -ml-14" />
      <div className="bg-[#D225E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  absolute -mt-10 ml-[30rem]" />
      <div className="bg-[#2565E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  absolute -mt-10 ml-[40rem]" />
      <div className="bg-[#CFECFD] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  absolute -mt-10 ml-[50rem]" />
      <div className="pl-24 pr-24">
        <div className="bg-[#1A232E] bg-opacity-30 w-full h-12 flex  backdrop-filter backdrop-blur-3xl rounded-sm border border-[#2759B7] shadow-inner  mt-5">
          <ul className="flex items-center gap-14 pl-20">
            <li className="bg-transparent text-base  text-white">About me</li>

            <li className="bg-transparent text-base  text-white">Projects</li>

            <li className="bg-transparent text-base  text-white">Contact</li>
          </ul>
          <ul className="flex items-center gap-14 pl-20">
            <li className="bg-transparent text-lg  text-white">NeharDev</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
