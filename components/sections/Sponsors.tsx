"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Sponsors() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="sponsors" className="py-16 sm:py-20 relative overflow-hidden bg-[#020817]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#20CFFF]/15 to-transparent" />

      <Container ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-6 h-[1.5px] bg-[#20CFFF]" />
          <span className="text-[#20CFFF] font-display font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px]">
            Our Sponsors
          </span>
        </motion.div>

        {/* Sponsor card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12
            border border-white/[0.07] rounded-2xl
            bg-[#050B1A]/80 backdrop-blur-sm
            px-8 py-8 sm:px-12 sm:py-10"
        >
          {/* Logo */}
          <div className="relative w-40 h-28 sm:w-48 sm:h-32 shrink-0">
            <Image
              src="/adel_logo.png"
              alt="Adel Employment Services"
              fill
              className="object-contain"
            />
          </div>

          {/* Divider — vertical on desktop, horizontal on mobile */}
          <div className="w-full h-px sm:w-px sm:h-20 bg-white/10 shrink-0" />

          {/* Text block */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-white/35 font-display font-bold uppercase text-[9px] tracking-[0.2em] mb-2">
              Official Sponsor
            </p>
            <h3 className="text-white font-display font-black text-[22px] sm:text-[28px] leading-tight mb-2">
              Adel Employment Services
            </h3>
            <p className="text-white/50 font-body text-[13px] sm:text-[15px] leading-relaxed max-w-md">
              Proud sponsor of Absolute Football Academy — supporting Singapore&apos;s youth 
              and community development through sport.
            </p>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
