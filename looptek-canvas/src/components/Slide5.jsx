// components/Slide5.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    title: 'Social Media Management',
    description:
      'Full-funnel content strategy, scheduling & community management across Instagram, Facebook and LinkedIn — keeping your brand active and growing 24/7.',
    accent: '#ff3366',
    number: '01',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    title: 'Performance Advertising',
    description:
      'Data-driven paid campaigns on Meta & Google designed to maximise ROAS, generate quality leads and scale your revenue with precision targeting.',
    accent: '#6c5ce7',
    number: '02',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    title: 'Brand Identity & Design',
    description:
      'From logo systems to full visual identities — we craft cohesive brand languages that make your business instantly recognisable and memorable.',
    accent: '#00d2ff',
    number: '03',
  },
];

// ─── Corner ornament (top-left, purple) ──────────────────────────────────────
const CornerOrnament = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: 200, height: 200, pointerEvents: 'none', overflow: 'hidden', zIndex: 2 }}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top left, rgba(108,92,231,0.10) 0%, transparent 70%)' }} />
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <pattern id="s5Dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(108,92,231,0.25)" />
        </pattern>
        <radialGradient id="s5Fade" cx="0" cy="0" r="1" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="s5Mask"><rect width="200" height="200" fill="url(#s5Fade)" /></mask>
      </defs>
      <rect width="200" height="200" fill="url(#s5Dots)" mask="url(#s5Mask)" />
    </svg>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="s5GV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#6c5ce7" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#6c5ce7" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="s5GH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#6c5ce7" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#6c5ce7" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1="32" y1="0"  x2="32" y2="90" stroke="url(#s5GV)" strokeWidth="1" />
      <line x1="0"  y1="32" x2="90" y2="32" stroke="url(#s5GH)" strokeWidth="1" />
      <circle cx="32" cy="32" r="2.5" fill="#6c5ce7" opacity="0.8" />
      <circle cx="32" cy="32" r="6"   fill="none" stroke="#6c5ce7" strokeWidth="0.75" opacity="0.3" />
      <circle cx="32" cy="32" r="10"  fill="none" stroke="#6c5ce7" strokeWidth="0.4"  opacity="0.15" />
    </svg>
    <motion.span
      animate={{ opacity: [0.10, 0.20, 0.10] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: 12, left: 44, fontSize: 22, fontWeight: 900, color: '#6c5ce7', lineHeight: 1 }}
    >∞</motion.span>
  </div>
);

// ─── Service card ─────────────────────────────────────────────────────────────
const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 48 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.16 + 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    className="group"
    style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 16,
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      boxShadow: '0 8px 40px rgba(0,0,0,0.45)',
      transition: 'border-color 0.4s, box-shadow 0.4s',
      cursor: 'default',
      position: 'relative',
    }}
  >
    {/* Hover border glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        borderRadius: 16,
        boxShadow: `inset 0 0 0 1.5px ${service.accent}60, 0 0 40px ${service.accent}18`,
        pointerEvents: 'none',
        zIndex: 3,
      }}
    />

    {/* ── Image area ── */}
    <div style={{ position: 'relative', height: 240, overflow: 'hidden', flexShrink: 0 }}>
      <img
        src={service.image}
        alt={service.title}
        className="group-hover:scale-108"
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)',
        }}
      />

      {/* Bottom fade into card body */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom, transparent 40%, rgba(8,8,24,0.85) 100%)`,
        pointerEvents: 'none',
      }} />

      {/* Number badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.16 + 0.6, duration: 0.4, ease: 'backOut' }}
        style={{
          position: 'absolute', top: 16, left: 16,
          width: 34, height: 34, borderRadius: '50%',
          background: `${service.accent}20`,
          border: `1px solid ${service.accent}60`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, color: service.accent, letterSpacing: '0.04em' }}>
          {service.number}
        </span>
      </motion.div>

      {/* Accent tag bottom-right of image */}
      <div style={{
        position: 'absolute', bottom: 12, right: 14, zIndex: 2,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <div style={{
          height: 1, width: 24,
          background: `linear-gradient(90deg, transparent, ${service.accent})`,
        }} />
        <div style={{
          width: 6, height: 6,
          background: service.accent,
          transform: 'rotate(45deg)',
          opacity: 0.9,
        }} />
      </div>
    </div>

    {/* ── Text body ── */}
    <div style={{
      padding: '22px 24px 28px',
      display: 'flex', flexDirection: 'column', gap: 10, flex: 1,
    }}>
      {/* Accent line above title */}
      <div style={{
        height: 2, width: 36, borderRadius: 2,
        background: `linear-gradient(90deg, ${service.accent}, transparent)`,
        marginBottom: 2,
      }} />

      <h3 style={{
        margin: 0, fontSize: 18, fontWeight: 700, lineHeight: 1.2,
        color: 'white', letterSpacing: '-0.01em',
      }}>
        {service.title}
      </h3>

      <p style={{
        margin: 0, fontSize: 13, lineHeight: 1.65,
        color: 'rgba(255,255,255,0.48)',
        letterSpacing: '0.01em',
      }}>
        {service.description}
      </p>

      {/* Learn more link */}
      <motion.div
        style={{
          marginTop: 'auto', paddingTop: 14,
          display: 'flex', alignItems: 'center', gap: 8,
          opacity: 0.7,
        }}
        whileHover={{ opacity: 1 }}
      >
        <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: service.accent }}>
          Learn more
        </span>
        <div style={{ height: 1, width: 20, background: service.accent, opacity: 0.7 }} />
      </motion.div>
    </div>
  </motion.div>
);

// ─── Main ────────────────────────────────────────────────────────────────────
const Slide5 = () => (
  <section style={{
    width: '100%', minHeight: '100vh',
    backgroundColor: '#080818',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    padding: '56px 40px',
    position: 'relative', overflow: 'hidden',
    color: 'white', fontFamily: 'system-ui, sans-serif',
    gap: 48,
  }}>

    {/* Scanlines */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(108,92,231,0.015) 0px, rgba(108,92,231,0.015) 1px, transparent 1px, transparent 52px)',
    }} />

    {/* Ambient glows */}
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 1000, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(108,92,231,0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', top: '30%', left: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,51,102,0.04) 0%, transparent 70%)', filter: 'blur(35px)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', top: '60%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,210,255,0.04) 0%, transparent 70%)', filter: 'blur(35px)', pointerEvents: 'none' }} />

    <CornerOrnament />

    {/* Faint ∞ bottom-right */}
    <motion.div
      animate={{ opacity: [0.02, 0.05, 0.02], scale: [1, 1.03, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      style={{ position: 'absolute', bottom: 20, right: 36, fontSize: 180, lineHeight: 1, fontWeight: 900, color: '#ff3366', pointerEvents: 'none', userSelect: 'none' }}
    >∞</motion.div>

    {/* ── Header ── */}
    <div style={{ width: '100%', maxWidth: 1280, position: 'relative', zIndex: 1 }}>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}
      >
        <div style={{ height: 1, width: 30, background: 'linear-gradient(90deg, #ff3366, transparent)' }} />
        <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#ff3366', opacity: 0.85 }}>
          What We Offer
        </span>
      </motion.div>

      {/* Title row */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ margin: 0, fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700, lineHeight: 1.05, whiteSpace: 'nowrap' }}
        >
          <span style={{
            background: 'linear-gradient(135deg, #ff3366 0%, #6c5ce7 50%, #00d2ff 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Other
          </span>
          {' '}
          <span style={{ color: 'white' }}>Services</span>
        </motion.h2>

        {/* Animated tricolor line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: 1, height: 1, marginBottom: 10,
            background: 'linear-gradient(90deg, #ff3366, #6c5ce7, #00d2ff)',
            opacity: 0.28, transformOrigin: 'left',
          }}
        />
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.65 }}
        style={{ margin: '12px 0 0', fontSize: 14, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.02em', maxWidth: 520 }}
      >
        Beyond campaigns — a full suite of digital growth solutions tailored for your brand.
      </motion.p>
    </div>

    {/* ── 3 Service cards ── */}
    <div style={{
      width: '100%', maxWidth: 1280,
      display: 'flex', flexDirection: 'row',
      gap: 24, position: 'relative', zIndex: 1,
      alignItems: 'stretch',
    }}>
      {SERVICES.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
    </div>

    {/* Footer */}
    <motion.p
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      style={{ fontSize: 11, fontStyle: 'italic', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.14em', position: 'relative', zIndex: 1 }}
    >
      Sample Campaign Strategy &amp; Shoots
    </motion.p>
  </section>
);

export default Slide5;