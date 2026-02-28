"use client";

import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiGithub,
} from "react-icons/si";

import { FaJava } from "react-icons/fa"; // Java icon
import { HiOutlineCode } from "react-icons/hi"; // DSA icon

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava size={50} /> },
    { name: "Python", icon: <SiPython size={50} /> },
    { name: "DSA", icon: <HiOutlineCode size={50} /> },
    { name: "GitHub", icon: <SiGithub size={50} /> },
    { name: "Vercel", icon: <SiVercel size={50} /> },
    { name: "HTML", icon: <SiHtml5 size={50} /> },
    { name: "CSS", icon: <SiCss3 size={50} /> },
    { name: "JavaScript", icon: <SiJavascript size={50} /> },
    { name: "React", icon: <SiReact size={50} /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Skills I Have
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 w-full max-w-6xl">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center justify-center gap-3 p-8 bg-black border border-white/20 rounded-2xl shadow-lg hover:scale-110 hover:shadow-white/40 transition-transform duration-500"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-white/5 blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>
            {/* Icon */}
            <div className="relative z-10 text-white hover:text-white/90 transition duration-300">
              {skill.icon}
            </div>
            {/* Skill Name */}
            <span className="relative z-10 text-white font-semibold text-xl mt-3">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-16 text-white text-center max-w-xl">
        These are the technologies, frameworks, and tools I use regularly to
        build modern, efficient, and scalable web applications.
      </p>
    </section>
  );
}
