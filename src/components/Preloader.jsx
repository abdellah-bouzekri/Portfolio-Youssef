import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200; // 2.2 seconds
    const startTime = Date.now();

    const frame = () => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(current);

      if (current < 100) {
        requestAnimationFrame(frame);
      } else {
        // Brief pause at 100% before curtain lifts
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 250);
      }
    };

    requestAnimationFrame(frame);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[100] bg-[#06070c] flex flex-col justify-between p-8 sm:p-14 text-white select-none pointer-events-auto"
    >
      {/* Top subtle status */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
        <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
          Studio Reel • 60 FPS
        </span>
      </div>

      {/* Left side: Name */}
      <div className="my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-white">
            YOUSSEF
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-purple-400 uppercase mt-2">
            Motion Designer & 3D Animator
          </p>
        </motion.div>
      </div>

      {/* Bottom bar: Info on left, 0 to 100% on bottom right */}
      <div className="flex items-end justify-between border-t border-white/10 pt-6">
        <span className="text-xs font-mono text-slate-500">
          MOROCCO / WORLDWIDE
        </span>

        {/* Counter on bottom right */}
        <div className="font-mono text-6xl sm:text-8xl font-bold tracking-tighter text-white leading-none">
          <span className="text-purple-400">
            {String(progress).padStart(2, "0")}
          </span>
          <span className="text-2xl sm:text-3xl text-slate-500 font-normal ml-1">
            %
          </span>
        </div>
      </div>

      {/* Bottom glowing line tracker */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-purple-600 via-violet-400 to-indigo-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}
