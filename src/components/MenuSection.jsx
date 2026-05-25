"use client";
import React, { useState } from "react";
import { Plus, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_DATA, MEATS_DATA } from "../data/menu";
import { useLanguage } from "../context/LanguageContext";

export default function MenuSection({ onAddItem }) {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("breakfast");
  const [customizingItem, setCustomizingItem] = useState(null);
  const [selectedMeat, setSelectedMeat] = useState("");
  const [tortillaType, setTortillaType] = useState("Harina (Flour)");
  const [extraCheese, setExtraCheese] = useState(false);

  const categories = [
    { id: "breakfast", label: t.menu.categories.breakfast, icon: "🍳" },
    { id: "tacos",     label: t.menu.categories.tacos,     icon: "🌮" },
    { id: "specialties", label: t.menu.categories.specialties, icon: "⭐" },
    { id: "barbacoa", label: t.menu.categories.barbacoa,   icon: "🔥" },
    { id: "drinks",   label: t.menu.categories.drinks,     icon: "🥤" },
  ];

  const currentCategoryData = MENU_DATA[selectedCategory];

  const handleOpenCustomizer = (item) => {
    setCustomizingItem(item);
    setSelectedMeat(MEATS_DATA[0].name);
    setTortillaType("Harina (Flour)");
    setExtraCheese(false);
  };

  const handleAddWithCustomization = () => {
    const parts = [];
    let additionalPrice = 0;
    if (customizingItem.customizable && selectedCategory !== "drinks") {
      parts.push(`Carne: ${selectedMeat}`);
      parts.push(`Tortilla: ${tortillaType}`);
    }
    if (extraCheese) {
      parts.push("Queso Extra");
      additionalPrice += 1.5;
    }
    onAddItem({
      ...customizingItem,
      customOptions: parts.join(", "),
      price: customizingItem.price + additionalPrice,
    });
    setCustomizingItem(null);
  };

  const handleDirectAdd = (item) => {
    if (item.customizable) handleOpenCustomizer(item);
    else onAddItem(item);
  };

  return (
    <section className="relative bg-[#111010]" id="breakfast">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(227,27,35,0.08),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 right-0  w-[350px] h-[350px] orange-ambient-glow opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] gold-ambient-glow   opacity-40 pointer-events-none" />

      {/* ── RED HEADER BAND — replicates the physical menu ── */}
      <div className="menu-header-band py-8 px-4 text-center relative overflow-hidden">
        {/* Decorative corner marks */}
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

        {/* Tortillas Hechas a Mano badge — direct from physical menu */}
        <div className="inline-flex items-center gap-2 mt-4 px-5 py-1.5 border border-[#F9E014]/60 text-[#F9E014] font-condensed text-xs uppercase tracking-widest">
          <span className="text-base">🫓</span>
          {lang === "es" ? "Tortillas Hechas a Mano" : "Handmade Tortillas Daily"}
        </div>
      </div>

      {/* ── CATEGORY TABS ── */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-8 px-4 bg-[#0d0c0c] border-b border-[#6B3E1F]/40">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 font-condensed text-sm uppercase tracking-wider transition-all duration-300 border-2 ${
                isSelected
                  ? "bg-[#E31B23] text-[#F9E014] border-[#F9E014] shadow-[0_0_18px_rgba(227,27,35,0.5)] scale-105"
                  : "bg-transparent text-[#F8F1E5]/70 border-[#6B3E1F] hover:border-[#F9E014]/60 hover:text-[#F9E014]"
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── ITEMS GRID ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentCategoryData.items.map((item, idx) => {
              const displayName = lang === "en" && item.nameEn ? item.nameEn : item.name;
              const displayDesc = lang === "en" && item.descriptionEn ? item.descriptionEn : item.description;

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  whileHover={{ y: -5 }}
                  className="relative flex flex-col bg-[#111010] border border-[#6B3E1F]/70 hover:border-[#F9E014]/60 transition-all duration-300 group overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                >
                  {/* ── Image ── */}
                  <div className="relative h-44 overflow-hidden bg-[#0d0c0c] shrink-0">
                    <img
                      src={item.image}
                      alt={displayName}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover filter saturate-110 brightness-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-[#111010]/30 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {item.popular && (
                        <span className="bg-[#F9E014] text-[#0A0A0A] font-condensed text-[9px] uppercase px-2 py-0.5 tracking-widest border border-[#0A0A0A]">
                          ⭐ {t.menu.popular.replace("⭐ ", "")}
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-[#E31B23] text-[#F9E014] font-condensed text-[9px] uppercase px-2 py-0.5 tracking-widest border border-[#F9E014]">
                          🌶️ {t.menu.spicy.replace("🌶️ ", "")}
                        </span>
                      )}
                    </div>

                    {/* Price tag */}
                    <div className="absolute bottom-2 right-2 bg-[#E31B23] border border-[#F9E014] px-2.5 py-1">
                      <span className="font-condensed text-[#F9E014] text-sm font-black tracking-wider">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* ── Body ── */}
                  <div className="flex flex-col flex-1 p-4">
                    {/* Dish name — Luckiest Guy */}
                    <h3 className="dish-title text-lg sm:text-xl uppercase leading-tight mb-1 line-clamp-2">
                      {displayName}
                    </h3>

                    {/* Bilingual secondary name for tacos */}
                    {selectedCategory === "tacos" && item.nameEn && item.nameEn !== item.name && (
                      <p className="font-condensed text-[10px] text-[#F9E014]/50 uppercase tracking-widest mb-2">
                        {lang === "es" ? item.nameEn : item.name}
                      </p>
                    )}

                    <p className="text-[#F8F1E5]/60 text-xs font-light leading-relaxed flex-1 line-clamp-3 mb-4">
                      {displayDesc}
                    </p>

                    {/* ── Action row ── */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#6B3E1F]/40">
                      <span className="font-condensed text-[9px] text-[#F8F1E5]/35 uppercase tracking-widest">
                        {item.customizable ? t.menu.customizable : t.menu.fastDelivery}
                      </span>

                      <button
                        onClick={() => handleDirectAdd(item)}
                        aria-label={t.menu.addLabel(displayName)}
                        className="flex items-center gap-1.5 bg-[#E31B23] hover:bg-[#F9E014] hover:text-[#0A0A0A] text-[#F9E014] px-4 py-2 font-condensed text-xs uppercase tracking-wider transition-all duration-250 border border-[#F9E014] active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        {t.menu.add}
                      </button>
                    </div>
                  </div>

                  {/* Gold top accent line */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F9E014]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── CUSTOMIZER MODAL ── */}
      <AnimatePresence>
        {customizingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCustomizingItem(null)}
              className="absolute inset-0 bg-black/88 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className="relative w-full max-w-lg bg-[#111010] border-2 border-[#F9E014] p-0 z-10 shadow-[0_0_60px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-y-auto"
            >
              {/* Modal header band */}
              <div className="menu-header-band px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="font-condensed text-[#F9E014]/70 text-[10px] uppercase tracking-[0.2em]">
                    {t.menu.customizeTitle}
                  </p>
                  <h3 className="dish-title text-2xl uppercase leading-tight mt-0.5">
                    {lang === "en" && customizingItem.nameEn ? customizingItem.nameEn : customizingItem.name}
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-condensed text-[#F9E014] text-xl font-black">
                    ${customizingItem.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => setCustomizingItem(null)}
                    className="text-[#F9E014]/60 hover:text-[#F9E014] transition-colors"
                    aria-label={t.menu.cancel}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Meat Selection */}
                {selectedCategory !== "drinks" && (
                  <div>
                    <label className="block font-condensed text-xs uppercase tracking-widest text-[#F8F1E5]/60 mb-3 border-b border-[#6B3E1F]/40 pb-2">
                      {t.menu.meatLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {MEATS_DATA.map((meat) => (
                        <button
                          key={meat.name}
                          onClick={() => setSelectedMeat(meat.name)}
                          className={`flex items-center gap-2 px-3 py-2 font-condensed text-xs uppercase tracking-wide transition-all border ${
                            selectedMeat === meat.name
                              ? "bg-[#E31B23] text-[#F9E014] border-[#F9E014]"
                              : "bg-[#0d0c0c] text-[#F8F1E5]/60 border-[#6B3E1F]/50 hover:border-[#F9E014]/50"
                          }`}
                        >
                          <span>{meat.icon}</span>
                          <span className="truncate">
                            {lang === "en" && meat.nameEn ? meat.nameEn : meat.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tortilla Type */}
                {selectedCategory !== "drinks" && (
                  <div>
                    <label className="block font-condensed text-xs uppercase tracking-widest text-[#F8F1E5]/60 mb-3 border-b border-[#6B3E1F]/40 pb-2">
                      {t.menu.tortillaLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Harina (Flour)", "Maíz (Handmade Corn)"].map((type) => (
                        <button
                          key={type}
                          onClick={() => setTortillaType(type)}
                          className={`px-4 py-3 font-condensed text-xs uppercase tracking-wider transition-all border ${
                            tortillaType === type
                              ? "bg-[#F9E014] text-[#0A0A0A] border-[#0A0A0A]"
                              : "bg-[#0d0c0c] text-[#F8F1E5]/60 border-[#6B3E1F]/50 hover:border-[#F9E014]/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add-ons */}
                <div>
                  <label className="block font-condensed text-xs uppercase tracking-widest text-[#F8F1E5]/60 mb-3 border-b border-[#6B3E1F]/40 pb-2">
                    {t.menu.extrasLabel}
                  </label>
                  <button
                    onClick={() => setExtraCheese(!extraCheese)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 border transition-all ${
                      extraCheese
                        ? "bg-[#F9E014]/10 border-[#F9E014] text-[#F9E014]"
                        : "bg-[#0d0c0c] border-[#6B3E1F]/50 text-[#F8F1E5]/60"
                    }`}
                  >
                    <span className="font-condensed text-xs uppercase tracking-wider">
                      {t.menu.extraCheese}
                    </span>
                    <div
                      className={`w-5 h-5 flex items-center justify-center border ${
                        extraCheese
                          ? "bg-[#F9E014] border-[#0A0A0A] text-[#0A0A0A]"
                          : "border-[#6B3E1F]"
                      }`}
                    >
                      {extraCheese && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                </div>

                {/* Confirmation */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setCustomizingItem(null)}
                    className="flex-1 bg-transparent text-[#F8F1E5]/60 hover:text-[#F9E014] px-4 py-3 border border-[#6B3E1F] font-condensed text-xs uppercase tracking-wider transition-all"
                  >
                    {t.menu.cancel}
                  </button>
                  <button
                    onClick={handleAddWithCustomization}
                    className="flex-1 bg-[#E31B23] hover:bg-[#F9E014] hover:text-[#0A0A0A] text-[#F9E014] px-4 py-3 border border-[#F9E014] font-condensed text-xs uppercase tracking-wider transition-all shadow-lg"
                  >
                    {t.menu.confirm}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
