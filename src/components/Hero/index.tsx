import React from "react";
import { FC } from "react";

export const Hero: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl m-auto md:max-w-4xl xl:max-w-[1280px] xl:grid xl:grid-cols-3 gap-16 xl:gap-24 min-h-screen xl:h-screen items-center px-8">
      <div className="flex flex-col xl:col-span-2">
        <span className="text-[48px] leading-[54px] xl:text-[54px] xl:leading-[64px] font-semibold text-center xl:text-left text-white">
          Transforming ideas into reality: where vision meets precision
        </span>
        <span className="text-[28px] leading-[35px] xl:text-[32px] xl:leading-[48px] pt-6 text-gray-400 text-center xl:text-left">
          Nehar Tale, your hero programmer and web developer, leading us to
          victory in the war against unmaintainable code.
        </span>
      </div>
      <div className="w-full bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
        <div className="flex flex-col gap-2">
          {[
            "const hello = &quot;world&quot;;",
            "console.log(hello);",
            "{/* This is a comment */}",
          ].map((line, index) => (
            <div key={index} className="flex">
              <div className="w-8 text-right text-gray-400 pr-4">
                {index + 1}
              </div>
              <div className="flex-1 text-gray-400">{line}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
