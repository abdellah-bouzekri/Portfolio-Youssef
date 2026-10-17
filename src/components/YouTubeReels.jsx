import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function YouTubeReels() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { key: "All", label: "All Reels" },
    { key: "3D & Brand", label: "3D & Brand" },
    { key: "UI Motion", label: "UI Motion" },
    { key: "Typography", label: "Typography" },
  ];

  const reelsData = [
    {
      id: "1",
      youtubeId: "c1k9FPJYQYI",
      title: "UI Motion Breakdown",
      category: "UI Motion",
    },
    {
      id: "2",
      youtubeId: "IYMjfLGl8-M",
      title: "3D Brand Reveal",
      category: "3D & Brand",
    },
    {
      id: "3",
      youtubeId: "ByQ_FyuoGd8",
      title: "Kinetic Typography",
      category: "Typography",
    },
    {
      id: "4",
      youtubeId: "88pWclPTdAw",
      title: "App Micro-interactions",
      category: "UI Motion",
    },
  ];

  const filteredReels =
    activeFilter === "All"
      ? reelsData
      : reelsData.filter((reel) => reel.category === activeFilter);

  return (
    <section id="reels" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="text-start">
          <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
            ✦ YouTube Shorts
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t?.reels?.title || "Latest Motion Reels"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === cat.key
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Grid Wrapper */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredReels.map((reel, idx) => (
            <motion.div
              layout
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-transparent border border-white/5 overflow-hidden flex flex-col hover:border-purple-500/40 transition-colors"
            >
              {/* Category Badge */}
              <div className="absolute top-4 start-4 z-10 pointer-events-none">
                <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white uppercase tracking-wider shadow-lg">
                  {reel.category}
                </span>
              </div>

              {/* YouTube Embed */}
              <div className="relative w-full aspect-[9/16] bg-black rounded-3xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${reel.youtubeId}?rel=0&modestbranding=1`}
                  title={reel.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Clean Bottom - Just the title, no background, no icons */}
              <div className="pt-4 pb-2 px-2">
                <h3 className="text-sm font-semibold text-white/95 truncate">
                  {reel.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
