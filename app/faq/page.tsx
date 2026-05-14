"use client";

import Navbar from "@/components/sections/Navbar";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
