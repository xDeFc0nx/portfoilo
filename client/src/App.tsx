import Hero from "@/components/hero";
import "./App.css";
import Aboutme from "@/components/aboutme";
import Projects from "@/components/projects";
function App() {
  return (
    <div className="snap-y overflow-y-scroll  h-screen  snap-mandatory">
      <Hero />
      <div className="relative w-full h-screen  snap-start scroll-smooth">
        <div className="absolute inset-0 -z-1">
          <div className="absolute  translate-x-[20rem] bg-[#5B5CB4] xl:w-96 xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[8rem] xl:blur-[12rem]" />
          <div className="absolute  translate-x-1/4 bg-[#D225E1] xl:w-96 xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[8rem] xl:blur-[12rem]" />
          <div className="absolute  translate-x-1/3 bg-[#2565E1] xl:w-96 xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[8rem] xl:blur-[12rem]" />
        </div>
        <Aboutme />
      </div>
      <Projects />
    </div>
  );
}

export default App;
