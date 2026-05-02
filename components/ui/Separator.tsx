import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  accent?: boolean;
}

export default function Separator({
  className,
  orientation = "horizontal",
  accent = false,
}: SeparatorProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "w-px h-full",
          accent ? "bg-accent/30" : "bg-border",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "h-px w-full",
        accent
          ? "bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          : "bg-border",
        className
      )}
    />
  );
}
