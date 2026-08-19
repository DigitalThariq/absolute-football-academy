"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Separator from "@/components/ui/Separator";



const social = [
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/absolute_football_academy/" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/absolutefootballacademyafa" },
];

const contact = [
  { Icon: MapPin, text: "Westwood Secondary School, 11 Jurong West Street 25, S 648350" },
  { Icon: Phone, text: "+65 9449 2453" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer className="bg-[#080809] border-t border-border relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <Container ref={ref}>
        <div className="py-20">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            {/* Brand block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6 group">
                <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-black/40 overflow-hidden border border-[#38bdf8]/30 shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.8)] group-hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-[#38bdf8]/10 group-hover:bg-[#38bdf8]/20 transition-colors rounded-full" />
                  <Image src="/new-logo.png" alt="Absolute Football Academy Logo" fill className="object-contain p-1 z-10" />
                </div>
                <div className="flex flex-col justify-center gap-0.5 font-display uppercase tracking-wider leading-none text-left">
                  <span className="text-[#38bdf8] font-black text-xl drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
                    ABSOLUTE
                  </span>
                  <span className="text-[#94a3b8] font-bold text-[11px] tracking-[0.15em]">
                    FOOTBALL ACADEMY
                  </span>
                </div>
              </div>

              <p className="text-foreground-3 text-sm leading-relaxed mb-4 font-body">
                ⚽️ Defining the future of SG Football. | 🏆 Elite U-14 Development. | 🇸🇬 Professional Standards. Global Ambitions.
              </p>
              <p className="text-foreground-3 text-sm leading-relaxed mb-8 font-body">
                Started from 2014, Absolute Football Academy is Singapore’s premier youth program, blending world-class technical training with comprehensive character education.
              </p>

              {/* Contact info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {contact.map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <item.Icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span className="text-foreground-3 text-xs font-body">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex items-center justify-center gap-3">
                {social.map(({ Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                    className="w-9 h-9 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-foreground-3 hover:text-accent hover:border-accent/30 hover:bg-accent-container transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <Separator accent />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-3 text-xs font-display uppercase tracking-widest">
            © 2014 Absolute Football Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-foreground-3">
            <span className="text-xs font-display uppercase tracking-widest">Made in Singapore</span>
            <span className="text-sm">🇸🇬</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
