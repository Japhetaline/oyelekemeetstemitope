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
      <section style={{ background: "linear-gradient(rgba(30,54,38,0.72), rgba(30,54,38,0.84)), url('/assests/laykay07.jpeg') center/cover", padding: '100px 32px', textAlign: 'center' }}>
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

      {/* Bank details — the main way to give, made prominent */}
      <section style={{ background: 'var(--charcoal)', padding: '72px 32px' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>How to give</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--cream)', fontStyle: 'italic' }}>Send a gift</h2>
          </Reveal>

          <Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px' }}>
            {[
              {
                label: 'International (UK) Account',
                rows: [['Account name', 'Oyeleke Oyejobi'], ['Sort code', '04-29-09'], ['Account number', '82024634']],
              },
              {
                label: 'Nigerian Bank Account',
                rows: [['Account number', '0151096805'], ['Bank', 'GTBank Plc']],
              },
            ].map((acct, i) => (
              <StaggerItem key={i}>
                <div style={{ background: 'var(--cream)', padding: '32px 28px', borderTop: '3px solid var(--gold)', height: '100%' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: 500, marginBottom: '20px' }}>{acct.label}</div>
                  {acct.rows.map(([k, v], j) => (
                    <div key={j} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px',
                      padding: '12px 0',
                      borderBottom: j === acct.rows.length - 1 ? 'none' : '0.5px solid rgba(222,154,110,0.25)',
                    }}>
                      <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)' }}>{k}</span>
                      <span style={{ fontSize: '17px', fontWeight: 500, color: 'var(--charcoal)', letterSpacing: '0.02em' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <p style={{ textAlign: 'center', marginTop: '28px', fontSize: '14px', color: 'var(--stone-light)', lineHeight: 1.8 }}>
            Please use <span style={{ color: 'var(--gold-light)', fontWeight: 500 }}>&ldquo;Wedding gift&rdquo;</span> as the payment description.
          </p>
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
