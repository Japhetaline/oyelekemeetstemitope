'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/events', label: 'Events' },
  { href: '/engagement', label: 'Engagement' },
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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(250,247,242,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid rgba(208,138,102,0.3)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        <Link href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 400, color: 'var(--charcoal)', textDecoration: 'none', letterSpacing: '0.05em' }}>
          O & T
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="hidden md:flex">
          {links.slice(0, 7).map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--stone)')}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/rsvp" style={{ display: 'none', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '8px 20px', border: '0.5px solid var(--gold)', color: 'var(--gold)', textDecoration: 'none', transition: 'all 0.2s' }}
          className="hidden md:block"
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}>
          RSVP
        </Link>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--charcoal)' }} className="md:hidden">
          <div style={{ width: '22px', height: '1px', background: 'currentColor', marginBottom: '6px', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: '22px', height: '1px', background: 'currentColor', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
          <div style={{ width: '22px', height: '1px', background: 'currentColor', marginTop: '6px', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0, background: 'var(--cream)', zIndex: 99, padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: 'var(--charcoal)', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
