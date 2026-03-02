// components/Slide4.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ─── Replace with your actual sources ───────────────────────────────────────
const VIDEOS = [
  {
    src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27d5f2c5086fec30a0d2a1b7f7f5f5&profile_id=164',
    poster: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    label: 'Coffee Craft',
  },
  {
    src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27d5f2c5086fec30a0d2a1b7f7f5f5&profile_id=164',
    poster: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    label: 'Food Story',
  },
];

// Top-right: 2 photos side by side
const TOP_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    alt: 'Cinnamon Roll',
  },
  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    alt: 'Food spread',
  },
];

// Bottom-right: large annotated image
const ANNOTATED_IMAGE = {
  src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
  alt: 'Restaurant dish',
  annotations: [
    { label: 'Fresh Ingredients', x: '18%', y: '22%' },
    { label: 'Chef Special',      x: '68%', y: '15%' },
    { label: 'House Sauce',       x: '30%', y: '68%' },
    { label: 'Garnish',           x: '72%', y: '60%' },
  ],
};

const STATS = [
  { value: '3×',  label: 'Increased traffic in 30 days' },
  { value: '★★',  label: 'High quality engagement & customer reviews' },
];

// ─── Autoplay video card ─────────────────────────────────────────────────────
const VideoCard = ({ video, index }) => {
  const ref = useRef(null);
  useEffect(() => { ref.current?.play().catch(() => {}); }, []);
  const accent = index === 0 ? '#ff3366' : '#6c5ce7';

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.18 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden group"
      style={{ flex: 1, borderRadius: 12, boxShadow: '0 8px 40px rgba(0,0,0,0.55)', background: '#05050f', minHeight: 0, position: 'relative' }}
    >
      <video
        ref={ref} src={video.src} poster={video.poster}
        autoPlay loop muted playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(8,8,24,0.80) 0%, transparent 55%, rgba(8,8,24,0.15) 100%)',
        pointerEvents: 'none',
      }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 0 1.5px ${accent}80`, borderRadius: 12, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <motion.div
          animate={{ opacity: [1, 0.25, 1], scale: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
          style={{ width: 5, height: 5, borderRadius: '50%', background: accent, flexShrink: 0 }}
        />
        <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
          {video.label}
        </span>
      </div>
    </motion.div>
  );
};

// ─── Small image tile ─────────────────────────────────────────────────────────
const SmallImageTile = ({ img, index }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.12 + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-hidden group"
    style={{ flex: 1, borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.45)' }}
  >
    <img src={img.src} alt={img.alt}
      className="group-hover:scale-110"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s ease' }}
    />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'linear-gradient(to top, rgba(108,92,231,0.25) 0%, transparent 65%)' }} />
    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ height: 2, background: 'linear-gradient(90deg, #ff3366, #6c5ce7, #00d2ff)' }} />
  </motion.div>
);

// ─── Annotated image ──────────────────────────────────────────────────────────
const AnnotatedImage = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-visible group"
    style={{ borderRadius: 12, boxShadow: '0 6px 32px rgba(0,0,0,0.5)', position: 'relative' }}
  >
    <img src={data.src} alt={data.alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 12 }}
    />
    {/* Dark overlay */}
    <div style={{
      position: 'absolute', inset: 0, borderRadius: 12,
      background: 'linear-gradient(to top, rgba(8,8,24,0.55) 0%, transparent 60%)',
      pointerEvents: 'none',
    }} />

    {/* Annotation dots + labels */}
    {data.annotations.map((ann, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + i * 0.12, duration: 0.4, ease: 'backOut' }}
        style={{ position: 'absolute', left: ann.x, top: ann.y, transform: 'translate(-50%, -50%)', zIndex: 4 }}
      >
        {/* Dot */}
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: i % 2 === 0 ? '#ff3366' : '#00d2ff',
          boxShadow: `0 0 0 3px ${i % 2 === 0 ? 'rgba(255,51,102,0.3)' : 'rgba(0,210,255,0.3)'}`,
          position: 'relative', zIndex: 5,
        }} />
        {/* Line + label */}
        <div style={{
          position: 'absolute',
          top: i % 2 === 0 ? 'auto' : '100%',
          bottom: i % 2 === 0 ? '100%' : 'auto',
          left: i < 2 ? '100%' : 'auto',
          right: i >= 2 ? '100%' : 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          marginLeft: i < 2 ? 6 : 0,
          marginRight: i >= 2 ? 6 : 0,
          whiteSpace: 'nowrap',
          flexDirection: i >= 2 ? 'row-reverse' : 'row',
        }}>
          <div style={{ height: 1, width: 20, background: i % 2 === 0 ? '#ff3366' : '#00d2ff', opacity: 0.7 }} />
          <span style={{
            fontSize: 10, color: 'white', fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'lowercase',
            textShadow: '0 1px 4px rgba(0,0,0,0.9)',
          }}>
            {ann.label}
          </span>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

// ─── Stat item ────────────────────────────────────────────────────────────────
const StatItem = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 28 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.15 + 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
  >
    <div style={{
      marginTop: 7, width: 7, height: 7, flexShrink: 0,
      background: 'linear-gradient(135deg, #ff3366, #6c5ce7)',
      transform: 'rotate(45deg)',
    }} />
    <div>
      <span style={{
        fontSize: 24, fontWeight: 700, lineHeight: 1, display: 'block',
        background: 'linear-gradient(135deg, #ff3366 0%, #6c5ce7 50%, #00d2ff 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>
        {stat.value}
      </span>
      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.04em', lineHeight: 1.4 }}>
        {stat.label}
      </span>
    </div>
  </motion.div>
);

// ─── Corner ornament ──────────────────────────────────────────────────────────
const CornerOrnament = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: 200, height: 200, pointerEvents: 'none', overflow: 'hidden', zIndex: 2 }}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top left, rgba(255,51,102,0.08) 0%, transparent 70%)' }} />
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <pattern id="s4Dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(255,51,102,0.22)" />
        </pattern>
        <radialGradient id="s4Fade" cx="0" cy="0" r="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="60%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="s4Mask"><rect width="200" height="200" fill="url(#s4Fade)" /></mask>
      </defs>
      <rect width="200" height="200" fill="url(#s4Dots)" mask="url(#s4Mask)" />
    </svg>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="s4GV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff3366" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#ff3366" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="s4GH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff3366" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#ff3366" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1="32" y1="0"  x2="32" y2="90" stroke="url(#s4GV)" strokeWidth="1" />
      <line x1="0"  y1="32" x2="90" y2="32" stroke="url(#s4GH)" strokeWidth="1" />
      <circle cx="32" cy="32" r="2.5" fill="#ff3366" opacity="0.8" />
      <circle cx="32" cy="32" r="6"   fill="none" stroke="#ff3366" strokeWidth="0.75" opacity="0.3" />
      <circle cx="32" cy="32" r="10"  fill="none" stroke="#ff3366" strokeWidth="0.4"  opacity="0.15" />
    </svg>
    <motion.span
      animate={{ opacity: [0.10, 0.20, 0.10] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      style={{ position: 'absolute', top: 12, left: 44, fontSize: 22, fontWeight: 900, color: '#ff3366', lineHeight: 1 }}
    >∞</motion.span>
  </div>
);

// ─── Section label ────────────────────────────────────────────────────────────
const SectionLabel = ({ text, delay = 0, color = '#ff3366', direction = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay }}
    style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2, flexDirection: direction === 'right' ? 'row-reverse' : 'row' }}
  >
    <div style={{ height: 1, width: 30, background: direction === 'right' ? `linear-gradient(270deg, ${color}, transparent)` : `linear-gradient(90deg, ${color}, transparent)` }} />
    <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color, opacity: 0.85 }}>{text}</span>
  </motion.div>
);

// ─── Main ────────────────────────────────────────────────────────────────────
const Slide4 = () => (
  <section style={{
    width: '100%', minHeight: '100vh',
    backgroundColor: '#080818',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '48px 36px',
    position: 'relative', overflow: 'hidden',
    color: 'white', fontFamily: 'system-ui, sans-serif',
  }}>

    {/* Scanlines */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,51,102,0.012) 0px, rgba(255,51,102,0.012) 1px, transparent 1px, transparent 52px)',
    }} />

    {/* Ambient glows */}
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(108,92,231,0.05) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', top: '50%', left: '18%', transform: 'translateY(-50%)', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,51,102,0.06) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', top: '50%', right: '18%', transform: 'translateY(-50%)', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,210,255,0.05) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />

    <CornerOrnament />

    {/* Faint ∞ bottom-right */}
    <motion.div
      animate={{ opacity: [0.02, 0.05, 0.02], scale: [1, 1.03, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      style={{ position: 'absolute', bottom: 20, right: 36, fontSize: 180, lineHeight: 1, fontWeight: 900, color: '#6c5ce7', pointerEvents: 'none', userSelect: 'none' }}
    >∞</motion.div>

    {/* Main grid */}
    <div style={{
      width: '100%', maxWidth: 1280, position: 'relative', zIndex: 1,
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 32, alignItems: 'stretch', minHeight: 620,
    }}>

      {/* ── LEFT — 2 stacked autoplay videos ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <SectionLabel text="Food Reels" delay={0} color="#ff3366" />
        {VIDEOS.map((v, i) => <VideoCard key={i} video={v} index={i} />)}
      </div>

      {/* ── RIGHT — 2 images top + annotated image bottom-left + stats bottom-right ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SectionLabel text="Campaign Shoots" delay={0.1} color="#00d2ff" direction="right" />

        {/* Top row: 2 small images */}
        <div style={{ display: 'flex', gap: 12, height: 190 }}>
          {TOP_IMAGES.map((img, i) => <SmallImageTile key={i} img={img} index={i} />)}
        </div>

        {/* Bottom row: annotated image (left ~60%) + stats (right ~40%) */}
        <div style={{ display: 'flex', gap: 16, flex: 1, minHeight: 0 }}>

          {/* Annotated image */}
          <div style={{ flex: '0 0 58%', minHeight: 0 }}>
            <AnnotatedImage data={ANNOTATED_IMAGE} />
          </div>

          {/* Stats + footer */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, paddingLeft: 8 }}>

            {/* Tricolor divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: 1, background: 'linear-gradient(90deg, #ff3366, #6c5ce7, #00d2ff)', opacity: 0.35, transformOrigin: 'left' }}
            />

            {STATS.map((s, i) => <StatItem key={i} stat={s} index={i} />)}

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
              style={{ fontSize: 10, fontStyle: 'italic', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.14em', marginTop: 8 }}
            >
              Sample Campaign Strategy &amp; Shoots
            </motion.p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Slide4;