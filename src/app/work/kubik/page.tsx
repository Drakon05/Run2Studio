"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

export default function Kubik() {
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
            <span>Modular Systems</span>
            <span className="w-1 h-1 bg-brand-gray rounded-full" />
            <span>2026</span>
            <span className="md:ml-auto">02</span>
          </div>
          
          <h1 className="font-primary text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            Kubik
          </h1>
          <p className="font-secondary text-2xl md:text-3xl font-medium text-brand-light max-w-2xl border-t border-brand-gray/30 pt-8">
            Stackable modular storage system
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
            src="/projects/kubik/01_cover_hero.png" 
            alt="Kubik System" 
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
              One module. Many configurations.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p className="font-secondary text-xl text-brand-gray leading-relaxed font-medium">
              One 400 mm module. Concealed magnets in every face, so any cube meets any other cube in any orientation. The furniture type is decided by how many you own and where you put them.
            </p>
          </div>
        </div>

        <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] mb-8">Four Functions, One Component</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { title: "Storage", id: "01", img: "/projects/kubik/04_function_storage.png" },
            { title: "Shelf", id: "02", img: "/projects/kubik/05_function_shelf.png" },
            { title: "Side table", id: "03", img: "/projects/kubik/06_function_side_table.png" },
            { title: "Stool", id: "04", img: "/projects/kubik/07_function_stool.png" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="aspect-[3/4] bg-white overflow-hidden p-8 flex items-center justify-center">
                <img src={item.img} className="w-full h-full object-contain mix-blend-multiply" alt={item.title} />
              </div>
              <div>
                <span className="font-secondary text-brand-blue font-bold text-sm">{item.id}</span>
                <h3 className="font-secondary text-xl font-bold uppercase tracking-widest inline-block ml-4">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888] mb-8">Grouped</h4>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="aspect-[3/4] bg-white overflow-hidden p-8 flex items-center justify-center">
              <img src="/projects/kubik/08_grouped_vertical_storage.png" className="w-full h-full object-contain mix-blend-multiply" alt="Vertical storage" />
            </div>
            <div>
              <h3 className="font-secondary text-xl font-bold uppercase tracking-widest mb-1">Vertical storage</h3>
              <p className="font-secondary text-brand-gray text-sm">3 modules</p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="aspect-[3/4] bg-white overflow-hidden p-8 flex items-center justify-center">
              <img src="/projects/kubik/09_grouped_table_with_stools.png" className="w-full h-full object-contain mix-blend-multiply" alt="Table with stools" />
            </div>
            <div>
              <h3 className="font-secondary text-xl font-bold uppercase tracking-widest mb-1">Table with stools</h3>
              <p className="font-secondary text-brand-gray text-sm">8 modules</p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="aspect-[3/4] bg-white overflow-hidden p-8 flex items-center justify-center">
              <img src="/projects/kubik/10_single_module_detail.png" className="w-full h-full object-contain mix-blend-multiply" alt="Single module" />
            </div>
            <div>
              <h3 className="font-secondary text-xl font-bold uppercase tracking-widest mb-1">Single module</h3>
              <p className="font-secondary text-brand-gray text-sm">400 x 400 x 400 mm</p>
            </div>
          </div>
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
                The same eight modules, two apartments. Nothing is bought, discarded or modified between the two arrangements - the cubes are simply taken apart and put back together somewhere else.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <div className="aspect-video bg-[#E0E0E0] overflow-hidden">
                <img src="/projects/kubik/11_adaptability_stacked.png" className="w-full h-full object-cover" alt="Stacked" />
              </div>
              <div>
                <h3 className="font-secondary text-xl font-bold uppercase tracking-widest mb-2"><span className="text-brand-blue mr-2">A</span> Stacked</h3>
                <p className="font-secondary text-[#555] text-sm">Storage and shelving against one wall</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="aspect-video bg-[#E0E0E0] overflow-hidden">
                <img src="/projects/kubik/12_adaptability_dispersed.png" className="w-full h-full object-cover" alt="Dispersed" />
              </div>
              <div>
                <h3 className="font-secondary text-xl font-bold uppercase tracking-widest mb-2"><span className="text-brand-blue mr-2">B</span> Dispersed</h3>
                <p className="font-secondary text-[#555] text-sm">Low table, stools and side tables</p>
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
            A rotationally moulded recycled HDPE shell, a reclaimed wood veneer insert and twenty-four magnets. No visible fixings, no tools, nothing to lose between moves.
          </p>
          <p className="font-secondary text-lg text-[#888] leading-relaxed font-medium max-w-4xl">
            Magnets are seated in blind pockets during moulding and capped by the shell wall, so no fastener is visible on any face. The 2 mm edge chamfer locates one module against the next before the magnets close the last few millimetres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          <div className="flex flex-col gap-6">
            <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888]">Material Detail</h4>
            <div className="bg-white p-8 aspect-video flex items-center justify-center">
              <img src="/projects/kubik/14_material_reclaimed_wood_veneer.png" className="w-full h-full object-contain" alt="Wood Veneer" />
            </div>
            <p className="font-secondary text-brand-gray text-sm text-center">Reclaimed wood veneer</p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888]">Magnetic Connection</h4>
            <div className="bg-white p-8 aspect-video flex items-center justify-center">
              <img src="/projects/kubik/13_construction_magnetic_connection.png" className="w-full h-full object-contain" alt="Magnetic connection" />
            </div>
            <p className="font-secondary text-brand-gray text-sm text-center">N42 discs, alternating polarity</p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="font-secondary text-sm font-bold tracking-widest uppercase text-[#888]">Edge Detail</h4>
            <div className="bg-white p-8 aspect-video flex items-center justify-center">
              <img src="/projects/kubik/15_construction_edge_detail.png" className="w-full h-full object-contain" alt="Edge detail" />
            </div>
            <p className="font-secondary text-brand-gray text-sm text-center">Concealed connector</p>
          </div>
        </div>

        {/* Specs Table */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-brand-gray/30 pt-16">
          {[
            { label: "Module", value: "400 x 400 x 400 mm" },
            { label: "Corner Radius", value: "24 mm" },
            { label: "Shell", value: "Recycled HDPE, 12 mm wall" },
            { label: "Insert", value: "Reclaimed wood veneer, 6 mm" },
            { label: "Connectors", value: "24 x N42 disc, 20 x 6 mm" },
            { label: "Mass / Load", value: "6.4 kg - rated 120 kg" },
          ].map((spec, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-secondary text-[10px] text-brand-gray font-bold tracking-widest uppercase">{spec.label}</span>
              <span className="font-secondary text-sm font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Outro Image */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-24">
        <div className="w-full aspect-[4/3] md:aspect-video bg-brand-gray/10 relative overflow-hidden">
          <img 
            src="/projects/kubik/16_final_hero.png" 
            alt="Kubik final" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
