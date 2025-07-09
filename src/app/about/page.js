"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import {
  FaLaptopCode,
  FaGlobeAsia,
  FaRocket,
  FaBrain,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Reazul Alavhi - Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Reazul Alavhi — a passionate full-stack developer from Bangladesh. Explore his journey, vision, and the skills driving his global impact."
        />
        <meta name="author" content="Reazul Alavhi" />
        <meta
          name="keywords"
          content="Reazul Alavhi, About Reazul, Full Stack Developer, Next.js Developer, React, Node.js, Developer from Bangladesh, Tech Entrepreneur, Web Developer"
        />
        <meta property="og:title" content="About | Reazul Alavhi - Developer" />
        <meta
          property="og:description"
          content="Full-stack web developer Reazul Alavhi shares his story, skills, and ambitions."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/Reazul.png" />
        <meta property="og:url" content="https://reazul-alavhi.vercel.app/about" />
      </Head>

      <section className="min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-zinc-950 dark:to-zinc-900 px-6 py-32 relative overflow-hidden">
        {/* Decorative Background */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-500 opacity-10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Profile Photo with Zoom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-indigo-500 dark:ring-indigo-400"
          >
            <Image
              src="/Reazul.png"
              alt="Reazul Alavhi profile photo"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.12]"
 
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
              About Reazul Alavhi
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I’m <strong>Reazul Alavhi</strong>, a full-stack developer from Bangladesh who loves building scalable and impactful web applications using <strong>Next.js</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Outside of coding, I’m a science enthusiast 🧪, space lover 🌌, and traveler 🧳 who explores new cultures, tech trends, and real-world challenges.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Let’s connect, collaborate, and build something meaningful together!
            </p>

            {/* Skills / Interests */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-base font-medium">
              {[
                { icon: FaLaptopCode, label: "Full-Stack Dev", color: "text-indigo-500" },
                { icon: MdTravelExplore, label: "Explorer", color: "text-pink-500" },
                { icon: FaRocket, label: "Builder", color: "text-purple-500" },
                { icon: FaGlobeAsia, label: "Global Vision", color: "text-blue-600" },
                { icon: FaBrain, label: "Science Enthusiast", color: "text-orange-500" },
              ].map(({ icon: Icon, label, color }, i) => (
                <div key={i} className={`flex items-center gap-3 ${color}`}>
                  <Icon className="text-2xl" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Resume CTA */}
            <div className="mt-10">
              <a
                href="https://drive.google.com/file/d/1OY0v1iijHUXaP5pVkh10nil1RnrURk7A/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300"
              >
                📄 Download Resume
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Find me on:
              </h3>
              <div className="flex gap-4 text-2xl">
                {[
                  {
                    href: "https://github.com/reaxul",
                    icon: FaGithub,
                    label: "GitHub",
                    color: "hover:text-indigo-500",
                  },
                  {
                    href: "https://linkedin.com/in/reazul-alavhi",
                    icon: FaLinkedin,
                    label: "LinkedIn",
                    color: "hover:text-blue-600",
                  },
                  {
                    href: "https://x.com/ReaxulThoughts",
                    icon: FaTwitter,
                    label: "Twitter",
                    color: "hover:text-sky-500",
                  },
                  {
                    href: "https://facebook.com/Reaxul.Alavhi",
                    icon: FaFacebook,
                    label: "Facebook",
                    color: "hover:text-blue-700",
                  },
                ].map(({ href, icon: Icon, label, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition ${color}`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
}
