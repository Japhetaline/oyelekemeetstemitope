'use client'
export default function Travel() {
  const hotels = [
    { name: 'The Wheatbaker Hotel', area: 'Ikoyi (Venue hotel)', stars: '★★★★★', note: 'Wedding venue hotel — ask for the Oyeleke & Temitope wedding rate', price: 'From ₦85,000/night' },
    { name: 'Eko Hotels & Suites', area: 'Victoria Island', stars: '★★★★★', note: '10 mins from venue. Iconic Lagos hotel with full facilities', price: 'From ₦60,000/night' },
    { name: 'Radisson Blu', area: 'Lagos', stars: '★★★★', note: 'Great location, excellent value for diaspora guests', price: 'From ₦45,000/night' },
    { name: 'Protea Hotel by Marriott', area: 'Ikeja GRA', stars: '★★★★', note: 'Close to the airport. Good option if arriving late', price: 'From ₦38,000/night' },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: 'var(--charcoal)', padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Travel & Stay ✦</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
          Getting to Lagos
        </h1>
      </section>

      {/* Airport info */}
      <section style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', marginBottom: '64px' }}>
          {[
            { icon: '✈', title: 'Main Airport', desc: 'Murtala Muhammed International Airport (LOS)', sub: 'International arrivals — Terminal 2' },
            { icon: '🚗', title: 'Airport Transfer', desc: '45–90 mins to Ikoyi depending on traffic', sub: 'Book a reliable driver in advance — we can recommend trusted ones' },
            { icon: '📍', title: 'Venue', desc: 'The Wheatbaker Hotel, 4 Lawrence Road, Ikoyi, Lagos', sub: 'All three events are centred around Ikoyi & Victoria Island' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '40px 32px', background: 'var(--cream-dark)', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontStyle: 'italic', color: 'var(--charcoal)', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--charcoal)', marginBottom: '8px', fontWeight: 500 }}>{item.desc}</p>
              <p style={{ fontSize: '12px', color: 'var(--stone)', lineHeight: 1.6 }}>{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Hotels */}
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Where to Stay</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontStyle: 'italic', color: 'var(--charcoal)', marginBottom: '8px' }}>Recommended hotels</h2>
          <p style={{ fontSize: '13px', color: 'var(--stone)' }}>Book early — October is a busy season in Lagos</p>
        </div>

        {hotels.map((h, i) => (
          <div key={i} style={{ padding: '28px 32px', background: i % 2 === 0 ? 'var(--cream-dark)' : 'var(--cream)', borderBottom: '0.5px solid rgba(208,138,102,0.2)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '4px' }}>{h.stars} · {h.area}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: 'var(--charcoal)', marginBottom: '6px' }}>{h.name}</h3>
              <p style={{ fontSize: '13px', color: 'var(--stone)' }}>{h.note}</p>
            </div>
            <div style={{ fontSize: '14px', color: 'var(--gold)', fontWeight: 500, whiteSpace: 'nowrap' }}>{h.price}</div>
          </div>
        ))}
      </section>

      {/* Tips */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', textAlign: 'center' }}>Diaspora Tips</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontStyle: 'italic', color: 'var(--cream)', marginBottom: '32px', textAlign: 'center' }}>
            Helpful things to know
          </h2>
          {[
            ['Visa', 'Nigerian citizens abroad may not need a visa. Non-Nigerians should apply at least 6 weeks before. Contact us for an invitation letter.'],
            ['Currency', 'Nigerian Naira (NGN). ATMs available widely. Bring some USD or GBP to exchange on arrival for the best rates.'],
            ['Weather', 'October is warm — 27–31°C. Expect some rain as the wet season eases. Lagos is humid, so dress breathably under your formal wear.'],
            ['Safety', 'Use trusted ride-hailing apps (Bolt, inDrive) or hotel-arranged cars. Avoid moving around late at night alone.'],
            ['Data / SIM', 'Get an MTN or Airtel SIM at the airport for affordable local data. WhatsApp works well across Nigeria.'],
          ].map(([title, tip], i) => (
            <div key={i} style={{ padding: '20px 0', borderBottom: '0.5px solid rgba(208,138,102,0.15)', display: 'flex', gap: '20px' }}>
              <div style={{ color: 'var(--gold)', fontSize: '10px', marginTop: '4px', flexShrink: 0 }}>✦</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--cream)', marginBottom: '4px', letterSpacing: '0.05em' }}>{title}</div>
                <div style={{ fontSize: '13px', color: 'var(--stone-light)', lineHeight: 1.7 }}>{tip}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
