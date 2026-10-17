import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Film } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { key: "All", label: t.projects.categories.all },
    { key: "3D & Brand", label: t.projects.categories.brand3d },
    { key: "UI Motion", label: t.projects.categories.ui },
    { key: "Typography", label: t.projects.categories.type },
  ];

  const currentItems = t.projects.items;

  const filteredProjects =
    activeFilter === "All"
      ? currentItems
      : currentItems.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
            {t.projects.kicker}
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.projects.title}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === cat.key
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-[#0f111a] border border-white/10 overflow-hidden hover:border-purple-500/30 transition-colors flex flex-col justify-between"
            >
              {/* Visual Thumbnail avec Image */}
              <div
                className={`h-64 w-full relative p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${project.accent || "from-gray-800 to-gray-900"}`}
              >
                {/* L'image du projet */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-0"
                  />
                )}

                {/* Overlay gradient pour que le texte reste lisible */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-0 pointer-events-none"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/90 bg-black/40 px-2 py-1 rounded backdrop-blur-md">
                    {project.duration}
                  </span>
                </div>

                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg group-hover:bg-purple-500/80 transition-colors">
                    <Film className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-white font-semibold drop-shadow-md">
                    {t.projects.clientLabel} {project.client}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 relative z-20 bg-[#0f111a]">
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 rtl:rotate-[-90deg] transition-all duration-300" />
                </h3>
                <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Software Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.software.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-purple-200 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
