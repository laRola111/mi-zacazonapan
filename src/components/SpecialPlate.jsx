"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Flame } from "lucide-react";

export default function SpecialPlate() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="special-plate"
      className="relative py-16 bg-mexican-black overflow-hidden border-t border-b border-[#6B3E1F]/30"
    >
      {/* Background radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(227,27,35,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,rgba(249,224,20,0.06),transparent_50%)] pointer-events-none" />

      {/* Decorative Traditional Border Accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-mexican-gold/40 pointer-events-none" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-mexican-gold/40 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-mexican-gold/40 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-mexican-gold/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Tagline */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-mexican-red font-condensed text-xs uppercase tracking-[0.25em] mb-3">
              <Flame className="w-4 h-4 text-mexican-gold animate-pulse fill-mexican-gold" />
              <span>{t.special.overline}</span>
            </div>

            {/* Title / Header */}
            <h2 className="mexican-title text-4xl sm:text-5xl md:text-6xl uppercase mb-4 leading-none">
              {t.special.title}
            </h2>

            <div className="h-[2px] w-24 bg-gradient-to-r from-mexican-red via-mexican-gold to-transparent mx-auto lg:mx-0 mb-6" />

            {/* Dish Name */}
            <h3 
              style={{ fontFamily: '"Sancreek", cursive' }}
              className="text-2xl sm:text-3xl lg:text-4xl text-mexican-gold uppercase tracking-wider mb-4 drop-shadow-[1px_2px_0px_rgba(0,0,0,0.85)]"
            >
              {t.special.name}
            </h3>

            {/* Description */}
            <p className="text-mexican-cream/80 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {t.special.desc}
            </p>

            {/* Decorative Promo Badge */}
            <div className="self-center lg:self-start">
              <span className="inline-block bg-mexican-red text-mexican-gold font-condensed text-xs uppercase px-4 py-2 tracking-widest border-2 border-mexican-gold shadow-[0_4px_12px_rgba(227,27,35,0.4)] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                ⭐ {t.special.badge}
              </span>
            </div>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center"
          >
            {/* Elegant Double Border Frame to make the photo pop */}
            <div className="relative p-2 bg-[#0c0a0a] border-4 border-mexican-gold/50 shadow-[0_12px_30px_rgba(0,0,0,0.7)] group max-w-md sm:max-w-lg overflow-hidden rounded-sm">
              {/* Corner Ornaments in Frame */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-mexican-gold" />
              <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-mexican-gold" />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-mexican-gold" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-mexican-gold" />

              <div className="overflow-hidden bg-[#050403] relative rounded-sm">
                <img
                  src="/images/chicharrones.png"
                  alt={lang === "es" ? "Chicharrones de Cerdo" : "Crispy Pork Chicharrones"}
                  className="w-full h-auto max-h-[420px] object-contain block select-none group-hover:scale-103 transition-transform duration-700 filter saturate-110"
                  loading="lazy"
                />
              </div>

              {/* Gold overlay bottom band for premium finish */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-mexican-gold/40 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
