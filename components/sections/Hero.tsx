"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, MapPin, Gift } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const WHATSAPP_NUMBER = "6589160656";
const WHATSAPP_MESSAGE = "Welcome to Absolute Football Academy. Ready to take your game to the Absolute Standard? Let us know your child's age and experience level to book a trial.";

export default function Hero() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-32 bg-[#020817] selection:bg-[#20CFFF] selection:text-[#020817]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero_player_10.png"
          alt="Absolute Football Academy Player"
          fill
          priority
          className="object-cover object-[75%_top] sm:object-center opacity-70"
        />
        {/* Dark Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/80 to-transparent sm:via-[#020817]/40" />
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#020817]/90 to-transparent" />
        
        {/* Cinematic Cyan Glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#20CFFF]/10 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10 pointer-events-auto h-full flex flex-col justify-center mt-8 sm:mt-0 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Main Content */}
          <div className="flex flex-col items-start w-full">
            
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full sm:w-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#081225] bg-[#050B1A]/80 shadow-md mb-8">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#20CFFF]" />
                <span className="text-[#20CFFF] font-display font-bold uppercase tracking-[0.1em] text-[8px] sm:text-xs">
                  SINGAPORE&apos;S PREMIER YOUTH ACADEMY
                </span>
              </div>
            </motion.div>

            {/* Stacked Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-black uppercase flex flex-col text-[12vw] sm:text-5xl lg:text-7xl leading-[0.95] tracking-tight mb-8 drop-shadow-lg"
            >
              <span className="text-white">BUILD</span>
              <span className="text-[#20CFFF]">CONFIDENCE,</span>
              <span className="text-white">ABSOLUTE</span>
              <span className="flex items-center gap-2">
                <span className="text-[#20CFFF]">DISCIPLINE</span>
                <span className="text-white font-serif italic font-normal">&amp;</span>
              </span>
              <span className="text-white">FOOTBALL</span>
              <span className="text-[#20CFFF]">SKILLS.</span>
            </motion.div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 font-body text-[15px] sm:text-xl leading-relaxed mb-10 max-w-sm flex flex-col gap-0.5 drop-shadow-md"
            >
              <span>Developing young athletes.</span>
              <span>Building champions.</span>
              <span className="text-[#20CFFF] font-semibold">For the future.</span>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full sm:w-auto mb-16"
            >
              <button 
                onClick={handleWhatsApp}
                className="group relative flex items-center justify-between w-full sm:w-80 h-[72px] bg-gradient-to-r from-[#20CFFF] to-[#009DFF] rounded-full p-2 shadow-[0_0_30px_rgba(32,207,255,0.3)] hover:shadow-[0_0_50px_rgba(32,207,255,0.6)] transition-all duration-300"
              >
                {/* Gift Icon Box */}
                <div className="flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#050B1A]/40">
                  <Gift className="w-7 h-7 text-[#020817]" />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center justify-center flex-1 px-2">
                  <span className="text-[#020817] font-black font-display text-[22px] uppercase tracking-widest leading-none mb-1">
                    FREE TRIAL
                  </span>
                  <span className="text-[#020817]/80 font-bold font-display text-[9px] uppercase tracking-[0.2em] leading-none">
                    START YOUR JOURNEY
                  </span>
                </div>
                
                {/* Arrow Icon */}
                <div className="flex items-center justify-center w-10 h-10 mr-4">
                  <ArrowRight className="w-7 h-7 text-[#020817] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </button>
            </motion.div>

          </div>

          {/* Right Side: Hidden on mobile */}
          <div className="hidden lg:flex justify-end items-center">
            {/* Desktop graphics */}
          </div>
        </div>

      </Container>
      
      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] sm:hidden">
        <div className="relative">
          {/* Scroll down indicator floating above */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg border border-black/10 cursor-pointer">
            <ChevronDown className="w-5 h-5 text-[#020817]" />
          </div>
          {/* Main sticky banner */}
          <button onClick={handleWhatsApp} className="w-full h-14 bg-[#20CFFF] flex items-center justify-center gap-3 active:bg-[#009DFF] transition-colors">
            <span className="text-[#020817] font-display font-black uppercase text-[15px] tracking-widest mt-0.5">
              BOOK FREE TRIAL SESSION
            </span>
            <ArrowRight className="w-4 h-4 text-[#020817]" />
          </button>
        </div>
      </div>

    </section>
  );
}
