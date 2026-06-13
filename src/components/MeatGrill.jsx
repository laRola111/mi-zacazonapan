"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { MEATS_DATA, PLATILLOS_DATA, TOPPINGS_DATA } from "../data/menu";
import { useLanguage } from "../context/LanguageContext";

export default function MeatGrill() {
  const { t, lang } = useLanguage();

  // Split meats into the two physical-menu columns (7 left, 7 right)
  const leftCol  = MEATS_DATA.slice(0, 7);
  const rightCol = MEATS_DATA.slice(7);

  // Generate random sparks only on the client to avoid SSR hydration mismatch
  const [sparks, setSparks] = useState([]);
  useEffect(() => {
    setSparks(
      [...Array(15)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 90 + 5}%`,
        delay: Math.random() * 4,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
      }))
    );
  }, []);

  return (
    <section
      id="carnes"
      className="relative py-0 bg-mexican-black overflow-hidden"
    >
      {/* Ember background */}
      <div className="absolute inset-0 bg-[#060403]" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#E31B23]/20 via-mexican-orange/8 to-transparent pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(227,27,35,0.08) 0%, transparent 70%)" }}
      />

      {/* Sparks */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ y: "110%", opacity: 0, scale: 1 }}
            animate={{
              y: "-10%",
              x: ["0%", "15px", "-15px", "0%"],
              opacity: [0, 0.9, 0.4, 0],
              scale: [1, 1.3, 0.7, 0.3],
            }}
            transition={{
              y: { duration: spark.duration, repeat: Infinity, ease: "easeOut", delay: spark.delay },
              x: { duration: spark.duration, repeat: Infinity, ease: "easeInOut", delay: spark.delay },
              opacity: { duration: spark.duration, repeat: Infinity, delay: spark.delay },
              scale:   { duration: spark.duration, repeat: Infinity, delay: spark.delay },
            }}
            className="absolute rounded-full bg-gradient-to-t from-[#F9E014] via-mexican-orange to-[#E31B23] shadow-[0_0_8px_#F9E014] spark-particle"
            style={{ left: spark.left, width: spark.size, height: spark.size }}
          />
        ))}
      </div>

      {/* ── RED HEADER BAND ── */}
      <div className="menu-header-band py-8 px-4 text-center relative z-20">
        <div className="absolute top-2 left-4  w-6 h-6 border-t-2 border-l-2 border-[#F9E014]/60" />
        <div className="absolute top-2 right-4 w-6 h-6 border-t-2 border-r-2 border-[#F9E014]/60" />
        <div className="absolute bottom-2 left-4  w-6 h-6 border-b-2 border-l-2 border-[#F9E014]/60" />
        <div className="absolute bottom-2 right-4 w-6 h-6 border-b-2 border-r-2 border-[#F9E014]/60" />

        <div className="inline-flex items-center gap-2 text-[#F9E014]/80 font-condensed text-xs uppercase tracking-[0.25em] mb-2">
          <Flame className="w-4 h-4 animate-bounce" />
          {t.grill.overline}
        </div>
        <h2 className="mexican-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
          {t.grill.title}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 sm:py-14 relative z-20">
        <p className="font-condensed text-[#F8F1E5]/55 text-xs sm:text-sm tracking-wide max-w-2xl mx-auto text-center mb-10 sm:mb-12 uppercase">
          {t.grill.subtitle}
        </p>
        <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#E31B23] to-transparent mx-auto mb-14" />

        {/* ── TWO COLUMN MEAT LIST — mirrors the physical menu layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
          {/* LEFT COLUMN */}
          <div className="border border-[#6B3E1F]/60 bg-[#0d0c0c]">
            {/* Column header */}
            <div className="bg-[#E31B23]/90 px-5 py-3 border-b border-[#F9E014]/40 flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#F9E014]" />
              <span className="font-oswald text-[#F9E014] text-xs uppercase tracking-[0.2em]">
                {lang === "es" ? "Tipos de Carne" : "Meat Options"}
              </span>
            </div>
            {leftCol.map((meat, i) => (
              <motion.div
                key={meat.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 px-5 py-3.5 border-b border-[#6B3E1F]/25 last:border-b-0 group hover:bg-[#E31B23]/10 transition-colors duration-200"
              >
                <span className="text-xl shrink-0">{meat.icon}</span>
                <div className="flex-1">
                  <p className="font-oswald text-[#F9E014] text-sm uppercase tracking-wide leading-tight">
                    {lang === "en" && meat.nameEn ? meat.nameEn : meat.name}
                  </p>
                  <p className="font-condensed text-[#F8F1E5]/45 text-[11px] tracking-wide">
                    {lang === "en" && meat.descriptionEn ? meat.descriptionEn : meat.description}
                  </p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#E31B23] group-hover:bg-[#F9E014] transition-colors duration-200 shrink-0" />
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="border border-[#6B3E1F]/60 bg-[#0d0c0c]">
            {/* Column header */}
            <div className="bg-[#E31B23]/90 px-5 py-3 border-b border-[#F9E014]/40 flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#F9E014]" />
              <span className="font-oswald text-[#F9E014] text-xs uppercase tracking-[0.2em]">
                {lang === "es" ? "Más Opciones" : "More Options"}
              </span>
            </div>
            {rightCol.map((meat, i) => (
              <motion.div
                key={meat.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 px-5 py-3.5 border-b border-[#6B3E1F]/25 last:border-b-0 group hover:bg-[#E31B23]/8 transition-colors duration-200"
              >
                <span className="text-xl shrink-0">{meat.icon}</span>
                <div className="flex-1">
                  <p className="font-oswald text-[#F9E014] text-sm uppercase tracking-wide leading-tight">
                    {lang === "en" && meat.nameEn ? meat.nameEn : meat.name}
                  </p>
                  <p className="font-condensed text-[#F8F1E5]/45 text-[11px] tracking-wide">
                    {lang === "en" && meat.descriptionEn ? meat.descriptionEn : meat.description}
                  </p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#E31B23] group-hover:bg-[#F9E014] transition-colors duration-200 shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Callout box — Tortillas de maíz hechas a mano ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto border-double border-4 border-[#F9E014] bg-[#0d0c0c] p-5 sm:p-8 text-center relative"
        >
          <div className="absolute top-2 left-2  w-4 h-4 border-t border-l border-[#F9E014]" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#F9E014]" />
          <div className="absolute bottom-2 left-2  w-4 h-4 border-b border-l border-[#F9E014]" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#F9E014]" />

          <h3 className="dish-title text-2xl sm:text-3xl uppercase mb-3">
            {t.grill.callout}
          </h3>
          <p className="font-condensed text-[#F8F1E5]/75 text-sm max-w-xl mx-auto tracking-wide uppercase leading-relaxed">
            {t.grill.calloutDesc}
          </p>
        </motion.div>

        {/* ── PLATILLOS ── */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="font-condensed text-[#E31B23] text-[10px] sm:text-xs uppercase tracking-[0.25em] block mb-2">
              {lang === "es" ? "ESPECIALIDADES" : "SPECIALTIES"}
            </span>
            <h3 className="mexican-title text-3xl sm:text-4xl uppercase">
              {lang === "es" ? "Platillos" : "Dishes"}
            </h3>
            <p className="font-condensed text-[#F8F1E5]/45 text-xs uppercase tracking-widest mt-2">
              {lang === "es" ? "A la carta · Arroz y frijoles · Tortillas a mano" : "A la carte · Rice & beans · Handmade tortillas"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {PLATILLOS_DATA.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center bg-[#0d0c0c] border border-[#6B3E1F]/60 hover:border-[#F9E014]/60 transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {p.image ? (
                  <div className="w-full h-24 sm:h-28 overflow-hidden">
                    <img
                      src={p.image}
                      alt={lang === "en" && p.nameEn ? p.nameEn : p.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter saturate-110 brightness-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full h-28 flex items-center justify-center bg-[#E31B23]/10">
                    <span className="text-4xl">{p.icon}</span>
                  </div>
                )}
                <div className="p-2 sm:p-3 text-center w-full">
                  <p className="font-oswald text-[#F9E014] text-[10px] sm:text-xs uppercase tracking-wide leading-tight">
                    {lang === "en" && p.nameEn ? p.nameEn : p.name}
                  </p>
                  {p.showSubtitle && (
                    <p className="font-condensed text-[#F9E014]/70 text-[9px] sm:text-[10px] uppercase tracking-wide leading-tight mt-1 line-clamp-2">
                      {lang === "en" && p.subtitleEn ? p.subtitleEn : p.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── TOPPINGS / INGREDIENTES ── */}
        <div className="mt-16 mb-4">
          <div className="text-center mb-8">
            <span className="font-condensed text-[#E31B23] text-[10px] sm:text-xs uppercase tracking-[0.25em] block mb-2">
              {lang === "es" ? "PERSONALIZA TU ORDEN" : "CUSTOMIZE YOUR ORDER"}
            </span>
            <h3 className="mexican-title text-3xl sm:text-4xl uppercase">
              {lang === "es" ? "Carnes de tu Elección" : "Toppings & Extras"}
            </h3>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
            {TOPPINGS_DATA.map((tp, i) => (
              <motion.div
                key={tp.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center gap-2 p-3 bg-[#0d0c0c] border border-[#6B3E1F]/50 hover:border-[#F9E014]/60 hover:bg-[#E31B23]/8 transition-all duration-200 text-center"
              >
                <span className="text-2xl">{tp.icon}</span>
                <p className="font-oswald text-[#F8F1E5] text-[11px] uppercase tracking-wide leading-tight">
                  {lang === "en" && tp.nameEn ? tp.nameEn : tp.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
