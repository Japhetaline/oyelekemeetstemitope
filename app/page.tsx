'use client'
import Link from 'next/link'
import CountdownTimer from '@/components/CountdownTimer'

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        background: 'var(--charcoal)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', width: '600px', height: '600px', border: '0.5px solid rgba(208,138,102,0.1)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'absolute', width: '800px', height: '800px', border: '0.5px solid rgba(208,138,102,0.06)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

        <div className="fade-up" style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '32px' }}>
          We are getting married
        </div>

        <h1 className="fade-up-2" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(52px, 10vw, 100px)',
          fontWeight: 300,
          color: 'var(--cream)',
          lineHeight: 1,
          marginBottom: '24px',
          fontStyle: 'italic',
        }}>
          Oyeleke<br />
          <span style={{ color: 'var(--gold)', fontSize: '0.5em', fontStyle: 'normal', letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', margin: '16px 0' }}>&amp;</span>
          Temitope
        </h1>

        <div className="fade-up-3" style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--stone-light)', marginBottom: '64px' }}>
          10 October 2026 · Lagos, Nigeria
        </div>

        <div className="fade-up-4" style={{ marginBottom: '64px' }}>
          <CountdownTimer />
        </div>

        <div className="fade-up-4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/rsvp" style={{
            padding: '14px 36px', background: 'var(--gold)', color: 'var(--charcoal)',
            textDecoration: 'none', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
            fontWeight: 500, transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            RSVP Now
          </Link>
          <Link href="/our-story" style={{
            padding: '14px 36px', border: '0.5px solid rgba(208,138,102,0.5)', color: 'var(--gold-light)',
            textDecoration: 'none', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
            transition: 'border-color 0.2s',
          }}>
            Our Story
          </Link>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
            ✦ Our Celebration ✦
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--charcoal)', marginBottom: '24px', fontStyle: 'italic' }}>
            Two beautiful moments, one love story
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--stone)', marginBottom: '40px' }}>
            Though we live abroad, our hearts are deeply rooted in Nigerian tradition.
            Join us from anywhere in the world as we celebrate our love across two unforgettable events.
          </p>
          <div style={{ width: '40px', height: '0.5px', background: 'var(--gold)', margin: '0 auto' }} />
        </div>
      </section>

      {/* THREE EVENTS */}
      <section style={{ padding: '80px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
          {[
            { num: '01', title: 'Traditional Engagement', date: 'August 2026 · Via Zoom', desc: 'Our traditional Nigerian engagement ceremony, celebrated with family across Nigeria and the diaspora.', link: '/engagement' },
            { num: '02', title: 'Wedding', date: '10 October 2026', desc: 'The main event — a beautiful fusion of culture, faith and love in Lagos, Nigeria.', link: '/events' },
          ].map((e, i) => (
            <Link key={i} href={e.link} style={{ textDecoration: 'none', display: 'block', padding: '48px 40px', background: i === 1 ? 'var(--charcoal)' : 'var(--cream-dark)', transition: 'transform 0.3s', border: '0.5px solid transparent' }}
              onMouseEnter={el => { el.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={el => { el.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', marginBottom: '20px' }}>{e.num}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: i === 1 ? 'var(--cream)' : 'var(--charcoal)', marginBottom: '8px', fontStyle: 'italic' }}>{e.title}</h3>
              <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>{e.date}</div>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: i === 1 ? 'var(--stone-light)' : 'var(--stone)' }}>{e.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ background: 'var(--charcoal)', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
          ✦ You are invited ✦
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 6vw, 64px)', color: 'var(--cream)', marginBottom: '32px', fontStyle: 'italic' }}>
          Will you join us?
        </h2>
        <Link href="/rsvp" style={{
          padding: '16px 48px', background: 'transparent', border: '0.5px solid var(--gold)',
          color: 'var(--gold)', textDecoration: 'none', fontSize: '11px',
          letterSpacing: '0.25em', textTransform: 'uppercase', display: 'inline-block',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--charcoal)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}>
          Confirm Attendance
        </Link>
      </section>
    </div>
  )
}
