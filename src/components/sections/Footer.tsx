"use client";
import MooveO from "@/components/MooveO";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { assetPath } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="bg-transparent pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="font-primary text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-12 leading-[0.9]">
            Have something that needs M<MooveO className="inline-block h-[0.75em] w-auto mx-[0.05em] -translate-y-[0.05em]" />VING?
          </h2>
          
          <Link 
            href="mailto:hello@run2.studio"
            className="group inline-flex items-center gap-6 bg-brand-blue text-brand-light px-8 py-5 md:px-10 md:py-6 rounded-full font-tagline uppercase tracking-widest text-lg md:text-xl hover:bg-brand-light hover:text-brand-blue transition-colors duration-300"
            data-cursor="LET'S GO"
          >
            Run With It 
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        <div className="w-full h-px bg-brand-gray/20 my-12" />

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="flex flex-col gap-6">
            <Link href="/" data-cursor="VIEW →">
              <img src={assetPath("/logo.png")} alt="RUN2 STUDIO" className="h-12 w-auto" />
            </Link>
            <p className="font-secondary text-brand-gray max-w-xs font-medium">
              Turn ideas into well-resolved products. Minimise the layers between client and designer.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24">
            <div className="flex flex-col gap-4 font-secondary">
              <h4 className="uppercase tracking-widest text-xs font-bold text-brand-gray">Contact</h4>
              <a href="mailto:hello@run2.studio" className="hover:text-brand-blue transition-colors font-medium">hello@run2.studio</a>
              <span className="text-brand-gray font-medium">Ahmedabad, GJ</span>
            </div>
            
            <div className="flex flex-col gap-4 font-secondary">
              <h4 className="uppercase tracking-widest text-xs font-bold text-brand-gray">Socials</h4>
              <a href="#" className="hover:text-brand-blue transition-colors font-medium">Instagram</a>
              <a href="#" className="hover:text-brand-blue transition-colors font-medium">LinkedIn</a>
              <a href="#" className="hover:text-brand-blue transition-colors font-medium">Behance</a>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-brand-gray/20 font-secondary text-brand-gray text-sm">
          <span>&copy; {new Date().getFullYear()} Run2 Studio. All rights reserved.</span>
          <span className="mt-4 md:mt-0 uppercase tracking-widest text-xs font-bold">Keep things M<MooveO className="inline-block h-[0.75em] w-auto mx-[0.05em] -translate-y-[0.05em]" />VING.</span>
        </div>
      </div>

      {/* Very large background text */}
      <div className="absolute bottom-[-10%] left-0 w-full text-center pointer-events-none select-none opacity-5">
        <span className="font-primary text-[25vw] font-bold tracking-tighter whitespace-nowrap uppercase">
          Run2
        </span>
      </div>
    </footer>
  );
}
