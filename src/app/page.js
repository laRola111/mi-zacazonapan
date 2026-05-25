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

export default function Home() {
  const { t } = useLanguage();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

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
