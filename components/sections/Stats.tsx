"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, GraduationCap, Heart, Award } from "lucide-react";
import Container from "@/components/ui/Container";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Active Players",
    description: "Across all age groups",
    color: "text-sky-400",
    bg: "bg-sky-400/10 border-sky-400/20",
  },
  {
    icon: GraduationCap,
    value: 25,
    suffix: "+",
    label: "Pro Coaches",
    description: "UEFA & AFC licensed",
    color: "text-violet-400",
    bg: "bg-violet-400/10 border-violet-400/20",
  },
  {
    icon: Heart,
    value: 98,
    suffix: "%",
    label: "Parent Approval",
    description: "Satisfaction rate 2024",
    color: "text-rose-400",
    bg: "bg-rose-400/10 border-rose-400/20",
  },
  {
    icon: Award,
    value: 12,
    suffix: "+",
    label: "Tournaments Won",
    description: "Regional & national titles",
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      motionValue.on("change", (v) => {
        if (ref.current) {
          ref.current.textContent = Math.round(v).toString() + suffix;
        }
      });
      return controls.stop;
    }
  }, [inView, motionValue, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section bg-surface-2 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <Container ref={ref}>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-display font-bold text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
              Track Record
            </span>
            <h2 className="font-display text-display-md text-foreground leading-tight">
              Built for Potential,{" "}
              <br />
              <span className="text-accent text-glow-sm">
                Proven by Results.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-foreground-3 text-lg leading-relaxed"
          >
            Singapore&apos;s fastest growing academy — where data meets
            passion. Our track record is written in the growth of every
            player who walks through our doors.
          </motion.p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-surface-3 border border-border rounded-2xl p-6 sm:p-8 relative overflow-hidden group cursor-default"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${stat.bg}`}
                >
                  <Icon className={`w-5 h-5 ${stat.color}`} strokeWidth={1.5} />
                </div>

                <div className={`font-display font-black text-4xl sm:text-5xl mb-1.5 ${stat.color}`}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="font-display font-bold text-foreground text-sm uppercase tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-foreground-3 text-xs font-body">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
