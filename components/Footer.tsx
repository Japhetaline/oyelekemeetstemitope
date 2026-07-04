'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem, EASE } from '@/components/motion/Reveal'

const LINKS: [string, string][] = [
  ['Our Story', '/our-story'],
  ['Events', '/events'],
  ['Families', '/families'],
  ['Dress Code', '/dresscode'],
  ['Travel', '/travel'],
  ['Gifts', '/gifts'],
  ['Gallery', '/gallery'],
  ['RSVP', '/rsvp'],
]

export default function Footer() {
  const reduce = useReducedMotion()

  return (
    <footer style={{ background: 'var(--charcoal)', color: 'var(--cream)', padding: '64px 32px 40px', textAlign: 'center' }}>
      <Reveal>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--gold-light)', marginBottom: '8px', fontStyle: 'italic' }}
        >
          Oyeleke &amp; Temitope
        </motion.div>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: '40px' }}>
          10 October 2026 · Lagos, Nigeria
        </div>
      </Reveal>

      <Stagger style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {LINKS.map(([label, href]) => (
          <StaggerItem key={href}>
            <motion.div whileHover={reduce ? undefined : { y: -3 }} transition={{ duration: 0.25, ease: EASE }}>
              <Link
                href={href}
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--stone-light)',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--stone-light)')}
              >
                {label}
              </Link>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal margin="0px">
        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? {} : { scaleX: 1 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ width: '40px', height: '0.5px', background: 'var(--gold)', opacity: 0.6, margin: '0 auto 24px' }}
        />
        <p style={{ fontSize: '12px', color: 'var(--gold-light)', opacity: 0.85 }}>
          Made By Netblend Digital · {new Date().getFullYear()}
        </p>
      </Reveal>
    </footer>
  )
}
