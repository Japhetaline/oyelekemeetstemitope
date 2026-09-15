'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem, EASE } from '@/components/motion/Reveal'

export default function Travel() {
  const hotels = [
    { name: 'Park Inn by Radisson', area: 'Kuto, Abeokuta', stars: '★★★★', note: 'Closest full-service hotel to the venue — ask for the Oyeleke & Temitope wedding rate' },
    { name: 'BON Hotel Grand Towers', area: 'Abeokuta', stars: '★★★★', note: 'Modern rooms with good facilities, a short drive from DLK Event Centre' },
    { name: 'Green Legacy Resort', area: 'Presidential Library, Abeokuta', stars: '★★★★', note: 'Scenic grounds and great value for diaspora guests' },
    { name: 'Gateway Hotel', area: 'Ibara, Abeokuta', stars: '★★★', note: 'Well-established and central. Good option for a comfortable, affordable stay' },
  ]

  const reduce = useReducedMotion()

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: "linear-gradient(rgba(30,54,38,0.72), rgba(30,54,38,0.84)), url('/assests/laykay06.jpeg') center/cover", padding: '100px 32px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Travel & Stay ✦</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
            Getting there
          </h1>
          <p style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone-light)', marginTop: '20px' }}>
            Abeokuta, Nigeria &nbsp;·&nbsp; Sheffield, United Kingdom
          </p>
        </Reveal>
      </section>

      {/* NIGERIA — airport info */}
      <section style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Destination One</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 5vw, 48px)', fontStyle: 'italic', color: 'var(--charcoal)' }}>
            Abeokuta, Nigeria
          </h2>
        </Reveal>

        <Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', marginBottom: '64px' }}>
          {[
            { icon: '✈', title: 'Main Airport', desc: 'Murtala Muhammed International Airport (LOS), Lagos', sub: 'Fly into Lagos, then travel on to Abeokuta' },
            { icon: '🚗', title: 'Airport Transfer', desc: '1.5–2.5 hrs from Lagos airport to Abeokuta', sub: 'Book a reliable driver in advance — we can recommend trusted ones' },
            { icon: '📍', title: 'Venue', desc: 'DLK Event Centre, M.K.O Abiola Way, Abeokuta, Ogun State', sub: 'The Nikah and reception are both held here' },
          ].map((item, i) => (
            <StaggerItem key={i}>
            <motion.div whileHover={reduce ? undefined : { y: -5 }} transition={{ duration: 0.4, ease: EASE }} style={{ padding: '40px 32px', background: 'var(--cream-dark)', textAlign: 'center', height: '100%' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontStyle: 'italic', color: 'var(--charcoal)', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--charcoal)', marginBottom: '8px', fontWeight: 500 }}>{item.desc}</p>
              <p style={{ fontSize: '12px', color: 'var(--stone)', lineHeight: 1.6 }}>{item.sub}</p>
            </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Hotels */}
        <Reveal style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Where to Stay</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontStyle: 'italic', color: 'var(--charcoal)', marginBottom: '8px' }}>Recommended hotels</h2>
          <p style={{ fontSize: '13px', color: 'var(--stone)' }}>Book early — rooms near the venue fill up quickly</p>
        </Reveal>

        <Stagger>
        {hotels.map((h, i) => (
          <StaggerItem key={i} style={{ padding: '28px 32px', background: i % 2 === 0 ? 'var(--cream-dark)' : 'var(--cream)', borderBottom: '0.5px solid rgba(222,154,110,0.2)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '4px' }}>{h.stars} · {h.area}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: 'var(--charcoal)', marginBottom: '6px' }}>{h.name}</h3>
              <p style={{ fontSize: '13px', color: 'var(--stone)' }}>{h.note}</p>
            </div>
          </StaggerItem>
        ))}
        </Stagger>
      </section>

      {/* UNITED KINGDOM */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Destination Two</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 5vw, 48px)', fontStyle: 'italic', color: 'var(--charcoal)', marginBottom: '12px' }}>
              Sheffield, United Kingdom
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--stone)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto' }}>
              Our UK celebration is held at Wadsley Church Hall in north-west Sheffield,
              on 10 October 2026 at 1:00 PM prompt.
            </p>
          </Reveal>

          <Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px' }}>
            {[
              { icon: '✈', title: 'Nearest Airport', desc: 'Manchester Airport (MAN)', sub: 'Direct trains run from the airport through to Sheffield Station' },
              { icon: '🚆', title: 'By Rail', desc: 'Sheffield Station', sub: 'Buses and taxis run from the station out to Wadsley' },
              { icon: '📍', title: 'Venue', desc: 'Wadsley Church Hall, Worrall Road, Sheffield, S6 4BB', sub: 'Driving? Set your sat nav or maps app to the postcode S6 4BB' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={reduce ? undefined : { y: -5 }} transition={{ duration: 0.4, ease: EASE }} style={{ padding: '40px 32px', background: 'var(--cream)', textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontStyle: 'italic', color: 'var(--charcoal)', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--charcoal)', marginBottom: '8px', fontWeight: 500 }}>{item.desc}</p>
                  <p style={{ fontSize: '12px', color: 'var(--stone)', lineHeight: 1.6 }}>{item.sub}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal style={{ textAlign: 'center', marginTop: '40px' }}>
            <motion.div whileHover={reduce ? undefined : { y: -3 }} transition={{ duration: 0.3, ease: EASE }} style={{ display: 'inline-block' }}>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Wadsley Church Hall Worrall Road Sheffield S6 4BB')}`}
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
                Directions to Wadsley Church Hall
              </a>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Tips */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', textAlign: 'center' }}>Diaspora Tips</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontStyle: 'italic', color: 'var(--cream)', marginBottom: '32px', textAlign: 'center' }}>
              Travelling to Nigeria
            </h2>
          </Reveal>
          <Stagger>
          {[
            ['Visa', 'Nigerian citizens abroad may not need a visa. Non-Nigerians should apply at least 6 weeks before. Contact us for an invitation letter.'],
            ['Currency', 'Nigerian Naira (NGN). ATMs available widely. Bring some USD or GBP to exchange on arrival for the best rates.'],
            ['Weather', 'October is warm — 27–31°C. Expect some rain as the wet season eases. Abeokuta is humid, so dress breathably under your formal wear.'],
            ['Safety', 'Use trusted ride-hailing apps (Bolt, inDrive) or hotel-arranged cars. Avoid moving around late at night alone.'],
            ['Data / SIM', 'Get an MTN or Airtel SIM at the airport for affordable local data. WhatsApp works well across Nigeria.'],
          ].map(([title, tip], i) => (
            <StaggerItem key={i} style={{ padding: '20px 0', borderBottom: '0.5px solid rgba(222,154,110,0.15)', display: 'flex', gap: '20px' }}>
              <div style={{ color: 'var(--gold)', fontSize: '10px', marginTop: '4px', flexShrink: 0 }}>✦</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--cream)', marginBottom: '4px', letterSpacing: '0.05em' }}>{title}</div>
                <div style={{ fontSize: '13px', color: 'var(--stone-light)', lineHeight: 1.7 }}>{tip}</div>
              </div>
            </StaggerItem>
          ))}
          </Stagger>
        </div>
      </section>
    </div>
  )
}
