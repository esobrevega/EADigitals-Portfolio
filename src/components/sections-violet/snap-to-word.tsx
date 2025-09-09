"use client";

import React, { useState, useRef, useEffect } from "react";
import Sticky from "react-stickynode";
import { motion, AnimatePresence } from "framer-motion";

const words = ["We Create", "We Design", "We Build", "We Deliver"];

export const WordStackSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionTop = container.offsetTop;
      const sectionHeight = container.offsetHeight;

      // Clamp scroll between section top and bottom
      const scrollProgress = Math.min(
        1,
        Math.max(0, (scrollTop - sectionTop) / sectionHeight)
      );

      // Map progress to word index
      const wordsToShow = Math.min(
        words.length,
        Math.floor(scrollProgress * words.length) + 1
      );
      setVisibleCount(wordsToShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-[400vh] bg-[#100e09] text-white">
      <Sticky enabled={true} top={0} innerZ={10}>
        <section className="h-screen grid place-items-center overflow-hidden px-24">
          <div className="flex flex-col items-start justify-end gap-4 text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <AnimatePresence>
              {words.slice(0, visibleCount).map((word, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }} // start lower
                  animate={{ opacity: 1, y: 0 }}  // move up
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {word}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </Sticky>
    </div>
  );
};
