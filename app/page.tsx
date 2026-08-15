"use client";

import Hero from "@/components/sections/Hero";
import Coach from "@/components/sections/Coach";
import VideoShowcase from "@/components/sections/VideoShowcase";

import InstagramFeed from "@/components/sections/InstagramFeed";
import CoachingCTA from "@/components/sections/CoachingCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Coach />
      <VideoShowcase />
      <InstagramFeed />
      <CoachingCTA />
    </main>
  );
}
