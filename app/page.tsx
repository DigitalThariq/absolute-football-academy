"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Coach from "@/components/sections/Coach";
import VideoShowcase from "@/components/sections/VideoShowcase";

import InstagramFeed from "@/components/sections/InstagramFeed";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Coach />
        <VideoShowcase />

        <InstagramFeed />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
