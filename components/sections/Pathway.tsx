"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const tiers = [
  {
    age: "Ages 8–10",
    name: "Foundation",
    tagline: "Falling in love with the game",
    progress: 33,
    skills: [
      { category: "Skill", text: "Ball mastery & coordination fundamentals" },
      { category: "Physical", text: "Fundamental movement patterns & body control" },
      { category: "Mental", text: "Joy of movement, team spirit & creative play" },
    ],
    badge: "Entry Level",
    featured: false,
    accent: "from-sky-400/20 via-transparent",
    borderAccent: "hover:border-sky-400/40",
    progressColor: "from-sky-400 to-sky-600",
  },
  {
    age: "Ages 11–12",
    name: "Development",
    tagline: "Sharpening the competitive edge",
    progress: 66,
    skills: [
      { category: "Skill", text: "Tactical awareness & positional intelligence" },
      { category: "Physical", text: "Agility circuits & functional speed work" },
      { category: "Mental", text: "Deep concentration & rapid decision making" },
    ],
    badge: "Intermediate",
    featured: false,
    accent: "from-violet-400/20 via-transparent",
    borderAccent: "hover:border-violet-400/40",
    progressColor: "from-violet-400 to-violet-600",
  },
  {
    age: "Ages 13–14",
    name: "Elite",
    tagline: "Pathway to professional football",
    progress: 100,
    skills: [
      { category: "Skill", text: "Game intelligence & specialty position training" },
      { category: "Physical", text: "Power, endurance & active recovery protocols" },
      { category: "Mental", text: "High-pressure performance & composure" },
    ],
    badge: "Elite Level",
    featured: true,
    accent: "from-accent/20 via-transparent",
    borderAccent: "border-accent/35 shadow-glow-sm",
    progressColor: "from-accent to-accent-dim",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function ProgressBar({ value, color, delay }: { value: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-1.5 bg-surface-3 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : {}}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
      />
    </div>
  );
}

export default function Pathway() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pathway" className="py-section relative overflow-hidden bg-background">
      {/* Decorative track lines */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-grid opacity-20 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <Container ref={ref}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-display font-bold text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
              Structured Progression
            </span>
            <h2 className="font-display text-display-md text-foreground leading-tight">
              The U14 <span className="text-foreground-3">Pathway</span>
            </h2>
            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-accent to-transparent rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground-3 text-sm max-w-xs leading-relaxed sm:text-right"
          >
            Every player progresses through a structured pathway designed for
            their developmental stage.
          </motion.p>
        </div>

        {/* Tier cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              className={[
                "relative rounded-2xl overflow-hidden flex flex-col",
                "border transition-all duration-300",
                tier.featured
                  ? `border-accent/35 bg-surface-2 ${tier.borderAccent}`
                  : `border-border bg-surface-2 ${tier.borderAccent}`,
              ].join(" ")}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 28 },
              }}
            >
              {/* Top gradient bleed */}
              <div className={`absolute top-0 left-0 right-0 h-48 bg-gradient-to-b ${tier.accent} pointer-events-none`} />

              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}

              <div className="relative p-8 sm:p-10 flex flex-col h-full">
                {/* Badge + age */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] font-display font-black uppercase tracking-[0.2em] text-accent bg-accent-container border border-accent/20 px-2.5 py-1 rounded-full">
                    {tier.badge}
                  </span>
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest text-foreground-3">
                    {tier.age}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-2xl text-foreground mb-1.5">
                  {tier.name}
                </h3>
                <p className="text-foreground-3 text-sm mb-8 font-body italic">
                  {tier.tagline}
                </p>

                {/* Skills */}
                <ul className="space-y-4 flex-grow mb-8">
                  {tier.skills.map((skill) => (
                    <li key={skill.category} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-sm text-foreground-3 leading-snug">
                        <strong className="text-foreground font-semibold">
                          {skill.category}:{" "}
                        </strong>
                        {skill.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Progress bar */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-display uppercase tracking-widest text-foreground-3">
                      Programme Level
                    </span>
                    <span className="text-[10px] font-display font-bold text-accent">
                      {tier.progress}%
                    </span>
                  </div>
                  <ProgressBar
                    value={tier.progress}
                    color={tier.progressColor}
                    delay={0.3 + i * 0.15}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-foreground-3 text-sm">
            Not sure which level suits your child?
          </p>
          <Button variant="outline" size="sm">
            Take the Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
