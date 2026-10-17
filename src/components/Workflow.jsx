import React from "react";
import { motion } from "framer-motion";
import { Eye, Layers, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const stepIcons = [Eye, Layers, Sparkles];

export default function Workflow() {
  const { t } = useLanguage();

  return (
    <section id="workflow" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
          {t.workflow.kicker}
        </h2>
        <p className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
          {t.workflow.title}
        </p>
        <p className="text-sm text-slate-300">{t.workflow.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.workflow.steps.map((item, idx) => {
          const Icon = stepIcons[idx] || Sparkles;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-space-900 border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-purple-400/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Milestone:</span>
                <span className="text-purple-300 font-medium">
                  {item.milestone}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
