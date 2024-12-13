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
                Need a hero? I'm the one you deserve! (for better or mostly worse)
                </h1>
            </div>
        );
    };
`;

  return (
    <div>
      <div className="bg-[#5B5CB4] -z-1 w-[45rem] h-[45rem] rounded-full blur-[10rem] fixed left-[30rem] -translate-y-1/2" />
      <div className="bg-[#D225E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem] fixed left-[10rem] -translate-y-1/2" />
      <div className="bg-[#2565E1] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem] fixed left-[15rem] -translate-y-1/2" />
      <div className="flex flex-col justify-center max-w-2xl m-auto md:max-w-4xl xl:max-w-[1280px] xl:grid xl:grid-cols-3 gap-16 xl:gap-24 min-h-screen xl:h-screen items-center px-8">
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
          <div className="bg-[#CFECFD] -z-1 w-[20rem] h-[20rem] rounded-full blur-[10rem] fixed left-[10rem] -translate-y-1/2" />
          <div className="flex flex-col gap-2">
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
    </div>
  );
}

export default index;
