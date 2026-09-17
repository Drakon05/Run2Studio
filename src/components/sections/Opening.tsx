"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Opening({ onComplete }: { onComplete: () => void }) {
  const [isActive, setIsActive] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleActivate = () => {
    setIsActive(true);
    // Sequence: switch flips -> text reveals -> screen scales up/fades out
    setTimeout(() => {
      setIsRevealed(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }, 500);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0B] text-[#F4F4F4]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                key="toggle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="font-secondary tracking-widest text-xs text-[#B0B0B0] uppercase">
                  System Standby
                </div>
                
                {/* The Toggle */}
                <button
                  onClick={handleActivate}
                  className={`relative flex h-16 w-32 items-center rounded-full p-2 transition-colors duration-500 border-2 ${
                    isActive ? "bg-brand-blue border-brand-blue" : "border-brand-blue/50 bg-transparent"
                  }`}
                  data-cursor="RUN WITH IT →"
                >
                  <motion.div
                    className="h-12 w-12 rounded-full bg-[#F4F4F4]"
                    layout
                    initial={false}
                    animate={{
                      x: isActive ? 64 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-tagline text-5xl md:text-8xl tracking-tight uppercase"
              >
                Run With It.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
