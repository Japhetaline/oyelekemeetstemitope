import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', color: 'var(--stone-light)', padding: '64px 32px 40px', textAlign: 'center' }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--gold-light)', marginBottom: '8px', fontStyle: 'italic' }}>
        Oyeleke & Temitope
      </div>
      <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '40px' }}>
        10 October 2026 · Lagos, Nigeria
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {[['Our Story','/our-story'],['Events','/events'],['Engagement','/engagement'],['Families','/families'],['Dress Code','/dresscode'],['Travel','/travel'],['Gifts','/gifts'],['Gallery','/gallery'],['RSVP','/rsvp']].map(([label, href]) => (
          <Link key={href} href={href} style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none' }}>
            {label}
          </Link>
        ))}
      </div>

      <div style={{ width: '40px', height: '0.5px', background: 'var(--gold)', opacity: 0.4, margin: '0 auto 24px' }} />

      <p style={{ fontSize: '12px', color: 'var(--stone)', opacity: 0.6 }}>
        Made By Netblend Digital · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
