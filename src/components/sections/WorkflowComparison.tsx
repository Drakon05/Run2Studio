"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const traditionalSteps = [
  "Customer insight / trend",
  "Concept",
  "Product development",
  "Manufacturer",
  "Sampling / development",
  "Costing",
  "COGS negotiation",
  "Quality",
  "Production",
  "Warehouse",
  "Sale"
];

const run2Steps = [
  "Designed by Run2",
  "Manufacturable by an existing furniture manufacturer",
  "Scalable through Pepperfry's sourcing network"
];

export default function WorkflowComparison() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-light text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-24">
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase mb-6">
            The Workflow
          </h2>
          <p className="font-secondary text-xl md:text-2xl text-[#555] font-medium max-w-3xl mx-auto">
            Traditional pipelines are bloated. We bypass the noise to get products to market faster.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          {/* Traditional Workflow */}
          <div className="flex-1 flex flex-col opacity-60">
            <h3 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] mb-12 text-center lg:text-left">
              The Old Way (Big Companies)
            </h3>
            <div className="flex flex-col gap-3 relative">
              {traditionalSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <div className="bg-[#E0E0E0] text-[#555] font-secondary font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-md border border-[#CCC] w-full max-w-xs text-center lg:text-left">
                    {step}
                  </div>
                  {i < traditionalSteps.length - 1 && (
                    <div className="h-6 w-px bg-[#CCC] my-1 flex justify-center lg:ml-12"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* VS Divider (Desktop) */}
          <div className="hidden lg:flex flex-col items-center justify-center px-8">
            <div className="w-px h-full bg-brand-gray/30 relative flex items-center justify-center">
              <span className="bg-brand-light p-4 font-primary font-bold text-brand-gray uppercase tracking-widest absolute">VS</span>
            </div>
          </div>

          {/* VS Divider (Mobile) */}
          <div className="flex lg:hidden items-center justify-center py-8">
             <span className="font-primary font-bold text-brand-gray uppercase tracking-widest">VS</span>
          </div>

          {/* Run2 Workflow */}
          <div className="flex-1 flex flex-col">
            <h3 className="font-secondary text-sm font-bold tracking-widest uppercase text-brand-blue mb-12 text-center lg:text-left">
              The Run2 Way (Sped Up)
            </h3>
            <div className="flex flex-col gap-6 relative h-full justify-center">
              {run2Steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  className="flex flex-col items-center lg:items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <div className="bg-brand-blue text-brand-light font-secondary font-bold uppercase tracking-wide text-sm md:text-base px-8 py-6 rounded-md shadow-xl w-full max-w-sm text-center lg:text-left border border-brand-blue">
                    {step}
                  </div>
                  {i < run2Steps.length - 1 && (
                    <div className="h-12 w-px bg-brand-blue my-2 flex justify-center lg:ml-12 relative overflow-hidden">
                       <motion.div 
                        className="absolute top-0 text-brand-blue"
                        animate={{ y: [0, 48, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      >
                        <ArrowDown size={16} className="-translate-x-[7.5px]" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
