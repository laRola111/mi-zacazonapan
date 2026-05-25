"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ShoppingBag, Phone, Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ cartCount, onCartClick, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    // Passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Breakfast", href: "#breakfast" },
    { name: "Tacos", href: "#tacos" },
    { name: "Specialties", href: "#specialties" },
    { name: "Barbacoa", href: "#barbacoa" },
    { name: "Carnes", href: "#carnes" },
    { name: "Tortillas", href: "#tortillas" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  // Navbar height depends on scroll state
  const navbarHeight = scrolled ? "56px" : "72px";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-mexican-black/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b-2 border-double border-mexican-gold/50"
            : "py-5 bg-gradient-to-b from-mexican-black/95 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, "#inicio")}
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Mi Zacazonapan — Inicio"
          >
            <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/logo.png"
                alt="Mi Zacazonapan Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(244,196,48,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-western text-lg tracking-wider text-mexican-gold uppercase leading-tight">
                Mi Zacazonapan
              </span>
              <span className="text-[9px] tracking-widest text-mexican-cream/80 uppercase font-sans font-bold -mt-0.5">
                Taquería Premium
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const cleanId = link.href.substring(1);
              const isActive = activeSection === cleanId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-mexican-gold"
                      : "text-mexican-cream/85 hover:text-mexican-gold"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-mexican-red shadow-[0_0_8px_#C51E1E]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Call button */}
            <a
              href="tel:5129098530"
              className="hidden sm:flex items-center justify-center p-2 rounded-full border border-mexican-gold/40 text-mexican-gold hover:bg-mexican-red/20 transition-all duration-300 hover:scale-105"
              aria-label="Llamar al restaurante"
              title="Llamar: (512) 909-8530"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Shopping Cart Trigger */}
            <button
              onClick={onCartClick}
              aria-label={`Ver mi orden${cartCount > 0 ? ` (${cartCount} artículo${cartCount > 1 ? 's' : ''})` : ''}`}
              className="relative flex items-center gap-2 bg-mexican-red hover:bg-mexican-red/90 text-mexican-cream px-3 py-2 sm:px-4 sm:py-2.5 border border-mexican-gold shadow-[0_0_12px_rgba(197,30,30,0.4)] hover:shadow-[0_0_18px_rgba(244,196,48,0.4)] transition-all duration-300 hover:scale-105 group font-bold text-xs sm:text-sm"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 group-hover:animate-bounce" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-3.5 -right-3.5 bg-mexican-gold text-mexican-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-mexican-black font-extrabold shadow-md shadow-black"
                    >
                      {cartCount > 9 ? "9+" : cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <span className="hidden md:inline uppercase tracking-widest text-[10px]">
                Mi Orden
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-mexican-cream hover:text-mexican-gold hover:scale-105 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu — positioned dynamically below navbar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{ top: navbarHeight }}
            className="fixed inset-x-0 z-40 bg-mexican-black/97 border-b-2 border-double border-mexican-gold/50 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col p-6 gap-4" aria-label="Menú móvil">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={activeSection === link.href.substring(1) ? "page" : undefined}
                  className={`text-base font-bold uppercase tracking-wider border-b border-mexican-wood/30 pb-2 ${
                    activeSection === link.href.substring(1)
                      ? "text-mexican-gold pl-2 border-l-2 border-mexican-red"
                      : "text-mexican-cream/80 hover:text-mexican-gold"
                  } transition-all duration-200`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between mt-2 pt-2">
                <a
                  href="tel:5129098530"
                  className="flex items-center gap-2 text-mexican-gold font-bold"
                >
                  <Phone className="w-4 h-4" />
                  (512) 909-8530
                </a>
                <span className="text-xs text-mexican-cream/50 uppercase tracking-widest">
                  Austin, TX
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
