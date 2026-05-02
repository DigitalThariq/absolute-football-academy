"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  gradientBorder?: boolean;
  elevated?: boolean;
}

export default function Card({
  children,
  className,
  glowOnHover = true,
  gradientBorder = false,
  elevated = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={
        glowOnHover
          ? {
              y: -6,
              boxShadow: "0 0 32px rgba(56,189,248,0.3), 0 16px 48px rgba(0,0,0,0.5)",
              borderColor: "rgba(56,189,248,0.4)",
            }
          : { y: -3 }
      }
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className={cn(
        "relative rounded-2xl",
        "bg-surface-2 border border-border",
        "transition-colors duration-300",
        elevated && "shadow-card",
        gradientBorder && "gradient-border",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
