"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy, ChefHat } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function HandmadeTortillas() {
  const { t } = useLanguage();
  const steps = t.tortillas.steps;

  return (
    <section
      id="tortillas"
      className="relative py-24 bg-mexican-black overflow-hidden"
    >
      {/* Wood Textures and Overlays */}
      <div className="absolute inset-0 bg-[#0e0a07]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_bottom,rgba(107,62,31,0.2),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-mexican-black to-transparent pointer-events-none" />

      {/* Floating golden particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "-10%", opacity: [0, 0.7, 0] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-mexican-gold"
            style={{ left: `${10 + i * 12}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20">

        {/* Main Content Splitted Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Story & Steps */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest font-extrabold text-mexican-gold flex items-center gap-1.5 mb-3 bg-[#6B3E1F]/20 border border-mexican-gold/30 px-3.5 py-1">
              <ChefHat className="w-4 h-4 text-mexican-gold" />
              {t.tortillas.overline}
            </span>
            <h2 className="mexican-title text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide leading-tight mb-6">
              {t.tortillas.title1} <br />
              {t.tortillas.title2}
            </h2>
            <p
              className="text-mexican-cream text-base md:text-lg leading-relaxed font-sans mb-8 font-light max-w-xl"
              dangerouslySetInnerHTML={{ __html: t.tortillas.desc }}
            />

            {/* Steps Container */}
            <div className="space-y-6 w-full max-w-md">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-mexican-black/60 border border-mexican-wood/30 hover:border-mexican-gold/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-mexican-red/20 border border-mexican-gold flex items-center justify-center text-xl shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-mexican-gold font-sancreek uppercase text-sm tracking-wider mb-1">
                      {step.title}
                    </h4>
                    <p className="text-mexican-cream/70 text-xs sm:text-sm font-sans font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Big Appetizing Illustration frame */}
          <div className="col-span-1 lg:col-span-6 flex justify-center items-center relative">

            {/* Background Glow */}
            <div className="absolute w-[300px] h-[300px] bg-[#6B3E1F]/40 rounded-full blur-[80px] -z-10 pointer-events-none" />

            {/* Triple Gold Border Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-6 sm:p-8 wood-panel border-[6px] double border-mexican-gold max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Inner corners decorative */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-mexican-gold" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-mexican-gold" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-mexican-gold" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-mexican-gold" />

              {/* Appetizing Photo */}
              <div className="w-full h-80 sm:h-96 overflow-hidden border border-mexican-gold bg-mexican-black">
                <img
                  src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop"
                  alt="Tortillas hechas a mano en comal — Mi Zacazonapan"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover filter saturate-110 contrast-105 brightness-95"
                />
              </div>

              {/* Bottom decorative banner overlay */}
              <div className="absolute bottom-0 inset-x-0 translate-y-1/2 flex justify-center">
                <div className="bg-mexican-gold text-mexican-black border-2 border-mexican-black px-6 py-2 flex items-center gap-2 font-western uppercase text-xs tracking-wider shadow-lg">
                  <Trophy className="w-4 h-4 text-mexican-black" />
                  {t.tortillas.badge}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
