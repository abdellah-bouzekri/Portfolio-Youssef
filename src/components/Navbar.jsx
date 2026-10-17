import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
import Logo from "../assests/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-space-950/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-600/20 group-hover:scale-105 transition-transform">
            <img src={Logo} alt="logo" className="rounded-md" />
          </div>
          <div>
            {/* <span className="font-display font-bold text-lg text-white">
              Youssef
            </span>
            <span className="text-[11px] text-slate-400 block -mt-1">
              Motion Studio
            </span> */}
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#showreel" className="hover:text-white transition-colors">
            {t.nav.showreel}
          </a>
          <a href="#workflow" className="hover:text-white transition-colors">
            {t.nav.workflow}
          </a>
          <a href="#work" className="hover:text-white transition-colors">
            {t.nav.work}
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            {t.nav.about}
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-md shadow-purple-600/20 transition-all cursor-pointer"
          >
            {t.nav.hire}{" "}
            <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-white/10 bg-space-950/95 backdrop-blur-xl px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 text-base font-medium text-slate-200">
              <a
                href="#showreel"
                onClick={closeMenu}
                className="py-1 hover:text-purple-400 transition-colors"
              >
                {t.nav.showreel}
              </a>
              <a
                href="#workflow"
                onClick={closeMenu}
                className="py-1 hover:text-purple-400 transition-colors"
              >
                {t.nav.workflow}
              </a>
              <a
                href="#work"
                onClick={closeMenu}
                className="py-1 hover:text-purple-400 transition-colors"
              >
                {t.nav.work}
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="py-1 hover:text-purple-400 transition-colors"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="py-1 hover:text-purple-400 transition-colors"
              >
                {t.nav.contact}
              </a>

              {/* Mobile CTA */}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                >
                  {t.nav.hire}{" "}
                  <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
