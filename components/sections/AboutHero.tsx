"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutHero() {
  // Parallax effect for the background
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 350]);

  return (
    <section className="relative h-[60vh] sm:h-[70vh] flex flex-col justify-center overflow-hidden bg-[#040A16] selection:bg-[#20CFFF] selection:text-[#020817]">
      {/* Background Image with Parallax */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden scale-110">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 5, ease: "easeOut" }
          }}
          className="absolute inset-0 origin-center"
        >
          {/* We use a placeholder gallery image here. The user can swap to their specific team photo if uploaded. */}
          <Image
            src="/gallery/about.jpeg"
            alt="Absolute Football Academy Team"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
        </motion.div>

        {/* Specific Gradient Overlay for Readability */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(4,10,22,0.4) 0%, rgba(4,10,22,0.8) 100%)"
          }}
        />
        
        {/* Cinematic Cyan Glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#20CFFF]/20 blur-[120px] rounded-full z-10 mix-blend-screen" />
      </motion.div>

      <Container className="relative z-20 pointer-events-auto flex flex-col items-center justify-center text-center max-w-4xl mx-auto mt-20">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#20CFFF]/30 bg-[#050B1A]/80 shadow-md">
            <span className="text-[#20CFFF] font-display font-bold uppercase tracking-[0.1em] text-[10px] sm:text-xs">
              Who We Are
            </span>
          </div>
        </motion.div>

        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight drop-shadow-lg text-white mb-6"
        >
          ABOUT <span className="text-[#20CFFF]">ABSOLUTE</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-white/90 font-body text-[16px] sm:text-[20px] font-medium leading-relaxed drop-shadow-md max-w-2xl"
        >
          We are dedicated to building the next generation of footballing excellence in Singapore, fostering both skill and character.
        </motion.p>
      </Container>
    </section>
  );
}
