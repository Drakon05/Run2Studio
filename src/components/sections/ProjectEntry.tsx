"use client";
import MooveO from "@/components/MooveO";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const options = [
  "I have an idea",
  "I have a problem",
  "I have a deadline",
  "I have a product that needs fixing",
  "Something else",
];

export default function ProjectEntry() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsTransitioning(true);
    // In a real app, this might scroll to a form or open a modal after a delay
  };

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 bg-brand-blue text-brand-light flex items-center justify-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto w-full text-center relative h-[400px] flex items-center justify-center">
        
        <AnimatePresence mode="wait">
          {!isTransitioning ? (
            <motion.div
              key="options"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center"
            >
              <h2 className="font-primary text-4xl md:text-6xl font-bold tracking-tight uppercase mb-12">
                Need to M<MooveO className="inline-block h-[0.75em] w-auto mx-[0.05em] -translate-y-[0.05em]" />VE?
              </h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-6 py-4 rounded-full border border-brand-light/30 font-secondary font-bold tracking-widest text-sm md:text-base uppercase hover:bg-brand-light hover:text-brand-blue transition-colors duration-300"
                    data-cursor="SELECT"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <h3 className="font-primary text-5xl md:text-7xl font-bold tracking-tight uppercase mb-12 leading-tight">
                Good. <br/> Let&apos;s run with it.
              </h3>
              <a
                href="mailto:hello@run2.studio"
                className="group flex items-center gap-4 bg-brand-dark text-brand-light px-8 py-5 rounded-full font-bold font-secondary uppercase tracking-wider hover:bg-brand-light hover:text-brand-dark transition-colors"
                data-cursor="SEND EMAIL"
              >
                Send Enquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
