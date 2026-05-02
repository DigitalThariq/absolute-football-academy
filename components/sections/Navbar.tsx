"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Pathway", href: "#pathway" },
  { label: "Coaches", href: "#" },
  { label: "Registration", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="relative px-4 py-2 text-foreground-3 hover:text-foreground font-body text-sm font-medium transition-colors group"
                >
                  {link.label}
                  <span className="absolute inset-x-4 bottom-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Button variant="primary" size="sm">
                Book Free Trial
              </Button>
            </div>

            {/* Mobile toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-foreground-2"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <Container>
              <nav className="py-6 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3.5 text-foreground-2 hover:text-foreground font-body text-base font-medium rounded-xl hover:bg-surface-2 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="primary" size="md" fullWidth>
                    Book Free Trial
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
