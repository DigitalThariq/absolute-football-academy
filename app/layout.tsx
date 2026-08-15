import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Absolute Football Academy | Singapore's Premier Youth Football Pathway",
  description:
    "Professional training for the next generation of athletes. Modern methodologies with a character-first approach for kids aged 8–14.",
  keywords: ["football academy", "youth football", "Singapore", "kids football", "elite sports"],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Absolute Football Academy | Singapore's Premier Youth Football Pathway",
    description: "Build Confidence, Discipline & Football Skills",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Absolute Football Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Absolute Football Academy | Singapore's Premier Youth Football Pathway",
    description: "Build Confidence, Discipline & Football Skills",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground font-body antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
