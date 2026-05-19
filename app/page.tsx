"use client";

import Hero from "@/components/sections/Hero";
import Coach from "@/components/sections/Coach";
import VideoShowcase from "@/components/sections/VideoShowcase";

import InstagramFeed from "@/components/sections/InstagramFeed";

export default function Home() {
  return (
    <main>
      <Hero />
      <Coach />
      <VideoShowcase />
      <InstagramFeed />
    </main>
  );
}
