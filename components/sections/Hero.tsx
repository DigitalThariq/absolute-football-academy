"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import LiquidEther from "@/components/ui/LiquidEther";

const WHATSAPP_NUMBER = "6589160656";
const WHATSAPP_MESSAGE = "Welcome to Absolute Football Academy. Ready to take your game to the Absolute Standard? Let us know your child's age and experience level to book a trial.";

const ageGroups = ["Ages 8–10", "Ages 11–12", "Ages 13–14"];

export default function Hero() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 bg-[#020617]">
      {/* Atmosphere Layer: Top Glow & Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top radial haze */}
        <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-[#38bdf8]/10 via-transparent to-transparent opacity-60" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#38bdf8]/5 blur-[120px] rounded-full" />
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_70%,rgba(2,6,23,0.8)_100%)]" />
      </div>

      {/* Background image layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/player_action.png"
          alt="Absolute Football Academy stadium background"
          className="w-full h-full object-cover opacity-30 scale-105 transition-transform duration-[20s] animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/40" />
      </div>

      {/* Futuristic Grid with Perspective */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
            transformOrigin: 'top center'
          }} 
        />
        {/* Soft drift particles (simulated via multiple glow spots) */}
        <motion.div 
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-1 h-1 bg-[#38bdf8] rounded-full blur-[1px] shadow-[0_0_8px_#38bdf8]" 
        />
        <motion.div 
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-[#38bdf8] rounded-full blur-[1px] shadow-[0_0_10px_#38bdf8]" 
        />
      </div>

      {/* LiquidEther Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#38bdf8', '#5227FF', '#B497CF']}
          mouseForce={30}
          cursorSize={150}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <Container className="relative z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 sm:py-24">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="accent" className="mb-6 bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/20 backdrop-blur-sm px-4 py-1.5">
                🇸🇬 Singapore&apos;s Premier Youth Academy
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-display-lg sm:text-display-xl text-white mb-6 leading-[1.05]"
            >
              Build{" "}
              <span className="relative inline-block group overflow-hidden">
                <span className="text-[#38bdf8] drop-shadow-[0_0_20px_rgba(56,189,248,0.4)] italic">Confidence</span>
                {/* Light Sweep Effect */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatDelay: 3.5, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] pointer-events-none"
                />
              </span>
              ,<br />
              Absolute Discipline &amp;{" "}
              <span className="text-white/80">Football Skills.</span>
            </motion.h1>

            {/* Subtext with ambient glow behind */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#38bdf8]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-body"
              >
                Professional European methodologies meet character-first coaching—for future champions aged{" "}
                <span className="text-[#38bdf8] font-semibold border-b border-[#38bdf8]/30">8 to 14</span>.
              </motion.p>
            </div>

            {/* Age groups & Buttons container */}
            <div className="w-full space-y-8">
              <div className="flex flex-col items-start gap-3">
                {/* Urgency Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 backdrop-blur-md"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="text-white text-[12px] font-body">
                    Now enrolling for 2026 — Limited Spots left
                  </span>
                </motion.div>

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
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#020617]/60 backdrop-blur-md border border-white/5 text-white/70 text-[10px] font-display font-semibold uppercase tracking-[0.15em] hover:border-[#38bdf8]/30 hover:text-white transition-all duration-300"
                    >
                      <Star className="w-3 h-3 text-[#38bdf8] fill-[#38bdf8]" />
                      {group}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Button variant="primary" size="lg" className="bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-white border-none shadow-[0_0_30px_rgba(56,189,248,0.3)] px-10">
                  FREE TRIAL REGISTRATION
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleWhatsApp}
                  className="border-white/10 text-white/80 hover:border-[#25d366]/50 hover:text-[#25d366] hover:bg-[#25d366]/5 gap-2.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  WHATSAPP COACH
                </Button>
              </motion.div>
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/5"
            >
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#020617] bg-surface-3 shadow-xl"
                    style={{
                      background: `hsl(${210 + i * 15}, 60%, ${25 + i * 5}%)`,
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-[#38bdf8] fill-[#38bdf8]" />
                  ))}
                  <span className="text-white font-display font-black text-sm ml-1 tracking-tighter">5.0 Rating</span>
                </div>
                <p className="text-white/40 text-[10px] font-display font-bold uppercase tracking-[0.1em]">
                  Trusted by 500+ families in Singapore
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <div className="order-2 flex justify-center lg:justify-end relative">
            {/* Ambient glow behind image */}
            <div className="absolute inset-0 bg-[#38bdf8]/10 blur-[100px] rounded-full scale-150 animate-pulse-slow" />
            
            <motion.div 
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                y: [0, -15, 0]
              }}
              transition={{ 
                opacity: { duration: 1 },
                scale: { duration: 1 },
                rotate: { duration: 1.5, ease: "easeOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Image 
                src="/absolute_neon_football.png" 
                alt="Absolute Football Academy Premium Branding" 
                fill 
                className="object-contain drop-shadow-[0_0_60px_rgba(56,189,248,0.3)] filter contrast-125" 
                priority
              />
              {/* Soft haze blend */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[9px] font-display font-black uppercase tracking-[0.3em]">Precision Excellence</span>
        <ChevronDown className="w-5 h-5 text-[#38bdf8]/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
