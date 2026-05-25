"use client";
import React, { useState } from "react";
import { Plus, Check, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_DATA, MEATS_DATA } from "../data/menu";

export default function MenuSection({ onAddItem }) {
  const [selectedCategory, setSelectedCategory] = useState("breakfast");
  const [customizingItem, setCustomizingItem] = useState(null);
  
  // Customization Options State
  const [selectedMeat, setSelectedMeat] = useState("");
  const [tortillaType, setTortillaType] = useState("Harina (Flour)");
  const [extraCheese, setExtraCheese] = useState(false);

  const categories = [
    { id: "breakfast", label: "Breakfast / Desayunos", icon: "🍳" },
    { id: "tacos", label: "Tacos", icon: "🌮" },
    { id: "specialties", label: "Specialties", icon: "⭐" },
    { id: "barbacoa", label: "Barbacoa", icon: "🔥" },
    { id: "drinks", label: "Bebidas", icon: "🥤" },
  ];

  const currentCategoryData = MENU_DATA[selectedCategory];

  const handleOpenCustomizer = (item) => {
    setCustomizingItem(item);
    // Reset options
    setSelectedMeat(MEATS_DATA[0].name);
    setTortillaType("Harina (Flour)");
    setExtraCheese(false);
  };

  const handleAddWithCustomization = () => {
    let finalDescription = "";
    let additionalPrice = 0;

    if (customizingItem.customizable) {
      const parts = [];
      if (selectedCategory !== "drinks") {
        parts.push(`Carne: ${selectedMeat}`);
        parts.push(`Tortilla: ${tortillaType}`);
      }
      if (extraCheese) {
        parts.push("Queso Extra");
        additionalPrice += 1.50;
      }
      finalDescription = parts.join(", ");
    }

    onAddItem({
      ...customizingItem,
      customOptions: finalDescription,
      price: customizingItem.price + additionalPrice
    });

    setCustomizingItem(null);
  };

  const handleDirectAdd = (item) => {
    if (item.customizable) {
      handleOpenCustomizer(item);
    } else {
      onAddItem(item);
    }
  };

  return (
    <section className="relative py-20 bg-mexican-black" id="breakfast">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,30,30,0.1),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] orange-ambient-glow opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] gold-ambient-glow opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-mexican-red">
            Menú Interactivo
          </span>
          <h2 className="mexican-title text-4xl sm:text-5xl md:text-6xl mt-2 uppercase tracking-wide">
            Digital Menu
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-mexican-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                  isSelected
                    ? "bg-mexican-gold text-mexican-black border-mexican-gold shadow-[0_0_15px_rgba(244,196,48,0.3)] scale-105"
                    : "bg-[#120E0B] text-mexican-cream/80 border-[#6B3E1F] hover:border-mexican-gold hover:text-mexican-gold"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Items Grid — wrapped in AnimatePresence for exit animations */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentCategoryData.items.map((item) => (
              <motion.div
                key={item.id}
                layout
                whileHover={{ y: -6 }}
                className="wood-panel p-4 flex flex-col justify-between relative group gold-glow-hover h-full"
              >
                {/* Gold Ornament Inner corners */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-mexican-gold/30" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-mexican-gold/30" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-mexican-gold/30" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-mexican-gold/30" />

                <div>
                  {/* Plate Image Frame */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden border border-[#6B3E1F] mb-4 bg-mexican-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover filter saturate-110 brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1.5 z-20">
                      {item.popular && (
                        <span className="bg-mexican-gold text-mexican-black text-[9px] font-extrabold uppercase px-2 py-0.5 tracking-wider border border-mexican-black shadow-md">
                          ⭐ Popular
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-mexican-red text-mexican-cream text-[9px] font-extrabold uppercase px-2 py-0.5 tracking-wider border border-mexican-gold shadow-md">
                          🌶️ Picoso
                        </span>
                      )}
                    </div>
                    
                    {/* Pricing Tag Overlay */}
                    <div className="absolute bottom-2 right-2 bg-mexican-black/80 backdrop-blur-sm border border-mexican-gold/50 px-2.5 py-1 text-mexican-gold font-bold text-sm tracking-wider">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>

                  {/* Info Text */}
                  <div className="px-1">
                    <h3 className="text-mexican-gold font-western uppercase tracking-wider text-base sm:text-lg mb-2 line-clamp-1 group-hover:text-mexican-cream transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-mexican-cream/70 text-xs sm:text-sm font-light leading-relaxed mb-4 min-h-[50px] line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 px-1 border-t border-[#6B3E1F]/50 flex items-center justify-between">
                  <span className="text-[10px] text-mexican-cream/40 uppercase tracking-widest font-bold flex items-center gap-1">
                    {item.customizable ? (
                      <>
                        <Info className="w-3.5 h-3.5 text-mexican-gold/60" />
                        Personalizable
                      </>
                    ) : (
                      "Entrega Rápida"
                    )}
                  </span>
                  
                  <button
                    onClick={() => handleDirectAdd(item)}
                    aria-label={`Agregar ${item.name} al carrito`}
                    className="flex items-center gap-1 bg-mexican-red hover:bg-mexican-gold hover:text-mexican-black text-mexican-cream px-4 py-2 border border-mexican-gold text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Agregar
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Item Customizer Overlay Modal */}
      <AnimatePresence>
        {customizingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCustomizingItem(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-lg wood-panel p-6 sm:p-8 z-10 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
            >
              {/* Inner corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-mexican-gold" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-mexican-gold" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-mexican-gold" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-mexican-gold" />

              <h3 className="mexican-title text-2xl uppercase tracking-wider mb-2 text-center">
                Personalizar Platillo
              </h3>
              <p className="text-mexican-gold font-bold text-center mb-6 text-sm">
                {customizingItem.name} — ${customizingItem.price.toFixed(2)}
              </p>

              {/* Form Options */}
              <div className="space-y-6">
                
                {/* Meat Selection (Only if not a drink) */}
                {selectedCategory !== "drinks" && (
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-extrabold text-mexican-cream/70 mb-3 border-b border-mexican-wood/30 pb-1.5">
                      Selecciona Tipo de Carne
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {MEATS_DATA.map((meat) => (
                        <button
                          key={meat.name}
                          onClick={() => setSelectedMeat(meat.name)}
                          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold transition-all border ${
                            selectedMeat === meat.name
                              ? "bg-mexican-red text-mexican-cream border-mexican-gold"
                              : "bg-mexican-black/60 text-mexican-cream/70 border-mexican-wood/50 hover:border-mexican-gold"
                          }`}
                        >
                          <span>{meat.icon}</span>
                          <span className="truncate">{meat.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tortilla Type */}
                {selectedCategory !== "drinks" && (
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-extrabold text-mexican-cream/70 mb-3 border-b border-mexican-wood/30 pb-1.5">
                      Tipo de Tortilla
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Harina (Flour)", "Maíz (Handmade Corn)"].map((type) => (
                        <button
                          key={type}
                          onClick={() => setTortillaType(type)}
                          className={`px-4 py-3 text-xs font-bold transition-all border ${
                            tortillaType === type
                              ? "bg-mexican-gold text-mexican-black border-mexican-black shadow-md"
                              : "bg-mexican-black/60 text-mexican-cream/70 border-mexican-wood/50 hover:border-mexican-gold"
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
                  <label className="block text-xs uppercase tracking-widest font-extrabold text-mexican-cream/70 mb-3 border-b border-mexican-wood/30 pb-1.5">
                    Extras / Adiciones
                  </label>
                  <button
                    onClick={() => setExtraCheese(!extraCheese)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 border transition-all ${
                      extraCheese
                        ? "bg-mexican-gold/10 border-mexican-gold text-mexican-gold"
                        : "bg-mexican-black/60 border-mexican-wood/50 text-mexican-cream/70"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Añadir Queso Extra (+$1.50)
                    </span>
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                      extraCheese ? "bg-mexican-gold border-mexican-black text-mexican-black" : "border-mexican-wood"
                    }`}>
                      {extraCheese && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                </div>

              </div>

              {/* Confirmation Actions */}
              <div className="flex gap-4 mt-8 pt-4 border-t border-mexican-wood/30">
                <button
                  onClick={() => setCustomizingItem(null)}
                  className="flex-1 bg-mexican-black text-mexican-cream/80 hover:text-mexican-gold px-4 py-3 border border-mexican-wood text-xs font-extrabold uppercase tracking-wider transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddWithCustomization}
                  className="flex-1 bg-mexican-red hover:bg-mexican-gold hover:text-mexican-black text-mexican-cream px-4 py-3 border border-mexican-gold text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg"
                >
                  Confirmar Orden
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
