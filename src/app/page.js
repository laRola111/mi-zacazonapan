"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import MeatGrill from "../components/MeatGrill";
import HandmadeTortillas from "../components/HandmadeTortillas";
import Contact from "../components/Contact";
import CartDrawer from "../components/CartDrawer";
import ExtrasBadge from "../components/ExtrasBadge";
import { useLanguage } from "../context/LanguageContext";
import { Flame, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AudioPlayer from "../components/AudioPlayer";

export default function Home() {
  const { t } = useLanguage();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll during loading screen and handle duration
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "";
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  // Track active section for scrollspy Navbar indicator
  useEffect(() => {
    const sections = ["inicio", "breakfast", "tacos", "specialties", "barbacoa", "carnes", "tortillas", "contacto"];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Cart Handlers
  const handleAddItem = (item) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (i) => i.id === item.id && i.customOptions === item.customOptions
      );

      if (existingIdx > -1) {
        return prevCart.map((i, idx) =>
          idx === existingIdx ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId, customOptions, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId, customOptions);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.customOptions === customOptions
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId, customOptions) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === itemId && item.customOptions === customOptions))
    );
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-mexican-black flex flex-col font-sans select-none selection:bg-mexican-gold selection:text-mexican-black">
      {/* Premium Loader/Intro Animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-[#050403] flex flex-col items-center justify-center select-none pointer-events-auto"
          >
            {/* Saturated Warm Radial Glow */}
            <div className="absolute inset-0 opacity-80 z-0" style={{ background: "radial-gradient(circle at center, rgba(197,30,30,0.15) 0%, transparent 60%)" }} />
            <div className="absolute w-[400px] h-[400px] bg-mexican-gold/10 rounded-full blur-[100px] pointer-events-none z-0" />
            
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut"
              }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-mexican-gold bg-[#120e0b] z-10 flex items-center justify-center shadow-[0_0_40px_rgba(244,196,48,0.3)] animate-pulse"
            >
              <img
                src="/images/logo.png"
                alt="Mi Zacazonapan Logo"
                className="w-[85%] h-[85%] object-contain filter drop-shadow-[0_0_8px_rgba(244,196,48,0.6)]"
              />
            </motion.div>

            {/* Elegant Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-center z-10"
            >
              <h2 className="font-western text-2xl tracking-widest text-mexican-gold uppercase">
                Mi Zacazonapan
              </h2>
              <p className="text-[10px] tracking-[0.3em] text-mexican-cream/80 uppercase font-sans font-bold mt-1 animate-pulse">
                Taquería Premium · Austin, TX
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Header Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Cinematic landing hero */}
        <Hero />

        {/* Dynamic menu items */}
        <div id="breakfast">
          <MenuSection onAddItem={handleAddItem} />
        </div>

        {/* Anchor markers */}
        <div id="tacos" className="h-1 bg-mexican-black" />
        <div id="specialties" className="h-1 bg-mexican-black" />
        <div id="barbacoa" className="h-1 bg-mexican-black" />

        {/* Tipos de carne grill section */}
        <MeatGrill />

        {/* Handmade tortillas showcase */}
        <HandmadeTortillas />

        {/* Integrated interactive contact details & maps */}
        <Contact />
      </main>

      {/* Cart Slider Drawer Overlay */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Floating Extras Starburst Badge */}
      <ExtrasBadge />

      {/* Floating Premium Background Music Player */}
      <AudioPlayer />

      {/* Custom Traditional Footer */}
      <footer className="bg-[#050403] border-t-2 border-mexican-gold/30 text-mexican-cream py-12 relative overflow-hidden">
        {/* Background glow ornament */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-mexican-red/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          {/* Logo brand icon */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-mexican-red rounded-full flex items-center justify-center border border-mexican-gold/50 shadow-md">
              <Flame className="w-5 h-5 text-mexican-gold" />
            </div>
            <span className="font-western text-lg tracking-widest text-mexican-gold uppercase">
              Mi Zacazonapan
            </span>
          </div>

          {/* Slogan */}
          <p className="text-center text-xs sm:text-sm font-serif italic text-mexican-cream/70 max-w-md mb-8 leading-relaxed px-4">
            {t.footer.slogan}
          </p>

          {/* Social links */}
          <div className="flex gap-6 mb-8 text-xs font-bold uppercase tracking-wider text-mexican-gold">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-mexican-cream transition-colors duration-200">
              Facebook
            </a>
            <span className="text-[#6B3E1F]">•</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-mexican-cream transition-colors duration-200">
              Instagram
            </a>
            <span className="text-[#6B3E1F]">•</span>
            <a href="https://yelp.com" target="_blank" rel="noreferrer" className="hover:text-mexican-cream transition-colors duration-200">
              Yelp
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-2xl h-[1px] bg-[#6B3E1F]/30 mb-6" />

          {/* Footnotes */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center text-[10px] text-mexican-cream/45 uppercase tracking-widest gap-4">
            <span>{t.footer.rights(new Date().getFullYear())}</span>
            <span className="flex items-center gap-1">
              {t.footer.madeWith} <Heart className="w-3 h-3 text-mexican-red fill-current" /> {t.footer.in}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
