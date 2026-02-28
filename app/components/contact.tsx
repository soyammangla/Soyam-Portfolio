"use client";

import { useState, FormEvent } from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      let data;

      try {
        data = await res.json();
      } catch {
        data = { message: "Invalid server response" };
      }

      if (res.ok) {
        setStatus(data.message || "Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Frontend Error:", error);
      setStatus("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20"
    >
      <section className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Contact Me
        </h1>

        <p className="text-center text-white/70 mb-12 max-w-2xl">
          Reach out for collaborations, freelance work, or just say hi!
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-black border border-white/20 rounded-2xl p-8 shadow-lg flex flex-col gap-6"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="bg-black border border-white/40 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="bg-black border border-white/40 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows={3}
            required
            className="bg-black border border-white/40 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-fit self-center border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-semibold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* {status && (
          <p className="text-center text-sm text-white/80 mt-2">{status}</p>
        )} */}
        </form>

        {/* Contact Info */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10 text-white">
          <div className="flex items-center gap-2 hover:text-white transition duration-300">
            <HiOutlineMail size={24} />
            <a href="mailto:soyammangla15@gmail.com" className="underline">
              soyammangla15@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 hover:text-white transition duration-300">
            <HiOutlinePhone size={24} />
            <a href="tel:+918053761134" className="underline">
              +91 8053761134
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
