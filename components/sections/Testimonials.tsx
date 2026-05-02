"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "The transformation in my son's confidence was visible within just a month. The coaches treat them with professional respect while keeping it genuinely fun — it's a rare balance.",
    author: "Sarah T.",
    role: "Parent · Foundation Level",
    stars: 5,
    initials: "ST",
    accent: "from-sky-400/20",
  },
  {
    quote:
      "High-end facilities and top-tier coaching that rivals European academies I've seen. This is by far the most organised and professional youth setup we've attended in Singapore.",
    author: "David L.",
    role: "Parent · Development Level",
    stars: 5,
    initials: "DL",
    accent: "from-violet-400/20",
  },
  {
    quote:
      "My daughter went from zero interest to asking to train every day. The coaches found her passion and ignited it. We couldn't be more grateful.",
    author: "Priya M.",
    role: "Parent · Foundation Level",
    stars: 5,
    initials: "PM",
    accent: "from-rose-400/20",
  },
  {
    quote:
      "Our son has trained with academies in the UK and Australia. Absolute Football Academy matches that standard — and the family atmosphere here is something truly special.",
    author: "James K.",
    role: "Parent · Elite Level",
    stars: 5,
    initials: "JK",
    accent: "from-amber-400/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <Container ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-lg"
        >
          <span className="inline-block font-display font-bold text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
            Social Proof
          </span>
          <h2 className="font-display text-display-md text-foreground leading-tight">
            Families{" "}
            <span className="text-foreground-3">love us.</span>
          </h2>
          <p className="text-foreground-3 text-base mt-4 leading-relaxed">
            Don&apos;t take our word for it — hear from the parents and players
            who&apos;ve experienced the Absolute FA difference.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative bg-surface-2 border border-border rounded-2xl p-8 overflow-hidden group"
            >
              {/* Gradient top left */}
              <div
                className={`absolute top-0 left-0 w-48 h-48 bg-gradient-to-br ${t.accent} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
              />
              {/* Top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-foreground-3/10 fill-foreground-3/10" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-base leading-relaxed mb-6 font-body relative">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent-container border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-display font-black text-accent tracking-tight">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-foreground">{t.author}</p>
                  <p className="text-foreground-3 text-xs font-body">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { label: "4.9/5", sub: "Google Reviews" },
            { label: "500+", sub: "5-Star Ratings" },
            { label: "Top Rated", sub: "Singapore 2024" },
          ].map((item) => (
            <div key={item.sub} className="flex flex-col items-center gap-1">
              <span className="font-display font-black text-2xl text-foreground">
                {item.label}
              </span>
              <span className="text-foreground-3 text-xs font-display uppercase tracking-widest">
                {item.sub}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
