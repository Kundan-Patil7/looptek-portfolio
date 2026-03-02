// components/Slide2.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ─── Replace with your actual sources ───────────────────────────────────────
const VIDEOS = [
  {
    src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27d5f2c5086fec30a0d2a1b7f7f5f5&profile_id=164',
    poster: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    label: 'Ad Campaign',
  },
  {
    src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27d5f2c5086fec30a0d2a1b7f7f5f5&profile_id=164',
    poster: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    label: 'Brand Story',
  },
];

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    alt: 'Campaign visual 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    alt: 'Campaign visual 2',
  },
];

const STATS = [
  { value: '100+', label: 'Inquiries generated through ad campaign' },
  { value: '↑',    label: 'Improved Leads Quality' },
  { value: '★',    label: 'Setup Brand Awareness' },
];

// ─── Autoplay video card ─────────────────────────────────────────────────────
const VideoCard = ({ video, index }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.play().catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.18 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden group"
      style={{
        flex: 1, borderRadius: 12,
        boxShadow: '0 8px 40px rgba(0,0,0,0.55)',
        background: '#05050f', minHeight: 0, position: 'relative',
      }}
    >
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        autoPlay loop muted playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(8,8,24,0.78) 0%, transparent 55%, rgba(8,8,24,0.18) 100%)',
        pointerEvents: 'none',
      }} />
      {/* Hover border — cyan this time for visual variety */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: 'inset 0 0 0 1.5px rgba(0,210,255,0.5)', borderRadius: 12, pointerEvents: 'none' }}
      />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <motion.div
          animate={{ opacity: [1, 0.25, 1], scale: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d2ff', flexShrink: 0 }}
        />
        <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>
          {video.label}
        </span>
      </div>
    </motion.div>
  );
};

// ─── Image tile ──────────────────────────────────────────────────────────────
const ImageTile = ({ img, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.93 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.15 + 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-hidden group"
    style={{ borderRadius: 12, boxShadow: '0 4px 28px rgba(0,0,0,0.5)', width: '100%', height: '100%' }}
  >
    <img
      src={img.src} alt={img.alt}
      className="group-hover:scale-110"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s ease' }}
    />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'linear-gradient(to top, rgba(255,51,102,0.22) 0%, transparent 65%)' }} />
    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ height: 2, background: 'linear-gradient(90deg, #ff3366, #6c5ce7, #00d2ff)' }} />
  </motion.div>
);

// ─── Stat / bullet row ───────────────────────────────────────────────────────
const StatItem = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -28 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.15 + 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
  >
    <div style={{
      marginTop: 8, width: 7, height: 7, flexShrink: 0,
      background: 'linear-gradient(135deg, #ff3366, #6c5ce7)',
      transform: 'rotate(45deg)',
    }} />
    <div>
      <span style={{
        fontSize: 27, fontWeight: 700, lineHeight: 1, display: 'block',
        background: 'linear-gradient(135deg, #ff3366 0%, #6c5ce7 50%, #00d2ff 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>
        {stat.value}
      </span>
      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.04em', lineHeight: 1.4 }}>
        {stat.label}
      </span>
    </div>
  </motion.div>
);

// ─── Corner ornament — mirrored to top-right ─────────────────────────────────
const CornerOrnamentRight = () => (
  <div style={{
    position: 'absolute', top: 0, right: 0, width: 200, height: 200,
    pointerEvents: 'none', overflow: 'hidden', zIndex: 2,
    transform: 'scaleX(-1)',           // mirror horizontally
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at top left, rgba(0,210,255,0.10) 0%, transparent 70%)',
    }} />
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <pattern id="s2Dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(0,210,255,0.22)" />
        </pattern>
        <radialGradient id="s2Fade" cx="0" cy="0" r="1" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="s2Mask"><rect width="200" height="200" fill="url(#s2Fade)" /></mask>
      </defs>
      <rect width="200" height="200" fill="url(#s2Dots)" mask="url(#s2Mask)" />
    </svg>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="s2GV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00d2ff" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#00d2ff" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="s2GH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#00d2ff" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#00d2ff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1="32" y1="0"  x2="32" y2="90" stroke="url(#s2GV)" strokeWidth="1" />
      <line x1="0"  y1="32" x2="90" y2="32" stroke="url(#s2GH)" strokeWidth="1" />
      <circle cx="32" cy="32" r="2.5" fill="#00d2ff" opacity="0.8" />
      <circle cx="32" cy="32" r="6"   fill="none" stroke="#00d2ff" strokeWidth="0.75" opacity="0.3" />
      <circle cx="32" cy="32" r="10"  fill="none" stroke="#00d2ff" strokeWidth="0.4"  opacity="0.15" />
    </svg>
    <motion.span
      animate={{ opacity: [0.10, 0.20, 0.10] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      style={{ position: 'absolute', top: 12, left: 44, fontSize: 22, fontWeight: 900, color: '#00d2ff', lineHeight: 1 }}
    >
      ∞
    </motion.span>
  </div>
);

// ─── Section label ────────────────────────────────────────────────────────────
const SectionLabel = ({ text, delay = 0, align = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay }}
    style={{
      display: 'flex', alignItems: 'center', gap: 10,
      marginBottom: 2,
      flexDirection: align === 'right' ? 'row-reverse' : 'row',
    }}
  >
    <div style={{
      height: 1, width: 30,
      background: align === 'right'
        ? 'linear-gradient(270deg, #00d2ff, transparent)'
        : 'linear-gradient(90deg, #ff3366, transparent)',
    }} />
    <span style={{
      fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
      color: align === 'right' ? '#00d2ff' : '#ff3366',
      opacity: 0.85,
    }}>
      {text}
    </span>
  </motion.div>
);

// ─── Main ────────────────────────────────────────────────────────────────────
const Slide2 = () => (
  <section style={{
    width: '100%', minHeight: '100vh',
    backgroundColor: '#080818',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '48px 36px',
    position: 'relative', overflow: 'hidden',
    color: 'white', fontFamily: 'system-ui, sans-serif',
  }}>

    {/* Scanline texture */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,210,255,0.012) 0px, rgba(0,210,255,0.012) 1px, transparent 1px, transparent 52px)',
    }} />

    {/* Central ambient glow */}
    <div style={{
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
      width: 800, height: 400, borderRadius: '50%',
      background: 'radial-gradient(ellipse, rgba(108,92,231,0.05) 0%, transparent 70%)',
      filter: 'blur(50px)', pointerEvents: 'none',
    }} />

    {/* Pink left lobe */}
    <div style={{
      position: 'absolute', top: '50%', left: '20%', transform: 'translateY(-50%)',
      width: 280, height: 280, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,51,102,0.05) 0%, transparent 70%)',
      filter: 'blur(30px)', pointerEvents: 'none',
    }} />

    {/* Cyan right lobe */}
    <div style={{
      position: 'absolute', top: '50%', right: '18%', transform: 'translateY(-50%)',
      width: 280, height: 280, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,210,255,0.06) 0%, transparent 70%)',
      filter: 'blur(30px)', pointerEvents: 'none',
    }} />

    {/* Top-right ornament */}
    <CornerOrnamentRight />

    {/* Faint bottom-left ∞ watermark */}
    <motion.div
      animate={{ opacity: [0.02, 0.055, 0.02], scale: [1, 1.03, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      style={{
        position: 'absolute', bottom: 20, left: 36,
        fontSize: 180, lineHeight: 1, fontWeight: 900,
        color: '#00d2ff', pointerEvents: 'none', userSelect: 'none',
      }}
    >
      ∞
    </motion.div>

    {/* Main grid */}
    <div style={{
      width: '100%', maxWidth: 1280, position: 'relative', zIndex: 1,
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 36, alignItems: 'stretch', minHeight: 600,
    }}>

      {/* ── LEFT — 2 images + text/stats ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <SectionLabel text="Campaign Results" delay={0} align="left" />

        {/* Two equal images side-by-side */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          height: 300,
        }}>
          <ImageTile img={IMAGES[0]} index={0} />
          <ImageTile img={IMAGES[1]} index={1} />
        </div>

        {/* Tricolor divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 1,
            background: 'linear-gradient(90deg, #ff3366 0%, #6c5ce7 50%, #00d2ff 100%)',
            opacity: 0.35,
            transformOrigin: 'left',
          }}
        />

        {/* Stats / bullet points */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {STATS.map((s, i) => <StatItem key={i} stat={s} index={i} />)}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            fontSize: 11, fontStyle: 'italic',
            color: 'rgba(255,255,255,0.18)', letterSpacing: '0.14em',
          }}
        >
          Sample Campaign Strategy &amp; Shoots
        </motion.p>
      </div>

      {/* ── RIGHT — 2 autoplay videos ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <SectionLabel text="Campaign Reels" delay={0.1} align="right" />
        {VIDEOS.map((v, i) => <VideoCard key={i} video={v} index={i} />)}
      </div>

    </div>
  </section>
);

export default Slide2;