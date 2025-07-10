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
      "A dynamic restaurant ordering platform with live menu updates, real-time order management, availability toggles, and a full admin dashboard.",
    githubLink: "https://github.com/reaxul/nyb-restarant2.0",
    liveLink: "https://nyb-restaurant-nu.vercel.app/",
    imageSrc: "/project1.png",
    altText: "Smart Dine project preview",
  },
  {
    title: "Tasty Drop",
    description:
      "A modern food delivery web app featuring secure authentication, dynamic menus, user-friendly design, and a responsive admin dashboard.",
    githubLink: "https://github.com/BakiAbdullah/Tasty-drop-client.git",
    liveLink: "https://tasty-drops.web.app/",
    imageSrc: "/project2.png",
    altText: "Tasty Drop delivery project preview",
  },
  {
    title: "Digital Spa Ads",
    description:
      "A Google Ads marketing project to promote a spa and massage center — delivering 25.6K impressions, 1.59K clicks, and a $0.08 CPC. Full campaign analytics and ad strategy execution included.",
    githubLink: "https://github.com/reaxul/Spa-Center",
    liveLink: "https://poetic-brigadeiros-426660.netlify.app/",
    imageSrc: "/project3.png",
    altText: "Spa marketing campaign results",
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
              className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md border border-gray-200 dark:border-zinc-700 overflow-hidden group transition-all duration-300 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image Section */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 transform transition-transform duration-[5000ms] group-hover:-translate-y-1/5">
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
              <div className="p-5 flex flex-col justify-between h-[250px]">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
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
