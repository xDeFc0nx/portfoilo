import Hero from "@/components/hero";
import "./App.css";
import Aboutme from "@/components/aboutme";
import Projects from "@/components/projects";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
function App() {
  return (
    <div className="snap-y overflow-y-scroll   overflow-hidden h-screen  snap-mandatory">
      <div className="relative w-full h-screen  snap-start scroll-smooth">
        <div className="absolute inset-0 -z-10">
          <BackgroundGradientAnimation className="absolute -z-40" />
        </div>
        <Hero />
      </div>
      <div className="relative w-full h-screen snap-start scroll-smooth z-10">
        <Aboutme />
        <div className="absolute inset-0 -z-10">
          <BackgroundGradientAnimation className="absolute -z-40" />
        </div>
      </div>

      <div className="relative w-full h-screen snap-start scroll-smooth z-10">
        <div className="absolute inset-0 -z-10">
          <BackgroundGradientAnimation className="absolute -z-40" />
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
