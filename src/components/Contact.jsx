import React, { useState } from "react";
import { Mail, Copy, Check, Send } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
          {t.contact.kicker}
        </h2>
        <p className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          {t.contact.title}
        </p>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Direct Contact Card */}
        <div className="p-6 rounded-2xl bg-space-900 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold mb-1">
              {t.contact.directTitle}
            </h3>
            <p className="text-xs text-slate-400 mb-4">{t.contact.directSub}</p>
            <p className="text-xs font-mono text-slate-300 select-all mb-4 break-all">
              {personalInfo.email}
            </p>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />{" "}
                {t.contact.copied}
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> {t.contact.copyEmail}
              </>
            )}
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 p-6 rounded-2xl bg-space-900 border border-white/10 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-space-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-space-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              {t.contact.messageLabel}
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-space-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sent}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer"
          >
            {sent ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />{" "}
                {t.contact.sentSuccess}
              </>
            ) : (
              <>
                <Send className="w-4 h-4 rtl:rotate-180" /> {t.contact.sendBtn}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
