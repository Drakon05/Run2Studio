"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import MooveO from "@/components/MooveO";

export default function FoldAndNest() {
  return (
    <main className="min-h-screen relative selection:bg-brand-blue selection:text-brand-light bg-brand-dark text-brand-light overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div 
          className="md:col-span-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 text-brand-gray text-sm font-secondary tracking-widest uppercase mb-12">
            <span>Furniture</span>
            <span className="w-1 h-1 bg-brand-gray rounded-full" />
            <span>Compact Living</span>
            <span className="w-1 h-1 bg-brand-gray rounded-full" />
            <span>2026</span>
            <span className="ml-auto">01</span>
          </div>
          
          <h1 className="font-primary text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            Fold <br />& Nest
          </h1>
          <p className="font-secondary text-2xl md:text-3xl font-medium text-brand-light max-w-2xl border-t border-brand-gray/30 pt-8">
            Modular sofa / bed / storage system
          </p>
        </motion.div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-32">
        <motion.div 
          className="w-full aspect-video bg-brand-gray/10 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img 
            src="/projects/fold-and-nest/16.png" 
            alt="Fold and Nest System" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* The Idea */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-gray/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="font-primary text-5xl md:text-6xl font-bold tracking-tight uppercase mb-8">
              The Idea
            </h2>
            <p className="font-secondary text-2xl text-brand-light leading-relaxed font-medium">
              Fold & Nest transforms between everyday seating, sleeping and compact storage within a single system.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p className="font-secondary text-xl text-brand-gray leading-relaxed font-medium">
              A compact home has one room and several jobs for it. Fold & Nest keeps all three functions inside one cabinet footprint, so the floor is only occupied by the function currently in use.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="flex flex-col gap-6">
            <div className="aspect-[3/4] bg-brand-gray/10 overflow-hidden">
              <img src="/projects/fold-and-nest/5.png" className="w-full h-full object-cover" alt="Storage State" />
            </div>
            <div>
              <span className="font-secondary text-brand-blue font-bold text-sm">01</span>
              <h3 className="font-secondary text-xl font-bold uppercase tracking-widest inline-block ml-4">Storage</h3>
              <p className="font-secondary text-brand-gray text-sm mt-2">1020 x 440 mm &mdash; 0.45 sq m</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="aspect-[3/4] bg-brand-gray/10 overflow-hidden">
              <img src="/projects/fold-and-nest/0.png" className="w-full h-full object-cover" alt="Sofa State" />
            </div>
            <div>
              <span className="font-secondary text-brand-blue font-bold text-sm">02</span>
              <h3 className="font-secondary text-xl font-bold uppercase tracking-widest inline-block ml-4">Sofa</h3>
              <p className="font-secondary text-brand-gray text-sm mt-2">1020 x 1430 mm &mdash; 1.46 sq m</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="aspect-[3/4] bg-brand-gray/10 overflow-hidden">
              <img src="/projects/fold-and-nest/3.png" className="w-full h-full object-cover" alt="Bed State" />
            </div>
            <div>
              <span className="font-secondary text-brand-blue font-bold text-sm">03</span>
              <h3 className="font-secondary text-xl font-bold uppercase tracking-widest inline-block ml-4">Bed</h3>
              <p className="font-secondary text-brand-gray text-sm mt-2">1020 x 2420 mm &mdash; 2.47 sq m</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Development */}
      <section className="py-24 px-6 md:px-12 bg-brand-light text-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 mb-24">
            <div>
              <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
                Form Development
              </h2>
            </div>
            <div>
              <p className="font-secondary text-xl text-[#555] leading-relaxed font-medium max-w-3xl">
                Four weeks of sketching around one question: where the sleeping surface lives when it is not in use. The answer - upright, inside the cabinet, with its underside upholstered so the stored state is still a finished piece of furniture.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <div className="bg-brand-gray/10 aspect-[3/4]">
                <img src="/projects/fold-and-nest/8.png" className="w-full h-full object-contain p-4 mix-blend-multiply" alt="Front" />
              </div>
              <span className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] text-center">Front</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-brand-gray/10 aspect-[3/4]">
                <img src="/projects/fold-and-nest/6.png" className="w-full h-full object-contain p-4 mix-blend-multiply" alt="Open" />
              </div>
              <span className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] text-center">Open</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-brand-gray/10 aspect-[3/4]">
                <img src="/projects/fold-and-nest/9.png" className="w-full h-full object-contain p-4 mix-blend-multiply" alt="Side" />
              </div>
              <span className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] text-center">Side</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-brand-gray/10 aspect-[3/4]">
                <img src="/projects/fold-and-nest/10.png" className="w-full h-full object-contain p-4 mix-blend-multiply" alt="Back" />
              </div>
              <span className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] text-center">Back</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-primary text-5xl md:text-6xl font-bold tracking-tight uppercase mb-8">
            Product Details
          </h2>
          <p className="font-secondary text-xl text-brand-gray leading-relaxed font-medium max-w-3xl">
            Oak-veneered plywood carcass, solid timber deck frame and legs, cotton-jute loose covers. Brass pivot hardware sits on the deck axis, concealed behind the frame.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { title: "Upholstered Front", desc: "The deck underside is covered, so the stored state reads as a finished cabinet.", img: "/projects/fold-and-nest/13.png" },
            { title: "Peg and Cleat", desc: "Timber cleats locate the deck; legs drop onto pegs. No screws at the moving joints.", img: "/projects/fold-and-nest/14.png" },
            { title: "Open Bay", desc: "Shelves behind the deck stay reachable in every configuration.", img: "/projects/fold-and-nest/15.png" },
            { title: "Transformation", desc: "One pivot line, two hinged leaves, four drop-on legs. Nothing is added or removed between states.", img: "/projects/fold-and-nest/4.png" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="aspect-[3/4] bg-brand-gray/10">
                <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
              </div>
              <div>
                <h4 className="font-secondary font-bold text-xl uppercase tracking-widest mb-3">{item.title}</h4>
                <p className="font-secondary text-brand-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specs Table */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-brand-gray/30 pt-16">
          {[
            { label: "Cabinet", value: "1020 x 440 x 2010 mm" },
            { label: "Sleeping Surface", value: "940 x 1980 mm" },
            { label: "Seat Height", value: "440 mm" },
            { label: "Deck Height", value: "320 mm" },
            { label: "Panel Thickness", value: "18 mm" },
            { label: "Components", value: "2 leaves - 4 legs - 3 shelves" },
          ].map((spec, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-secondary text-[10px] text-brand-gray font-bold tracking-widest uppercase">{spec.label}</span>
              <span className="font-secondary text-sm font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
