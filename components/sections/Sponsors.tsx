"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const sponsorLogos = [
  "/adel_logo.png",
  "/salaam_cola_logo.png",
  "/adel_law_logo.png.JPG"
];

export default function Sponsors() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleWhatsApp = () => {
    const url = `https://wa.me/6594492453?text=${encodeURIComponent("Hi Absolute Football Academy, I'm interested in becoming a sponsor. Could we discuss partnership opportunities?")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="sponsors"
      className="py-24 sm:py-32 relative overflow-hidden bg-[#020817]"
    >
      {/* top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#20CFFF]/20 to-transparent" />
      <Container ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-[#20CFFF] font-display font-black text-3xl sm:text-5xl tracking-wider mb-4">
            WE WELCOME SPONSORS
          </h2>
          <p className="text-white/80 font-body text-base sm:text-lg mb-4">
            Partner with Absolute Football Academy and support the next generation of football talent in Singapore.
          </p>
          <p className="text-white/50 font-body text-sm sm:text-base max-w-lg mx-auto">
            We collaborate with brands and businesses that believe in youth development, community impact, and sporting excellence.
          </p>
        </motion.div>

        {/* Logos grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-8 mb-12"
        >
          {sponsorLogos.map((src, idx) => (
            <div
              key={idx}
              className="relative w-48 h-24 sm:w-64 sm:h-32 flex items-center justify-center border border-white/10 rounded-xl bg-[#050B1A]/40 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(32,207,255,0.4)] transition-shadow"
            >
              <Image src={src} alt={`Sponsor ${idx + 1}`} fill className="object-contain p-2 sm:p-4" />
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <Button
            variant="primary"
            onClick={handleWhatsApp}
            className="bg-[#20CFFF] hover:bg-[#20CFFF]/90 text-[#020817] font-display font-black uppercase tracking-wider text-sm sm:text-base px-6 py-3 rounded-full shadow-[0_0_20px_rgba(32,207,255,0.4)]"
          >
            Become a Sponsor
          </Button>
          <p className="text-white/60 font-body text-xs sm:text-sm mt-4">
            Interested in partnering with us? Let&apos;s build something impactful together.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
