import React from "react";
import { motion } from "framer-motion";
import { TypeWriterEffect } from "../typeWriterEffect/TypeWriterEffect";

export function HeroSection() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left md:ml-12"
        >
          <h1 className="text-2xl md:text-4xl flex flex-col md:flex-row items-center md:items-baseline gap-2">
            <span className="text-white">Hello, My Name is Thet. I'm a</span>
            <TypeWriterEffect />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          className="w-48 md:w-60 flex-shrink-0 md:absolute md:right-16"
        >
          <img
            src="src/assets/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
