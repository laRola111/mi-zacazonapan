"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HandmadeTortillas() {
  return (
    <section
      id="tortillas"
      className="relative w-full bg-mexican-black overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-full"
      >
        <img
          src="/images/seccion-final.jpg"
          alt="Mi Zacazonapan — Sección especial"
          className="w-full h-auto block object-cover"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </section>
  );
}
