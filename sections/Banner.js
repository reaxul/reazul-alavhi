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
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-black text-white overflow-hidden font-sans">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-[120px] rounded-full -top-20 -left-20 animate-blob" />
      <div className="absolute w-80 h-80 bg-pink-500 opacity-20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000" />
      <div className="absolute w-72 h-72 bg-indigo-500 opacity-20 blur-[100px] rounded-full -bottom-20 right-10 animate-blob animation-delay-4000" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="z-10 text-center max-w-2xl px-6"
      >
        <h1 className="text-xl sm:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
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

        <p className="text-lg sm:text-xl text-gray-300 mb-8 font-medium leading-relaxed">
          A passionate full-stack developer crafting next-gen web experiences with
          <span className="font-semibold text-indigo-400"> Next.js</span>,
          <span className="font-semibold text-blue-400"> React</span>, and beautiful UI/UX.
        </p>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-xl text-base font-medium transition-all duration-300 shadow-lg hover:scale-105"
        >
          View My Projects <ArrowRight size={18} />
        </Link>
      </motion.div>

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
