"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";

export default function Profiles() {
  const profiles = [
    {
      name: "GitHub",
      icon: <FaGithub size={30} />,
      link: "https://github.com/soyammangla",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/soyam-mangla-432b13365",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={30} />,
      link: "https://twitter.com/soyam1134",
    },
    {
      name: "LeetCode",
      icon: <FaCode size={30} />,
      link: "https://leetcode.com/u/Soyam_Mangla_GLA",
    },
  ];

  return (
    <section
      id="profiles"
      className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Connect With Me
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-6 bg-black border border-white/20 rounded-xl shadow-md hover:scale-105 hover:shadow-white/30 transition-all duration-500"
          >
            <div className="text-white hover:text-white/90 transition duration-300">
              {profile.icon}
            </div>
            <span className="text-white font-semibold">{profile.name}</span>
          </a>
        ))}
      </div>

      <p className="mt-16 text-white text-center max-w-xl">
        Feel free to explore my work, connect with me, or follow my updates on
        these platforms.
      </p>
    </section>
  );
}
