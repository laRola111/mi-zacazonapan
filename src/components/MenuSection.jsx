"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_DATA, MEATS_DATA } from "../data/menu";
import { useLanguage } from "../context/LanguageContext";

export default function MenuSection() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("breakfast");

  const categories = [
    { id: "breakfast",   label: lang === "es" ? "Desayunos"        : "Breakfast",          icon: "🍳" },
    { id: "lonches",     label: lang === "es" ? "Lonches / Tortas" : "Sandwiches",          icon: "🥖" },
    { id: "tacos",       label: lang === "es" ? "Tacos"            : "Tacos",               icon: "🌮" },
    { id: "quesadillas", label: lang === "es" ? "Quesadillas"      : "Quesadillas",         icon: "🧀" },
    { id: "burritos",    label: lang === "es" ? "Burritos"         : "Burritos",            icon: "🌯" },
    { id: "sopes",       label: lang === "es" ? "Sopes / Picaditas": "Sopes / Picaditas",   icon: "🫓" },
    { id: "barbacoa",    label: lang === "es" ? "Barbacoa"         : "Barbacoa",            icon: "🔥" },
    { id: "menudo",      label: lang === "es" ? "Menudo"           : "Menudo",              icon: "🍲" },
    { id: "extras",      label: lang === "es" ? "Extras / Bebidas" : "Extras / Drinks",     icon: "🥤" },
  ];

  const currentCategoryData = MENU_DATA[selectedCategory];

  return (
    <section className="relative bg-[#111010]" id="breakfast">
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(227,27,35,0.08),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 right-0  w-[350px] h-[350px] orange-ambient-glow opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] gold-ambient-glow   opacity-40 pointer-events-none" />

      {/* ── RED HEADER BAND ── */}
      <div className="menu-header-band py-8 px-4 text-center relative overflow-hidden">
        <div className="absolute top-2 left-4  w-6 h-6 border-t-2 border-l-2 border-[#F9E014]/60" />
        <div className="absolute top-2 right-4 w-6 h-6 border-t-2 border-r-2 border-[#F9E014]/60" />
        <div className="absolute bottom-2 left-4  w-6 h-6 border-b-2 border-l-2 border-[#F9E014]/60" />
        <div className="absolute bottom-2 right-4 w-6 h-6 border-b-2 border-r-2 border-[#F9E014]/60" />

        <p className="font-condensed text-[#F9E014]/80 text-xs uppercase tracking-[0.25em] mb-1">
          {t.menu.overline}
        </p>
        <h2 className="mexican-title text-5xl sm:text-6xl md:text-7xl uppercase">
          {t.menu.title}
        </h2>

        <div className="inline-flex items-center gap-2 mt-4 px-5 py-1.5 border border-[#F9E014]/60 text-[#F9E014] font-condensed text-xs uppercase tracking-widest">
          <span className="text-base">🫓</span>
          {lang === "es" ? "Tortillas Hechas a Mano" : "Handmade Tortillas Daily"}
        </div>
      </div>

      {/* ── CATEGORY TABS — scrollable horizontal on mobile ── */}
      <div className="overflow-x-auto scrollbar-hide border-b border-[#6B3E1F]/40 bg-[#0d0c0c]">
        <div className="flex items-center gap-2 py-5 px-4 min-w-max mx-auto justify-start sm:justify-center">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2.5 font-condensed text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 border-2 whitespace-nowrap ${
                  isSelected
                    ? "bg-[#E31B23] text-[#F9E014] border-[#F9E014] shadow-[0_0_18px_rgba(227,27,35,0.5)] scale-105"
                    : "bg-transparent text-[#F8F1E5]/70 border-[#6B3E1F] hover:border-[#F9E014]/60 hover:text-[#F9E014]"
                }`}
              >
                <span className="text-sm">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── ITEMS AREA ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category header */}
            <div className="text-center mb-10">
              <span className="font-condensed text-[#E31B23] text-[10px] sm:text-xs uppercase tracking-[0.25em] block mb-2">
                {lang === "es" ? "CATEGORÍA" : "CATEGORY"}
              </span>
              <h3
                style={{ fontFamily: '"Sancreek", cursive' }}
                className="text-3xl sm:text-4xl text-[#F9E014] uppercase tracking-wider drop-shadow-[1px_2px_0px_rgba(0,0,0,0.85)] inline-block border-b border-[#6B3E1F] pb-3"
              >
                {categories.find(c => c.id === selectedCategory)?.label}
              </h3>
              {currentCategoryData?.subtitle && (
                <p className="font-condensed text-[#F8F1E5]/50 text-xs uppercase tracking-widest mt-3">
                  {currentCategoryData.subtitle}
                </p>
              )}
              {(currentCategoryData?.subtitleEs || currentCategoryData?.subtitleEn) && (
                <div className="mt-4 max-w-2xl mx-auto px-4 py-3 border border-[#F9E014]/30 bg-[#F9E014]/5">
                  <p className="font-condensed text-[#F9E014] text-xs sm:text-sm uppercase tracking-wide leading-relaxed">
                    🫓 {lang === "en" && currentCategoryData.subtitleEn ? currentCategoryData.subtitleEn : currentCategoryData.subtitleEs}
                  </p>
                </div>
              )}
            </div>

            {/* ── PHOTO CARDS GRID (items WITH images) ── */}
            {currentCategoryData.items.filter(item => item.image).length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
                {currentCategoryData.items.filter(item => item.image).map((item, idx) => {
                  const displayName = lang === "en" && item.nameEn ? item.nameEn : item.name;
                  const displayDesc = lang === "en" && item.descriptionEn ? item.descriptionEn : item.description;

                  return (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="relative flex flex-col bg-[#111010] border border-[#6B3E1F]/70 hover:border-[#F9E014]/60 transition-all duration-300 group overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                    >
                      {/* Image */}
                      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#0d0c0c] shrink-0">
                        <img
                          src={item.image}
                          alt={displayName}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover filter saturate-110 brightness-90 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-[#111010]/20 to-transparent" />

                        {/* Badges — solo popular y picoso, sin precio */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {item.popular && (
                            <span className="bg-[#F9E014] text-[#0A0A0A] font-condensed text-[9px] uppercase px-2 py-0.5 tracking-widest border border-[#0A0A0A]">
                              ⭐ {lang === "es" ? "Popular" : "Popular"}
                            </span>
                          )}
                          {item.spicy && (
                            <span className="bg-[#E31B23] text-[#F9E014] font-condensed text-[9px] uppercase px-2 py-0.5 tracking-widest border border-[#F9E014]">
                              🌶️ {lang === "es" ? "Picoso" : "Spicy"}
                            </span>
                          )}
                          {item.customizable && (
                            <span className="bg-[#0d0c0c]/80 text-[#F9E014]/80 font-condensed text-[9px] uppercase px-2 py-0.5 tracking-widest border border-[#6B3E1F]">
                              ✏️ {lang === "es" ? "A tu gusto" : "Customizable"}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Body */}
                      <div className="flex flex-col flex-1 p-3 sm:p-4 pt-3">
                        <h3 className="dish-title text-base sm:text-lg md:text-xl uppercase leading-tight mb-1.5 sm:mb-2 line-clamp-2">
                          {displayName}
                        </h3>
                        <p className="text-[#F8F1E5]/60 text-[11px] sm:text-xs font-light leading-relaxed flex-1 line-clamp-3">
                          {displayDesc}
                        </p>
                        {item.customLabel && (
                          <div className="mt-3">
                            <span className="inline-block bg-[#E31B23] text-[#F9E014] font-condensed text-[10px] uppercase px-3 py-1 tracking-widest border border-[#F9E014] font-bold">
                              {lang === "es" ? item.customLabel : item.customLabelEn || item.customLabel}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Gold top accent line on hover */}
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F9E014]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.article>
                  );
                })}
              </div>
            )}

            {/* ── TEXT LIST (items WITHOUT images) ── */}
            {currentCategoryData.items.filter(item => !item.image).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="max-w-4xl mx-auto border-double border-4 border-[#6B3E1F]/60 bg-[#0d0c0c] p-4 sm:p-6 md:p-10 relative overflow-hidden"
              >
                {/* Decorative gold corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#F9E014]/40" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#F9E014]/40" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#F9E014]/40" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#F9E014]/40" />

                <div className="text-center mb-8">
                  <h4 className="font-western text-[#F9E014] text-lg sm:text-xl uppercase tracking-widest">
                    {lang === "es" ? "Selección del Menú" : "Menu Selection"}
                  </h4>
                  <p className="font-condensed text-xs text-[#E31B23] uppercase tracking-widest mt-1">
                    {lang === "es" ? "Preparados al Instante · Tortillas Hechas a Mano" : "Freshly Prepared Daily · Handmade Tortillas"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 sm:gap-y-5">
                  {currentCategoryData.items.filter(item => !item.image).map((item) => {
                    const displayName = lang === "en" && item.nameEn ? item.nameEn : item.name;
                    const displayDesc = lang === "en" && item.descriptionEn ? item.descriptionEn : item.description;

                    return (
                      <div key={item.id} className="group border-b border-[#6B3E1F]/30 pb-4 last:border-0 md:last:border-b">
                        <div className="flex items-baseline gap-2">
                          <h5 className="font-oswald text-[#F8F1E5] text-sm sm:text-base uppercase tracking-wide group-hover:text-[#F9E014] transition-colors flex-1">
                            {displayName}
                            {item.spicy && <span className="ml-1.5 text-xs">🌶️</span>}
                            {item.popular && <span className="ml-1.5 text-xs">⭐</span>}
                          </h5>
                        </div>
                        <p className="text-[#F8F1E5]/50 text-xs font-light leading-relaxed mt-1">
                          {displayDesc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
