"use client";
import MooveO from "@/components/MooveO";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 relative z-10">
        
        <div className="lg:col-span-12 flex flex-col items-start">
          <motion.h1 
            className="font-tagline text-[12vw] leading-[0.85] tracking-tighter uppercase mb-8"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Run <br />
            <span className="text-brand-blue">With It.</span>
          </motion.h1>
        </div>

        <motion.div 
          className="lg:col-span-5 lg:col-start-8 flex flex-col gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-secondary text-2xl md:text-3xl font-medium tracking-tight">
            Product design for ideas that need to M<MooveO className="inline-block h-[0.75em] w-auto mx-[0.05em] -translate-y-[0.05em]" />VE.
          </h2>
          
          <p className="font-secondary text-brand-gray text-lg max-w-lg leading-relaxed">
            Run2 works with founders, brands and businesses to take products from early direction to resolved, buildable outcomes through a fast, focused and fluid process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <Link 
              href="#contact"
              className="group flex items-center justify-between gap-4 bg-brand-light text-brand-dark px-6 py-4 rounded-full font-bold font-secondary uppercase tracking-wider hover:bg-brand-blue hover:text-brand-light transition-colors"
              data-cursor="RUN WITH IT →"
            >
              Start a Project 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#work"
              className="group flex items-center justify-between gap-4 bg-transparent border border-brand-gray/30 px-6 py-4 rounded-full font-bold font-secondary uppercase tracking-wider hover:border-brand-light transition-colors"
              data-cursor="VIEW →"
            >
              See Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative movement lines */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </section>
  );
}
