"use client";

import Navbar from "@/components/sections/Navbar";
import Features from "@/components/sections/Features";
import Operations from "@/components/sections/Operations";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Features />
        <Operations />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
