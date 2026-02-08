"use client";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <Reveal>
    <section className="bg-neutral-100 text-black py-32 px-8 transition-all duration-700">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            About NOIR
          </h2>

          <p className="text-gray-400 leading-relaxed">
            NOIR is a conceptual creative studio built as a design and
            development experiment. This project demonstrates modern
            web practices including animation, responsive layouts,
            and cinematic UI design using Next.js and Tailwind CSS.
          </p>
        </motion.div>

        {/* Video Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg"
          >
            <source src="/videos/about.mp4" type="video/mp4" />
          </video>
        </motion.div>

      </div>
    </section>
    </Reveal>
  );
}
