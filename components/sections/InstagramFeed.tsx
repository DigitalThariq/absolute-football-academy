"use client";

import Container from "@/components/ui/Container";
import Script from "next/script";

export default function InstagramFeed() {
  return (
    <section className="py-section relative overflow-hidden bg-background">
      <Container>
        <div className="mb-12 text-center">
          <span className="inline-block font-display font-bold text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
            Follow Us
          </span>
          <h2 className="font-display text-display-md text-foreground leading-tight">
            Absolute on <span className="text-[#38bdf8]">Instagram</span>
          </h2>
        </div>
        
        {/* Elfsight Instagram Feed */}
        <div className="elfsight-app-baf40357-7db3-4748-a751-c8ed4dbc1112" data-elfsight-app-lazy></div>
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      </Container>
    </section>
  );
}
