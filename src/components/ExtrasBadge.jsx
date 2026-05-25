"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { X, Sparkles } from "lucide-react";

export default function ExtrasBadge() {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls down past the hero section (300px)
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  const content = {
    es: {
      title: "INGREDIENTES",
      highlight: "EXTRA",
      price: "$0.50",
      each: "c/u",
    },
    en: {
      title: "EXTRA",
      highlight: "ADD-ONS",
      price: "$0.50",
      each: "ea",
    }
  };

  const t = content[lang] || content.es;

  const handleBadgeClick = () => {
    const section = document.getElementById("breakfast");
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.4, rotate: -30, x: -50 }}
          animate={{ opacity: 1, scale: 1, rotate: -6, x: 0 }}
          exit={{ opacity: 0, scale: 0.4, rotate: -30, x: -50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-4 sm:left-6 z-40 flex items-center justify-center cursor-pointer select-none group filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
        >
          {/* Close Dismiss Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            className="absolute -top-1 -right-1 bg-mexican-black text-mexican-gold hover:text-white border border-mexican-gold/50 rounded-full p-1 hover:bg-mexican-red transition-all duration-200 z-50 shadow-md hover:scale-110 active:scale-95"
            aria-label="Cerrar"
            title="Cerrar aviso"
          >
            <X className="w-3 h-3" />
          </button>

          {/* Starburst Shape Container */}
          <div
            onClick={handleBadgeClick}
            className="starburst w-24 h-24 sm:w-28 sm:h-28 bg-mexican-gold flex flex-col items-center justify-center text-center p-2 relative transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-mexican-red"
          >
            {/* Golden shiny particle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center">
              <span className="font-condensed text-[8px] sm:text-[9px] font-black text-mexican-black tracking-widest leading-none uppercase">
                {t.title}
              </span>
              <span className="font-display text-[12px] sm:text-[14px] font-extrabold text-mexican-red leading-none drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)] my-0.5 tracking-tight flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5 text-mexican-red animate-pulse hidden sm:inline" />
                {t.highlight}
              </span>
              <span className="font-condensed text-base sm:text-lg font-black text-mexican-black leading-none tracking-tight">
                {t.price}
              </span>
              <span className="font-condensed text-[8px] sm:text-[9px] font-black text-mexican-red leading-none uppercase mt-0.5">
                {t.each}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
