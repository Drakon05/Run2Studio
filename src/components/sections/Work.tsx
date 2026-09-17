"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { assetPath } from "@/lib/assets";

const projects = [
  {
    id: "01",
    name: "Fold & Nest",
    slug: "fold-and-nest",
    discipline: "Furniture & Compact Living",
    desc: "A modular sofa, bed, and storage system designed to adapt within a single footprint.",
    image: assetPath("/projects/fold-and-nest/16.png"),
    layout: "col-span-12 md:col-span-8",
  },
  {
    id: "02",
    name: "Kubik",
    slug: "kubik",
    discipline: "Modular Systems",
    desc: "A stackable modular storage system designed to move, adapt and reconfigure with you.",
    image: assetPath("/projects/kubik/01_cover_hero.png"),
    layout: "col-span-12 md:col-span-6 md:col-start-7 mt-12 md:mt-32",
  },
  {
    id: "03",
    name: "Verso",
    slug: "verso",
    discipline: "Space Saving Systems",
    desc: "Wall bed, desk and storage in one cabinet.",
    image: assetPath("/projects/verso/01_Cover_Hero.jpg"),
    layout: "col-span-12 md:col-span-8 mt-12 md:mt-32",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-40"
        >
          <h2 className="font-primary text-5xl md:text-7xl font-bold tracking-tight uppercase">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className={`${project.layout} group relative cursor-none`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      data-cursor="OPEN PROJECT"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative overflow-hidden w-full aspect-[4/3] md:aspect-[3/2] mb-6 bg-[#E0E0E0]">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover origin-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          
          {/* Hover overlay content */}
          <div className="absolute inset-0 bg-brand-blue/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-brand-light">
            <p className="font-secondary font-medium text-lg max-w-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {project.desc}
            </p>
            <span className="font-secondary font-bold uppercase tracking-widest text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 flex items-center gap-2">
              View Project <span className="text-xl">→</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h3 className="font-primary text-3xl md:text-5xl font-bold uppercase tracking-tight mb-2">
              {project.name}
            </h3>
            <p className="font-secondary text-brand-gray font-medium tracking-wide uppercase text-sm">
              {project.discipline}
            </p>
          </div>
          <span className="font-secondary text-xl md:text-2xl font-bold text-brand-gray/50 tabular-nums">
            {project.id}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
