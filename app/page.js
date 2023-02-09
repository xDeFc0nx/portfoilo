"use client";

import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";

function page() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <div className="gradient-03 z-0" />
      </div>
    </div>
  );
}

export default page;
