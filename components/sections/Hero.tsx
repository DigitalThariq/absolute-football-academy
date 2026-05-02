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
          alt="Absolute Football Academy stadium background"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 z-0 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 sm:py-24">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="accent" className="mb-6">
                🇸🇬 Singapore&apos;s Premier Youth Academy
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-display-lg sm:text-display-xl text-foreground mb-6 leading-[1.05]"
            >
              Build{" "}
              <span className="relative">
                <span className="text-[#38bdf8] drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] italic">Confidence</span>
              </span>
              ,<br />
              Discipline &amp;{" "}
              <span className="text-foreground-2">Football Skills</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-foreground-3 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-body"
            >
              Professional European methodologies meet character-first coaching —
              for future champions aged{" "}
              <span className="text-[#38bdf8] font-semibold">8 to 14</span>.
            </motion.p>

            {/* Age groups & Buttons container for better mobile flow */}
            <div className="w-full space-y-8">
              {/* Age group pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {ageGroups.map((group, i) => (
                  <span
                    key={group}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-3 border border-border text-foreground-3 text-[10px] font-display font-semibold uppercase tracking-widest"
                  >
                    <Star className="w-3 h-3 text-[#38bdf8] fill-[#38bdf8]" />
                    {group}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="primary" size="lg" className="shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  Free Trial Registration
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
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-5 mt-10"
            >
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-background bg-surface-3"
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
                <p className="text-foreground-3 text-[10px] font-body uppercase tracking-wider">
                  Trusted by 500+ families in Singapore
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image (Desktop only here, Mobile below) */}
          <div className="order-2 flex justify-center lg:justify-end">
            <motion.div 
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Image 
                src="/absolute_neon_football.png" 
                alt="Absolute Football Academy Branding" 
                fill 
                className="object-contain drop-shadow-[0_0_50px_rgba(56,189,248,0.25)]" 
                priority
              />
              {/* Subtle edge gradient to blend */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-foreground-3 text-[10px] font-display uppercase tracking-[0.2em]">Explore</span>
        <ChevronDown className="w-4 h-4 text-[#38bdf8]/60 animate-bounce" />
      </motion.div>
    </section>
  );
}
