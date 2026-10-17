import React, { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./context/LanguageContext";

// 1. Keep the preloader and top sections synchronous so they appear instantly
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CanvasBackground from "./components/CanvasBackground";
import ScrollToTop from "./components/ScrollToTop";

// 2. Lazy load all the heavy stuff below the fold
const YouTubeReels = lazy(() => import("./components/YouTubeReels"));
const Workflow = lazy(() => import("./components/Workflow"));
const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const YouTubeShowcaseCard = lazy(
  () => import("./components/YouTubeShowcaseCard"),
);
const ScrollReveal = lazy(() => import("./components/ScrollReveal"));

export default function App() {
  const [loading, setLoading] = useState(true);

  // Lock body scroll while the preloader is running
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <LanguageProvider>
      {/* The Curtain Reveal */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-space-950 text-slate-100 overflow-x-hidden">
        {/* Render Canvas and Hero immediately behind the preloader */}
        <CanvasBackground />
        <Navbar />

        <main className="relative z-10">
          <Hero />

          {/* Wrap the rest of the site in Suspense */}
          <Suspense fallback={<div className="min-h-screen" />}>
            <ScrollReveal yOffset={40}>
              <YouTubeReels />
            </ScrollReveal>

            <ScrollReveal yOffset={40}>
              <Workflow />
            </ScrollReveal>

            <ScrollReveal yOffset={40}>
              <Projects />
            </ScrollReveal>

            <ScrollReveal yOffset={40}>
              <About />
            </ScrollReveal>

            <ScrollReveal yOffset={40}>
              <Contact />
            </ScrollReveal>

            <ScrollReveal yOffset={40}>
              <YouTubeShowcaseCard />
            </ScrollReveal>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}
