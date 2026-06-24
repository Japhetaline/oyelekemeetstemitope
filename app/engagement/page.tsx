'use client'
import Link from 'next/link'

export default function Engagement() {
  const items = [
    { name: 'Palm wine', meaning: 'Symbolises joy and togetherness. The bride serves her groom from the calabash.' },
    { name: 'Kola nut', meaning: 'Sacred in Igbo tradition — offered to ancestors and elders for blessings.' },
    { name: 'Ofe Onugbu (Bitter leaf soup)', meaning: 'Represents the bitter and sweet moments of life shared together.' },
    { name: 'Goat (live)', meaning: 'A symbol of prosperity and the groom\'s ability to provide.' },
    { name: 'Yams', meaning: 'Staple of Nigerian life — fertility, abundance and a good home.' },
    { name: 'Assorted drinks', meaning: 'Shared with both families as a sign of hospitality and celebration.' },
    { name: 'George fabric / Wrapper', meaning: 'Presented to the bride and key female family members.' },
    { name: 'Jewellery', meaning: 'Gold jewellery presented to the bride as a token of love and honour.' },
  ]

  const programme = [
    { time: '12:00 PM', event: 'Welcome & opening prayers' },
    { time: '12:20 PM', event: 'Introduction of both families' },
    { time: '12:45 PM', event: 'Presentation of traditional items' },
    { time: '1:15 PM', event: 'Bride price negotiation (symbolic)' },
    { time: '1:45 PM', event: 'Palm wine ceremony' },
    { time: '2:00 PM', event: 'Kola nut blessing by elders' },
    { time: '2:20 PM', event: 'Exchange of gifts and goodwill' },
    { time: '2:45 PM', event: 'Closing prayers & celebration' },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: 'var(--charcoal)', padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Traditional Engagement ✦</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
          Where tradition meets love
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--stone-light)', marginTop: '24px', maxWidth: '560px', margin: '24px auto 0', lineHeight: 1.8 }}>
          Our traditional engagement will be held in Lagos with family physically present, and streamed live via Zoom so our diaspora family and friends can celebrate with us.
        </p>
      </section>

      {/* Zoom details */}
      <section style={{ background: 'var(--gold)', padding: '48px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(92,34,51,0.6)', marginBottom: '12px' }}>Joining virtually?</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: 'var(--charcoal)', marginBottom: '20px' }}>
          Join us on Zoom
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--charcoal)', opacity: 0.75, marginBottom: '24px' }}>
          12:00 PM WAT · 11:00 AM BST · 7:00 AM EST · 12:00 AM PST
        </p>
        <p style={{ fontSize: '13px', color: 'var(--charcoal)', opacity: 0.65, marginBottom: '28px' }}>
          Zoom link and password will be sent to all confirmed RSVPs one week before the ceremony.
        </p>
        <Link href="/rsvp" style={{ display: 'inline-block', padding: '12px 36px', background: 'var(--charcoal)', color: 'var(--cream)', textDecoration: 'none', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          RSVP to receive link
        </Link>
      </section>

      {/* Programme */}
      <section style={{ padding: '80px 32px', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Order of Events</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontStyle: 'italic' }}>Ceremony programme</h2>
        </div>
        {programme.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', padding: '20px 0', borderBottom: '0.5px solid rgba(208,138,102,0.2)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', color: 'var(--gold)', minWidth: '80px', flexShrink: 0 }}>{p.time}</div>
            <div style={{ fontSize: '14px', color: 'var(--charcoal)', lineHeight: 1.6 }}>{p.event}</div>
          </div>
        ))}
      </section>

      {/* Traditional items */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Understanding Our Traditions</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontStyle: 'italic' }}>Traditional items list</h2>
            <p style={{ fontSize: '14px', color: 'var(--stone)', marginTop: '16px' }}>Each item carries deep cultural meaning. Here is what to expect.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
            {items.map((item, i) => (
              <div key={i} style={{ background: 'var(--cream)', padding: '28px 32px', border: '0.5px solid rgba(208,138,102,0.2)' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>✦</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: 'var(--charcoal)', marginBottom: '10px' }}>{item.name}</h3>
                <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.7 }}>{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
