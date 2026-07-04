'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem, EASE } from '@/components/motion/Reveal'

export default function Gifts() {
  const wishlist = [
    { item: 'Kitchen Aid Stand Mixer', desc: 'For Temitope\'s love of baking' },
    { item: 'Honeymoon Experience', desc: 'Contribute to our dream honeymoon' },
    { item: 'Home Starter Fund', desc: 'Help us build our first home together' },
    { item: 'Luxury Bedding Set', desc: 'For a beautiful bedroom' },
    { item: 'Fine Dining Experience', desc: 'A romantic dinner for us' },
    { item: 'Garden/Outdoor Set', desc: 'For our dream outdoor space' },
  ]

  const reduce = useReducedMotion()

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: "linear-gradient(rgba(76,14,26,0.72), rgba(76,14,26,0.84)), url('/assests/laykay07.jpeg') center/cover", padding: '100px 32px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Gifts ✦</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
            Gift registry
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--stone-light)', marginTop: '20px', maxWidth: '500px', margin: '20px auto 0', lineHeight: 1.8 }}>
            Your presence is our greatest gift. If you wish to celebrate with a gift, we have a few ideas below.
          </p>
        </Reveal>
      </section>

      {/* Payment methods */}
      <section style={{ background: 'var(--gold)', padding: '48px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(110,21,38,0.6)', marginBottom: '16px', textAlign: 'center' }}>How to give</div>
          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(110,21,38,0.08)', padding: '28px 24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '12px', letterSpacing: '0.05em' }}>Bank Transfer (International)</div>
              {['For diaspora guests', 'Account Name: Oyeleke Oyejobi', 'Details sent on request via RSVP'].map((d, j) => (
                <div key={j} style={{ fontSize: '13px', color: 'rgba(110,21,38,0.75)', marginBottom: '4px' }}>{d}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist */}
      <section style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Our Wishlist</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontStyle: 'italic' }}>A few ideas</h2>
        </Reveal>
        <Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2px' }}>
          {wishlist.map((w, i) => (
            <StaggerItem key={i}>
            <motion.div whileHover={reduce ? undefined : { y: -5 }} transition={{ duration: 0.4, ease: EASE }} style={{ padding: '32px', background: 'var(--cream-dark)', borderTop: '2px solid var(--gold)', height: '100%' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: 'var(--charcoal)', marginBottom: '8px' }}>{w.item}</h3>
              <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.6 }}>{w.desc}</p>
            </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  )
}
