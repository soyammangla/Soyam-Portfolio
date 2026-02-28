"use client";

import React from "react";

const achievements = [
  {
    title: "LeetCode Rating 1600+ | Top 20.44% Globally",
    description:
      "Solved 300+ algorithmic problems with consistent performance in contests, ranking within the top 20.44% globally.",
    details: ["300+ Problems", "Rating 1600+", "Global Rank Top 20.44%"],
  },
  {
    title: "Codeforces Rating 800+",
    description:
      "Actively participated in competitive programming contests to strengthen real-time problem solving and implementation skills.",
    details: ["Competitive Programming", "800+ Rating", "Contest Experience"],
  },
  {
    title: "TrackPoint – Ranked #39 on Peerlist",
    description:
      "TrackPoint CRM project achieved global ranking #39 on Peerlist and remained featured among top projects worldwide for one week.",
    details: ["Global Rank #39", "Featured Project", "Full-Stack CRM"],
  },
];

export default function Achievements() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Achievements
      </h1>

      <p className="text-center text-white mb-16 max-w-3xl">
        Competitive programming milestones, global rankings, and academic
        certifications that reflect my consistency and technical growth.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-black border border-white/20 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-white/40"
          >
            <div className="p-6 flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">{item.title}</h2>

              <p className="text-gray-300">{item.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {item.details.map((detail, i) => (
                  <span
                    key={i}
                    className="border border-white/50 text-gray-200 px-3 py-1 rounded-full text-sm bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 hover:opacity-20 transition duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
