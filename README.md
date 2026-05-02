# Elite Academy — Next.js Landing Page

A premium, high-converting football academy landing page built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
elite-academy/
├── app/
│   ├── globals.css          # Global styles, custom utilities, scrollbar
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page — assembles all sections
│
├── components/
│   ├── ui/                  # Reusable primitive components
│   │   ├── Button.tsx       # Primary / secondary / outline / ghost variants
│   │   ├── Card.tsx         # Hover-glow animated card
│   │   ├── Badge.tsx        # Small label tags
│   │   ├── Separator.tsx    # Horizontal / vertical dividers
│   │   ├── Container.tsx    # max-w-7xl responsive wrapper
│   │   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   │   └── index.ts         # Barrel exports
│   │
│   └── sections/            # Page section components
│       ├── Navbar.tsx        # Sticky navbar + mobile menu
│       ├── Hero.tsx          # Full-screen hero with animations
│       ├── Features.tsx      # 3-column feature cards
│       ├── Pathway.tsx       # U14 tier pathway with progress bars
│       ├── Stats.tsx         # Animated stat counters
│       ├── Testimonials.tsx  # Parent testimonials grid
│       ├── CTA.tsx           # Conversion-focused CTA block
│       ├── Footer.tsx        # Full footer with links + social
│       └── index.ts          # Barrel exports
│
├── lib/
│   └── utils.ts             # cn() className utility
│
├── tailwind.config.ts        # Custom design tokens
├── next.config.ts
└── tsconfig.json
```

---

## 🎨 Design System

### Colors (Tailwind custom tokens)
| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#0a0a0b` | Page background |
| `surface` / `surface-2` / `surface-3` | `#111114` – `#1f1f26` | Cards, panels |
| `accent` | `#38bdf8` | Sky blue — primary accent |
| `foreground` / `foreground-2` / `foreground-3` | Slate scale | Text hierarchy |
| `border` | `rgba(255,255,255,0.07)` | Subtle card borders |
| `border-accent` | `rgba(56,189,248,0.35)` | Highlighted borders |

### Fonts
- **Display**: Lexend (headings, labels, buttons)
- **Body**: Inter (paragraphs, descriptions)

### Custom Utilities (globals.css)
- `.neon-glow-sm/md/lg` — cyan box shadow glow effects
- `.text-glow` / `.text-glow-sm` — text shadow glow
- `.bg-grid` / `.bg-grid-fine` — dot/line grid backgrounds
- `.gradient-border` — pseudo-element gradient border trick

---

## ⚡ Framer Motion Patterns

### Scroll-triggered reveals
```tsx
const ref = useRef<HTMLDivElement>(null);
const inView = useInView(ref, { once: true, margin: "-80px" });

<motion.div
  initial={{ opacity: 0, y: 32 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
/>
```

### Stagger children
```tsx
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
```

### Animated number counter (Stats)
Uses `useMotionValue` + `animate()` to count up from 0 when scrolled into view.

---

## ✏️ Customisation

### Update WhatsApp number
Search for `WHATSAPP_NUMBER` in:
- `components/ui/WhatsAppButton.tsx`
- `components/sections/Hero.tsx`
- `components/sections/CTA.tsx`

Replace `"6591234567"` with your real number (country code + number, no `+` or spaces).

### Swap hero image
In `components/sections/Hero.tsx`, replace the `src` of the `<img>` tag.

### Change accent color
In `tailwind.config.ts`, update:
```ts
accent: "#38bdf8",          // main accent
"accent-dim": "#0ea5e9",    // hover state
```
Then update the glow colours in `globals.css` (search `rgba(56,189,248`).

---

## 🔧 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 14.2.5 | Framework |
| `framer-motion` | ^11 | Animations |
| `lucide-react` | ^0.383 | Icons |
| `tailwindcss` | ^3.4 | Styling |
| `typescript` | ^5 | Types |

---

## 📄 License

MIT — free for personal and commercial use.
