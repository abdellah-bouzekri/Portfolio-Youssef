import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Read saved preference from localStorage, default to 'en'
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("youssef_portfolio_lang") || "en";
  });

  useEffect(() => {
    // 1. Update document direction & lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    // 2. Persist to localStorage so refreshing keeps the current language
    localStorage.setItem("youssef_portfolio_lang", lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLanguage, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
