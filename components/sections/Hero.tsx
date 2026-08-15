"use client";

import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ChevronDown, ArrowRight, Gift } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "6594492453";
const WHATSAPP_MESSAGE = "Hi Absolute Football Academy, I’m interested in booking a free trial for my child. Could you please share the available sessions and details? Thank you!";

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
  const [showSticky, setShowSticky] = useState(false);
  
  // Parallax effect for the background
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 350]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowSticky(latest > 120);
  });

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
            background: "linear-gradient(90deg, rgba(4,10,22,.80) 0%, rgba(4,10,22,.70) 35%, rgba(4,10,22,.40) 60%, rgba(4,10,22,.60) 100%)"
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
            <div className="h-[28px] sm:h-[36px] relative w-full mb-5 max-w-sm">
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
                className="group relative flex items-center justify-between w-full sm:w-80 h-[60px] bg-[#007BA7] hover:bg-gradient-to-r hover:from-[#20CFFF] hover:to-[#009DFF] rounded-full p-2 shadow-[0_0_20px_rgba(32,207,255,0.2)] hover:shadow-[0_0_40px_rgba(32,207,255,0.6)] transition-all duration-300"
              >
                {/* Gift Icon Box */}
                <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#050B1A]/40 transition-colors group-hover:bg-[#050B1A]/20">
                  <Gift className="w-5 h-5 text-white group-hover:text-[#020817] transition-colors" />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center justify-center flex-1 px-2">
                  <span className="text-white group-hover:text-[#020817] font-black font-display text-[20px] uppercase tracking-widest leading-none mb-1 transition-colors">
                    FREE TRIAL
                  </span>
                  <span className="text-white/80 group-hover:text-[#020817]/80 font-bold font-display text-[8px] uppercase tracking-[0.2em] leading-none transition-colors">
                    START YOUR JOURNEY
                  </span>
                </div>
                
                {/* Arrow Icon */}
                <div className="flex items-center justify-center w-8 h-8 mr-2">
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-[#020817] group-hover:translate-x-1.5 transition-all duration-300" />
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
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-[100] sm:hidden"
          >
            <div className="relative">
              {/* Main sticky banner */}
              <button onClick={handleWhatsApp} className="w-full h-14 bg-[#050B1A] border-t border-[#20CFFF]/20 flex items-center justify-center gap-3 active:bg-[#0A192F] transition-colors">
                <span className="text-white font-display font-black uppercase text-[15px] tracking-widest mt-0.5">
                  BOOK FREE TRIAL SESSION
                </span>
                <ArrowRight className="w-4 h-4 text-[#20CFFF]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
