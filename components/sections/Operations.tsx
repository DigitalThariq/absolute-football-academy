"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Trophy, Zap } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const features = [
  {
    icon: Trophy,
    label: "Elite Training Camps",
    description: "3-day residential camps simulating a professional pre-season environment.",
    detail: "Professional Simulation",
    color: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    icon: Shield,
    label: "Coaching Standards",
    description: "100% CPR/AED certified staff with strict adherence to Singapore’s Safe Sport Unified Code.",
    detail: "Certified & Safe",
    color: "from-amber-500/10 to-transparent",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10 border-amber-400/20",
  },
  {
    icon: Zap,
    label: "Progress Tracking",
    description: "Quarterly digital \"Data Dashboards\" tracking technical stats and psychological markers for every player.",
    detail: "Data-Driven Growth",
    color: "from-accent/10 to-transparent",
    iconColor: "text-accent",
    iconBg: "bg-accent/10 border-accent/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AcademyOperations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="py-section bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <Container ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="inline-block font-display font-bold text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
            How We Operate
          </span>
          <h2 className="font-display text-display-md text-foreground leading-tight">
            Academy{" "}
            <span className="text-foreground-3">Operations &amp; Programs.</span>
          </h2>
        </motion.div>

        {/* 3D Icons visual decoration */}
        <div className="absolute right-[5%] md:right-[15%] top-16 md:top-10 w-48 h-24 md:w-72 md:h-36 opacity-70 pointer-events-none">
          <Image src="/3d_icons.png" alt="Academy Features" fill className="object-contain" />
        </div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.label} variants={itemVariants}>
                <Card className="p-8 h-full flex flex-col group overflow-hidden">
                  {/* Card inner gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className={[
                      "w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 relative",
                      feature.iconBg,
                    ].join(" ")}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={1.5} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">
                      {feature.label}
                    </h3>
                    <p className="text-foreground-3 text-sm leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    {/* Detail tag */}
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-px bg-accent/60" />
                      <span className="text-[10px] font-display font-bold uppercase tracking-widest text-accent/80">
                        {feature.detail}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
