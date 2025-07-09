"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending...");

    try {
      const res = await fetch("https://formspree.io/f/myzjqrjg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.ok) {
        toast.success("Message sent!", { id: toastId });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.", { id: toastId });
        console.error("Formspree error:", data);
      }
    } catch (err) {
      toast.error("Something went wrong.", { id: toastId });
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-zinc-950 dark:to-zinc-900 px-4 py-36">
      <Toaster position="top-center" />
      <motion.div
        className="max-w-2xl mx-auto backdrop-blur-lg bg-white/10 dark:bg-zinc-800/20 border border-white/20 dark:border-zinc-700/40 rounded-3xl p-10 shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s Connect
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full p-4 rounded-xl bg-white/30 dark:bg-zinc-700/30 text-zinc-900 dark:text-white placeholder:text-zinc-400 border border-white/20 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-md"
          />

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-4 rounded-xl bg-white/30 dark:bg-zinc-700/30 text-zinc-900 dark:text-white placeholder:text-zinc-400 border border-white/20 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-md"
          />

          <textarea
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me how I can help..."
            className="w-full p-4 rounded-xl bg-white/30 dark:bg-zinc-700/30 text-zinc-900 dark:text-white placeholder:text-zinc-400 border border-white/20 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-md"
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.96 }}
            className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold rounded-xl transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="mt-8 flex justify-center gap-6 text-2xl text-zinc-700 dark:text-zinc-300">
          <a
            href="mailto:your@email.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
