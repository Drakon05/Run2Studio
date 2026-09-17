"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

export default function Verso() {
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
          <div className="flex items-center gap-4 text-brand-gray text-sm font-secondary tracking-widest uppercase mb-12 flex-wrap">
            <span>Furniture</span>
            <span className="w-1 h-1 bg-brand-gray rounded-full" />
            <span>Space Saving Systems</span>
            <span className="w-1 h-1 bg-brand-gray rounded-full" />
            <span>2026</span>
            <span className="md:ml-auto">03</span>
          </div>
          
          <h1 className="font-primary text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            Verso
          </h1>
          <p className="font-secondary text-2xl md:text-3xl font-medium text-brand-light max-w-2xl border-t border-brand-gray/30 pt-8">
            Wall bed, desk and storage in one cabinet
          </p>
        </motion.div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-32">
        <motion.div 
          className="w-full aspect-[4/3] md:aspect-video bg-brand-gray/10 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img 
            src="/projects/verso/01_Cover_Hero.jpg" 
            alt="Verso System" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* The System */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-gray/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <h2 className="font-primary text-5xl md:text-6xl font-bold tracking-tight uppercase mb-8">
              The System
            </h2>
            <p className="font-secondary text-2xl text-brand-light leading-relaxed font-medium">
              One wall. Three rooms.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p className="font-secondary text-xl text-brand-gray leading-relaxed font-medium">
              A 420 mm deep cabinet holding a single bed, a fold-down desk and open storage. Each element folds back inside the same footprint, so the floor is handed back to the room the moment it is not in use.
            </p>
          </div>
        </div>

        <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] mb-8">Three Modes, One Footprint</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] bg-brand-gray/10 overflow-hidden">
              <img src="/projects/verso/08_Storage_Closed_Lifestyle.jpg" className="w-full h-full object-cover" alt="Storage State" />
            </div>
            <div>
              <span className="font-secondary text-brand-blue font-bold text-sm">01</span>
              <h3 className="font-secondary text-xl font-bold uppercase tracking-widest inline-block ml-4">Storage</h3>
              <p className="font-secondary text-brand-gray text-sm mt-2">Closed. 420 mm from the wall</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] bg-brand-gray/10 overflow-hidden">
              <img src="/projects/verso/09_Day_Desk_Mode.jpg" className="w-full h-full object-cover" alt="Desk State" />
            </div>
            <div>
              <span className="font-secondary text-brand-blue font-bold text-sm">02</span>
              <h3 className="font-secondary text-xl font-bold uppercase tracking-widest inline-block ml-4">Desk</h3>
              <p className="font-secondary text-brand-gray text-sm mt-2">Front leaf down, 1100 x 600 mm</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] bg-brand-gray/10 overflow-hidden">
              <img src="/projects/verso/10_Night_Bed_Mode.jpg" className="w-full h-full object-cover" alt="Bed State" />
            </div>
            <div>
              <span className="font-secondary text-brand-blue font-bold text-sm">03</span>
              <h3 className="font-secondary text-xl font-bold uppercase tracking-widest inline-block ml-4">Bed</h3>
              <p className="font-secondary text-brand-gray text-sm mt-2">Single, 900 x 2000 mm</p>
            </div>
          </div>
        </div>

        <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] mb-8">Every Face</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { title: "Front", img: "/projects/verso/03_Storage_Closed.png" },
            { title: "Front open", img: "/projects/verso/04_Bed_Mode.png" },
            { title: "Side", img: "/projects/verso/05_Side_View.png" },
            { title: "Back", img: "/projects/verso/06_Back_View.png" },
            { title: "Other side", img: "/projects/verso/07_Other_Side_View.png" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="bg-white aspect-[3/4] p-4 flex items-center justify-center">
                <img src={item.img} className="w-full h-full object-contain mix-blend-multiply" alt={item.title} />
              </div>
              <span className="font-secondary text-xs font-bold tracking-widest uppercase text-[#888] text-center">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Adaptability */}
      <section className="py-24 px-6 md:px-12 bg-brand-light text-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 mb-24">
            <div>
              <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
                Adaptability
              </h2>
            </div>
            <div>
              <p className="font-secondary text-xl text-[#555] leading-relaxed font-medium max-w-3xl">
                The same square metre, morning and night. Nothing is carried out of the room and nothing is stored elsewhere - the desk folds up, the bed folds away, and the wall returns to 420 mm.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <div className="aspect-[4/3] bg-[#E0E0E0] overflow-hidden">
                <img src="/projects/verso/11_Day_Desk_Detail.jpg" className="w-full h-full object-cover" alt="Day" />
              </div>
              <div>
                <h3 className="font-secondary text-xl font-bold uppercase tracking-widest mb-2"><span className="text-brand-blue mr-2">A</span> Day</h3>
                <p className="font-secondary text-[#555] text-sm">Desk out, bed stowed behind the doors</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="aspect-[4/3] bg-[#E0E0E0] overflow-hidden">
                <img src="/projects/verso/12_Night_Bed_Detail.jpg" className="w-full h-full object-cover" alt="Night" />
              </div>
              <div>
                <h3 className="font-secondary text-xl font-bold uppercase tracking-widest mb-2"><span className="text-brand-blue mr-2">B</span> Night</h3>
                <p className="font-secondary text-[#555] text-sm">Bed down, desk folded flat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-primary text-5xl md:text-6xl font-bold tracking-tight uppercase mb-8">
            Construction
          </h2>
          <p className="font-secondary text-xl text-brand-gray leading-relaxed font-medium max-w-3xl mb-8">
            An oak-veneered carcass, a solid oak bed frame and a pair of counterbalanced gas struts. The bed is lowered with one hand, and after the four wall anchors are set, nothing else needs a tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="flex flex-col gap-6">
            <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888]">Material Detail</h4>
            <div className="bg-brand-gray/10 p-2 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <img src="/projects/verso/13_Desk_Hinge_Detail.jpg" className="w-full h-full object-cover" alt="Hinge" />
            </div>
            <p className="font-secondary text-brand-gray text-sm text-center">Black steel bracket and hinge</p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888]">&nbsp;</h4>
            <div className="bg-brand-gray/10 p-2 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <img src="/projects/verso/14_Oak_Veneer_Detail.jpg" className="w-full h-full object-cover" alt="Veneer" />
            </div>
            <p className="font-secondary text-brand-gray text-sm text-center">Oak veneer, white oiled</p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888]">&nbsp;</h4>
            <div className="bg-brand-gray/10 p-2 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <img src="/projects/verso/15_Solid_Oak_Bed_Frame_Detail.jpg" className="w-full h-full object-cover" alt="Frame" />
            </div>
            <p className="font-secondary text-brand-gray text-sm text-center">Solid oak bed frame</p>
          </div>
        </div>

        {/* Specs Table */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-brand-gray/30 pt-16">
          {[
            { label: "Unit", value: "1180 x 420 x 2180 mm" },
            { label: "Depth", value: "420 mm - 2100 mm open" },
            { label: "Carcass", value: "Oak veneer on 19 mm panel" },
            { label: "Bed", value: "900 x 2000 mm, 200 mm max" },
            { label: "Hardware", value: "Steel hinge, 2 gas struts" },
            { label: "Mass / Load", value: "96 kg - rated 150 kg" },
          ].map((spec, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-secondary text-[10px] text-brand-gray font-bold tracking-widest uppercase">{spec.label}</span>
              <span className="font-secondary text-sm font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
        
        <p className="font-secondary text-sm text-[#888] mt-12 max-w-4xl">
          The bed frame carries its own legs, which swing down as the frame is lowered and take the load at the foot end. The cabinet is anchored to the wall at four points, so nothing bears on the floor while the unit is closed.
        </p>
      </section>

      {/* Outro Image */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-24">
        <div className="w-full aspect-[4/3] md:aspect-video bg-brand-gray/10 relative overflow-hidden">
          <img 
            src="/projects/verso/16_Final_Bed_Hero.jpg" 
            alt="Verso final" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
