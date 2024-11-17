"use client";

import { campaignSlogans } from "./campaign-slogans";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function RotatingTagline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        (prev + 1) % campaignSlogans.taglines.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary/5 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-3xl md:text-4xl font-semibold text-primary text-center"
          >
            {campaignSlogans.taglines[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
} 