import { cn } from "@/lib/utils";

type BadgeVariant = "accent" | "muted" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  accent: "bg-accent-container text-accent border border-accent/20",
  muted: "bg-surface-3 text-foreground-3 border border-border",
  outline: "bg-transparent text-accent border border-accent/30",
};

export default function Badge({
  children,
  variant = "accent",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "font-display font-bold uppercase tracking-widest",
        "text-[10px] px-3 py-1.5 rounded-full",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
