"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { id: "01", title: "Understand", desc: "Define the problem and constraints." },
  { id: "02", title: "Explore", desc: "Generate practical concepts rapidly." },
  { id: "03", title: "Refine", desc: "Make decisions and resolve details." },
  { id: "04", title: "Deliver", desc: "Handover buildable, complete outcomes." },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="process" className="py-32 md:py-48 px-6 md:px-12 bg-transparent" ref={containerRef}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative">
        
        {/* Sticky Header */}
        <div className="md:w-1/3 flex-shrink-0">
          <div className="sticky top-40">
            <h2 className="font-secondary text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6">
              Process
            </h2>
            <p className="font-secondary text-brand-gray text-lg max-w-sm">
              We maintain continuous forward progress through organised systems and structured methodology.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="md:w-2/3 flex flex-col relative">
          {/* Progress Line Background */}
          <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-brand-gray/20 md:left-8"></div>
          
          {/* Active Progress Line */}
          <motion.div 
            className="absolute left-6 top-10 w-0.5 bg-brand-blue md:left-8 origin-top"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          <div className="flex flex-col gap-24 py-10">
            {steps.map((step, index) => {
              // Create specific progress ranges for each step to light up
              const stepProgress = index / (steps.length - 1);
              const isActive = useTransform(
                scrollYProgress,
                [Math.max(0, stepProgress - 0.15), stepProgress + 0.15],
                [0, 1]
              );
              
              // We'll use a derived state for Tailwind classes but Framer Motion handles it natively with useTransform
              const colorTransform = useTransform(
                scrollYProgress,
                [stepProgress - 0.2, stepProgress, stepProgress + 0.2],
                ["#B0B0B0", "#F4F4F4", "#B0B0B0"]
              );

              return (
                <div key={step.id} className="relative pl-20 md:pl-24">
                  <motion.div 
                    className="absolute left-5 md:left-7 top-1 w-3 h-3 rounded-full bg-brand-dark border-2 border-brand-gray z-10 -translate-x-1/2"
                    style={{
                      borderColor: useTransform(
                        scrollYProgress,
                        [stepProgress - 0.1, stepProgress],
                        ["#333333", "#2F53CB"]
                      ),
                      backgroundColor: useTransform(
                        scrollYProgress,
                        [stepProgress - 0.1, stepProgress],
                        ["#0B0B0B", "#2F53CB"]
                      )
                    }}
                  />
                  <div className="flex flex-col">
                    <motion.span 
                      className="font-secondary text-sm md:text-base font-bold tracking-widest uppercase mb-4"
                      style={{ color: colorTransform }}
                    >
                      {step.id}
                    </motion.span>
                    <motion.h3 
                      className="font-secondary text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-4"
                      style={{ color: colorTransform }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="font-secondary text-brand-gray text-lg md:text-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
