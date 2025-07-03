"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Reazul Alavhi | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="I'm Reazul Alavhi, a full-stack developer building modern web apps with Next.js, React, and Node.js. Explore my work and connect with me!"
        />
        <meta property="og:title" content="Reazul Alavhi | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Reazul Alavhi — a passionate developer crafting high-performance web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/reazul.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="keywords" content="Reazul Alavhi, Full Stack Developer, Next.js Developer, React Developer, Web Developer Bangladesh" />
        <meta name="author" content="Reazul Alavhi" />
      </Head>

      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden bg-gradient-to-br from-white to-slate-100 dark:from-zinc-950 dark:to-zinc-900">
        {/* Decorative Background Blobs */}
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-text-glow">
            Hi, I&#39;m Reazul Alavhi
          </h1>

          <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-300 mb-8 font-medium">
            A passionate full-stack developer crafting next-gen web experiences with{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Next.js</span>,{" "}
            <span className="font-semibold text-blue-500">React</span>, and modern UI/UX.
          </p>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl text-base font-medium transition-all duration-300 shadow-lg hover:scale-105"
          >
            View My Projects <ArrowRight size={18} />
          </Link>
        </motion.div>
      </main>
    </>
  );
}