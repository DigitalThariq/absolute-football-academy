import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Absolute Football Academy | Singapore's Premier Youth Football Pathway",
  description:
    "Professional training for the next generation of athletes. Modern methodologies with a character-first approach for kids aged 8–14.",
  keywords: ["football academy", "youth football", "Singapore", "kids football", "elite sports"],
  openGraph: {
    title: "Absolute Football Academy | Singapore's Premier Youth Football Pathway",
    description: "Build Confidence, Discipline & Football Skills",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
