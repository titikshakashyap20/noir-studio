"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
     style={{
       backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"
     }}
     ></div>


      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          We Design <br /> Digital Stories
        </h1>

        <p className="mt-8 text-gray-300 text-lg max-w-xl mx-auto">
          NOIR is a fictional creative studio exploring design,
          motion, and digital storytelling through modern web experiences.
        </p>
      </motion.div>


    </section>
  );
}