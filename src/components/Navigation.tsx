"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { assetPath } from "@/lib/assets";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "/#hero" && typeof window !== "undefined") {
      (window as any).run2_intro_bypass = true;
    }
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      router.push(href);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 400);
  };

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[100] bg-brand-dark/60 backdrop-blur-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${
          scrolled ? "bg-brand-dark/80 backdrop-blur-md py-4" : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/" data-cursor="VIEW →" onClick={(e) => handleNav(e, "/")}>
          <img src={assetPath("/logo.png")} alt="RUN2 STUDIO" className="h-10 w-auto rounded-md" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-secondary text-sm font-medium tracking-wide">
          <a 
            href="/#hero" 
            className="hover:text-brand-blue transition-colors uppercase cursor-pointer"
            onClick={(e) => handleNav(e, "/#hero")}
          >
            Home
          </a>
          <a 
            href="/#work" 
            className="hover:text-brand-blue transition-colors uppercase cursor-pointer" 
            onClick={(e) => {
              if (typeof window !== "undefined") {
                (window as any).run2_intro_bypass = true;
              }
              handleNav(e, "/#work");
            }}
          >
            Work
          </a>
          <a 
            href="/about" 
            className="hover:text-brand-blue transition-colors uppercase cursor-pointer" 
            onClick={(e) => handleNav(e, "/about")}
          >
            About
          </a>
        </nav>

        <a 
          href="/#contact" 
          className="font-secondary text-sm font-bold uppercase tracking-wider text-brand-blue hover:text-brand-light transition-colors cursor-pointer"
          onClick={(e) => handleNav(e, "/#contact")}
          data-cursor="RUN WITH IT →"
        >
          Start a Project →
        </a>
      </motion.header>
    </>
  );
}
