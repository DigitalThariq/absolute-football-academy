"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const WHATSAPP_NUMBER = "6589160656";
const WHATSAPP_MESSAGE = "Hi! I want to book a free trial at Absolute Football Academy.";

const ageGroups = ["Ages 8–10", "Ages 11–12", "Ages 13–14"];

export default function Hero() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/player_action.png"
          alt="Absolute Football Academy stadium"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        {/* Accent glow blobs */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent/4 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0 pointer-events-none" />

      {/* Floating 3D Neon Football + CTA Area */}
      <motion.div 
        className="absolute right-[5%] top-[12%] lg:right-[8%] lg:top-[10%] w-72 md:w-[450px] z-20 flex flex-col items-center gap-4 sm:gap-8 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: [0, -15, 0],
          rotate: [0, 2, 0] 
        }}
        transition={{ 
          opacity: { duration: 1.2 },
          scale: { duration: 1.2 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Main Football Image */}
        <div className="relative w-full aspect-square transition-transform duration-700 hover:scale-105 pointer-events-auto cursor-pointer">
          <Image 
            src="/absolute_neon_football.png" 
            alt="Absolute Football Academy" 
            fill 
            className="object-contain drop-shadow-[0_0_40px_rgba(56,189,248,0.35)] blur-[0.3px]" 
          />
        </div>

        {/* CTA Button centered below image */}
        <motion.div
          className="pointer-events-auto"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button 
            variant="primary" 
            size="sm"
            className="rounded-full px-6 py-3 sm:px-10 sm:py-4 bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-white font-display font-black uppercase tracking-widest text-[10px] sm:text-xs shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.7)] border-none transition-all duration-300"
          >
            Book Free Trial
          </Button>
        </motion.div>
      </motion.div>

      <Container className="relative z-10">
        <div className="max-w-3xl py-20 sm:py-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="accent" className="mb-8">
              🇸🇬 Singapore&apos;s Premier Youth Academy
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-lg sm:text-display-xl text-foreground mb-6 leading-[1.05]"
          >
            Build{" "}
            <span className="relative">
              <span className="text-accent text-glow italic">Confidence</span>
            </span>
            ,<br />
            Discipline &amp;{" "}
            <span className="text-foreground-2">Football Skills</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground-3 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-body"
          >
            Professional European methodologies meet character-first coaching —
            for future champions aged{" "}
            <span className="text-accent font-semibold">8 to 14</span>.
          </motion.p>

          {/* Age group pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {ageGroups.map((group, i) => (
              <motion.span
                key={group}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.38 + i * 0.08 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-3 border border-border text-foreground-3 text-xs font-display font-semibold uppercase tracking-widest"
              >
                <Star className="w-3 h-3 text-accent fill-accent" />
                {group}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg" className="neon-glow-md">
              Book Free Trial
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={handleWhatsApp}
              className="border-border hover:border-[#25d366]/50 hover:text-[#25d366] hover:bg-[#25d366]/5 gap-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Coach
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-5 mt-12"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-surface-3 to-surface-4"
                  style={{
                    background: `hsl(${200 + i * 15}, 60%, ${30 + i * 5}%)`,
                  }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-foreground font-display font-bold text-sm ml-1">5.0</span>
              </div>
              <p className="text-foreground-3 text-xs font-body">
                Trusted by <span className="text-foreground font-semibold">500+ families</span> in Singapore
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-foreground-3 text-[10px] font-display uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
