import Hero from "./Components/hero";
import "./App.css";
import Aboutme from "./Components/aboutme";
import Projects from "./Components/projects";
function App() {
  return (
    <div className="snap-y overflow-y-scroll  h-screen  snap-mandatory">
      <Hero />
      <Aboutme />
      <Projects />
    </div>
  );
}

export default App;
