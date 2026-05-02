"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-accent text-on-accent font-display font-bold",
    "shadow-glow-sm hover:shadow-glow-md",
    "border border-accent/30",
    "hover:bg-accent-dim",
  ].join(" "),

  secondary: [
    "bg-surface-3 text-foreground font-display font-semibold",
    "border border-border hover:border-border-accent",
    "hover:bg-surface-4",
  ].join(" "),

  outline: [
    "bg-transparent text-accent font-display font-semibold",
    "border border-accent/40 hover:border-accent",
    "hover:bg-accent-container",
    "hover:shadow-glow-sm",
  ].join(" "),

  ghost: [
    "bg-transparent text-foreground-2 font-display font-medium",
    "border border-transparent hover:border-border",
    "hover:bg-surface-2 hover:text-foreground",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs tracking-widest rounded-xl",
  md: "px-7 py-3.5 text-label-sm tracking-widest rounded-xl",
  lg: "px-9 py-4.5 text-label-lg tracking-widest rounded-2xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 uppercase",
        "transition-colors duration-200 ease-out cursor-pointer",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
        "select-none",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
