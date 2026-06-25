"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

const categories = ["All", "Training", "Matches", "Events"];

// Standardized photos array simulating files in /public/gallery
const photos = [
  { id: 1, src: "/gallery/training_1.png", category: "Training", alt: "Training drill" },
  { id: 2, src: "/gallery/match_1.png", category: "Matches", alt: "Match action" },
  { id: 3, src: "/gallery/event_1.png", category: "Events", alt: "Academy event" },
  { id: 4, src: "/gallery/training_1.png", category: "Training", alt: "Training session" },
  { id: 5, src: "/gallery/match_1.png", category: "Matches", alt: "Match highlight" },
  { id: 6, src: "/gallery/event_1.png", category: "Events", alt: "Special event" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling behind lightbox
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: 1 | -1, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    
    let newIndex = selectedPhotoIndex + direction;
    if (newIndex < 0) newIndex = filteredPhotos.length - 1;
    if (newIndex >= filteredPhotos.length) newIndex = 0;
    
    setSelectedPhotoIndex(newIndex);
  };

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight mb-4">
              GALLERY
            </h1>
            <p className="text-[#38bdf8] font-display font-bold uppercase tracking-[0.15em] text-sm md:text-base">
              Life at Absolute Football Academy
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-display font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#20CFFF] text-[#020817] shadow-[0_0_15px_rgba(32,207,255,0.4)]"
                  : "bg-surface-2 text-foreground-3 border border-border hover:border-[#20CFFF]/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid Layout: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-surface-2 border border-border"
                onClick={() => openLightbox(index)}
              >
                {/* Subtle zoom hover effect via group-hover:scale-105 */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                  quality={80}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#20CFFF] font-display font-bold uppercase tracking-widest text-xs mb-1">
                    {photo.category}
                  </span>
                  <span className="text-white font-medium text-sm">
                    {photo.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 z-50 p-2 bg-black/50 hover:bg-[#20CFFF] text-white hover:text-[#020817] rounded-full transition-colors duration-200"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Navigation Arrows */}
            {filteredPhotos.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 z-50 p-2 md:p-3 bg-black/50 hover:bg-[#20CFFF] text-white hover:text-[#020817] rounded-full transition-colors duration-200"
                  onClick={(e) => navigateLightbox(-1, e)}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                <button
                  className="absolute right-4 md:right-8 z-50 p-2 md:p-3 bg-black/50 hover:bg-[#20CFFF] text-white hover:text-[#020817] rounded-full transition-colors duration-200"
                  onClick={(e) => navigateLightbox(1, e)}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </>
            )}

            {/* Main Image Container */}
            <div 
              className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on image from closing lightbox
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPhotoIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={filteredPhotos[selectedPhotoIndex].src}
                    alt={filteredPhotos[selectedPhotoIndex].alt}
                    fill
                    className="object-contain"
                    priority // Load immediately when lightbox opens
                    quality={100}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Image Info / Counter */}
              <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                <span className="text-white/60 font-display uppercase tracking-widest text-xs">
                  {selectedPhotoIndex + 1} / {filteredPhotos.length} · {filteredPhotos[selectedPhotoIndex].category}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
