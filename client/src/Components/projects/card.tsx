export default function card({
  Logo,
  Title,
  Technologies,
}: {
  Logo: string;
  Title: string;
  Technologies: string[];
}) {
  return (
    <>
      <div className="w-full h-full  hover:border-teal-300 hover:scale-105 duration-400 transform transition rounded-sm shadow-inner  px-2 py-4  border-[2px] border-transparent bg-white/10  ">
        <div className="w-full flex justify-start">
          <img src={`/assets/${Logo}`} className=" h-2/4 w-full " />
        </div>
        <p className="inline-flex pt-2 pb-2 items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
          {Title}
        </p>

        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          {Technologies.map((tech, index) => (
            <span
              className="flex items-center rounded-full bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-400"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
