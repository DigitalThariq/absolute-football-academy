"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "AFC has been incredible for my child’s development. The structured training sessions are top-notch, and the coaches balance technical discipline with a really supportive attitude. I've watched my child's positioning, agility, and game intelligence skyrocket over the past few years. If you want a soccer academy that actually delivers on skill development while keeping the sport fun, AFC is the absolute best choice.",
    author: "Seth and Shay",
    role: "Parent",
    stars: 5,
    initials: "S&S",
    accent: "from-sky-400/20",
  },
  {
    quote:
      "Excellent soccer academy! The coaches are professional, the training is well-organized, and the atmosphere is fun. My child looks forward to every session and has improved a lot. Since joining AFC, he has become more confident. A great place for young footballers to learn and grow. Highly recommended!",
    author: "Clovis",
    role: "Parent",
    stars: 5,
    initials: "C",
    accent: "from-violet-400/20",
  },
  {
    quote:
      "I recommend Absolute football academy to anyone looking to develop their football skills in a positive and professional environment. The atmosphere is welcoming, motivating, and encourages discipline, confidence and a love for the game. It's a fantastic place for young footballers to learn, grow and enjoy playing football.",
    author: "Irfan",
    role: "Parent",
    stars: 5,
    initials: "I",
    accent: "from-rose-400/20",
  },
  {
    quote:
      "I enrolled my son, Aarif, in absolute academy when he was 7 years old. Before that, Aarif only played football with his friends at the void deck and had little knowledge of the game or his position. Now at 10 years old, Aarif has improved so much in his skills, confidence, and understanding of football. It’s amazing to watch him play in tournaments and compete in the Singapore Youth League (SYL). Thank you to the coaches for their dedication and support. We highly recommend this absolute academy!",
    author: "Aarif's Parent",
    role: "Parent",
    stars: 5,
    initials: "A",
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
          className="mb-12 max-w-lg"
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
            who&apos;ve experienced the Absolute Football Academy difference.
          </p>
        </motion.div>

        {/* Video Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 relative rounded-2xl overflow-hidden border border-border bg-surface-2 shadow-2xl group w-full max-w-4xl mx-auto aspect-video"
        >
          <video
            src="/Video%20review%20from%20parents.mp4"
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          />
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
