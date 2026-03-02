// // components/Slide1.jsx
// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // ─── Replace these with your actual video/image sources ─────────────────────
// const VIDEOS = [
//   {
//     src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27d5f2c5086fec30a0d2a1b7f7f5f5&profile_id=164',
//     poster: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
//     label: 'Bridal Collection',
//   },
//   {
//     src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27d5f2c5086fec30a0d2a1b7f7f5f5&profile_id=164',
//     poster: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
//     label: 'Behind the Shoot',
//   },
// ];

// const IMAGES = [
//   {
//     src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
//     alt: 'Kundan necklace set',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
//     alt: 'Gold bangles',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
//     alt: 'Earring collection',
//   },
// ];

// const STATS = [
//   { value: '2×', label: 'Engagement increase in 45 days' },
//   { value: '120+', label: 'Inquiries via ad campaign' },
//   { value: '10K', label: 'Monthly profile reach (from 2K)' },
// ];

// // ─── Video card with play/pause ──────────────────────────────────────────────
// const VideoCard = ({ video, index }) => {
//   const [playing, setPlaying] = useState(false);
//   const ref = useRef(null);

//   const toggle = () => {
//     if (!ref.current) return;
//     if (playing) { ref.current.pause(); setPlaying(false); }
//     else { ref.current.play(); setPlaying(true); }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -40 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: index * 0.18 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       className="relative overflow-hidden cursor-pointer group"
//       style={{
//         borderRadius: 12,
//         boxShadow: '0 8px 40px rgba(0,0,0,0.45)',
//         background: '#111',
//         flex: 1,
//       }}
//       onClick={toggle}
//     >
//       <video
//         ref={ref}
//         src={video.src}
//         poster={video.poster}
//         loop
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//         style={{ display: 'block', minHeight: 0 }}
//       />

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 transition-opacity group-hover:opacity-80" />

//       {/* Play / Pause button */}
//       <AnimatePresence>
//         {!playing && (
//           <motion.div
//             initial={{ scale: 0.7, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.7, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <div style={{
//               width: 52, height: 52, borderRadius: '50%',
//               background: 'rgba(212,175,55,0.92)',
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               boxShadow: '0 0 0 8px rgba(212,175,55,0.18)',
//             }}>
//               <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
//                 <path d="M2 1.5L16 10L2 18.5V1.5Z" fill="#1a1208" />
//               </svg>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Label */}
//       <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
//         <span style={{
//           fontFamily: "'Cormorant Garamond', serif",
//           fontSize: 13,
//           color: '#e8d5a0',
//           letterSpacing: '0.12em',
//           textTransform: 'uppercase',
//           fontStyle: 'italic',
//         }}>
//           {video.label}
//         </span>
//       </div>

//       {/* Gold border on hover */}
//       <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
//         style={{ boxShadow: 'inset 0 0 0 1.5px rgba(212,175,55,0.5)' }} />
//     </motion.div>
//   );
// };

// // ─── Image mosaic item ───────────────────────────────────────────────────────
// const ImageTile = ({ img, index }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.92 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ delay: index * 0.12 + 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//     className="relative overflow-hidden group"
//     style={{ borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.35)' }}
//   >
//     <img
//       src={img.src}
//       alt={img.alt}
//       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//     {/* Gold shimmer line on hover */}
//     <motion.div
//       className="absolute bottom-0 left-0 right-0"
//       style={{ height: 2, background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', opacity: 0 }}
//       whileHover={{ opacity: 1 }}
//     />
//   </motion.div>
// );

// // ─── Stat item ───────────────────────────────────────────────────────────────
// const StatItem = ({ stat, index }) => (
//   <motion.div
//     initial={{ opacity: 0, x: 30 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ delay: index * 0.15 + 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//     className="flex items-start gap-3"
//   >
//     {/* Gold diamond bullet */}
//     <div style={{
//       marginTop: 6,
//       width: 8, height: 8,
//       background: 'linear-gradient(135deg, #d4af37, #f5d67d)',
//       transform: 'rotate(45deg)',
//       flexShrink: 0,
//     }} />
//     <div>
//       <span style={{
//         fontFamily: "'Cormorant Garamond', serif",
//         fontSize: 28,
//         fontWeight: 700,
//         color: '#d4af37',
//         lineHeight: 1,
//         display: 'block',
//       }}>
//         {stat.value}
//       </span>
//       <span style={{
//         fontFamily: "'Jost', sans-serif",
//         fontSize: 12,
//         color: '#b8a07a',
//         letterSpacing: '0.05em',
//         lineHeight: 1.4,
//       }}>
//         {stat.label}
//       </span>
//     </div>
//   </motion.div>
// );

// // ─── Main component ──────────────────────────────────────────────────────────
// const Slide1 = () => {
//   return (
//     <>
//       {/* Google Fonts */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//       `}</style>

//       <section style={{
//         width: '100%',
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #0e0b07 0%, #1a1208 50%, #0e0b07 100%)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '40px 32px',
//         fontFamily: "'Jost', sans-serif",
//         position: 'relative',
//         overflow: 'hidden',
//       }}>

//         {/* Subtle background texture lines */}
//         <div style={{
//           position: 'absolute', inset: 0, pointerEvents: 'none',
//           backgroundImage: 'repeating-linear-gradient(0deg, rgba(212,175,55,0.02) 0px, rgba(212,175,55,0.02) 1px, transparent 1px, transparent 48px)',
//         }} />

//         {/* Ambient gold glow */}
//         <div style={{
//           position: 'absolute', top: '50%', left: '30%',
//           transform: 'translate(-50%, -50%)',
//           width: 600, height: 400, borderRadius: '50%',
//           background: 'radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 70%)',
//           filter: 'blur(60px)', pointerEvents: 'none',
//         }} />

//         <div style={{
//           width: '100%',
//           maxWidth: 1280,
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: 32,
//           alignItems: 'stretch',
//           minHeight: 580,
//         }}>

//           {/* ── LEFT: 2 Videos stacked ── */}
//           <motion.div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 20,
//               position: 'relative',
//             }}
//           >
//             {/* Decorative top-left corner */}
//             <div style={{ position: 'absolute', top: -12, left: -12, pointerEvents: 'none', zIndex: 10 }}>
//               <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                 <line x1="0" y1="24" x2="24" y2="24" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.6"/>
//                 <line x1="24" y1="0" x2="24" y2="24" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.6"/>
//                 <circle cx="24" cy="24" r="2.5" fill="#d4af37" fillOpacity="0.8"/>
//               </svg>
//             </div>

//             {/* Section label */}
//             <motion.div
//               initial={{ opacity: 0, y: -12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}
//             >
//               <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
//               <span style={{
//                 fontFamily: "'Jost', sans-serif",
//                 fontSize: 11,
//                 letterSpacing: '0.25em',
//                 textTransform: 'uppercase',
//                 color: '#d4af37',
//                 opacity: 0.8,
//               }}>
//                 Campaign Reels
//               </span>
//             </motion.div>

//             {VIDEOS.map((v, i) => (
//               <VideoCard key={i} video={v} index={i} />
//             ))}
//           </motion.div>

//           {/* ── RIGHT: Images mosaic + stats ── */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

//             {/* Top section label */}
//             <motion.div
//               initial={{ opacity: 0, y: -12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               style={{ display: 'flex', alignItems: 'center', gap: 10 }}
//             >
//               <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
//               <span style={{
//                 fontFamily: "'Jost', sans-serif",
//                 fontSize: 11,
//                 letterSpacing: '0.25em',
//                 textTransform: 'uppercase',
//                 color: '#d4af37',
//                 opacity: 0.8,
//               }}>
//                 Sample Shoots
//               </span>
//             </motion.div>

//             {/* Image grid — 2 top, 1 wider bottom */}
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '180px 200px', gap: 12 }}>
//               <div style={{ gridColumn: '1', gridRow: '1' }}>
//                 <ImageTile img={IMAGES[0]} index={0} />
//               </div>
//               <div style={{ gridColumn: '2', gridRow: '1' }}>
//                 <ImageTile img={IMAGES[1]} index={1} />
//               </div>
//               <div style={{ gridColumn: '1 / span 2', gridRow: '2' }}>
//                 <ImageTile img={IMAGES[2]} index={2} />
//               </div>
//             </div>

//             {/* Divider */}
//             <div style={{
//               display: 'flex', alignItems: 'center', gap: 12,
//             }}>
//               <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)' }} />
//               <div style={{ width: 6, height: 6, background: '#d4af37', transform: 'rotate(45deg)' }} />
//               <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, rgba(212,175,55,0.4), transparent)' }} />
//             </div>

//             {/* Stats */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
//               {STATS.map((s, i) => (
//                 <StatItem key={i} stat={s} index={i} />
//               ))}
//             </div>

//             {/* Footer tag */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1, duration: 0.8 }}
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: 11,
//                 fontStyle: 'italic',
//                 color: 'rgba(184,160,122,0.5)',
//                 letterSpacing: '0.15em',
//                 textAlign: 'right',
//                 marginTop: 4,
//               }}
//             >
//               Sample Campaign Strategy &amp; Shoots
//             </motion.p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Slide1;


// components/Slide1.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ─── Replace with your actual sources ───────────────────────────────────────
const VIDEOS = [
  {
    src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27d5f2c5086fec30a0d2a1b7f7f5f5&profile_id=164',
    poster: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    label: 'Bridal Collection',
  },
  {
    src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27d5f2c5086fec30a0d2a1b7f7f5f5&profile_id=164',
    poster: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    label: 'Behind the Shoot',
  },
];

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    alt: 'Kundan necklace set',
  },
  {
    src: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    alt: 'Gold bangles',
  },
  {
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    alt: 'Earring collection',
  },
];

const STATS = [
  { value: '2x',   label: 'Engagement increase in 45 days' },
  { value: '120+', label: 'Inquiries via ad campaign' },
  { value: '10K',  label: 'Monthly profile reach (from 2K)' },
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
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.18 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden group"
      style={{
        flex: 1,
        borderRadius: 12,
        boxShadow: '0 8px 40px rgba(0,0,0,0.55)',
        background: '#05050f',
        minHeight: 0,
        position: 'relative',
      }}
    >
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {/* Dark vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(8,8,24,0.78) 0%, transparent 55%, rgba(8,8,24,0.18) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Hover glow border — Hero pink */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: 'inset 0 0 0 1.5px rgba(255,51,102,0.5), 0 0 28px rgba(255,51,102,0.10)',
          borderRadius: 12,
          pointerEvents: 'none',
        }}
      />

      {/* Label with pulsing live dot */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <motion.div
          animate={{ opacity: [1, 0.25, 1], scale: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff3366', flexShrink: 0 }}
        />
        <span style={{
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.65)',
        }}>
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
    transition={{ delay: index * 0.12 + 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-hidden group"
    style={{ borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.45)', width: '100%', height: '100%' }}
  >
    <img
      src={img.src}
      alt={img.alt}
      className="group-hover:scale-110"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s ease' }}
    />
    {/* Purple tint on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'linear-gradient(to top, rgba(108,92,231,0.28) 0%, transparent 65%)' }} />
    {/* Tricolor shimmer line */}
    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ height: 2, background: 'linear-gradient(90deg, #ff3366, #6c5ce7, #00d2ff)' }} />
  </motion.div>
);

// ─── Stat row ────────────────────────────────────────────────────────────────
const StatItem = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 28 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.15 + 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
  >
    {/* Diamond bullet — Hero gradient */}
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

// ─── Corner ornament (mirrors Hero's TopLeftOrnament) ────────────────────────
const CornerOrnament = () => (
  <div style={{
    position: 'absolute', top: 0, left: 0, width: 200, height: 200,
    pointerEvents: 'none', overflow: 'hidden', zIndex: 2,
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at top left, rgba(108,92,231,0.10) 0%, transparent 70%)',
    }} />
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <pattern id="s1Dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(108,92,231,0.25)" />
        </pattern>
        <radialGradient id="s1Fade" cx="0" cy="0" r="1" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="s1Mask">
          <rect width="200" height="200" fill="url(#s1Fade)" />
        </mask>
      </defs>
      <rect width="200" height="200" fill="url(#s1Dots)" mask="url(#s1Mask)" />
    </svg>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="s1GV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#6c5ce7" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#6c5ce7" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="s1GH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#6c5ce7" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#6c5ce7" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1="32" y1="0"  x2="32" y2="90" stroke="url(#s1GV)" strokeWidth="1" />
      <line x1="0"  y1="32" x2="90" y2="32" stroke="url(#s1GH)" strokeWidth="1" />
      <circle cx="32" cy="32" r="2.5" fill="#6c5ce7" opacity="0.8" />
      <circle cx="32" cy="32" r="6"   fill="none" stroke="#6c5ce7" strokeWidth="0.75" opacity="0.3" />
      <circle cx="32" cy="32" r="10"  fill="none" stroke="#6c5ce7" strokeWidth="0.4"  opacity="0.15" />
    </svg>
    <motion.span
      animate={{ opacity: [0.10, 0.20, 0.10] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: 12, left: 44, fontSize: 22, fontWeight: 900, color: '#6c5ce7', lineHeight: 1 }}
    >
      ∞
    </motion.span>
  </div>
);

// ─── Section label ────────────────────────────────────────────────────────────
const SectionLabel = ({ text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay }}
    style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2 }}
  >
    <div style={{ height: 1, width: 30, background: 'linear-gradient(90deg, #ff3366, transparent)' }} />
    <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#ff3366', opacity: 0.85 }}>
      {text}
    </span>
  </motion.div>
);

// ─── Main ────────────────────────────────────────────────────────────────────
const Slide1 = () => (
  <section style={{
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#080818',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 36px',
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
    fontFamily: 'system-ui, sans-serif',
  }}>

    {/* Faint scanline texture */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(108,92,231,0.015) 0px, rgba(108,92,231,0.015) 1px, transparent 1px, transparent 52px)',
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
      position: 'absolute', top: '50%', left: '22%', transform: 'translateY(-50%)',
      width: 280, height: 280, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,51,102,0.05) 0%, transparent 70%)',
      filter: 'blur(30px)', pointerEvents: 'none',
    }} />

    {/* Cyan right lobe */}
    <div style={{
      position: 'absolute', top: '50%', right: '18%', transform: 'translateY(-50%)',
      width: 280, height: 280, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,210,255,0.05) 0%, transparent 70%)',
      filter: 'blur(30px)', pointerEvents: 'none',
    }} />

    {/* Corner ornament */}
    <CornerOrnament />

    {/* Faint bottom-right ∞ */}
    <motion.div
      animate={{ opacity: [0.02, 0.055, 0.02], scale: [1, 1.03, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute', bottom: 20, right: 36,
        fontSize: 180, lineHeight: 1, fontWeight: 900,
        color: '#ff3366', pointerEvents: 'none', userSelect: 'none',
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

      {/* LEFT — videos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <SectionLabel text="Campaign Reels" delay={0} />
        {VIDEOS.map((v, i) => <VideoCard key={i} video={v} index={i} />)}
      </div>

      {/* RIGHT — images + stats */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <SectionLabel text="Sample Shoots" delay={0.1} />

        {/* 2×2 mosaic: top row 2 tiles, bottom row full-width */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '185px 185px',
          gap: 10,
        }}>
          <div style={{ gridColumn: '1', gridRow: '1' }}><ImageTile img={IMAGES[0]} index={0} /></div>
          <div style={{ gridColumn: '2', gridRow: '1' }}><ImageTile img={IMAGES[1]} index={1} /></div>
          <div style={{ gridColumn: '1 / span 2', gridRow: '2' }}><ImageTile img={IMAGES[2]} index={2} /></div>
        </div>

        {/* Tricolor divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 1,
            background: 'linear-gradient(90deg, #ff3366 0%, #6c5ce7 50%, #00d2ff 100%)',
            opacity: 0.35,
            transformOrigin: 'left',
          }}
        />

        {/* Stats */}
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
            color: 'rgba(255,255,255,0.18)', letterSpacing: '0.14em', textAlign: 'right',
          }}
        >
          Sample Campaign Strategy &amp; Shoots
        </motion.p>
      </div>
    </div>
  </section>
);

export default Slide1;