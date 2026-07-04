'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const links = [
  { href: '/', label: 'Home' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/events', label: 'Events' },
  { href: '/families', label: 'Families' },
  { href: '/dresscode', label: 'Dress Code' },
  { href: '/travel', label: 'Travel' },
  { href: '/gifts', label: 'Gifts' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/rsvp', label: 'RSVP' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={reduce ? false : { y: -64, opacity: 0 }}
        animate={reduce ? {} : { y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(246,237,227,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid rgba(185,142,76,0.3)' : 'none',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        <Link href="/" className="nav-logo" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: scrolled ? 'var(--charcoal)' : 'white', textDecoration: 'none', letterSpacing: '0.05em', whiteSpace: 'nowrap', transition: 'color 0.4s ease' }}>
          O & T
        </Link>

        {/* Desktop links */}
        <div style={{ gap: '28px', alignItems: 'center' }} className="nav-desktop-links">
          {links.slice(0, 8).map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--stone)')}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/rsvp" style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '8px 20px', border: '0.5px solid var(--gold)', color: 'var(--gold)', textDecoration: 'none', transition: 'all 0.2s' }}
          className="nav-rsvp"
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}>
          RSVP
        </Link>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: (scrolled || open) ? 'var(--charcoal)' : 'white', transition: 'color 0.4s ease' }} className="nav-hamburger">
          <div style={{ width: '22px', height: '1px', background: 'currentColor', marginBottom: '6px', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: '22px', height: '1px', background: 'currentColor', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
          <div style={{ width: '22px', height: '1px', background: 'currentColor', marginTop: '6px', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{ position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0, background: 'var(--cream)', zIndex: 99, padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={reduce ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.05 }}
              >
                <Link href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: 'var(--charcoal)', textDecoration: 'none' }}>
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
