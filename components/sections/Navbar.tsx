"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          scrolled || isMobileMenuOpen
            ? "bg-[#020617]/90 backdrop-blur-lg border-b border-[#38bdf8]/20 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.a
                href="/"
                className="group shrink-0"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#050B1A] overflow-hidden border border-[#20CFFF]/30 shadow-[0_0_15px_rgba(32,207,255,0.3)] group-hover:shadow-[0_0_25px_rgba(32,207,255,0.8)] group-hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-[#20CFFF]/10 group-hover:bg-[#20CFFF]/20 transition-colors rounded-full" />
                  <Image src="/logo.png" alt="Absolute Football Academy Logo" fill className="object-contain p-1 z-10" />

                </div>
              </motion.a>

              <div className="flex flex-col justify-center">
                <motion.a href="/" className="flex flex-col leading-none">
                  <span className="text-white font-black text-[16px] sm:text-2xl tracking-wider">
                    ABSOLUTE
                  </span>
                  <span className="text-[#20CFFF] font-black text-[7px] sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] mt-0.5">
                    FOOTBALL ACADEMY
                  </span>
                </motion.a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-6">
                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6">
                  <a href="/about" className="text-white/80 hover:text-[#20CFFF] text-xs font-display font-bold uppercase tracking-widest transition-colors">About</a>
                  <a href="/reviews" className="text-white/80 hover:text-[#20CFFF] text-xs font-display font-bold uppercase tracking-widest transition-colors">Reviews</a>
                  <a href="/gallery" className="text-white/80 hover:text-[#20CFFF] text-xs font-display font-bold uppercase tracking-widest transition-colors">Gallery</a>
                  <a href="/faq" className="text-white/80 hover:text-[#20CFFF] text-xs font-display font-bold uppercase tracking-widest transition-colors">FAQ</a>
                  <a href="/sponsors" className="text-white/80 hover:text-[#20CFFF] text-xs font-display font-bold uppercase tracking-widest transition-colors">Sponsors</a>
                </div>

                {/* Mobile CTA (and Desktop CTA) */}
                <div>
                  <Button
                    variant="primary"
                    className="bg-[#20CFFF] hover:bg-[#20CFFF]/90 text-[#020817] font-display font-black uppercase tracking-wider text-[11px] sm:text-[13px] px-4 py-2 sm:px-8 sm:py-3 rounded-full shadow-[0_0_20px_rgba(32,207,255,0.4)] border-none transition-all duration-300 h-auto min-h-0"
                  >
                    FREE TRIAL
                  </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  className="lg:hidden text-white hover:text-[#20CFFF] p-2 -mr-2 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-[#020617]/95 backdrop-blur-xl border-t border-[#38bdf8]/10"
            >
              <div className="flex flex-col px-6 py-6 gap-6 items-center">
                <a href="/about" className="text-white hover:text-[#38bdf8] text-sm font-display font-bold uppercase tracking-widest transition-colors">
                  About
                </a>
                <a href="/reviews" className="text-white hover:text-[#38bdf8] text-sm font-display font-bold uppercase tracking-widest transition-colors">
                  Reviews
                </a>
                <a href="/gallery" className="text-white hover:text-[#38bdf8] text-sm font-display font-bold uppercase tracking-widest transition-colors">
                  Gallery
                </a>
                <a href="/faq" className="text-white hover:text-[#38bdf8] text-sm font-display font-bold uppercase tracking-widest transition-colors">
                  FAQ
                </a>
                <a href="/sponsors" className="text-white hover:text-[#38bdf8] text-sm font-display font-bold uppercase tracking-widest transition-colors">
                  Sponsors
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>


    </>
  );
}
