import React from "react";
import { motion } from "framer-motion";
import { Youtube, ExternalLink, Play } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; // Import language context

export default function YouTubeShowcaseCard({
  channelUrl = "https://www.youtube.com/@JosephVboullvil",
  channelHandle = "@JosephVboullvil",
}) {
  const { t } = useLanguage(); // Destructure translation object

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative group w-full max-w-md mx-auto"
    >
      {/* Background ambient red glow */}
      <div className="absolute -inset-1 bg-gradient-to-r  from-red-600 via-rose-600 to-red-500 rounded-3xl blur-md opacity-25 group-hover:opacity-70 transition duration-500 group-hover:duration-200" />

      {/* Main container - Added text-start for RTL alignment */}
      <div className="relative flex flex-col justify-between  rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 p-6 shadow-2xl overflow-hidden text-start">
        {/* Decorative grid/glow behind icon - Changed right-0 to end-0 for RTL */}
        <div className="absolute top-0 end-0 -me-8 -mt-8 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header section */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 text-red-500 shadow-inner"
            >
              <Youtube className="w-6 h-6 stroke-[2.2]" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-zinc-100 text-base leading-snug tracking-tight group-hover:text-red-400 transition-colors">
                {channelHandle}
              </h3>
              <p className="text-xs text-zinc-400 font-medium">
                {t?.youtubeCard?.subtitle || "YouTube Channel"}
              </p>
            </div>
          </div>

          {/* Live/Active badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            {t?.youtubeCard?.badge || "Watch Work"}
          </span>
        </div>

        {/* Channel description */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal rtl:tracking-normal ltr:tracking-tight">
          {t?.youtubeCard?.description ||
            "Check out project walkthroughs, demos, and creative content directly on my channel."}
        </p>

        {/* Interactive action button */}
        <motion.a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-600/25 transition-all duration-300"
        >
          <Play className="w-4 h-4 fill-white shrink-0" />
          <span>
            {t?.youtubeCard?.buttonText || "Explore"} {channelHandle}
          </span>
          {/* Flipped external link icon for Arabic */}
          <ExternalLink className="w-4 h-4 shrink-0 opacity-80 rtl:-scale-x-100" />
        </motion.a>
      </div>
    </motion.div>
  );
}
