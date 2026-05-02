"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Separator from "@/components/ui/Separator";

const footerLinks = [
  {
    label: "Academy",
    links: [
      { text: "Programs", href: "#" },
      { text: "Pathway", href: "#" },
      { text: "Coaching Staff", href: "#" },
      { text: "Facilities", href: "#" },
    ],
  },
  {
    label: "Register",
    links: [
      { text: "Book Free Trial", href: "#" },
      { text: "Enrolment", href: "#" },
      { text: "Fees & Plans", href: "#" },
      { text: "Scholarship", href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { text: "About Us", href: "#" },
      { text: "News", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
    ],
  },
];

const social = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
];

const contact = [
  { Icon: MapPin, text: "Bishan Sports Hall, Singapore 579837" },
  { Icon: Phone, text: "+65 9123 4567" },
  { Icon: Mail, text: "hello@absolutefa.sg" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer className="bg-[#080809] border-t border-border relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <Container ref={ref}>
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black/20 overflow-hidden border-2 border-accent/30">
                  <Image src="/logo.png" alt="Absolute Football Academy" width={56} height={56} className="object-contain" />
                </div>
                <span className="font-display font-black text-lg text-foreground uppercase italic tracking-tight">
                  Absolute <span className="text-accent">Football Academy</span>
                </span>
              </div>

              <p className="text-foreground-3 text-sm leading-relaxed mb-8 max-w-xs font-body">
                Developing Singapore&apos;s next generation of football talent through
                modern methodology and character-first coaching.
              </p>

              {/* Contact info */}
              <div className="space-y-3 mb-8">
                {contact.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.Icon className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-3 text-xs font-body">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                {social.map(({ Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                    className="w-9 h-9 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-foreground-3 hover:text-accent hover:border-accent/30 hover:bg-accent-container transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation links */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
              {footerLinks.map((group, i) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                >
                  <h4 className="font-display font-black text-[10px] uppercase tracking-[0.2em] text-foreground mb-5">
                    {group.label}
                  </h4>
                  <ul className="space-y-3">
                    {group.links.map((link) => (
                      <li key={link.text}>
                        <a
                          href={link.href}
                          className="text-foreground-3 hover:text-accent text-sm font-body transition-colors duration-150 inline-flex items-center gap-1.5 group"
                        >
                          <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-200 overflow-hidden rounded-full" />
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Separator accent />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-3 text-xs font-display uppercase tracking-widest">
            © 2024 Absolute Football Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-foreground-3">
            <span className="text-xs font-display uppercase tracking-widest">Made in Singapore</span>
            <span className="text-sm">🇸🇬</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
