"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Gift } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "6594492453";
const WHATSAPP_MESSAGE = "Welcome to Absolute Football Academy. Ready to take your game to the Absolute Standard? Let us know your child's age and experience level to book a trial.";

const slides = [
  { 
    src: "/gallery/Match%205.jpeg", 
    alt: "Coach talking to children",
    line1: "BUILD",
    line2: "CONFIDENCE.",
    subtext: "Develop fearless young athletes.",
    imageClass: "object-cover object-left md:object-center"
  },
  { 
    src: "/gallery/Training%201.JPG", 
    alt: "Training drills",
    line1: "DEVELOP",
    line2: "DISCIPLINE.",
    subtext: "Professional coaching. Every session.",
    imageClass: "object-cover object-center"
  },
  { 
    src: "/gallery/Macth%204.jpg", 
    alt: "Match celebration",
    line1: "CREATE",
    line2: "CHAMPIONS.",
    subtext: "Where passion meets excellence.",
    imageClass: "object-cover object-center"
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Parallax effect for the background
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 350]);

  useEffect(() => {
    // 5 seconds per slide.
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-32 bg-[#040A16] selection:bg-[#20CFFF] selection:text-[#020817]">
      {/* Animated Background Image Slider with Parallax */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden scale-110">
        <AnimatePresence initial={true}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 5, ease: "linear" }
            }}
            className="absolute inset-0 origin-center"
          >
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              fill
              priority={currentSlide === 0}
              className={slides[currentSlide].imageClass}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Specific Gradient Overlay for Readability */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(90deg, rgba(4,10,22,.65) 0%, rgba(4,10,22,.55) 35%, rgba(4,10,22,.40) 60%, rgba(4,10,22,.60) 100%)"
          }}
        />
        
        {/* Cinematic Cyan Glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#20CFFF]/10 blur-[120px] rounded-full z-10 mix-blend-screen" />
      </motion.div>

      <Container className="relative z-20 pointer-events-auto h-full flex flex-col justify-center mt-8 sm:mt-0 max-w-7xl mx-auto">
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
                <span className="text-[#20CFFF] font-display font-bold uppercase tracking-[0.1em] text-[8px] sm:text-xs">
                  Team In Singapore youth League (SYL)
                </span>
              </div>
            </motion.div>

            {/* Dynamic Animated Headline */}
            <div className="h-[90px] sm:h-[130px] lg:h-[170px] xl:h-[200px] relative w-full mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="font-display font-black uppercase flex flex-col text-[13vw] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight drop-shadow-lg absolute inset-0"
                >
                  <span className="text-white">{slides[currentSlide].line1}</span>
                  <span className="text-[#20CFFF]">{slides[currentSlide].line2}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dynamic Animated Subtext */}
            <div className="h-[28px] sm:h-[36px] relative w-full mb-10 max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className="text-white/90 font-body text-[16px] sm:text-[20px] font-medium leading-relaxed drop-shadow-md absolute inset-0"
                >
                  {slides[currentSlide].subtext}
                </motion.div>
              </AnimatePresence>
            </div>

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
        </div>
      </Container>
      
      {/* Scroll Down Indicator (Desktop) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-[#20CFFF] text-[9px] font-display uppercase tracking-[0.3em]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1.5px] h-12 bg-gradient-to-b from-[#20CFFF] to-transparent"
        />
      </motion.div>

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
