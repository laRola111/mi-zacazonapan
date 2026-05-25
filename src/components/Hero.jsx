"use client";
import React from "react";
import { ChevronDown, Phone, ShoppingBag, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuEl = document.querySelector("#breakfast");
    if (menuEl) {
      const offset = 80;
      const elementPosition = menuEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Decorative floating ingredients config
  const floatingIngredients = [
    { src: "🌶️", x: "10%", y: "15%", delay: 0.2, duration: 6, size: "text-4xl" },
    { src: "🍋", x: "85%", y: "20%", delay: 0.8, duration: 8, size: "text-3xl" },
    { src: "🌿", x: "78%", y: "70%", delay: 0.5, duration: 7, size: "text-3xl" },
    { src: "🧅", x: "15%", y: "75%", delay: 1.2, duration: 9, size: "text-4xl" },
    { src: "🌮", x: "80%", y: "45%", delay: 0.1, duration: 11, size: "text-5xl" },
    { src: "🍅", x: "12%", y: "45%", delay: 1.5, duration: 10, size: "text-3xl" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-mexican-black"
    >
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-mexican-black via-mexican-black/60 to-mexican-black z-10" />
      
      {/* Saturated Warm Radial Glow */}
      <div className="absolute inset-0 red-ambient-glow opacity-80 z-0" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(197,30,30,0.2) 0%, transparent 70%)" }}
      />

      {/* Realistic Rising Smoke Particles */}
      <div className="absolute inset-x-0 bottom-0 top-1/4 overflow-hidden pointer-events-none z-10 opacity-30">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-24 h-24 bg-white/5 rounded-full blur-2xl smoke-particle"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${5 + i * 2.5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating ingredients in parallax */}
      <div className="absolute inset-0 pointer-events-none z-20 select-none hidden md:block">
        {floatingIngredients.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 0.75,
              scale: 1,
              y: ["0px", "-25px", "0px"],
              rotate: [0, 15, 0],
            }}
            transition={{
              opacity: { duration: 1.5, delay: item.delay },
              scale: { duration: 1.5, delay: item.delay },
              y: { repeat: Infinity, duration: item.duration, ease: "easeInOut", delay: item.delay },
              rotate: { repeat: Infinity, duration: item.duration * 1.2, ease: "easeInOut", delay: item.delay },
            }}
            className={`absolute ${item.size} filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]`}
            style={{ left: item.x, top: item.y }}
          >
            {item.src}
          </motion.div>
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-30">
        
        {/* Left Side: Brand Text & CTAs */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-mexican-red/20 border border-mexican-red/60 text-mexican-gold font-sans font-bold text-xs uppercase tracking-widest mb-6 rounded-none shadow-[0_0_10px_rgba(197,30,30,0.3)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mexican-gold animate-ping" />
            100% Auténtico Sazón Casero
          </motion.div>

          {/* Large Western Styled Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mexican-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase leading-[1.1] tracking-wide mb-6"
          >
            Authentic <br />
            <span className="text-mexican-red drop-shadow-[2px_2px_0px_rgba(244,196,48,1)]">Mexican</span> <br />
            Flavor
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-mexican-cream text-base md:text-lg lg:text-xl font-sans max-w-xl mb-8 leading-relaxed font-light"
          >
            Handmade tortillas, loaded tacos, colossal burritos, authentic barbacoa, and traditional hot Mexican breakfast cooked with generation-old recipes.
          </motion.p>

          {/* CTA Button Actions Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* View Menu */}
            <a
              href="#breakfast"
              onClick={scrollToMenu}
              className="flex items-center justify-center gap-2 bg-mexican-gold text-mexican-black font-extrabold px-8 py-4 border-2 border-mexican-black hover:bg-mexican-gold/90 hover:scale-105 transition-all duration-300 shadow-[0_5px_15px_rgba(244,196,48,0.4)] uppercase text-xs sm:text-sm tracking-wider"
            >
              <ShoppingBag className="w-4 h-4" />
              Ver Menú Digital
            </a>

            {/* Call Now */}
            <a
              href="tel:5129098530"
              className="flex items-center justify-center gap-2 bg-mexican-black text-mexican-cream font-bold px-8 py-4 border border-mexican-gold/50 hover:border-mexican-gold hover:bg-mexican-red/10 hover:scale-105 transition-all duration-300 uppercase text-xs sm:text-sm tracking-wider"
            >
              <Phone className="w-4 h-4 text-mexican-gold" />
              Llamar (512) 909-8530
            </a>
          </motion.div>

          {/* Quick info row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 mt-10 text-xs text-mexican-cream/70"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-mexican-red" />
              2601 W Braker Ln, Austin, TX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-mexican-gold" />
            <span>Tortillas Hechas a Mano Diariamente</span>
          </motion.div>

        </div>

        {/* Right Side: Glowing Rotational Taco Graphic */}
        <div className="col-span-1 lg:col-span-5 flex justify-center items-center relative py-6">
          {/* Saturated Golden Background Aura */}
          <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-mexican-gold/25 rounded-full blur-[80px] -z-10 animate-pulse pointer-events-none" />
          <div className="absolute w-[200px] h-[200px] bg-mexican-red/35 rounded-full blur-[50px] -z-10 pointer-events-none" />

          {/* Decorative Ring Border */}
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] border-4 border-dashed border-mexican-gold/20 rounded-full animate-[spin_40s_linear_infinite] -z-10" />

          {/* Dynamic Photo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] flex items-center justify-center"
          >
            {/* The main appetizing photography of a Taco platter */}
            {/* Styled to resemble premium food photography with high shadows */}
            <div className="w-full h-full rounded-full overflow-hidden border-[8px] double border-mexican-gold shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative bg-[#120e0b]">
              <img
                src="/images/tacos.png"
                alt="Deliciosos Tacos de Mi Zacazonapan — Handmade Tortillas"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center scale-105 select-none filter saturate-125 contrast-110 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120e0b]/80 via-transparent to-transparent" />
            </div>

            {/* Overlap Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-mexican-red text-mexican-cream border border-mexican-gold font-western uppercase tracking-wider text-xs px-4 py-2 rotate-12 shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
            >
              ¡Calientitos!
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-mexican-gold text-mexican-black border border-mexican-black font-western uppercase tracking-wider text-xs px-4 py-2 -rotate-6 shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
            >
              Hecho a Mano
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Down arrow link indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer pointer-events-auto"
          onClick={scrollToMenu}
        >
          <span className="text-[10px] uppercase font-bold tracking-widest text-mexican-gold/60 mb-1">
            Explorar Menú
          </span>
          <ChevronDown className="w-5 h-5 text-mexican-gold/80" />
        </motion.div>
      </div>
    </section>
  );
}
