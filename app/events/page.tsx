'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem, EASE } from '@/components/motion/Reveal'

export default function Events() {
  const events = [
    {
      num: '01',
      title: 'Traditional Engagement',
      date: '10 October 2026',
      time: '1:00 PM – 3:30 PM WAT',
      location: 'Ogun, Nigeria + Zoom',
      type: 'Hybrid (In Person + Virtual)',
      color: 'var(--charcoal)',
      textColor: 'var(--cream)',
      dark: true,
      desc: 'Our traditional Nigerian engagement — a deeply meaningful ceremony where the groom&apos;s family formally presents gifts and asks for the bride&apos;s hand. Diaspora family and friends join via Zoom.',
      details: ['Traditional items presentation', 'Yoruba prayers and blessings', 'Zoom link sent to RSVPs', 'Dresscode: Full traditional attire'],
    },
    {
      num: '02',
      title: 'Wedding Nikah',
      date: '10 October 2026',
      time: '11:00 AM – 1:00 PM WAT',
      location: 'DLK Event Centre, Abeokuta',
      type: 'In Person + Livestream',
      color: 'var(--charcoal)',
      textColor: 'var(--cream)',
      dark: true,
      desc: 'The main event. Our Nikah — a sacred Islamic marriage ceremony — followed by the traditional wedding and a reception filled with prayer, music, dancing, Nigerian cuisine, and love. We cannot wait to celebrate with you.',
      details: ['Nikah ceremony 11:00 AM – 1:00 PM', 'Traditional wedding 1:00 PM – 3:30 PM', 'Reception immediately after the traditional', 'Aso-ebi in peach, white & green'],
    },
  ]

  const programme = [
    { time: '1:00 PM', item: 'Welcome & opening prayers' },
    { time: '1:20 PM', item: 'Introduction of both families' },
    { time: '1:40 PM', item: 'Presentation of traditional items' },
    { time: '2:00 PM', item: 'Bride price negotiation (symbolic)' },
    { time: '2:20 PM', item: 'Palm wine ceremony' },
    { time: '2:40 PM', item: 'Kola nut blessing by elders' },
    { time: '3:00 PM', item: 'Exchange of gifts and goodwill' },
    { time: '3:20 PM', item: 'Closing prayers & celebration' },
  ]

  const reduce = useReducedMotion()

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: "linear-gradient(rgba(30,54,38,0.72), rgba(30,54,38,0.84)), url('/assests/laykay03.jpeg') center/cover", padding: '100px 32px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Events ✦</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
            Two celebrations
          </h1>
        </Reveal>
      </section>

      <Stagger as="section" style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
        {events.map((ev, i) => (
          <StaggerItem key={i}>
          <motion.div whileHover={reduce ? undefined : { y: -4 }} transition={{ duration: 0.4, ease: EASE }} style={{
            background: ev.color, padding: '56px 48px',
            marginBottom: '2px', position: 'relative',
          }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: ev.color === 'var(--gold)' ? 'rgba(52,84,60,0.6)' : 'var(--gold)', marginBottom: '16px' }}>{ev.num}</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 42px)', color: ev.textColor, fontStyle: 'italic', marginBottom: '12px' }}>
              {ev.title}
            </h2>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {[ev.date, ev.location, ev.type].map((tag, j) => (
                <span key={j} style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 12px', border: `0.5px solid ${ev.dark ? 'rgba(222,154,110,0.4)' : 'rgba(52,84,60,0.25)'}`, color: ev.dark ? 'var(--gold)' : 'var(--stone)' }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: ev.dark ? 'var(--stone-light)' : 'var(--stone)', marginBottom: '20px' }}>
              {ev.time}
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: ev.dark ? 'var(--stone-light)' : 'var(--stone)', marginBottom: '28px', maxWidth: '560px' }}>
              {ev.desc}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {ev.details.map((d, j) => (
                <li key={j} style={{ fontSize: '13px', color: ev.dark ? 'var(--stone-light)' : 'var(--stone)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '8px' }}>✦</span>{d}
                </li>
              ))}
            </ul>
          </motion.div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* ORDER OF EVENTS — ceremony programme */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 32px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Order of Events ✦</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--charcoal)', fontStyle: 'italic' }}>
            Ceremony programme
          </h2>
        </Reveal>

        <Stagger style={{ maxWidth: '640px', margin: '0 auto' }}>
          {programme.map((p, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={reduce ? undefined : { x: 6 }}
                transition={{ duration: 0.35, ease: EASE }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '110px 1fr',
                  alignItems: 'baseline',
                  gap: '24px',
                  padding: '20px 8px',
                  borderBottom: i === programme.length - 1 ? 'none' : '0.5px solid rgba(52,84,60,0.15)',
                }}
              >
                <div style={{ fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: 500 }}>
                  {p.time}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: 'var(--charcoal)', fontStyle: 'italic' }}>
                  {p.item}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  )
}
