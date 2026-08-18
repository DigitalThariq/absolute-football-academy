"use client";

import AboutHero from "@/components/sections/AboutHero";
import Features from "@/components/sections/Features";
import Operations from "@/components/sections/Operations";

export default function AboutPage() {
  return (
    <main className="pt-0">
      <AboutHero />
      <Features />
      <Operations />
    </main>
  );
}
