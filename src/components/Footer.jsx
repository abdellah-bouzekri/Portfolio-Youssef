import React from "react";
import { personalInfo } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Whatsapp, Instagram, Youtube, Gmail } from "@thesvg/react";

export default function Footer() {
  const { lang } = useLanguage();

  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/212623918988", // Replace with his actual number
      icon: Whatsapp,
      hoverColor:
        "hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/10",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/joseph.vboullvil/", // Replace with his handle
      icon: Instagram,
      hoverColor:
        "hover:text-fuchsia-400 hover:border-fuchsia-400/50 hover:bg-fuchsia-400/10",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@JosephVboullvil",
      icon: Youtube,
      hoverColor:
        "hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10",
    },
    {
      name: "Email",
      url: "mailto:josephvboullvil@gmail.com", // Replace with his email
      icon: Gmail,
      hoverColor:
        "hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10",
    },
  ];

  return (
    <footer className="relative border-t border-white/10 py-12 px-6 mt-16 text-center text-xs text-slate-300 pb-4 overflow-hidden">
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Animated Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 shadow-lg ${social.hoverColor}`}
                aria-label={social.name}
                title={social.name}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </div>

        {/* Existing Copyright & Tagline Layout */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p>
            © {new Date().getFullYear()} {personalInfo.name} —{" "}
            {lang === "ar"
              ? "مصمم موشن غرافيك. جميع الحقوق محفوظة."
              : "Motion Designer. All rights reserved."}
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            60 FPS Mindset • Morocco & Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
