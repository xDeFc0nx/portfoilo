import Hero from "@/components/hero";
import "./App.css";
import Aboutme from "@/components/aboutme";
import Projects from "@/components/projects";
function App() {
  return (
    <div className="snap-y overflow-y-scroll  h-screen  snap-mandatory">
      <div className="relative w-full h-screen  snap-start scroll-smooth">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/3  -translate-y-1/2 bg-[#5B5CB4] xl:w-96 xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[8rem] xl:blur-[12rem]" />
          <div className="absolute left-1/2  -translate-y-1/2 bg-[#D225E1] xl:w-96 xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[8rem] xl:blur-[12rem]" />
          <div className="absolute left-1/4  -translate-y-1/2 bg-[#2565E1] xl:w-96 xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[8rem] xl:blur-[12rem]" />
        </div>
        <Hero />
      </div>
      <div className="relative w-full h-screen  snap-start scroll-smooth">
        <div className="absolute inset-0 -z-10">
          <div className="absolute  translate-x-[20rem] bg-[#5B5CB4] xl:w-96 xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[8rem] xl:blur-[12rem]" />
          <div className="absolute  translate-x-1/4 bg-[#D225E1] xl:w-96 xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[8rem] xl:blur-[12rem]" />
          <div className="absolute  translate-x-1/3 bg-[#2565E1] xl:w-96 xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[8rem] xl:blur-[12rem]" />
        </div>
        <Aboutme />
      </div>
      <div className="relative w-full h-screen  snap-start scroll-smooth">
        <div className="absolute inset-0 -z-10">
          <div className="bg-[#2565E1] -z-1 xl:w-96  xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[4rem] xl:blur-[12rem] absolute  translate-x-[40rem]" />
          <div className="bg-[#D225E1] -z-1 xl:w-96  xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[4rem] xl:blur-[12rem] absolute  -translate-x-64" />
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
