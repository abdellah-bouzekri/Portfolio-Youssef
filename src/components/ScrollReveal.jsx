import React from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, yOffset = 30 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth cubic-bezier curve
      }}
    >
      {children}
    </motion.div>
  );
}
