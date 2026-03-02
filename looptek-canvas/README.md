# LoopteK — Digital Marketing Agency Website

> A modern, high-performance marketing agency website built with React, Tailwind CSS, and Framer Motion. Designed for **LoopteK** — *#Best Digital Marketing Agency in Nashik*.

---

## 🚀 Live Preview

> `https://looptek.in` *(replace with actual URL)*

---

## 📋 Project Overview

This is a fully responsive, production-ready website for **LoopteK**, a digital marketing agency based in Nashik, Maharashtra. The site is designed to establish a strong digital presence, showcase campaign work, and convert visitors into leads.

### Key Highlights
- Dark, space-inspired UI with `#080818` base — premium and modern feel
- Animated infinity (∞) logo built with SVG lemniscate math — unique brand identity
- Encrypted text scramble effect for memorable hero messaging
- 2×2 video grid showcasing real campaign reels
- Scroll-triggered animations throughout via Framer Motion
- Fully responsive across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **React Icons** | Icon library (FA set) |
| **Vite** | Build tool & dev server |

---

## 📁 Project Structure
```
looptek-website/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── 720p_1.mp4
│   │   ├── 720p_2.mp4
│   │   ├── 720p_3.mp4
│   │   └── 720p_4.mp4
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js `v18+`
- npm or yarn
```bash
# 1. Clone the repository
git clone https://github.com/your-username/looptek-website.git
cd looptek-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → http://localhost:5173
```

### Build for Production
```bash
npm run build
# Output in /dist — ready for deployment
```

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| Background | `#080818` | Base background |
| Cyan Accent | `#00d2ff` | Primary accent, links, glows |
| Purple | `#6c5ce7` | Secondary accent |
| Orange | `#f27e1f` | Tertiary accent |
| White | `#ffffff` | Headings |
| Gray | `#9CA3AF` | Body copy |

### Key Animations
- **EncryptedText** — Character scramble reveal on mount
- **InfinityLogo** — Animated SVG lemniscate with travelling spark
- **staggerChildren** — Sequential fade-up on scroll via `whileInView`
- **GlowDivider** — Gradient separator with cyan/purple glow

---

## 🧩 Components

### `Hero.jsx`
Full-screen landing section with animated ∞ logo, encrypted tagline, 2×2 campaign video grid (lazy-loaded via IntersectionObserver), dot-grid ornament, and CTA button.

### `Footer.jsx`
Themed footer with brand logo, social icons (per-platform hover colors), Quick Links, Services, newsletter signup with success state, and matching ornaments/glows.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Mobile `< 768px` | Single column, stacked |
| Tablet `768–1024px` | 2-column grid |
| Desktop `> 1024px` | Full side-by-side layout |

---

## 🔧 Customization

**Replace campaign videos** — Drop `.mp4` files into `src/assets/` and update imports in `Hero.jsx`.

**Update brand info** — Edit `socialLinks`, contact details, and copyright year in `Footer.jsx`.

**Change accent color** — Find-and-replace `#00d2ff` across component files.

---

## 🚀 Deployment
```bash
# Vercel (recommended)
npm i -g vercel && vercel

# Netlify — drag & drop the /dist folder after:
npm run build
```

---

## 📞 Client Info

| | |
|---|---|
| **Agency** | LoopteK |
| **Location** | Nashik, Maharashtra, India |
| **Instagram** | 
| **Email** |

---

## 📄 License

This project was built as a **freelance deliverable** for LoopteK. All rights to the design, assets, and branding belong to the client. Code may not be redistributed or resold without written permission.

---

*Built with ❤️ in India*