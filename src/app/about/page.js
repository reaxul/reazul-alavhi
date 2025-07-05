"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { FaLaptopCode, FaGlobeAsia, FaRocket, FaBrain } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

export default function AboutPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About | Reazul Alavhi - Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Reazul Alavhi — a passionate full-stack developer from Bangladesh. Explore his journey, vision, and the skills driving his global impact."
        />
        <meta name="author" content="Reazul Alavhi" />
        <meta
          name="keywords"
          content="Reazul Alavhi, About Reazul, Full Stack Developer, Next.js Developer, React, Node.js, Developer from Bangladesh, Tech Entrepreneur, Web Developer Cape Town, Durban Startup"
        />
        <meta property="og:title" content="About | Reazul Alavhi - Developer" />
        <meta
          property="og:description"
          content="Full-stack web developer Reazul Alavhi shares his story, skills, and entrepreneurial ambitions."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/Reazul.png" />
        <meta property="og:url" content="https://reazul-alavhi.vercel.app/about" />
      </Head>

      <section className="min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-zinc-950 dark:to-zinc-900 px-4 py-36 relative overflow-hidden">
        {/* Decorative Background Animation */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-500 opacity-10 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10 relative">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-indigo-500 dark:ring-indigo-400"
          >
            <Image
              src="/Reazul.png"
              alt="Reazul Alavhi profile photo"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* About Content */}
          <motion.article
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I’m <strong>Reazul Alavhi.</strong> A full-stack developer from Bangladesh, I love crafting engaging, scalable web apps using <strong>Next.js</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I’m also an entrepreneur at heart — currently planning to launch a hybrid business in <strong>Cape Town</strong> or <strong>Durban</strong>, selling everything from tech to chocolates. My mission is to merge digital innovation with real-world impact.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Outside work, I’m an astronomy and astrology enthusiast 🌌, a science lover 🧪, and an occasional traveler 🧳 who enjoys exploring cultures and ideas. I also take a keen interest in public issues like stopping smuggling and exploring economic trends.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Let’s connect, collaborate, and build something meaningful together!
            </p>

            {/* Skills / Interests */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
                <FaLaptopCode className="text-2xl" />
                <span>Full-Stack Dev</span>
              </div>
              <div className="flex items-center gap-3 text-pink-500">
                <MdTravelExplore className="text-2xl" />
                <span>Explorer</span>
              </div>
              <div className="flex items-center gap-3 text-purple-500">
                <FaRocket className="text-2xl" />
                <span>Startup Planner</span>
              </div>
              <div className="flex items-center gap-3 text-blue-600">
                <FaGlobeAsia className="text-2xl" />
                <span>Global Vision</span>
              </div>
              <div className="flex items-center gap-3 text-orange-500">
                <FaBrain className="text-2xl" />
                <span>Science Enthusiast</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
              >
                Let’s Work Together 🚀
              </a>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
}
