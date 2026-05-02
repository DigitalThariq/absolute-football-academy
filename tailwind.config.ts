import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        surface: "#111114",
        "surface-2": "#18181d",
        "surface-3": "#1f1f26",
        "surface-4": "#26262f",
        border: "rgba(255,255,255,0.07)",
        "border-accent": "rgba(56,189,248,0.35)",
        accent: "#38bdf8",
        "accent-dim": "#0ea5e9",
        "accent-glow": "rgba(56,189,248,0.25)",
        "accent-container": "rgba(56,189,248,0.08)",
        "on-accent": "#001a24",
        muted: "#6b7280",
        "muted-foreground": "#9ca3af",
        foreground: "#f1f5f9",
        "foreground-2": "#cbd5e1",
        "foreground-3": "#94a3b8",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["88px", { lineHeight: "1.05", letterSpacing: "-0.045em", fontWeight: "900" }],
        "display-xl": ["72px", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-lg": ["56px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-md": ["40px", { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "700" }],
        "headline": ["28px", { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "700" }],
        "label-lg": ["13px", { lineHeight: "1", letterSpacing: "0.18em", fontWeight: "700" }],
        "label-sm": ["11px", { lineHeight: "1", letterSpacing: "0.2em", fontWeight: "700" }],
      },
      spacing: {
        section: "120px",
        "section-sm": "80px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-sm": "0 0 12px rgba(56,189,248,0.25)",
        "glow-md": "0 0 24px rgba(56,189,248,0.35)",
        "glow-lg": "0 0 48px rgba(56,189,248,0.4)",
        "card": "0 4px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 48px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        "radial-accent": "radial-gradient(ellipse at center, rgba(56,189,248,0.12) 0%, transparent 70%)",
        "hero-gradient": "linear-gradient(to right, rgba(10,10,11,1) 30%, rgba(10,10,11,0.85) 55%, rgba(10,10,11,0.3) 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 100%)",
        "accent-gradient": "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
      },
      backgroundSize: {
        "grid": "24px 24px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulse_glow: {
          "0%, 100%": { boxShadow: "0 0 12px rgba(56,189,248,0.25)" },
          "50%": { boxShadow: "0 0 32px rgba(56,189,248,0.55)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse_glow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
