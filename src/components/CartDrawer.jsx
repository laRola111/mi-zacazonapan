"use client";
import React from "react";
import { X, Trash2, ShoppingBag, Plus, Minus, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const { t } = useLanguage();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;
    const phone = "5129098530";
    const message = t.cart.whatsappMsg(cartItems, subtotal.toFixed(2));
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backblur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-screen max-w-md bg-mexican-black border-l-2 border-double border-mexican-gold relative shadow-2xl flex flex-col h-full text-mexican-cream"
            >
              {/* Inner ornaments */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-mexican-gold/30" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-mexican-gold/30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-mexican-gold/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-mexican-gold/30" />

              {/* Drawer Header */}
              <div className="px-6 py-6 border-b border-[#6B3E1F]/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-mexican-gold" />
                  <h2 className="text-mexican-gold font-sancreek uppercase tracking-wider text-base sm:text-lg">
                    {t.cart.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label={t.cart.closeCart}
                  className="p-1 text-mexican-cream/70 hover:text-mexican-gold transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                    <ShoppingBag className="w-16 h-16 text-mexican-gold stroke-[1]" />
                    <p className="font-sans text-sm font-light uppercase tracking-widest text-mexican-cream/70 whitespace-pre-line">
                      {t.cart.empty}
                    </p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id + (item.customOptions || "")}
                      className="p-3 bg-[#120E0B] border border-[#6B3E1F]/40 flex items-start gap-3 relative group"
                    >
                      {/* Image frame */}
                      <div className="w-16 h-16 overflow-hidden border border-mexican-wood shrink-0 bg-mexican-black">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover saturate-110"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-mexican-gold font-western uppercase tracking-wide text-xs sm:text-sm truncate">
                          {item.name}
                        </h4>

                        {item.customOptions && (
                          <span className="block text-[10px] text-mexican-cream/50 italic truncate mt-0.5">
                            {item.customOptions}
                          </span>
                        )}

                        <span className="block text-xs font-bold text-mexican-cream/80 mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.customOptions, item.quantity - 1)}
                            className="w-6 h-6 border border-[#6B3E1F] flex items-center justify-center text-mexican-cream/70 hover:bg-[#6B3E1F]/20 hover:text-mexican-gold transition-colors duration-200"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.customOptions, item.quantity + 1)}
                            className="w-6 h-6 border border-[#6B3E1F] flex items-center justify-center text-mexican-cream/70 hover:bg-[#6B3E1F]/20 hover:text-mexican-gold transition-colors duration-200"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.id, item.customOptions)}
                        className="p-1.5 text-mexican-cream/40 hover:text-mexican-red transition-colors duration-200"
                        title={t.cart.remove}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-[#6B3E1F]/50 bg-mexican-black/90">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs uppercase tracking-widest font-extrabold text-mexican-cream/75">
                      {t.cart.subtotal}
                    </span>
                    <span className="text-xl font-bold text-mexican-gold tracking-wider">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-mexican-red hover:bg-mexican-gold hover:text-mexican-black text-mexican-cream px-6 py-4 border border-mexican-gold font-extrabold uppercase tracking-wider text-sm transition-all duration-300 shadow-[0_4px_15px_rgba(197,30,30,0.3)] hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    {t.cart.sendWhatsApp}
                  </button>

                  <p className="text-[10px] text-mexican-cream/40 text-center uppercase tracking-widest mt-4 leading-relaxed">
                    {t.cart.whatsappNote}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
