"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "6594492453";
const WHATSAPP_MESSAGE = "Hi, I'm interested in joining Absolute Football Academy - can you tell me more?";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {/* Popup tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="bg-surface-2 border border-border-accent rounded-2xl p-5 w-72 shadow-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#25d366]/15 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
              </div>
              <div>
                <p className="text-foreground font-display font-bold text-sm">Chat with Coach</p>
                <p className="text-foreground-3 text-xs">Usually replies in under 10 min</p>
              </div>
            </div>
            <p className="text-foreground-2 text-sm leading-relaxed mb-4">
              Book your <span className="text-accent font-semibold">free 90-min trial</span> — no commitment needed.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white font-display font-bold text-sm uppercase tracking-widest py-3 rounded-xl transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Open WhatsApp
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        aria-label="Chat on WhatsApp"
        className={[
          "group relative w-[56px] h-[56px] rounded-full flex items-center justify-center",
          "bg-[#25d366] text-white shadow-[0_0_24px_rgba(37,211,102,0.4)]",
          "transition-all duration-200",
        ].join(" ")}
      >
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-white text-[#020617] text-sm font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-lg pointer-events-none">
          Chat with Coach — reply in minutes
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-y-transparent border-l-[6px] border-l-white" />
        </div>

        {/* Ping animation */}
        <span 
          className="absolute inset-0 rounded-full border-[3px] border-[#25d366] opacity-60 pointer-events-none" 
          style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }}
        />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
