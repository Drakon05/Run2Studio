"use client";
import MooveO from "@/components/MooveO";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Positioning() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-transparent" ref={containerRef}>
      <div className="max-w-5xl mx-auto flex flex-col items-start gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-primary text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.1]">
            Some projects don&apos;t need a <span className="text-brand-blue">six-month</span> design process.
          </h2>
        </motion.div>

        <motion.div
          className="ml-auto max-w-2xl mt-12 md:mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-secondary text-xl md:text-2xl leading-relaxed text-brand-gray mb-12 font-medium">
            Some projects need someone to understand the problem, make decisions, resolve the work and keep M<MooveO className="inline-block h-[0.75em] w-auto mx-[0.05em] -translate-y-[0.05em]" />VING. No unnecessary layers, delays, or bureaucracy.
          </p>

          <h3 className="font-primary text-2xl md:text-4xl font-bold tracking-widest uppercase">
            That&apos;s where we come in.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
