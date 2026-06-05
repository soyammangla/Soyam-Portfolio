"use client";

import React from "react";

const projects = [
  {
    title: "QuickDo",
    description:
      "A modern To-Do list app with user authentication and task management.",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase Auth"],
    github: "https://github.com/soyammangla/QuickDo",
    demo: "https://quick-do-three.vercel.app",
    image: "/quickdo.png",
  },
  {
    title: "QuizSphere",
    description:
      "A quiz-making platform with authentication and local storage for progress tracking.",
    tech: ["React", "Next.js", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/soyammangla/QuizSphere",
    demo: "https://quiz-sphere-nine.vercel.app",
    image: "/Quizsphere.png",
  },
  {
    title: "TrackPoint",
    description:
      "A full-stack CRM system to manage clients, tasks, and analytics efficiently.",
    tech: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/soyammangla/TrackPoint",
    demo: "https://track-point.vercel.app",
    image: "/Trackpoint.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Projects I've Built
      </h1>
      <p className="text-center text-white mb-16 max-w-3xl">
        Here are some of the projects I have built recently. Each project
        highlights my skills in frontend, backend, and full-stack development.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-black border border-white/20 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-white/40"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="p-4 flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-white/50 text-gray-200 px-3 py-1 rounded-full text-sm bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-full border border-white/50 hover:bg-white hover:text-black transition duration-300 font-medium"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-full border border-white/50 hover:bg-white hover:text-black transition duration-300 font-medium"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 hover:opacity-20 transition duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
