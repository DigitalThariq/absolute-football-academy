"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const WHATSAPP_NUMBER = "6594492453";
const WHATSAPP_MESSAGE = "Hi! I'd like to book a free trial session at Absolute Football Academy.";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="registration" className="py-section relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <Container ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-accent/20 bg-surface-2"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/4 pointer-events-none" />
          
          {/* Player Action Image Layer */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-30 pointer-events-none">
            <Image src="/player_action.png" alt="Player Action" fill className="object-cover object-right" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-2 via-surface-2/80 to-transparent" />
          </div>

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

          {/* Grid pattern inside */}
          <div className="absolute inset-0 bg-grid-fine opacity-50 pointer-events-none" />

          {/* Large glow orbs */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative px-8 py-20 sm:px-16 sm:py-24 text-center">
            {/* Urgency badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent-container border border-accent/25 px-4 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-accent">
                Limited Spots Available
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="font-display text-display-md sm:text-display-lg text-foreground mb-6"
            >
              Ready to Start Your{" "}
              <span className="text-accent text-glow italic">Absolute Journey?</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-foreground-3 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-body"
            >
              Claim your complimentary{" "}
              <span className="text-foreground font-semibold">90-minute trial session</span> and
              experience our professional environment firsthand. No commitment required.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg" className="neon-glow-md">
                Book Free Trial Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={handleWhatsApp}
                className="border-border hover:border-[#25d366]/40 hover:text-[#25d366] hover:bg-[#25d366]/5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </motion.div>

            {/* Trust microtext */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
            >
              {[
                { icon: Clock, text: "Free Trial Classes" },
                { icon: null, text: "Cancel anytime" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-foreground-3">
                  {item.icon && <item.icon className="w-3 h-3 text-accent" />}
                  {!item.icon && (
                    <span className="w-1 h-1 rounded-full bg-foreground-3/40" />
                  )}
                  <span className="text-xs font-display font-semibold uppercase tracking-widest">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
