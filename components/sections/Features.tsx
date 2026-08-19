"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Shield, Trophy, Zap } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const slides = [
  { src: "/gallery/about-slider-1.jpg", alt: "About Academy 1" },
  { src: "/gallery/about-slider-2.jpg", alt: "About Academy 2" },
  { src: "/gallery/about-slider-3.jpg", alt: "About Academy 3" },
];

const features = [
  {
    icon: Shield,
    label: "Mission",
    description:
      "To provide a high-performance environment where young athletes achieve absolute mastery of footballing fundamentals and personal character.",
    detail: "Building Character",
    color: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    icon: Trophy,
    label: "Philosophy",
    description:
      "The Absolute Standard – A commitment to technical perfection, high-intensity play, and the development of the \"Total Player\".",
    detail: "The Absolute Standard",
    color: "from-amber-500/10 to-transparent",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10 border-amber-400/20",
  },
  {
    icon: Zap,
    label: "Motto",
    description:
      "\"Absolute Mastery. Absolute Pride.\"",
    detail: "Our Core Belief",
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

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="philosophy" className="py-section bg-surface relative overflow-hidden">
      {/* Animated Background Image Slider */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden scale-110">
        <AnimatePresence initial={true}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 5, ease: "linear" }
            }}
            className="absolute inset-0 origin-center"
          >
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              fill
              className="object-cover object-center opacity-30"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#040A16]/80" />
      </div>

      {/* Background accent */}
      <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-border to-transparent z-10" />

      <Container ref={ref} className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="inline-block font-display font-bold text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
            Mission &amp; Philosophy
          </span>
          <h2 className="font-display text-display-md text-foreground leading-tight mb-4">
            The Absolute{" "}
            <span className="text-foreground-3">Standard.</span>
          </h2>
          <p className="text-foreground-3 text-sm sm:text-base leading-relaxed font-body">
            Started from 2014, our mission is to build the next generation of footballing excellence in Singapore.
          </p>
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
