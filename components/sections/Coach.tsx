"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const WHATSAPP_NUMBER = "6589160656";
const WHATSAPP_MESSAGE = "Hi Coach Nur! I'd like to book a free trial session at Absolute Football Academy.";

const credentials = [
  "Singapore Football Association Licensed Coach",
  "10+ Years Youth Development Experience",
  "CPR / AED Certified",
  "Safe Sport Unified Code Adherent",
];

export default function Coach() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="coach" className="py-20 sm:py-28 relative overflow-hidden bg-[#020817]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#20CFFF]/20 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#20CFFF]/4 blur-[120px] rounded-full pointer-events-none" />

      <Container ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-6 h-[1.5px] bg-[#20CFFF]" />
          <span className="text-[#20CFFF] font-display font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px]">
            Meet Your Coach
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Photo Side ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Photo card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#20CFFF]/15 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5]">
                <Image
                  src="/coach_nur.png"
                  alt="Coach Nur — Head Coach, Absolute Football Academy"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom gradient overlay for name */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/20 to-transparent" />
              </div>

              {/* Name card overlaid at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-display font-black text-2xl sm:text-3xl leading-none mb-1">
                  Coach Nur
                </p>
                <p className="text-[#20CFFF] font-display font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em]">
                  Head Coach · Absolute Football Academy
                </p>
              </div>
            </div>


          </motion.div>

          {/* ── Content Side ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="font-display font-black uppercase text-[32px] sm:text-[44px] leading-[0.95] tracking-tight text-white mb-6">
              SHAPING{" "}
              <span className="text-[#20CFFF]">SINGAPORE&apos;S</span>
              <br />
              NEXT GENERATION
            </h2>

            <p className="text-white/60 font-body text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-lg">
              Coach Nur brings over a decade of hands-on youth football development experience 
              to Absolute Football Academy. His approach combines technical excellence with 
              personal mentorship — building not just better players, but confident young individuals.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-3 mb-10">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <BadgeCheck className="w-4 h-4 text-[#20CFFF] shrink-0" />
                  <span className="text-white/70 font-display font-semibold text-[13px] sm:text-[14px] tracking-wide">
                    {c}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 self-start px-6 py-4 rounded-xl
                bg-[#20CFFF] hover:bg-[#1bbfee]
                text-[#020817] font-display font-black uppercase text-[13px] tracking-[0.06em]
                shadow-[0_4px_24px_rgba(32,207,255,0.3)] hover:shadow-[0_6px_32px_rgba(32,207,255,0.45)]
                transition-all duration-250"
            >
              Train With Coach Nur
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
