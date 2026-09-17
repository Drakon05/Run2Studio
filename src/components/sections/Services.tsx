"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    id: "product-design",
    name: "Product Design",
    desc: "End-to-end design from initial concept through to final resolving. We focus on the user experience and the physical reality of the object.",
  },
  {
    id: "industrial-design",
    name: "Industrial Design",
    desc: "Sculpting the physical form and ensuring manufacturability. Bridging the gap between aesthetics and engineering constraints.",
  },
  {
    id: "cmf",
    name: "CMF",
    desc: "Colour, Material, and Finish. Defining the tactile and visual qualities that elevate a product's perceived value.",
  },
  {
    id: "engineering",
    name: "Engineering",
    desc: "Mechanical problem solving. Turning surface models into functional, robust, and buildable assemblies.",
  },
  {
    id: "prototyping",
    name: "Prototyping",
    desc: "Fast physical iterations. Testing ideas in the real world quickly to validate assumptions and refine details.",
  },
  {
    id: "brand",
    name: "Brand / Visual",
    desc: "Aligning the product's identity with the brand's visual language, ensuring a cohesive story from object to packaging.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        
        <div className="md:col-span-5 md:pr-12">
          <motion.h2 
            className="font-primary text-4xl md:text-6xl font-bold tracking-tight uppercase sticky top-40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            What Needs<br />Doing?
          </motion.h2>
        </div>

        <div className="md:col-span-7 flex flex-col">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              className="border-b border-brand-gray/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <button
                className="w-full flex items-center justify-between py-8 text-left group"
                onClick={() => toggleService(service.id)}
              >
                <span className="font-primary text-2xl md:text-4xl font-bold uppercase tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                  {service.name}
                </span>
                <span className="ml-4 flex-shrink-0 text-brand-gray group-hover:text-brand-blue transition-colors duration-300">
                  {activeService === service.id ? <Minus /> : <Plus />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-secondary text-brand-gray text-lg md:text-xl pb-8 max-w-2xl font-medium">
                      {service.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
