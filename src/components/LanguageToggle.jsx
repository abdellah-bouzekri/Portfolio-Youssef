import React, { useId } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const uniqueId = useId();

  return (
    <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
      {/* English Option */}
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
          lang === "en" ? "text-white" : "text-slate-400 hover:text-white"
        }`}
      >
        {lang === "en" && (
          <motion.div
            layoutId={`langPill-${uniqueId}`}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="absolute inset-0 bg-purple-600 rounded-full -z-10 shadow-md shadow-purple-600/30"
          />
        )}
        EN
      </button>

      {/* Arabic Option */}
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full font-sans transition-colors cursor-pointer ${
          lang === "ar" ? "text-white" : "text-slate-400 hover:text-white"
        }`}
      >
        {lang === "ar" && (
          <motion.div
            layoutId={`langPill-${uniqueId}`}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="absolute inset-0 bg-purple-600 rounded-full -z-10 shadow-md shadow-purple-600/30"
          />
        )}
        AR
      </button>
    </div>
  );
}
