"use client";
import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function AudioPlayer() {
  const { lang } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Audio element configuration
    audioRef.current = new Audio("/audio/zacazonapan-song.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // First interaction autoplay trigger
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Autoplay blocked by browser policy:", err);
        });
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Playback failed:", err);
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    const newMute = !muted;
    setMuted(newMute);
    audioRef.current.muted = newMute;
  };

  return (
    <div className="fixed bottom-24 right-4 z-40 flex items-center gap-2 select-none">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="flex items-center gap-2.5 bg-mexican-black border-2 border-mexican-gold px-3.5 py-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.8)] cursor-pointer text-mexican-gold group hover:bg-[#120e0b] transition-all duration-300 rounded-full"
        title={isPlaying ? (lang === "es" ? "Pausar música" : "Pause music") : (lang === "es" ? "Reproducir música" : "Play music")}
      >
        {/* Animated Soundwaves */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-3.5 w-4 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  height: ["20%", "100%", "40%", "80%", "20%"]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6 + i * 0.15,
                  ease: "easeInOut"
                }}
                className="w-[2px] bg-mexican-gold rounded-full origin-bottom"
              />
            ))}
          </div>
        ) : (
          <Music className="w-3.5 h-3.5 text-mexican-gold/70 group-hover:text-mexican-gold shrink-0" />
        )}

        <span className="font-condensed text-[10px] uppercase tracking-wider hidden sm:inline font-bold">
          {isPlaying ? (lang === "es" ? "Música Activa" : "Music On") : (lang === "es" ? "Activar Sazón" : "Play Music")}
        </span>

        {/* Volume Mute Indicator */}
        <button
          onClick={toggleMute}
          className="ml-1 text-mexican-gold/70 hover:text-mexican-gold transition-colors shrink-0"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </motion.div>
    </div>
  );
}
