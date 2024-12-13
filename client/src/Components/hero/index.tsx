import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneDarkReasonable,
  docco,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

function index() {
  const codeString = `
    const Work = () => {
        if (!hired) {
            console.log('Goodbye world');
        }
        console.log('Databases destroyed: 0. Nehar Tale');
        return (
            <div>
                <h1>
                Need a hero? I'm the one you deserve! (for better or mostly worse)
                </h1>
            </div>
        );
    };
`;

  return (
    <div>
      <div className="bg-[#D225E1] -z-1 w-[20rem] h-[30rem] rounded-full blur-[10rem] fixed  left-[30rem] -translate-y-1/2" />

      <div className="bg-[#2565E1] -z-1 w-[20rem] h-[30rem] rounded-full blur-[10rem] fixed  left-[15rem] -translate-y-1/2" />
      <div className="flex">
        <div className="flex flex-col">
          <span className="sm:text-sm md:text-md lg:text-[50px] text-white z-auto flex pt-[15rem] ml-24 ">
            Transforming ideas into reality <br />
            where vision meets precision
          </span>
          <span className="text-[32px] pt-5 text-white/45  z-auto flex ml-24 ">
            Nehar Tale, Your hero Software Engineer, <br />
            leading us to victory in the war against unmaintainable code.
          </span>
        </div>

        <div className="ml-24 pt-52 ">
          <div className="rounded-xl w-[40rem] overflow-hidden bg-[#1a232e]/10 backdrop-blur-lg border border-white/30  p-4 text-md ">
            <div className=" flex justify-between pb-3 pt-6 px-6 ">
              <div className=" flex space-x-2">
                <div className="w-4 h-4 rounded-full border-2 border-white	"></div>
                <div className="w-4 h-4 rounded-full border-2 border-white	"></div>
                <div className="w-4 h-4 rounded-full border-2 border-white	"></div>
              </div>
            </div>
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              customStyle={{ backgroundColor: "transparent" }}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="bg-[#2565E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  fixed mt-[20rem] ml-[120rem]" />
        <div className="bg-[#CFECFD] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem]  fixed mt-[35rem] ml-[120rem]" />
      </div>
    </div>
  );
}

export default index;
