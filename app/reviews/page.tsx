"use client";

import Navbar from "@/components/sections/Navbar";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
