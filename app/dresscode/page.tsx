'use client'
export default function DressCode() {
  const events = [
    {
      event: 'Traditional Engagement',
      code: 'Full Traditional Attire',
      palette: 'Rich colours — wine, peach, emerald & gold',
      details: ['Igbo or Yoruba traditional wear encouraged', 'George wrapper for women', 'Agbada, senator or native for men', 'Aso-ebi fabric available — see details below'],
      colors: ['#6B2737', '#F4C2A1', '#1A5C38', '#D08A66'],
    },
    {
      event: 'Wedding Day',
      code: 'Black Tie + Aso-ebi',
      palette: 'Our colours — wine, white & peach',
      details: ['Aso-ebi: wine George + peach lace', 'If not wearing aso-ebi: black tie or traditional', 'Ladies: full length gown in wine, white or peach', 'Gentlemen: suit and tie or agbada'],
      colors: ['#6B2737', '#FFFFFF', '#F4C2A1', '#D08A66'],
    },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: 'var(--charcoal)', padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Dress Code ✦</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
          Come dressed in beauty
        </h1>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
        {events.map((ev, i) => (
          <div key={i} style={{ marginBottom: '60px', padding: '48px', background: 'var(--cream-dark)', borderLeft: '2px solid var(--gold)' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>{ev.event}</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontStyle: 'italic', color: 'var(--charcoal)', marginBottom: '8px' }}>{ev.code}</h2>
            <p style={{ fontSize: '13px', color: 'var(--stone)', marginBottom: '24px' }}>{ev.palette}</p>
            
            {/* Colour swatches */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              {ev.colors.map((c, j) => (
                <div key={j} style={{ width: '36px', height: '36px', background: c, borderRadius: '50%', border: '2px solid white', boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }} />
              ))}
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {ev.details.map((d, j) => (
                <li key={j} style={{ fontSize: '14px', color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '8px' }}>✦</span>{d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Aso-ebi section */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>Aso-ebi Details</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 5vw, 48px)', color: 'var(--cream)', fontStyle: 'italic', marginBottom: '24px' }}>
          Wine George + Peach Lace
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--stone-light)', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.8 }}>
          Aso-ebi fabric packs are available for order. Each pack includes a wine George wrapper and peach French lace. Orders close 8 weeks before the wedding.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          {[['Fabric pack price', '₦35,000 / £50'], ['Order deadline', '15 August 2026'], ['Collection', 'Lagos or posted abroad'], ['Contact', 'aso-ebi@oyelekeandtemitope.com']].map(([label, val], i) => (
            <div key={i} style={{ padding: '20px', border: '0.5px solid rgba(208,138,102,0.3)' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>{label}</div>
              <div style={{ fontSize: '14px', color: 'var(--cream)' }}>{val}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
