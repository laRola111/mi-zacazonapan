"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Phone, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar({ activeSection }) {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: t.nav.inicio,     href: "#inicio" },
    { name: t.nav.breakfast,  href: "#breakfast" },
    { name: t.nav.carnes,     href: "#carnes" },
    { name: t.nav.tortillas,  href: "#tortillas" },
    { name: t.nav.contacto,   href: "#contacto" },
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
            <div className="flex flex-col min-w-0">
              <span className="font-western text-base sm:text-lg tracking-wider text-mexican-gold uppercase leading-tight truncate">
                Mi Zacazonapan
              </span>
              <span className="hidden sm:block text-[9px] tracking-widest text-mexican-cream/80 uppercase font-sans font-bold -mt-0.5">
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
                  key={link.href}
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle Button */}
            <motion.button
              onClick={toggleLang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="lang-toggle-btn"
              aria-label={t.switchLabel}
              title={t.switchLabel}
              className="flex items-center gap-1.5 px-2.5 py-2 rounded-none border border-mexican-gold/50 text-mexican-gold hover:bg-mexican-gold/10 hover:border-mexican-gold transition-all duration-300 font-bold text-[11px] uppercase tracking-wider"
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="hidden sm:inline"
                >
                  {t.langLabel}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Call button */}
            <a
              href="tel:5129098530"
              className="hidden sm:flex items-center justify-center p-2 rounded-full border border-mexican-gold/40 text-mexican-gold hover:bg-mexican-red/20 transition-all duration-300 hover:scale-105"
              aria-label={t.nav.callLabel}
              title={t.nav.callTitle}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-mexican-cream hover:text-mexican-gold hover:scale-105 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
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
                  key={link.href}
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

              {/* Language toggle in mobile menu */}
              <button
                onClick={() => { toggleLang(); setMobileMenuOpen(false); }}
                className="flex items-center gap-2 text-mexican-gold font-bold text-sm uppercase tracking-wider border-b border-mexican-wood/30 pb-2 hover:text-mexican-cream transition-colors"
              >
                <Globe className="w-4 h-4" />
                {t.switchLabel}
              </button>

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
