"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"]
});

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const line = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Showreel() {
  return (
    <section className="bg-white text-black py-32 px-8">
      <div className="w-full text-center">

        {/* Animated Headline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${montserrat.className} mb-20 px-4`}
        >
          <motion.h2
          variants={line}
          className="w-full text-[7vw] font-bold tracking-[-0.03em] leading-[0.95] whitespace-nowrap antialiased"
          >
            WE CRAFT INTERACTIVE
          </motion.h2>

          <motion.h2
            variants={line}
            className="w-full text-[7vw] font-bold tracking-[-0.03em] leading-[0.95] antialiased"
          >
            & IMMERSIVE BRAND
          </motion.h2>

          <motion.h2
            variants={line}
            className="w-full text-[7vw] font-bold tracking-[-0.03em] leading-[0.95] antialiased"
          >
            WORLDS
          </motion.h2>
        </motion.div>

        {/* Video */}
        <div className="max-w-6xl mx-auto px-4">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl"
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/videos/showreel.mp4" type="video/mp4" />
    </video>
  </motion.div>
</div>


      </div>
    </section>
  );
}