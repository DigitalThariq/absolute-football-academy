"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pathway from "@/components/sections/Pathway";
import Operations from "@/components/sections/Operations";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pathway />
        <Operations />
        <Stats />
        <Testimonials />
        <CTA />
        <InstagramFeed />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
