"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaGoogle,
  FaLinux,
  FaBrain,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiCanva,
  SiOpenai,
  SiTensorflow,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-cyan-400" />,
    skills: [
      { label: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { label: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { label: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { label: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { label: "React", icon: <FaReact className="text-cyan-400" /> },
      { label: "Vercel AI SDK", icon: <SiNextdotjs className="text-white" /> },
    ],
  },
  {
    title: "Backend & Systems",
    icon: <FaNodeJs className="text-green-500" />,
    skills: [
      { label: "Unix/Linux", icon: <FaLinux className="text-gray-400" /> },
      { label: "Python", icon: <FaPython className="text-yellow-500" /> },
      { label: "Git", icon: <FaGitAlt className="text-red-600" /> },
      { label: "GitHub", icon: <FaGithub className="text-white" /> },
      { label: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { label: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { label: "GCP", icon: "☁️" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <FaBrain className="text-purple-400" />,
    skills: [
      { label: "OpenAI / GPT", icon: <SiOpenai className="text-green-400" /> },
      { label: "TensorFlow", icon: <SiTensorflow className="text-blue-600" /> },
      { label: "Prompt Engineering", icon: <FaLightbulb className="text-yellow-400" /> },
      { label: "Python", icon: <FaPython className="text-yellow-500" /> },
      { label: "Data Analysis", icon: <FaCode className="text-indigo-400" /> },
    ],
  },
  {
    title: "Full Stack Engineering",
    icon: <FaCode className="text-indigo-500" />,
    skills: [
      { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { label: "React", icon: <FaReact className="text-cyan-400" /> },
      { label: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { label: "REST & GraphQL APIs", icon: <FaCode className="text-indigo-400" /> },
      { label: "CI/CD & Deployment", icon: <FaDocker className="text-blue-400" /> },
      { label: "Database Design", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    title: "Design & Creative Tools",
    icon: <MdDesignServices className="text-pink-400" />,
    skills: [
      { label: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { label: "Canva", icon: <SiCanva className="text-blue-400" /> },
      { label: "Keynote", icon: <FaGoogle className="text-red-400" /> },
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaGoogle className="text-yellow-400" />,
    skills: [
      { label: "Team Collaboration", icon: "🤝" },
      { label: "Problem Solving", icon: "🧠" },
      { label: "Critical Thinking", icon: "🧩" },
      { label: "Creativity", icon: "🎨" },
      { label: "Adaptability", icon: "🌱" },
      { label: "Communication", icon: "💬" },
      { label: "Time Management", icon: "⏰" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 py-24 px-6 bg-gradient-to-br from-[#121212] via-[#1c1c1c] to-[#222222] text-gray-200"
    >
      {/* Background circles */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-radial from-indigo-900 via-transparent to-transparent opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-pink-600 opacity-10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-24 left-10 w-64 h-64 rounded-full bg-cyan-600 opacity-10 blur-3xl"
      />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-lg max-w-xl mx-auto text-gray-400">
          Tools, technologies, and qualities that drive my digital craftsmanship and innovation.
        </p>
      </div>

      {/* Skill Sections */}
      <div className="max-w-5xl mx-auto space-y-20">
        {skillCategories.map((category, i) => (
          <div
            key={category.title}
            className="bg-white/5 backdrop-blur-xl rounded-xl p-6 ring-1 ring-indigo-700/30 shadow-xl hover:ring-indigo-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6 text-indigo-400">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
            </div>

            <ul className="flex flex-wrap gap-4">
              {category.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 px-5 py-2 rounded-full bg-indigo-700/20 backdrop-blur-sm hover:bg-indigo-600/30 cursor-default select-none transition"
                  aria-label={skill.label}
                  title={skill.label}
                >
                  <span className="text-xl">
                    {typeof skill.icon === "string" ? skill.icon : skill.icon}
                  </span>
                  <span className="font-medium text-gray-100">{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
