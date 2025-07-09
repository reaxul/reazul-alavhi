"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
        opacity: 0.1,
      },
      move: { enable: true, speed: 0.5 },
      number: { value: 50 },
      size: { value: 2 },
    },
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-12 bg-black text-white overflow-hidden font-sans">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Gradient blurred blobs */}
      <div className="absolute w-96 h-96 bg-purple-500 opacity-25 blur-[120px] rounded-full -top-20 -left-20 animate-blob" />
      <div className="absolute w-80 h-80 bg-pink-500 opacity-25 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000" />
      <div className="absolute w-72 h-72 bg-indigo-500 opacity-25 blur-[100px] rounded-full -bottom-20 right-10 animate-blob animation-delay-4000" />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
          <Typewriter
            words={[
              "Hi, I'm Reazul Alavhi",
              "Full-Stack Developer",
              "Software Developer",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 font-medium leading-relaxed">
          Passionate about crafting high-quality, scalable web experiences using{" "}
          <span className="font-semibold text-indigo-400">Next.js</span>,{" "}
          <span className="font-semibold text-blue-400">React</span>, and clean UI/UX design.
        </p>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          View My Projects <ArrowRight size={18} />
        </Link>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="w-7 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-1 backdrop-blur-sm bg-white/10">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        </div>
        <p className="text-sm text-white/70 mt-2 tracking-wide">Scroll Down</p>
      </motion.div>

      {/* Keyframe animation styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
