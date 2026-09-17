"use client";
import MooveO from "@/components/MooveO";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const flow = ["Client", "Run2", "Design", "Prototype", "Product"];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12 bg-transparent">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-16 md:gap-24">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl flex flex-col items-center"
        >
          <h2 className="font-primary text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.1] mb-8">
            We keep things <br /> M<MooveO className="inline-block h-[0.75em] w-auto mx-[0.05em] -translate-y-[0.05em]" />VING.
          </h2>
          <p className="font-secondary text-xl md:text-2xl leading-relaxed text-[#B0B0B0] font-medium">
            Run2 works closely with clients to understand problems, explore possibilities, resolve details and M<MooveO className="inline-block h-[0.75em] w-auto mx-[0.05em] -translate-y-[0.05em]" />VE work forward.
          </p>
        </motion.div>

        <div className="flex flex-col items-center w-full py-12 relative">
          {flow.map((item, i) => (
            <motion.div 
              key={item}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="bg-brand-blue text-brand-light font-primary font-bold uppercase tracking-widest text-xl md:text-3xl px-8 py-4 rounded-full border border-brand-blue">
                {item}
              </div>
              {i < flow.length - 1 && (
                <div className="h-16 md:h-24 w-px bg-gradient-to-b from-brand-blue to-transparent my-2 flex items-center justify-center relative">
                  <motion.div 
                    className="absolute top-0 text-brand-blue"
                    animate={{ y: [0, 40, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <ArrowDown size={20} />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a 
            href="/about" 
            className="group flex items-center justify-between gap-4 bg-transparent border border-brand-gray/30 px-8 py-4 rounded-full font-bold font-secondary uppercase tracking-wider hover:border-brand-light transition-colors text-brand-light mt-12"
            data-cursor="VIEW →"
          >
            Meet the Team
          </a>
        </motion.div>

      </div>
    </section>
  );
}
