// components/Slide3.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import a1 from '../assets/1.mp4';    
import a2 from '../assets/2.mp4';  
import a3 from '../assets/3.mp4';  
import a4 from '../assets/4.mp4';    
// ─── Replace with your actual sources ───────────────────────────────────────
const VIDEOS = [
  {
    src: a1,
    poster: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
   
  },
  {
    src: a2,
    poster: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    
  },
  {
    src: a3,
    poster: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    
  },
  {
    src: a4,
    poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
   
  },
];

// ─── Autoplay video card ─────────────────────────────────────────────────────
const VideoCard = ({ video, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.play().catch(() => {});
  }, []);

  // Each card cycles through a different accent colour from the Hero palette
  const accents = ['#ff3366', '#6c5ce7', '#00d2ff', '#ff3366'];
  const accent = accents[index % accents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.14 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative  overflow-hidden group"
      style={{
        flex: 1,
        borderRadius: 14,
        boxShadow: '0 10px 48px rgba(0,0,0,0.6)',
        background: '#05050f',
        position: 'relative',
        minWidth: 0,
      }}
    >
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        autoPlay loop muted playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(8,8,24,0.85) 0%, rgba(8,8,24,0.1) 55%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Hover accent border */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ boxShadow: `inset 0 0 0 1.5px ${accent}80, 0 0 30px ${accent}18`, borderRadius: 14, pointerEvents: 'none' }}
      />

     
      

      {/* Accent bottom line — visible on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ height: 2, background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
    </motion.div>
  );
};



// ─── Section label ────────────────────────────────────────────────────────────
const SectionLabel = ({ text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay }}
    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
  >
    <div style={{ height: 1, width: 30, background: 'linear-gradient(90deg, #ff3366, transparent)' }} />
    <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#ff3366', opacity: 0.85 }}>
      {text}
    </span>
  </motion.div>
);

// ─── Main ────────────────────────────────────────────────────────────────────
const Slide3 = () => (
  <section style={{
    width: '100%', minHeight: '100vh',
    backgroundColor: '#080818',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    padding: '52px 40px',
    position: 'relative', overflow: 'hidden',
    color: 'white', fontFamily: 'system-ui, sans-serif',
    gap: 40,
  }}>

    {/* Scanline texture */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(108,92,231,0.015) 0px, rgba(108,92,231,0.015) 1px, transparent 1px, transparent 52px)',
    }} />

    {/* Central ambient glow */}
    <div style={{
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
      width: 1000, height: 400, borderRadius: '50%',
      background: 'radial-gradient(ellipse, rgba(108,92,231,0.05) 0%, transparent 70%)',
      filter: 'blur(60px)', pointerEvents: 'none',
    }} />

    {/* Pink left glow */}
    <div style={{
      position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)',
      width: 300, height: 300, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,51,102,0.05) 0%, transparent 70%)',
      filter: 'blur(35px)', pointerEvents: 'none',
    }} />

    {/* Cyan right glow */}
    <div style={{
      position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)',
      width: 300, height: 300, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,210,255,0.05) 0%, transparent 70%)',
      filter: 'blur(35px)', pointerEvents: 'none',
    }} />

    {/* Corner ornament */}
    {/* <CornerOrnament /> */}

    {/* Faint ∞ watermark bottom-right */}
    <motion.div
      animate={{ opacity: [0.02, 0.05, 0.02], scale: [1, 1.03, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute', bottom: 20, right: 36,
        fontSize: 180, lineHeight: 1, fontWeight: 900,
        color: '#6c5ce7', pointerEvents: 'none', userSelect: 'none',
      }}
    >
      ∞
    </motion.div>

    {/* ── Header section ── */}
    <div style={{ width: '100%', maxWidth: 1280, position: 'relative', zIndex: 1 }}>
      {/* <SectionLabel text="Reel Showcase" delay={0} /> */}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginTop: 14, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}
      >
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 700, lineHeight: 1.1,
          margin: 0,
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #ff3366 0%, #6c5ce7 50%, #00d2ff 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Campaign
          </span>
          {' '}
          <span style={{ color: 'white' }}>Reels</span>
        </h2>

        {/* Animated tricolor line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: 1, height: 1, marginLeft: 24,
            background: 'linear-gradient(90deg, #ff3366, #6c5ce7, #00d2ff)',
            opacity: 0.3, transformOrigin: 'left',
          }}
        />
      </motion.div>
    </div>

    {/* ── 4 Videos in one row ── */}
    <div style={{
      width: '110%', maxWidth: 1280,
      display: 'flex', flexDirection: 'row',
      gap: 12,
      flex: 1,
      paddingRight: 0,
      minHeight: 0,
      height: 'clamp(320px, 50vh, 520px)',
      position: 'relative', zIndex: 1,
    }}>
      {VIDEOS.map((v, i) => (
        <VideoCard key={i} video={v} index={i} />
      ))}
    </div>

    {/* ── Bottom count row ── */}
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.7 }}
      style={{
        width: '100%', maxWidth: 1280,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative', zIndex: 1,
      }}
    >
      
      <span style={{
        fontSize: 11, fontStyle: 'italic',
        color: 'rgba(255,255,255,0.18)', letterSpacing: '0.14em',
      }}>
        Sample Campaign Strategy &amp; Shoots
      </span>
    </motion.div>

  </section>
);

export default Slide3;