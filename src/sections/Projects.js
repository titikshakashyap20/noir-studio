"use client";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const projects = [
  { 
    title: "Obsidian Branding", 
    category: "Brand Identity",
    image: "/pictures/project1.jpg"
  },
  { 
    title: "Aurora Campaign", 
    category: "Creative Direction",
    image: "/pictures/project2.jpg"
  },
  { 
    title: "Vertex Website", 
    category: "Web Design",
    image: "/pictures/project3.2.jpg"
  }
];

export default function Projects() {
  return (
    <Reveal>
    <section className="bg-black-100 text-black py-32 px-8 transition-all duration-700">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-12"
        >
          Selected Work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-60 bg-neutral-200 rounded-lg overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition duration-500 ease-out">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-medium tracking-wide">
                  View Project
                </p>
                </div>
              
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm tracking-wide uppercase">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    </Reveal>
  );
}