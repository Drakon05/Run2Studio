"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { assetPath } from "@/lib/assets";

const team = [
  {
    name: "Arjun Addanki",
    role: "CEO",
    image: assetPath("/team/arjun.jpg"),
  },
  {
    name: "Manasi C Mohan",
    role: "CDO",
    image: assetPath("/team/manasi.jpg"),
  },
  {
    name: "Naisha Singh",
    role: "Designer",
    image: assetPath("/team/naisha.jpg"),
  },
  {
    name: "Kanak Thawani",
    role: "Intern",
    image: assetPath("/team/kanak.jpg"),
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen relative selection:bg-brand-blue selection:text-brand-light bg-brand-dark text-brand-light overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-primary text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            Fast. <br /> Focused.
          </h1>
          <p className="font-secondary text-2xl md:text-3xl font-medium text-brand-gray max-w-2xl mx-auto mt-12">
            A tight-knit team of <span className="text-brand-light">21 people</span> stationed in <span className="text-brand-light">Ahmedabad, India</span>.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={member.name}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-[4/5] bg-brand-gray/10 rounded-lg overflow-hidden relative border border-brand-gray/20">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-brand-dark">
                    <span className="font-secondary text-brand-gray text-sm tracking-widest uppercase">Photo pending</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <h3 className="font-secondary text-xl font-bold tracking-widest uppercase mb-1">{member.name}</h3>
                <p className="font-secondary text-brand-blue font-bold text-sm tracking-widest uppercase">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Communication Hierarchy */}
      <section className="py-32 px-6 md:px-12 bg-brand-light text-brand-dark">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="font-primary text-4xl md:text-6xl font-bold tracking-tight uppercase mb-8">
              Horizontal Hierarchy
            </h2>
            <p className="font-secondary text-xl md:text-2xl text-[#555] font-medium max-w-3xl mx-auto">
              We keep our team small and our communication horizontal. Because talking directly is always faster than climbing a ladder.
            </p>
          </motion.div>

          {/* Diagram Container */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            
            {/* The Vertical Way (Slow) */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] mb-12">The Old Way (Vertical)</h4>
              <div className="flex flex-col items-center gap-8 relative">
                {/* Nodes */}
                <div className="w-16 h-16 rounded-full bg-brand-gray/20 flex items-center justify-center z-10"><span className="font-secondary font-bold text-xs">CEO</span></div>
                <div className="w-1 h-8 bg-brand-gray/30 -my-8 z-0"></div>
                <div className="w-16 h-16 rounded-full bg-brand-gray/20 flex items-center justify-center z-10"><span className="font-secondary font-bold text-xs">CDO</span></div>
                <div className="w-1 h-8 bg-brand-gray/30 -my-8 z-0"></div>
                <div className="w-16 h-16 rounded-full bg-brand-gray/20 flex items-center justify-center z-10"><span className="font-secondary font-bold text-xs">Lead</span></div>
                <div className="w-1 h-8 bg-brand-gray/30 -my-8 z-0"></div>
                <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center z-10 text-white"><span className="font-secondary font-bold text-xs">You</span></div>
              </div>
              <p className="font-secondary text-sm text-[#888] mt-12 text-center max-w-xs">
                Ideas get filtered, watered down, and delayed as they travel up the chain.
              </p>
            </motion.div>

            {/* The Horizontal Way (Fast) */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-brand-blue mb-12">The Run2 Way (Horizontal)</h4>
              
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Center Node */}
                <div className="absolute w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center z-20 text-white shadow-xl">
                  <span className="font-secondary font-bold text-sm">Idea</span>
                </div>

                {/* Connecting Lines */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full text-brand-blue/30" viewBox="0 0 100 100">
                    <line x1="50" y1="50" x2="50" y2="10" stroke="currentColor" strokeWidth="1" />
                    <line x1="50" y1="50" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
                    <line x1="50" y1="50" x2="10" y2="50" stroke="currentColor" strokeWidth="1" />
                    <line x1="50" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                {/* Outer Nodes */}
                <div className="absolute top-0 w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center z-10 text-white border-4 border-brand-light -mt-4"><span className="font-secondary font-bold text-xs">CEO</span></div>
                <div className="absolute bottom-0 w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center z-10 text-white border-4 border-brand-light -mb-4"><span className="font-secondary font-bold text-xs">CDO</span></div>
                <div className="absolute left-0 w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center z-10 text-white border-4 border-brand-light -ml-4"><span className="font-secondary font-bold text-xs">Lead</span></div>
                <div className="absolute right-0 w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center z-10 text-white border-4 border-brand-light -mr-4"><span className="font-secondary font-bold text-xs">Intern</span></div>
              </div>
              
              <p className="font-secondary text-sm text-[#555] mt-12 text-center max-w-xs font-bold">
                Everyone has a direct line. Decisions happen instantly.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
