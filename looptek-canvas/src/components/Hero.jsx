// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import ProtectedVideo from './ProtectedVideo';
import Slide3 from './Slide3';

// ─── Lemniscate math (kept for SVG rings only) ───────────────────────────────
const lemniscate = (t, rx, ry) => {
  const angle = t * Math.PI * 2;
  const denom = 1 + Math.pow(Math.cos(angle), 2);
  return {
    x: rx * Math.sin(angle) / denom,
    y: ry * Math.sin(angle) * Math.cos(angle) / denom,
  };
};

const buildLemniscatePath = (cx, cy, rx, ry, steps = 200) => {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const { x, y } = lemniscate(i / steps, rx, ry);
    pts.push(`${i === 0 ? 'M' : 'L'}${(cx + x).toFixed(2)},${(cy + y).toFixed(2)}`);
  }
  return pts.join(' ') + 'Z';
};

// ─── Large ∞ Logo SVG — animated gradient stroke ────────────────────────────
const InfinityLogo = ({ size = 380 }) => {
  const path = buildLemniscatePath(0, 0, 60, 66); // Larger dimensions

  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="-70 -40 140 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <defs>
        {/* Animated gradient with light blue as primary */}
        <linearGradient id="logoGrad" gradientUnits="userSpaceOnUse" x1="-52" y1="0" x2="52" y2="0">
          <stop offset="0%"   stopColor="#00d2ff"> {/* Light blue */}
            <animate attributeName="stop-color"
              values="#00d2ff;#6c5ce7;#f27e1f;#00d2ff"
              dur="5s" repeatCount="indefinite" />
          </stop>
          {/* <stop offset="50%"  stopColor="#6c5ce7">
            <animate attributeName="stop-color"
              values="#6c5ce7;#f27e1f;#00d2ff;#6c5ce7"
              dur="5s" repeatCount="indefinite" />
          </stop> */}
          {/* <stop offset="100%" stopColor="#ffffff">
            <animate attributeName="stop-color"
              values="#f27e1f;#00d2ff;#6c5ce7;#f27e1f"
              dur="5s" repeatCount="indefinite" />
          </stop> */}
        </linearGradient>

        {/* Secondary light blue gradient for accents */}
        <linearGradient id="logoGradLight" gradientUnits="userSpaceOnUse" x1="-52" y1="0" x2="52" y2="0">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.8"/>
          <stop offset="50%" stopColor="#4dc9ff" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#00b8ff" stopOpacity="0.8"/>
        </linearGradient>

        {/* Glow filter — stronger blur for more brightness */}
        <filter id="logoGlow" x="-60%" y="-120%" width="220%" height="340%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Extra outer halo filter */}
        <filter id="logoHalo" x="-80%" y="-160%" width="260%" height="420%">
          <feGaussianBlur stdDeviation="9" result="halo" />
          <feMerge>
            <feMergeNode in="halo" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Spark glow */}
        <filter id="sparkGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" result="sg" />
          <feMerge>
            <feMergeNode in="sg" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <path id="logoPath" d={path} />
      </defs>

      {/* Outer halo ring — very wide soft glow */}
      <path
        d={path}
        stroke="url(#logoGradLight)"
        strokeWidth="8"
        fill="none"
        filter="url(#logoHalo)"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* Base ring */}
      <path
        d={path}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="3"
        fill="none"
      />

      {/* Main bright glowing stroke */}
      <path
        d={path}
        stroke="url(#logoGrad)"
        strokeWidth="4.5"
        fill="none"
        filter="url(#logoGlow)"
        strokeLinecap="round"
      />

      {/* Travelling bright spark */}
      <circle r="2.4" fill="#ffffff" opacity="0.9" filter="url(#sparkGlow)">
        <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
          <mpath href="#logoPath" />
        </animateMotion>
      </circle>

      {/* Second spark, offset with light blue tint */}
      <circle r="2.5" fill="#ffffff" opacity="0.9" filter="url(#sparkGlow)">
        <animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" rotate="auto">
          <mpath href="#logoPath" />
        </animateMotion>
      </circle>
    </svg>
  );
};

// ─── Top-left ornament (updated with light blue) ───────────────────────────
const TopLeftOrnament = () => (
  <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none select-none overflow-hidden z-[2]">
    <div className="absolute inset-0" style={{
      background: 'radial-gradient(ellipse at top left, rgba(0,210,255,0.12) 0%, transparent 68%)',
    }} />
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotGrid" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(0,210,255,0.3)" />
        </pattern>
        <radialGradient id="gridFade" cx="0" cy="0" r="1" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="65%"  stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="gridMask">
          <rect width="256" height="256" fill="url(#gridFade)" />
        </mask>
      </defs>
      <rect width="256" height="256" fill="url(#dotGrid)" mask="url(#gridMask)" />
    </svg>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGradV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00d2ff" stopOpacity="0.75"/>
          <stop offset="100%" stopColor="#00d2ff" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="lineGradH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#00d2ff" stopOpacity="0.75"/>
          <stop offset="100%" stopColor="#00d2ff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1="32" y1="0"  x2="32" y2="100" stroke="url(#lineGradV)" strokeWidth="1" />
      <line x1="0"  y1="32" x2="100" y2="32" stroke="url(#lineGradH)" strokeWidth="1" />
      <circle cx="32" cy="32" r="2.5" fill="#00d2ff" opacity="0.8" />
      <circle cx="32" cy="32" r="6"   fill="none" stroke="#00d2ff" strokeWidth="0.75" opacity="0.3" />
      <circle cx="32" cy="32" r="10"  fill="none" stroke="#00d2ff" strokeWidth="0.4"  opacity="0.15" />
    </svg>
    <motion.span
      animate={{ opacity: [0.10, 0.25, 0.10] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: 12, left: 46, fontSize: 22, fontWeight: 900, color: '#00d2ff', lineHeight: 1 }}
    >∞</motion.span>
  </div>
);

// ─── Hero ────────────────────────────────────────────────────────────────────
const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#080818' }}
    >
      {/* ── Background video ── */}
      <div className="absolute inset-0 z-0">
        <ProtectedVideo
          src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27d5f2c5086fec30a0d2a1b7f7f5f5&profile_id=164&oauth2_token_id=57447761"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080818]/85 via-[#080818]/40 to-[#080818]/92" />
      </div>

      {/* ── Ambient glows with light blue emphasis ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 800, height: 400,
            background: 'radial-gradient(ellipse, rgba(0,210,255,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)' }} />
        <div className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{ left: 'calc(50% - 250px)', width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(0,210,255,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)' }} />
        <div className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{ left: 'calc(50% + 100px)', width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(108,92,231,0.04) 0%, transparent 70%)',
            filter: 'blur(40px)' }} />
      </div>

      {/* ── Faint ∞ watermark bottom-right with light blue ── */}
      <motion.div
        className="absolute bottom-16 right-24 select-none pointer-events-none"
        animate={{ opacity: [0.025, 0.08, 0.025], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{ fontSize: 240, lineHeight: 1, color: '#00d2ff', fontWeight: 90, opacity: 0.15 }}
      >
        ∞
      </motion.div>

      {/* ── Top-left ornament ── */}
      <TopLeftOrnament />

      {/* ── Content ── */}
      <div className="container mx-auto px-4 z-10 text-center relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
        >

          {/* ── Brand logo row: Large ∞ + LoopteK ── */}
          <motion.div
            variants={textVariants}
            className="flex items-center justify-center gap-6 mb-4"
          >
            {/* Animated infinity SVG logo - LARGER */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <InfinityLogo size={140} />
            </motion.div>

            {/* LoopteK wordmark with light blue emphasis */}
            <h1 className="text-5xl md:text-7xl font-bold" style={{ margin: 0 }}>
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #ffffff  0%, #00d2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                LoopteK
              </span>
            </h1>
          </motion.div>

          {/* Tagline with light blue */}
          {/* <motion.div variants={textVariants} className="flex justify-center items-center mb-6">
            <span className="tracking-[0.25em]  text-large mtext-[25px] " style={{ color: '#00d2ff' }}>
              Digital Growth Partner
            </span>
          </motion.div> */}

          <motion.h2 variants={textVariants} className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Digital Growth Partner<br />
            <span style={{ color: '#00d2ff' }}></span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
         We help businesses build a strong digital presence and grow sustainably.
          </motion.p>

        </motion.div>
      </div>

      <Slide3/>

      {/* ── Scroll indicator with light blue ──
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <FaArrowDown className="text-2xl" style={{ color: '#00d2ff' }} />
      </motion.div> */}
    </section>
  );
};

export default Hero;