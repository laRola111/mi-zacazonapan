"use client";
import React, { useState } from "react";
import { Phone, MapPin, Clock, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("2601 W Braker Ln, Austin, TX 78758");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const schedule = [
    { day: "Lunes a Jueves", hours: "7:00 AM - 10:00 PM" },
    { day: "Viernes y Sábados", hours: "7:00 AM - Midnight" },
    { day: "Domingos", hours: "7:00 AM - 10:00 PM" },
  ];

  return (
    <section
      id="contacto"
      className="relative py-24 bg-mexican-black text-mexican-cream"
    >
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-[#070605]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-mexican-red/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-mexican-gold">
            ¿Hambre o Preguntas?
          </span>
          <h2 className="mexican-title text-4xl sm:text-5xl md:text-6xl mt-2 uppercase tracking-wide">
            Contáctanos
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-mexican-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info Card */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Quick Contact Box */}
            <div className="wood-panel p-6 sm:p-8 relative border-2 border-mexican-gold">
              <h3 className="text-mexican-gold font-western uppercase tracking-wider text-lg mb-6 border-b border-mexican-wood/30 pb-2 flex items-center gap-2">
                📞 ¡Llama Directo!
              </h3>
              
              <div className="space-y-6">
                
                {/* Phone */}
                <a
                  href="tel:5129098530"
                  className="flex items-start gap-4 p-3 hover:bg-mexican-red/10 border border-transparent hover:border-mexican-gold/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-mexican-red/20 border border-mexican-gold flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-mexican-gold group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase font-bold tracking-widest text-mexican-cream/50">
                      Teléfono de Pedidos
                    </h5>
                    <span className="text-lg sm:text-xl font-sans font-bold text-mexican-cream group-hover:text-mexican-gold transition-colors duration-200">
                      (512) 909-8530
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-3 border border-transparent transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-mexican-red/20 border border-mexican-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-mexican-gold" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-[10px] uppercase font-bold tracking-widest text-mexican-cream/50">
                      Ubicación
                    </h5>
                    <span className="text-sm sm:text-base font-sans font-light text-mexican-cream block leading-relaxed mt-0.5">
                      2601 W Braker Ln, Austin, TX 78758
                    </span>
                    <button
                      onClick={handleCopyAddress}
                      className="mt-2 text-xs font-bold text-mexican-gold hover:text-mexican-cream flex items-center gap-1 uppercase tracking-wider transition-colors duration-200"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-500" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copiar Dirección
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Hours Signboard */}
            <div className="wood-panel p-6 sm:p-8 border-2 border-[#6B3E1F] relative">
              <h3 className="text-mexican-gold font-western uppercase tracking-wider text-lg mb-6 border-b border-mexican-wood/30 pb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-mexican-gold" />
                Horarios de Servicio
              </h3>

              <div className="space-y-4 font-sans text-sm">
                {schedule.map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between items-center border-b border-mexican-wood/20 pb-2 last:border-b-0"
                  >
                    <span className="font-bold text-mexican-cream/80">{row.day}</span>
                    <span className="font-extrabold text-mexican-gold bg-mexican-black/60 px-3 py-1 border border-mexican-wood/40">
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps & QR Placeholder */}
          <div className="col-span-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="wood-panel p-4 border-2 border-mexican-gold relative shadow-2xl h-full flex flex-col justify-between"
            >
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-mexican-gold" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-mexican-gold" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-mexican-gold" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-mexican-gold" />

              {/* Map container */}
              <div className="w-full h-80 sm:h-96 overflow-hidden border border-[#6B3E1F] bg-mexican-black relative">
                {/* Embed high fidelity map iframe centered at target address */}
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.713962635955!2d-97.71960252399222!3d30.387532374753067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc56b50adccb%3A0xc3f61ea0e62ea4ec!2s2601%20W%20Braker%20Ln%2C%20Austin%2C%20TX%2078758!5e0!3m2!1ses-419!2sus!4v1716656730000!5m2!1ses-419!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(120%) brightness(95%)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* QR Code integration and directions */}
              <div className="mt-4 pt-4 border-t border-mexican-wood/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-mexican-gold font-western uppercase text-xs sm:text-sm tracking-wider">
                    📍 ¿Cómo Llegar?
                  </h4>
                  <p className="text-mexican-cream/70 text-xs font-sans mt-1">
                    Estamos ubicados convenientemente sobre W Braker Ln, Austin TX.
                  </p>
                </div>
                
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2601+W+Braker+Ln+Austin+TX+78758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-mexican-red hover:bg-mexican-gold hover:text-mexican-black text-mexican-cream px-6 py-2.5 border border-mexican-gold font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-md"
                >
                  Abrir en Google Maps
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
