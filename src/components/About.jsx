import React from "react";
import { GraduationCap, Check } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="rounded-3xl bg-space-900/60 border border-white/10 p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
        <div className="max-w-2xl mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
            {t.about.kicker}
          </h2>
          <p className="font-display text-3xl font-bold text-white mb-4">
            {t.about.title}
          </p>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            {t.about.bio}
          </p>
        </div>

        {/* Education Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {t.about.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400 font-semibold">
                  {edu.institution}
                </span>
                <h4 className="text-white font-bold text-base mt-0.5 mb-1">
                  {edu.degree}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Production Tools */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            {t.about.toolkitTitle}
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {personalInfo.skills.map((skill, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
              >
                <Check className="w-3.5 h-3.5 text-purple-400" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
