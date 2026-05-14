"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Star, MapPin, ShieldCheck, Target, Medal, Users, Trophy, Clock, ArrowRight, Gift, Award } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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

        {/* Trust Indicators Section */}
        <div className="w-full flex flex-col gap-5 mt-4 relative z-20">
          
          {/* 3-Column Features Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 w-full py-4 px-2 sm:p-6 rounded-xl border border-[#081225] bg-[#050B1A] shadow-lg"
          >
            {[
              { icon: ShieldCheck, text: "EXPERT COACHES" },
              { icon: Target, text: "PROVEN TRAINING" },
              { icon: Medal, text: "PLAYER DEVELOPMENT" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left justify-center sm:justify-start border-r border-[#081225] last:border-0 px-1">
                <feature.icon className="w-5 h-5 sm:w-8 sm:h-8 text-[#20CFFF] shrink-0" />
                <span className="text-white/80 font-display font-bold uppercase text-[7.5px] sm:text-xs tracking-wider leading-tight w-[60px] sm:w-auto mt-1 sm:mt-0">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* 4-Column Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-4 gap-2 sm:gap-6 w-full py-5 px-1 sm:p-8 rounded-xl border border-[#081225] bg-[#050B1A] shadow-lg"
          >
            {[
              { icon: Users, stat: "1000+", label: "PLAYERS", sublabel: "DEVELOPED" },
              { icon: Trophy, stat: "50+", label: "TOURNAMENTS", sublabel: "WON" },
              { icon: Clock, stat: "10+", label: "YEARS OF", sublabel: "EXCELLENCE" },
              { icon: Star, stat: "4.9/5", label: "PARENT", sublabel: "RATING" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center border-r border-[#081225] last:border-0">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#20CFFF] mb-2 sm:mb-4 shrink-0 fill-transparent" />
                <span className="text-[#20CFFF] font-black font-display text-[17px] sm:text-3xl leading-none mb-1 sm:mb-2">{item.stat}</span>
                <span className="text-white/80 font-bold font-display text-[6.5px] sm:text-[10px] uppercase tracking-[0.15em] leading-tight">{item.label}</span>
                <span className="text-white/60 font-bold font-display text-[6.5px] sm:text-[10px] uppercase tracking-[0.15em] leading-tight">{item.sublabel}</span>
              </div>
            ))}
          </motion.div>

          {/* Bottom Trust Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center justify-between w-full pt-2 px-1"
          >
            <div className="flex items-center gap-3">
              {/* Avatars */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#020817] overflow-hidden bg-slate-800">
                     <Image src={`/player_action.png`} alt={`User ${i}`} width={32} height={32} className="object-cover" />
                  </div>
                ))}
              </div>
              
              {/* Trust Text */}
              <div className="flex flex-col">
                <span className="text-white font-display font-black uppercase text-[8.5px] sm:text-sm tracking-[0.15em] leading-tight">
                  TRUSTED BY PARENTS.
                </span>
                <span className="text-[#20CFFF] font-display font-black uppercase text-[8.5px] sm:text-sm tracking-[0.15em] leading-tight mt-0.5">
                  LOVED BY PLAYERS.
                </span>
              </div>
            </div>

            {/* Premium Laurel/Award Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#081225] bg-[#050B1A] shadow-[0_0_15px_rgba(32,207,255,0.15)] shrink-0">
              <Award className="w-5 h-5 text-[#20CFFF]" />
            </div>
          </motion.div>

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
