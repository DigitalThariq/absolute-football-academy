"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-lg border-b border-[#38bdf8]/20 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 sm:gap-4 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black/40 overflow-hidden border border-[#38bdf8]/30 shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.8)] group-hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-[#38bdf8]/10 group-hover:bg-[#38bdf8]/20 transition-colors rounded-full" />
                <Image src="/logo.png" alt="Absolute Football Academy Logo" fill className="object-contain p-1 z-10" />
              </div>
              <div className="flex flex-col justify-center sm:flex-row sm:items-baseline sm:gap-2 font-display uppercase tracking-wider leading-none">
                <span className="text-[#38bdf8] font-black text-lg sm:text-2xl drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
                  ABSOLUTE
                </span>
                <span className="text-[#94a3b8] font-bold text-[9px] sm:text-sm tracking-[0.15em] mt-1 sm:mt-0">
                  FOOTBALL ACADEMY
                </span>
              </div>
            </motion.a>

            {/* Desktop Nav - Hidden as per new clean layout request */}
            {/* <nav className="hidden md:flex items-center gap-1"> ... </nav> */}

            <div className="flex items-center gap-4 sm:gap-6">
              {/* About Link */}
              <a href="/about" className="text-white/80 hover:text-[#38bdf8] text-[10px] sm:text-xs font-display font-bold uppercase tracking-widest transition-colors hidden sm:block">
                About
              </a>

              {/* Reviews Link */}
              <a href="/reviews" className="text-white/80 hover:text-[#38bdf8] text-[10px] sm:text-xs font-display font-bold uppercase tracking-widest transition-colors hidden sm:block">
                Reviews
              </a>

              {/* FAQ Link */}
              <a href="/faq" className="text-white/80 hover:text-[#38bdf8] text-[10px] sm:text-xs font-display font-bold uppercase tracking-widest transition-colors hidden sm:block">
                FAQ
              </a>

              {/* CTA */}
              <div>
                <Button 
                  variant="primary" 
                  className="bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-white font-display font-black uppercase tracking-widest text-[11px] sm:text-[13px] px-5 py-2.5 sm:px-8 sm:py-3 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:shadow-[0_0_30px_rgba(56,189,248,0.9)] border border-[#38bdf8]/50 ring-2 ring-[#38bdf8]/20 ring-offset-2 ring-offset-[#020617] animate-pulse transition-all duration-300"
                >
                  Book Free Trial
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </motion.header>


    </>
  );
}
