"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { MEATS_DATA } from "../data/menu";

export default function MeatGrill() {
  // Memoize sparks so positions stay stable across re-renders
  const sparks = useMemo(
    () =>
      [...Array(15)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 90 + 5}%`,
        delay: Math.random() * 4,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
      })),
    [] // Only compute once on mount
  );

  return (
    <section
      id="carnes"
      className="relative py-24 bg-mexican-black overflow-hidden border-t-4 border-b-4 border-double border-mexican-gold/30"
    >
      {/* Dynamic Glowing Hot Charcoal Embers Background */}
      <div className="absolute inset-0 bg-[#060403]" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-mexican-red/25 via-mexican-orange/10 to-transparent pointer-events-none" />
      {/* Fixed: replaced broken bg-gradient-radial Tailwind class with inline style */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(230,126,34,0.1) 0%, transparent 70%)" }}
      />

      {/* Animated Rising Flame Sparks */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ y: "110%", x: "0%", opacity: 0, scale: 1 }}
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
              scale: { duration: spark.duration, repeat: Infinity, delay: spark.delay },
            }}
            className="absolute rounded-full bg-gradient-to-t from-mexican-gold via-mexican-orange to-mexican-red shadow-[0_0_8px_#F4C430] spark-particle"
            style={{
              left: spark.left,
              width: spark.size,
              height: spark.size,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-mexican-orange font-extrabold text-xs uppercase tracking-widest bg-mexican-orange/10 border border-mexican-orange/30 px-3 py-1.5 mb-3">
            <Flame className="w-4 h-4 text-mexican-orange animate-bounce" />
            Directo de la Parrilla
          </div>
          <h2 className="mexican-title text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
            Tipos de Carne
          </h2>
          <p className="text-mexican-cream/70 text-xs sm:text-sm font-sans tracking-wider max-w-xl mx-auto mt-4 font-light">
            Nuestras carnes son marinadas diariamente con recetas secretas de la casa y cocinadas a fuego lento para garantizar la máxima jugosidad.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-mexican-orange to-transparent mx-auto mt-4" />
        </div>

        {/* Grill Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {MEATS_DATA.map((meat, index) => (
            <motion.div
              key={meat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: "#F4C430",
                boxShadow: "0 0 25px rgba(230, 126, 34, 0.45)"
              }}
              className="relative p-5 bg-gradient-to-b from-[#1a1411] to-[#0A0A0A] border-2 border-mexican-wood/60 flex flex-col items-center text-center group cursor-pointer transition-colors duration-300 overflow-hidden"
            >
              {/* Inner Grill texture lines overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(244,196,48,0.01)_1px,transparent_1px)] bg-[size:100%_8px] pointer-events-none" />

              {/* Glowing Corner Badge */}
              <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center text-lg select-none p-1" aria-hidden="true">
                {meat.icon}
              </div>

              {/* Large Icon Graphic */}
              <div className="w-14 h-14 bg-mexican-black border border-mexican-orange/40 rounded-full flex items-center justify-center mb-4 group-hover:bg-mexican-red/20 group-hover:border-mexican-gold transition-colors duration-300 shadow-inner shadow-black">
                <span className="text-2xl filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {meat.icon}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-mexican-gold font-western uppercase tracking-wider text-sm mb-2 group-hover:text-mexican-cream transition-colors duration-300">
                {meat.name}
              </h3>
              <p className="text-mexican-cream/70 text-[11px] leading-relaxed font-sans font-light min-h-[40px] line-clamp-3">
                {meat.description}
              </p>

              {/* Grill Spark indicator */}
              <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#6B3E1F] to-transparent mt-4 group-hover:via-mexican-gold transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Big Commercial Callout Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-8 wood-panel text-center relative border-double border-4 border-mexican-gold max-w-4xl mx-auto"
        >
          {/* Inner corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-mexican-gold" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-mexican-gold" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-mexican-gold" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-mexican-gold" />
          
          <h3 className="text-mexican-gold font-western text-lg sm:text-xl uppercase tracking-widest mb-3">
            🌮 ¿Ya probaste los Campechanos?
          </h3>
          <p className="text-mexican-cream text-xs sm:text-sm font-sans max-w-2xl mx-auto leading-relaxed font-light">
            Es la combinación legendaria: carne de bistec de res tierna revuelta con nuestro chorizo artesanal bien dorado. Pídelo en tortilla de harina hecha a mano con salsa roja y cilantro fresco. ¡Es la especialidad preferida de Austin!
          </p>
        </motion.div>

      </div>
    </section>
  );
}
