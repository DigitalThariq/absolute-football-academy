"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Container from "@/components/ui/Container";

export default function VideoShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section id="video" className="py-20 sm:py-28 relative overflow-hidden bg-[#020817]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#20CFFF]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#20CFFF]/4 blur-[130px] rounded-full pointer-events-none" />

      <Container ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-6 h-[1.5px] bg-[#20CFFF]" />
          <span className="text-[#20CFFF] font-display font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px]">
            See Us In Action
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-black uppercase text-[28px] sm:text-[42px] leading-[0.95] tracking-tight text-white mb-10"
        >
          TRAINING AT <span className="text-[#20CFFF]">ABSOLUTE</span>
          <br className="hidden sm:block" /> FOOTBALL ACADEMY
        </motion.h2>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden border border-[#20CFFF]/12 shadow-[0_8px_48px_rgba(0,0,0,0.6)] group"
        >
          {/* The video */}
          <video
            ref={videoRef}
            src="/training.mp4"
            className="w-full aspect-video object-cover"
            muted
            playsInline
            loop
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />

          {/* Dark overlay when paused */}
          <div
            className={`absolute inset-0 bg-[#020817]/40 transition-opacity duration-300 pointer-events-none ${
              playing ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Controls overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Big play button — visible when paused, fades on play */}
            <button
              onClick={togglePlay}
              className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full
                bg-[#20CFFF] text-[#020817]
                shadow-[0_0_40px_rgba(32,207,255,0.5)]
                hover:scale-110 active:scale-95
                transition-all duration-200
                ${playing ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              aria-label="Play video"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1 fill-[#020817]" />
            </button>
          </div>

          {/* Bottom control bar — visible on hover or when playing */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between
            bg-gradient-to-t from-[#020817]/80 to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-200">

            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing
                ? <Pause className="w-4 h-4 fill-white" />
                : <Play className="w-4 h-4 ml-0.5 fill-white" />
              }
            </button>

            <div className="flex items-center gap-3">
              {/* Academy label */}
              <span className="text-white/50 font-display font-bold uppercase text-[9px] tracking-widest hidden sm:block">
                Absolute Football Academy · Training Session
              </span>

              {/* Mute toggle */}
              <button
                onClick={toggleMute}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted
                  ? <VolumeX className="w-4 h-4" />
                  : <Volume2 className="w-4 h-4" />
                }
              </button>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/35 text-[12px] font-display uppercase tracking-widest text-center mt-4"
        >
          Real training sessions · Real results
        </motion.p>
      </Container>
    </section>
  );
}
