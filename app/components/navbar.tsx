"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black border-b border-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Soyam
        </Link>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 border border-white rounded-md text-white"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white">
          <ul className="flex flex-col items-center space-y-6 py-6 text-white font-medium">
            <li>
              <Link href="#home" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-4 py-2 border border-white rounded-md text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
