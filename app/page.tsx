"use client";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Profiles from "./components/profiles";
import Achievements from "./components/achievements";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Profiles />
      <Contact />
    </>
  );
}
