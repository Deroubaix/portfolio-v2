import React from "react";
import TopBar from "../components/layout/TopBar";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="page">
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
