import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Showreel() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    initialLeft: { x: -40, opacity: 0 },
    initialRight: { x: 40, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    hoverLeft: { x: -20, transition: { duration: 0.4, ease: "easeOut" } },
    hoverRight: { x: 20, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="showreel"
      className="py-20 px-6 max-w-7xl mx-auto overflow-hidden relative"
    >
      {/* Section Kicker */}
      <div className="text-center md:text-left mb-10">
        <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
          {t?.showreel?.kicker || "Demo Reel 2026"}
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          {t?.showreel?.title || "Click anywhere to watch selected motion work"}
        </p>
      </div>

      {/* Floating Typographic Link (No Background) */}
      <motion.a
        href="https://www.youtube.com/@JosephVboullvil"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative block w-full py-12 md:py-20 group cursor-pointer"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Huge Brutalist typography */}
        <div className="flex flex-col gap-1 md:gap-4 select-none relative z-10">
          {/* "Youssef" */}
          <motion.h3
            variants={{
              initial: textVariants.initialLeft,
              animate: textVariants.animate,
              hover: textVariants.hoverLeft,
            }}
            animate={isHovered ? "hover" : "animate"}
            className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] leading-none text-[#e2dfd9] uppercase tracking-tighter self-start"
          >
            YOUSSEF
          </motion.h3>

          {/* "Abolail" */}
          <motion.h3
            variants={{
              initial: textVariants.initialRight,
              animate: textVariants.animate,
              hover: textVariants.hoverRight,
            }}
            animate={isHovered ? "hover" : "animate"}
            className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] leading-none text-[#e2dfd9] uppercase tracking-tighter self-end md:-mt-4"
          >
            ABOLAIL
          </motion.h3>
        </div>

        {/* Floating Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-purple-600/10 border border-purple-500/30 text-white backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.2)] group-hover:bg-purple-600 group-hover:border-purple-400 transition-all duration-300"
          >
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
          </motion.div>
        </div>

        {/* Subtle Ambient purple glow behind the text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-0" />

        {/* Minimal Watch Indicator */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute bottom-0 right-0 flex items-center gap-2 text-xs font-mono text-purple-400 pointer-events-none"
        >
          <Eye className="w-4 h-4 animate-pulse" />
          <span>WATCH ON YOUTUBE</span>
        </motion.div>
      </motion.a>
    </section>
  );
}
