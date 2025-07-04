"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image from "next/image";

const projectsData = [
  {
    title: "Smart Dine",
    description:
      "A dynamic restaurant ordering platform with real-time order management, item availability toggle, admin dashboard, and seamless user experience.",
    githubLink: "https://github.com/reaxul/nyb-restarant2.0",
    liveLink: "https://nyb-restaurant-nu.vercel.app/",
    imageSrc: "/project1.png",
    altText: "NYB Restaurant Project",
  },
  {
    title: "Tasty Drop",
    description:
      "TastyDrop is a full-stack food delivery web app featuring dynamic menus, order tracking, user authentication, and admin panels.",
    githubLink: "https://github.com/BakiAbdullah/Tasty-drop-client.git",
    liveLink: "https://tasty-drops.web.app/",
    imageSrc: "/project2.png",
    altText: "Tasty Drop Project",
  },
  {
    title: "Toy Legend",
    description:
      "A superhero-themed eCommerce platform for toy collectors. Includes user reviews, detailed product pages, and secure checkout.",
    githubLink: "https://github.com/reaxul/toy-legend-client.git",
    liveLink: "https://toy-legends.web.app/",
    imageSrc: "/project3.png",
    altText: "Toy Legend Project",
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-zinc-950 dark:to-zinc-900 px-4 py-36">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-700 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image scroll effect on hover */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-[5000ms] group-hover:-translate-y-1/5">
                  <Image
                    src={project.imageSrc}
                    alt={project.altText}
                    width={600}
                    height={300}
                    placeholder="blur"
                    blurDataURL={project.imageSrc}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-[230px]">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline hover:scale-105 transition-transform"
                  >
                    <AiFillGithub size={18} /> Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline hover:scale-105 transition-transform"
                  >
                    <BsBoxArrowUpRight size={16} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
