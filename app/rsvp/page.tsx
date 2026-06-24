'use client'
import { useState } from 'react'

export default function RSVP() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '',
    events: [] as string[], attendance: '', dietary: '', message: '',
  })
  const [status, setStatus] = useState<'idle'|'sending'|'done'>('idle')

  const toggle = (event: string) => {
    setForm(f => ({
      ...f,
      events: f.events.includes(event)
        ? f.events.filter(e => e !== event)
        : [...f.events, event],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1800))
    setStatus('done')
  }

  const inputStyle = {
    width: '100%', padding: '14px 0', background: 'transparent',
    border: 'none', borderBottom: '0.5px solid rgba(208,138,102,0.4)',
    color: 'var(--charcoal)', fontSize: '14px', fontFamily: "'Jost', sans-serif",
    outline: 'none', marginBottom: '32px', transition: 'border-color 0.2s',
  }

  if (status === 'done') return (
    <div style={{ paddingTop: '64px', minHeight: '100vh', background: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 32px' }}>
      <div>
        <div style={{ fontSize: '40px', marginBottom: '24px' }}>✦</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 6vw, 64px)', color: 'var(--cream)', fontStyle: 'italic', marginBottom: '20px' }}>
          You're confirmed!
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--stone-light)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
          Thank you, {form.name || 'dear guest'}. We are so excited to celebrate with you. 
          A confirmation email is on its way to you.
        </p>
        <div style={{ marginTop: '40px', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          Oyeleke & Temitope
        </div>
      </div>
    </div>
  )

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: 'var(--charcoal)', padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ RSVP ✦</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
          Confirm your attendance
        </h1>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: '640px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>Full name *</label>
            <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={inputStyle} placeholder="Your full name" />
          </div>

          {/* Email */}
          <div>
            <label style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>Email address *</label>
            <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={inputStyle} placeholder="your@email.com" />
          </div>

          {/* Phone */}
          <div>
            <label style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>WhatsApp / Phone</label>
            <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={inputStyle} placeholder="+44 or +234..." />
          </div>

          {/* Country */}
          <div>
            <label style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>Country you are coming from *</label>
            <input required value={form.country} onChange={e => setForm({...form, country: e.target.value})} style={inputStyle} placeholder="e.g. United Kingdom" />
          </div>

          {/* Events */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '16px' }}>Which events are you attending? *</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Traditional Engagement (August 2026)', 'Wedding (10 Oct 2026)'].map(ev => (
                <label key={ev} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '14px', color: 'var(--charcoal)' }}>
                  <input type="checkbox" checked={form.events.includes(ev)} onChange={() => toggle(ev)} style={{ width: '16px', height: '16px', accentColor: 'var(--gold)' }} />
                  {ev}
                </label>
              ))}
            </div>
          </div>

          {/* Attendance type */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '16px' }}>Attendance type *</label>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['In person — Lagos', 'Virtually — Zoom', 'Both (different events)'].map(opt => (
                <label key={opt} onClick={() => setForm({...form, attendance: opt})} style={{
                  padding: '10px 20px', border: `0.5px solid ${form.attendance === opt ? 'var(--gold)' : 'rgba(208,138,102,0.3)'}`,
                  background: form.attendance === opt ? 'rgba(208,138,102,0.08)' : 'transparent',
                  fontSize: '13px', cursor: 'pointer', color: form.attendance === opt ? 'var(--gold)' : 'var(--stone)', transition: 'all 0.2s',
                }}>
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Dietary */}
          <div>
            <label style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>Dietary requirements</label>
            <input value={form.dietary} onChange={e => setForm({...form, dietary: e.target.value})} style={inputStyle} placeholder="Vegetarian, vegan, allergies, etc." />
          </div>

          {/* Message */}
          <div>
            <label style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>A message for us (optional)</label>
            <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Share your wishes..." />
          </div>

          <button type="submit" disabled={status === 'sending'} style={{
            width: '100%', padding: '18px', background: 'var(--charcoal)', color: 'var(--gold)',
            border: '0.5px solid var(--gold)', fontSize: '11px', letterSpacing: '0.25em',
            textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Jost', sans-serif",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--charcoal)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--charcoal)'; e.currentTarget.style.color = 'var(--gold)' }}>
            {status === 'sending' ? 'Sending...' : 'Confirm Attendance'}
          </button>
        </form>
      </section>
    </div>
  )
}
