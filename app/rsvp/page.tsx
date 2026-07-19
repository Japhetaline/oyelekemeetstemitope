'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, EASE } from '@/components/motion/Reveal'

export default function RSVP() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '',
    attendance: '', dietary: '', message: '',
  })
  const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle')

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqerklgn'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          country: form.country,
          attendance: form.attendance,
          dietary: form.dietary,
          message: form.message,
          _subject: `Wedding RSVP — ${form.name || 'New guest'}`,
        }),
      })
      if (res.ok) {
        setStatus('done')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 0', background: 'transparent',
    border: 'none', borderBottom: '0.5px solid rgba(222,154,110,0.4)',
    color: 'var(--charcoal)', fontSize: '14px', fontFamily: "'Jost', sans-serif",
    outline: 'none', marginBottom: '32px', transition: 'border-color 0.2s',
  }

  if (status === 'done') return (
    <div style={{ paddingTop: '64px', minHeight: '100vh', background: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 32px' }}>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.5, rotate: -20 }}
          animate={reduce ? {} : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          style={{ fontSize: '40px', marginBottom: '24px' }}>✦</motion.div>
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
      </motion.div>
    </div>
  )

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: "linear-gradient(rgba(30,54,38,0.72), rgba(30,54,38,0.84)), url('/assests/wedding%20IV.jpeg') center/cover", padding: '100px 32px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ RSVP ✦</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
            Confirm your attendance
          </h1>
        </Reveal>
      </section>

      <Reveal as="section" style={{ padding: '80px 32px', maxWidth: '640px', margin: '0 auto' }}>
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

          {/* Attendance type */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '16px' }}>Attendance type *</label>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['In person — Lagos', 'Virtually — Zoom', 'In person - UK'].map(opt => (
                <label key={opt} onClick={() => setForm({...form, attendance: opt})} style={{
                  padding: '10px 20px', border: `0.5px solid ${form.attendance === opt ? 'var(--gold)' : 'rgba(222,154,110,0.3)'}`,
                  background: form.attendance === opt ? 'rgba(222,154,110,0.08)' : 'transparent',
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

          {status === 'error' && (
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--gold-dark)', textAlign: 'center', lineHeight: 1.6 }}>
              Something went wrong sending your RSVP. Please try again, or email us at{' '}
              <a href="mailto:Oyejobi.oyelekee@gmail.com" style={{ color: 'var(--gold-dark)', textDecoration: 'underline' }}>Oyejobi.oyelekee@gmail.com</a>.
            </p>
          )}
        </form>
      </Reveal>
    </div>
  )
}
