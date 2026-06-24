'use client'
export default function Events() {
  const events = [
    {
      num: '01',
      title: 'Traditional Engagement',
      date: 'October 2026',
      time: '12:00 PM WAT · 11:00 AM BST · 7:00 AM EST',
      location: 'Lagos, Nigeria + Zoom',
      type: 'Hybrid (In Person + Virtual)',
      color: 'var(--charcoal)',
      textColor: 'var(--cream)',
      dark: true,
      desc: 'Our traditional Nigerian engagement — a deeply meaningful ceremony where the groom&apos;s family formally presents gifts and asks for the bride&apos;s hand. Diaspora family and friends join via Zoom.',
      details: ['Traditional items presentation', 'Igbo and Yoruba blessings', 'Zoom link sent to RSVPs', 'Dresscode: Full traditional attire'],
    },
    {
      num: '02',
      title: 'Wedding Day',
      date: '10 October 2026',
      time: '12:00 PM WAT',
      location: 'The Wheatbaker Hotel, Lagos',
      type: 'In Person + Livestream',
      color: 'var(--gold)',
      textColor: 'var(--charcoal)',
      dark: false,
      desc: 'The main event. A beautiful ceremony followed by a reception filled with music, dancing, Nigerian cuisine, and love. We cannot wait to celebrate with you.',
      details: ['Church ceremony 12:00 PM', 'Reception from 3:00 PM', 'After-party from 9:00 PM', 'Aso-ebi in wine, white & peach'],
    },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: 'var(--charcoal)', padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Events ✦</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
          Two celebrations
        </h1>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
        {events.map((ev, i) => (
          <div key={i} style={{
            background: ev.color, padding: '56px 48px',
            marginBottom: '2px', position: 'relative',
          }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: ev.color === 'var(--gold)' ? 'rgba(92,34,51,0.6)' : 'var(--gold)', marginBottom: '16px' }}>{ev.num}</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 42px)', color: ev.textColor, fontStyle: 'italic', marginBottom: '12px' }}>
              {ev.title}
            </h2>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {[ev.date, ev.location, ev.type].map((tag, j) => (
                <span key={j} style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 12px', border: `0.5px solid ${ev.dark ? 'rgba(208,138,102,0.4)' : 'rgba(92,34,51,0.25)'}`, color: ev.dark ? 'var(--gold)' : 'var(--stone)' }}>
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
          </div>
        ))}
      </section>
    </div>
  )
}
