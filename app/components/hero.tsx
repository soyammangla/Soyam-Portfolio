"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full mt-16 grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-gray-300">Soyam</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 h-70px">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Computer Science Undergraduate",
                2000,
                "Problem Solver",
                2000,
                "Aspiring Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h2>

          <p className="text-white mb-8 text-lg leading-relaxed">
            I am a Computer Science undergraduate focused on building efficient,
            scalable, and user-friendly web applications. Passionate about
            problem-solving and continuously learning modern technologies.
          </p>

          <div className="flex gap-6">
            <a
              href="#projects"
              className="px-6 py-3 border border-white rounded-md transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black rounded-md transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/profile.png"
              alt="Soyam Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
