'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { EASE } from '@/components/motion/Reveal'

/* All gallery images from public/assests (encodeURI handles the space in "wedding IV"). */
const IMAGES = [
  '/assests/laykay01.jpeg',
  '/assests/laykay02.jpeg',
  '/assests/laykay03.jpeg',
  '/assests/laykay04.jpeg',
  '/assests/laykay05.jpeg',
  '/assests/laykay06.jpeg',
  '/assests/laykay07.jpeg',
  '/assests/laykay08.jpeg',
].map(encodeURI)

export default function Slideshow() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  const go = useCallback(
    (dir: number) => setIndex(i => (i + dir + IMAGES.length) % IMAGES.length),
    []
  )

  /* Auto-advance every 4.5s, paused when the user prefers reduced motion. */
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), 4500)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '3 / 2',
          overflow: 'hidden',
          background: 'var(--charcoal)',
          border: '0.5px solid rgba(185,142,76,0.3)',
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={index}
            src={IMAGES[index]}
            alt={`Oyeleke & Temitope — photo ${index + 1}`}
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '150%',
              objectFit: 'cover',
            }}
          />
        </AnimatePresence>

        {/* Prev / Next controls */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous photo"
          style={arrowStyle('left')}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(45,8,15,0.85)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(45,8,15,0.55)')}
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next photo"
          style={arrowStyle('right')}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(45,8,15,0.85)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(45,8,15,0.55)')}
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px' }}>
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            style={{
              width: i === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: i === index ? 'var(--gold)' : 'rgba(185,142,76,0.35)',
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function arrowStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '16px',
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: '0.5px solid rgba(224,196,137,0.5)',
    background: 'rgba(45,8,15,0.55)',
    color: 'var(--cream)',
    fontSize: '24px',
    lineHeight: 1,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
  }
}
