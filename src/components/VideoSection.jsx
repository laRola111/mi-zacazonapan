"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function VideoSection() {
  const { lang } = useLanguage();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="relative w-full bg-[#080604] py-10 sm:py-14 overflow-hidden">
      {/* Top gradient fade from hero */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-mexican-black to-transparent pointer-events-none z-10" />
      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#111010] to-transparent pointer-events-none z-10" />
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(227,27,35,0.07),transparent)] pointer-events-none" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="font-condensed text-[#E31B23] text-[10px] sm:text-xs uppercase tracking-[0.25em] block mb-2">
            {lang === "es" ? "Conócenos" : "Meet Us"}
          </span>
          <h2 className="mexican-title text-3xl sm:text-4xl md:text-5xl uppercase">
            Mi Zacazonapan
          </h2>
        </motion.div>

        {/* Video wrapper — vertical video centered, max-width on large screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          {/* Outer frame — gold border, max-w limits width on desktop so vertical video stays vertical */}
          <div className="relative w-full max-w-sm sm:max-w-md">
            <div className="relative border-2 border-mexican-gold/60 shadow-[0_0_40px_rgba(249,224,20,0.12),0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-mexican-gold z-30 pointer-events-none" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-mexican-gold z-30 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-mexican-gold z-30 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-mexican-gold z-30 pointer-events-none" />

              {/* Video — let it define its own height via natural aspect ratio */}
              <div className="relative">
                <video
                  ref={videoRef}
                  src="/videos/video-mi-zacazonapan.mp4"
                  className="w-full block"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  style={{ display: "block" }}
                />

                {/* Dark overlay when paused */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none ${isPlaying ? "opacity-0" : "opacity-40"}`}
                />

                {/* Play / Pause button — center */}
                <button
                  type="button"
                  onClick={handlePlayPause}
                  aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                  className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                >
                  <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 border-mexican-gold bg-black/65 backdrop-blur-sm shadow-[0_0_24px_rgba(249,224,20,0.35)] transition-transform duration-200 hover:scale-110">
                    {isPlaying ? (
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-mexican-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-mexican-gold translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Mute / Unmute — bottom right */}
                <button
                  type="button"
                  onClick={handleMute}
                  aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                  className="absolute bottom-3 right-3 z-30 w-9 h-9 rounded-full flex items-center justify-center bg-black/65 border border-mexican-gold/50 hover:border-mexican-gold transition-all duration-200 backdrop-blur-sm"
                >
                  {isMuted ? (
                    <svg className="w-4 h-4 text-mexican-gold/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-mexican-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                    </svg>
                  )}
                </button>

                {/* "Toca para reproducir" hint — only when paused */}
                {!isPlaying && (
                  <div className="absolute bottom-3 left-3 z-20 bg-black/60 backdrop-blur-sm border border-mexican-gold/30 px-2 py-1 pointer-events-none">
                    <span className="text-[9px] sm:text-[10px] font-condensed uppercase tracking-wider text-mexican-gold/70">
                      {lang === "es" ? "Toca para reproducir" : "Tap to play"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-condensed text-[#F8F1E5]/40 text-[10px] sm:text-xs uppercase tracking-widest mt-5"
        >
          {lang === "es"
            ? "Auténtica cocina mexicana en Austin, TX"
            : "Authentic Mexican kitchen in Austin, TX"}
        </motion.p>
      </div>
    </section>
  );
}
