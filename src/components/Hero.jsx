import React from "react";
import { Download } from "lucide-react";
import {
  Claude,
  Photoshop,
  Illustrator,
  AfterEffects,
  Premiere,
  DavinciResolve,
  Openai,
  Midjourney,
  Figma,
} from "@thesvg/react";
import { useLanguage } from "../context/LanguageContext";

const designAiTools = [
  { name: "Photoshop", icon: Photoshop },
  { name: "Illustrator", icon: Illustrator },
  { name: "After Effects", icon: AfterEffects },
  { name: "Premiere Pro", icon: Premiere },
  { name: "DaVinci Resolve", icon: DavinciResolve },
  { name: "Claude AI", icon: Claude },
  { name: "ChatGPT / OpenAI", icon: Openai },
  { name: "Figma", icon: Figma },
  { name: "Midjourney", icon: Midjourney },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 lg:pt-20 pb-20 max-w-7xl mx-auto px-6 lg:px-12 overflow-hidden">
      {/* Background ambient purple glows - Updated to start/end for RTL support */}
      <div className="absolute top-1/4 end-10 -z-10 w-96 h-96 bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 start-10 -z-10 w-80 h-80 bg-fuchsia-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Content Column */}
        <div className="lg:col-span-7 text-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-xs text-purple-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{t?.hero?.status || "Available for projects"}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white ltr:tracking-tight rtl:tracking-normal leading-[1.3] sm:leading-[1.2]">
            {t?.hero?.titlePre}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300 inline-block">
              {t?.hero?.titleHighlight}
            </span>{" "}
            {t?.hero?.titlePost}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
            {t?.hero?.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition shadow-lg shadow-purple-600/25 border border-purple-400/30 hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 text-purple-200" />
              <span>{t?.hero?.downloadCv || "Download CV"}</span>
            </a>

            <a
              href="#work"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 text-purple-100 font-semibold transition hover:scale-105 active:scale-95"
            >
              {t?.hero?.ctaProjects || "View Projects"}
            </a>
          </div>
        </div>

        {/* Orbit Tech Hub Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[460px] sm:min-h-[520px]">
          <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-purple-500/20" />
          <div className="absolute w-[270px] h-[270px] sm:w-[310px] sm:h-[310px] rounded-full border border-purple-500/30 shadow-[0_0_35px_rgba(168,85,247,0.15)]" />

          <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] animate-[spin_40s_linear_infinite]">
            {designAiTools.map((tool, idx) => {
              const IconComponent = tool.icon;
              const angle = (idx / designAiTools.length) * (2 * Math.PI);
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={tool.name}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  title={tool.name}
                  className="group absolute top-1/2 start-1/2 -mt-6 -ms-6 w-12 h-12 rounded-xl bg-slate-950/90 border border-purple-500/30 backdrop-blur-md shadow-lg shadow-purple-950/60 flex items-center justify-center hover:scale-125 hover:border-purple-400 transition-all cursor-pointer"
                >
                  <div className="animate-[spin_40s_linear_infinite_reverse] flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full p-[2px] bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 shadow-[0_0_55px_rgba(168,85,247,0.4)]">
            <div className="w-full h-full rounded-full bg-slate-950/95 flex flex-col items-center justify-center text-center p-4 backdrop-blur-sm border border-purple-400/30">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600/30 to-fuchsia-600/20 border border-purple-400/40 flex items-center justify-center text-2xl font-black text-white shadow-inner mb-2">
                ✦
              </div>
              <span className="text-white font-bold text-xs sm:text-sm tracking-wide">
                Creative & AI
              </span>
              <span className="text-[10px] sm:text-xs text-purple-300 font-mono tracking-wider mt-0.5">
                DESIGN • PROMPT • CREATE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
