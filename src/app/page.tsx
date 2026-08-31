import React from "react";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
