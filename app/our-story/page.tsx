'use client'
export default function OurStory() {
  const timeline = [
    { year: '2019', title: 'First Meeting', desc: 'Two Nigerians abroad, introduced through mutual friends at a cultural event in London. Neither of us planned to stay long — but destiny had other ideas.' },
    { year: '2020', title: 'Friendship Deepens', desc: 'Through lockdowns and long calls, we discovered our shared love for Afrobeats, jollof debates, and dreaming about home.' },
    { year: '2022', title: 'Something More', desc: 'A trip to Lagos together. Walking through familiar streets with new eyes. That is when we both knew this was something rare.' },
    { year: '2024', title: 'The Proposal', desc: 'On a quiet evening, with the Atlantic in view, Oyeleke got down on one knee. Temitope said yes before he finished the sentence.' },
    { year: '2026', title: 'Forever', desc: 'May our families meet, our traditions be honoured, and our love be celebrated — in Nigeria and beyond.' },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <section style={{ background: 'var(--charcoal)', padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
          ✦ Our Story ✦
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
          How it all began
        </h1>
      </section>

      {/* Intro */}
      <section style={{ padding: '80px 32px', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.7, color: 'var(--charcoal)', fontStyle: 'italic', marginBottom: '32px' }}>
          "Two souls shaped by Nigeria, finding each other far from home — 
          and carrying home with them wherever they go."
        </p>
        <div style={{ width: '40px', height: '0.5px', background: 'var(--gold)', margin: '0 auto' }} />
      </section>

      {/* Timeline */}
      <section style={{ padding: '40px 32px 100px', maxWidth: '800px', margin: '0 auto' }}>
        {timeline.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '32px', marginBottom: '60px', alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, textAlign: 'right', width: '60px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: 'var(--gold)', fontStyle: 'italic' }}>{item.year}</div>
              <div style={{ width: '0.5px', height: '60px', background: 'var(--gold)', opacity: 0.3, margin: '8px auto 0', marginLeft: 'auto' }} />
            </div>
            <div style={{ paddingTop: '4px' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: 'var(--charcoal)', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--stone)' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Portraits placeholder */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {['Oyeleke', 'Temitope'].map(name => (
              <div key={name} style={{ background: 'var(--cream-dark)', border: '0.5px solid rgba(208,138,102,0.3)', padding: '48px 32px', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(208,138,102,0.15)', border: '0.5px solid var(--gold)', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontFamily: "'Cormorant Garamond', serif", color: 'var(--gold)' }}>
                  {name[0]}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontStyle: 'italic', color: 'var(--charcoal)', marginBottom: '12px' }}>{name}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'var(--stone)' }}>
                  {name === 'Temitope'
                    ? 'A Lagos girl with a London life. Loves suya, Fela Kuti, and long conversations that go into the early hours.'
                    : 'Enugu-born, world-travelled. Passionate about family, good food, and making Temitope laugh every single day.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
