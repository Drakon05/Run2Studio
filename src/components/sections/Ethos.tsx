"use client";
import MooveO from "@/components/MooveO";

import { motion } from "framer-motion";

const ethos = [
  { title: <>Keep M<MooveO className="inline-block h-[0.75em] w-auto mx-[0.05em] -translate-y-[0.05em]" />VING.</>, desc: "Progress over paralysis." },
  { title: "Work Close.", desc: "Fewer layers. Better conversations." },
  { title: "Make it happen.", desc: "Ideas are useful. Resolved ideas are better." },
  { title: "Keep it clear.", desc: "Organised systems. Clear communication. No unnecessary fog." },
];

export default function Ethos() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-6">
        
        <div className="md:col-span-5">
          <motion.h2 
            className="font-primary text-4xl md:text-6xl font-bold tracking-tight uppercase sticky top-40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            How We<br />Work
          </motion.h2>
        </div>

        <div className="md:col-span-7 flex flex-col gap-16">
          {ethos.map((item, i) => (
            <motion.div 
              key={i}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="font-primary text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-blue">
                {item.title}
              </h3>
              <p className="font-secondary text-xl md:text-2xl text-brand-gray font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
