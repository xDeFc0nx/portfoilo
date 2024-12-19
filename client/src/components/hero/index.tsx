import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
           Need a hero? I'm the one you deserve!
            (for better or mostly worse)
         </h1>
      </div>
           );
               };
                  `;

  return (
    <>
      <div className="relative w-full h-screen  snap-start scroll-smooth">
        <div className="flex flex-col snap-start scroll-smooth justify-center max-w-2xl m-auto md:max-w-4xl xl:max-w-[1280px] xl:grid xl:grid-cols-3 gap-16 xl:gap-1 min-h-screen xl:h-screen items-center px">
          <div className="flex flex-col xl:col-span-2">
            <span className="text-[35px] leading-[35px] xl:text-[45px] xl:leading-[64px] font-semibold text-center xl:text-left text-white">
              Transforming <span className="text-[#D225E1]"> ideas </span>into
              reality: where vision meets precision
            </span>
            <span className="text-[18px] leading-[25px] xl:text-[22px] xl:leading-[38px] pt-6 text-gray-400 text-center xl:text-left">
              Nehar Tale, your hero programmer and web developer, leading us to
              victory in the war against unmaintainable code.
            </span>
          </div>
          <div className="w-full bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col ">
            <div className="flex gap-4">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
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
      </div>
    </>
  );
}

export default index;
