"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Opening from "@/components/sections/Opening";
import Hero from "@/components/sections/Hero";
import Positioning from "@/components/sections/Positioning";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import ProjectEntry from "@/components/sections/ProjectEntry";
import About from "@/components/sections/About";
import Ethos from "@/components/sections/Ethos";
import Footer from "@/components/sections/Footer";

let globalIntroSeen = false;

export default function Home() {
  const [openingComplete, setOpeningComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if we are bypassing the intro via a navigation click or if it was already seen in this JS context
    // We use a custom window property to catch navigation clicks from other pages
    const hasBypass = typeof window !== 'undefined' && (window as any).run2_intro_bypass === true;
    if (globalIntroSeen || hasBypass || window.location.hash === '#hero') {
      setOpeningComplete(true);
      globalIntroSeen = true;
    }
  }, []);

  const handleComplete = () => {
    globalIntroSeen = true;
    setOpeningComplete(true);
  };

  if (!isMounted) return <main className="min-h-screen bg-brand-dark"></main>;

  return (
    <main className="min-h-screen relative selection:bg-brand-blue selection:text-brand-light bg-brand-dark text-brand-light">
      <AnimatePresence>
        {!openingComplete ? (
          <Opening key="opening" onComplete={handleComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navigation />
            <Hero />
            <Positioning />
            <Process />
            <Work />
            <Services />
            <ProjectEntry />
            <About />
            <Ethos />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
