"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const WHATSAPP_NUMBER = "6594492453";

export default function CoachingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 relative bg-[#020817]">
      <Container ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-[#20CFFF]/20 bg-[#050B1A] p-8 sm:p-12 shadow-[0_8px_40px_rgba(32,207,255,0.05)]"
        >
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#20CFFF]/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="font-display font-black uppercase text-2xl sm:text-3xl tracking-tight text-white mb-3">
                Interested in <span className="text-[#20CFFF]">Coaching With Us?</span>
              </h3>
              <p className="text-white/70 font-body text-[15px] sm:text-[16px] leading-relaxed max-w-2xl">
                We are always looking for <strong className="text-white">qualified coaches</strong> with the appropriate <strong className="text-white">licenses</strong> to join our <strong className="text-white">professional academy</strong>. Help us deliver elite <strong className="text-white">youth development</strong> in a <strong className="text-white">safe environment</strong>.
              </p>
            </div>
            
            <motion.button
              onClick={() => {
                const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm a qualified coach interested in joining the Absolute Football Academy coaching team.")}`;
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 shrink-0 px-6 py-4 rounded-xl
                bg-transparent border border-[#20CFFF] hover:bg-[#20CFFF]/10
                text-white font-display font-black uppercase text-[13px] tracking-[0.06em]
                transition-all duration-250"
            >
              Join Our Coaching Team
              <ArrowRight className="w-4 h-4 text-[#20CFFF] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
