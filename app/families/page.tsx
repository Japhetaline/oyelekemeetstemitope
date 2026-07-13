'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem, EASE } from '@/components/motion/Reveal'

export default function Families() {
  const families = [
    {
      side: "Bride's Family",
      name: "The Olatunji Family",
      origin: "Abeokuta, Nigeria",
      members: [
        { role: "Father of the Bride", name: "CSP Shamwill Olatunji" },
        { role: "Mother of the Bride", name: "Mrs. Fausat Keshinro" },
        { role: "The Bride", name: "Temitope Olatunji" },
      ],
      note: "The Olatunji family is proudly Yoruba, with warm roots in Abeokuta and a heritage rich in Yoruba tradition, faith and hospitality.",
    },
    {
      side: "Groom's Family",
      name: "The Oyejobi Family",
      origin: "Ibadan, Oyo State",
      members: [
        { role: "Father of the Groom", name: "Rev. Oyetunji Oyejobi" },
        { role: "Mother of the Groom", name: "Mrs. Oluyomi Oyejobi" },
        { role: "The Groom", name: "Oyeleke Oyejobi" },
      ],
      note: "The Oyejobi family is a devout Yoruba family from Ibadan and Ogun State Nigeria, whose warmth and love reach across Nigeria, the UK and the diaspora.",
    },
  ]

  const reduce = useReducedMotion()

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: "linear-gradient(rgba(30,54,38,0.72), rgba(30,54,38,0.84)), url('/assests/laykay04.jpeg') center/cover", padding: '100px 32px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Meet the Families ✦</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
            Two families, one love
          </h1>
        </Reveal>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: '1000px', margin: '0 auto' }}>
        <Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2px' }}>
          {families.map((fam, i) => (
            <StaggerItem key={i}>
            <motion.div whileHover={reduce ? undefined : { y: -5 }} transition={{ duration: 0.4, ease: EASE }} style={{ background: i === 0 ? 'var(--cream-dark)' : 'var(--charcoal)', padding: '56px 48px', height: '100%' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
                {fam.side}
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontStyle: 'italic', color: i === 0 ? 'var(--charcoal)' : 'var(--cream)', marginBottom: '8px' }}>
                {fam.name}
              </h2>
              <div style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '28px' }}>
                {fam.origin}
              </div>
              <div style={{ marginBottom: '28px' }}>
                {fam.members.map((m, j) => (
                  <div key={j} style={{ padding: '14px 0', borderBottom: `0.5px solid ${i === 0 ? 'rgba(222,154,110,0.2)' : 'rgba(222,154,110,0.15)'}`, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{m.role}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: i === 0 ? 'var(--charcoal)' : 'var(--cream)' }}>{m.name}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: i === 0 ? 'var(--stone)' : 'var(--stone-light)' }}>{fam.note}</p>
            </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Message */}
      <Reveal as="section" style={{ background: 'var(--gold)', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 5vw, 52px)', color: 'var(--charcoal)', fontStyle: 'italic', marginBottom: '20px' }}>
          "Family is everything"
        </h2>
        <p style={{ fontSize: '15px', color: 'rgba(52,84,60,0.75)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
          We are deeply grateful for the love and support of both our families — near and far — as we begin this new chapter together.
        </p>
      </Reveal>
    </div>
  )
}
