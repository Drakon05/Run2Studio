"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Traverse up to find data-cursor
      let el: HTMLElement | null = target;
      let cursorData = null;
      let isClickable = false;

      while (el && el !== document.body) {
        if (el.getAttribute("data-cursor")) {
          cursorData = el.getAttribute("data-cursor");
          break;
        }
        if (window.getComputedStyle(el).cursor === "pointer" || el.tagName === "A" || el.tagName === "BUTTON") {
          isClickable = true;
        }
        el = el.parentElement;
      }

      if (cursorData) {
        setCursorText(cursorData);
        setIsPointer(true);
      } else if (isClickable) {
        setCursorText("VIEW →");
        setIsPointer(true);
      } else {
        setCursorText("");
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Don't render on server
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-colors duration-200 ${
        isPointer 
          ? "bg-brand-dark text-brand-light px-4 py-2" 
          : "bg-brand-dark w-4 h-4"
      }`}
      animate={{
        x: position.x - (isPointer ? 50 : 8),
        y: position.y - (isPointer ? 20 : 8),
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 40,
        mass: 0.1,
      }}
    >
      {isPointer && (
        <span className="font-primary text-xs tracking-widest font-bold uppercase whitespace-nowrap">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
