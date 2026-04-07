"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RotatingText() {
  const words = ["PROGRAMARLO_", "HACERLO_", "LOGRARLO_", "MAQUETARLO_", "VISUALIZANDO_"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className="inline-block relative min-w-[200px] md:min-w-[400px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-primary drop-shadow-[0_0_20px_rgba(57,255,20,0.4)] glitch-text"
          data-text={words[index]}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
