'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import CountdownTimer from '@/components/CountdownTimer'
import Slideshow from '@/components/Slideshow'
import { Reveal, EASE } from '@/components/motion/Reveal'

export default function HomePage() {
  const reduce = useReducedMotion()

  /* Graceful, staggered hero entrance on page load. */
  const heroContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
  }
  const heroItem = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
      }

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        background: 'var(--charcoal)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background video — autoplays on load, muted & looping (mobile-safe via playsInline) */}
        <video
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="auto"
          poster="/assests/laykay01.jpeg"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <source src="/assests/laykayVid.mp4" type="video/mp4" />
        </video>

        {/* Deep-green colour overlay — lifts the text off the footage */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(180deg, rgba(30,54,38,0.78) 0%, rgba(52,84,60,0.66) 45%, rgba(30,54,38,0.86) 100%)',
          }}
        />
        {/* Soft vignette for an editorial, cinematic finish */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'radial-gradient(ellipse at center, transparent 38%, rgba(16,34,22,0.55) 100%)',
          }}
        />

        {/* Decorative circles — slow, soft scale-in */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={reduce ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          style={{ position: 'absolute', zIndex: 2, width: '600px', height: '600px', border: '0.5px solid rgba(243,198,163,0.25)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        />
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={reduce ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.15, ease: EASE }}
          style={{ position: 'absolute', zIndex: 2, width: '800px', height: '800px', border: '0.5px solid rgba(243,198,163,0.14)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        />

        <motion.div variants={heroContainer} initial="hidden" animate="show" style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div variants={heroItem} style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '32px' }}>
            We are getting married
          </motion.div>

          <motion.h1 variants={heroItem} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(52px, 10vw, 100px)',
            fontWeight: 300,
            color: 'var(--cream)',
            lineHeight: 1,
            marginBottom: '24px',
            fontStyle: 'italic',
            textShadow: '0 2px 24px rgba(16,34,22,0.45)',
          }}>
            Oyeleke<br />
            <span style={{ color: 'var(--gold)', fontSize: '0.5em', fontStyle: 'normal', letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', margin: '16px 0' }}>&amp;</span>
            Temitope
          </motion.h1>

          <motion.div variants={heroItem} style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: '64px' }}>
            10 October 2026 · Ogun State, Nigeria
          </motion.div>

          <motion.div variants={heroItem} style={{ marginBottom: '64px' }}>
            <CountdownTimer />
          </motion.div>

          <motion.div variants={heroItem} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.div whileHover={reduce ? undefined : { y: -3 }} transition={{ duration: 0.3, ease: EASE }}>
              <Link href="/rsvp" style={{
                padding: '14px 36px', background: 'var(--gold)', color: 'var(--charcoal)',
                textDecoration: 'none', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                fontWeight: 500, transition: 'opacity 0.2s', display: 'inline-block',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                RSVP Now
              </Link>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { y: -3 }} transition={{ duration: 0.3, ease: EASE }}>
              <Link href="/our-story" style={{
                padding: '14px 36px', border: '0.5px solid rgba(222,154,110,0.5)', color: 'var(--gold-light)',
                textDecoration: 'none', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                transition: 'border-color 0.2s', display: 'inline-block',
              }}>
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT STRIP */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 32px', textAlign: 'center' }}>
        <Reveal style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
            ✦ Our Celebration ✦
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--charcoal)', marginBottom: '24px', fontStyle: 'italic' }}>
            Two beautiful moments, one love story
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--stone)', marginBottom: '40px' }}>
            Though we live abroad, our hearts are deeply rooted in Nigerian tradition.
            Join us from anywhere in the world as we celebrate our love across two unforgettable events.
          </p>
          <div style={{ width: '40px', height: '0.5px', background: 'var(--gold)', margin: '0 auto' }} />
        </Reveal>
      </section>

      {/* THE WEDDING */}
      <section style={{ padding: '80px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal>
          <motion.div whileHover={reduce ? undefined : { y: -6 }} transition={{ duration: 0.4, ease: EASE }}>
            <Link href="/events" style={{ textDecoration: 'none', display: 'block', padding: '56px 48px', background: 'var(--charcoal)', border: '0.5px solid transparent' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', marginBottom: '20px' }}>01</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: 'var(--cream)', marginBottom: '8px', fontStyle: 'italic' }}>Wedding</h3>
              <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>10 October 2026</div>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--stone-light)' }}>The main event — a beautiful fusion of culture, faith and love in Ogun State, Nigeria.</p>
            </Link>
          </motion.div>
        </Reveal>
      </section>

      {/* SLIDESHOW GALLERY */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 32px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
            ✦ Our Gallery ✦
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--charcoal)', fontStyle: 'italic' }}>
            Moments we treasure
          </h2>
        </Reveal>
        <Reveal>
          <Slideshow />
        </Reveal>
      </section>

      {/* MAP & DIRECTIONS */}
      <section style={{ padding: '80px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
            ✦ Find Your Way ✦
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--charcoal)', fontStyle: 'italic', marginBottom: '12px' }}>
            DLK Event Centre
          </h2>
          <p style={{ fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)' }}>
            M.K.O Abiola Way · Abeokuta, Ogun State
          </p>
        </Reveal>
        <Reveal>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', border: '0.5px solid rgba(222,154,110,0.3)' }}>
            <iframe
              title="Map to DLK Event Centre, M.K.O Abiola Way, Abeokuta"
              src="https://maps.google.com/maps?q=DLK%20Event%20Centre%20M.K.O%20Abiola%20Way%20Abeokuta%20Ogun%20State&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </Reveal>
        <Reveal style={{ textAlign: 'center', marginTop: '32px' }}>
          <motion.div whileHover={reduce ? undefined : { y: -3 }} transition={{ duration: 0.3, ease: EASE }} style={{ display: 'inline-block' }}>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=DLK+Event+Centre+M.K.O+Abiola+Way+Abeokuta+Ogun+State"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '14px 36px', background: 'var(--gold)', color: 'var(--charcoal)',
                textDecoration: 'none', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                fontWeight: 500, display: 'inline-block',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get Directions
            </a>
          </motion.div>
        </Reveal>
      </section>

      {/* CTA STRIP */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 32px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
            ✦ You are invited ✦
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 6vw, 64px)', color: 'var(--cream)', marginBottom: '32px', fontStyle: 'italic' }}>
            Will you join us?
          </h2>
          <motion.div whileHover={reduce ? undefined : { y: -3 }} transition={{ duration: 0.3, ease: EASE }} style={{ display: 'inline-block' }}>
            <Link href="/rsvp" style={{
              padding: '16px 48px', background: 'transparent', border: '0.5px solid var(--gold)',
              color: 'var(--gold)', textDecoration: 'none', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase', display: 'inline-block',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--charcoal)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}>
              Confirm Attendance
            </Link>
          </motion.div>
        </Reveal>
      </section>
    </div>
  )
}
