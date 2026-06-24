'use client'
import { useState } from 'react'

const placeholderPhotos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  caption: i === 0 ? 'Engagement shoot — Lagos, 2024' : i === 1 ? 'Sunset by the beach' : i === 2 ? 'Our favourite restaurant' : '',
  aspect: i % 3 === 0 ? 'tall' : i % 5 === 0 ? 'wide' : 'square',
}))

export default function Gallery() {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return
    setUploading(true)
    await new Promise(r => setTimeout(r, 1500))
    setUploading(false)
    setUploaded(true)
  }

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: 'var(--charcoal)', padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Gallery ✦</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
          Our memories
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--stone-light)', marginTop: '20px', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.8 }}>
          Pre-wedding photographs from our journey. After each event, guests can upload their own photos here.
        </p>
      </section>

      {/* Upload section */}
      <section style={{ background: 'var(--gold)', padding: '40px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(92,34,51,0.65)', marginBottom: '12px' }}>
          Attended one of our events?
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--charcoal)', fontStyle: 'italic', marginBottom: '20px' }}>
          Share your photos with us
        </h2>
        {uploaded ? (
          <div style={{ fontSize: '14px', color: 'var(--charcoal)' }}>✦ Thank you! Your photo has been shared.</div>
        ) : (
          <label style={{ display: 'inline-block', padding: '12px 32px', background: 'var(--charcoal)', color: 'var(--cream)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
            {uploading ? 'Uploading...' : 'Upload a photo'}
            <input type="file" accept="image/*" onChange={handleUpload} style={{ display: 'none' }} />
          </label>
        )}
      </section>

      {/* Photo grid */}
      <section style={{ padding: '64px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          columns: '3 220px',
          gap: '4px',
        }}>
          {placeholderPhotos.map((photo) => (
            <div key={photo.id} style={{
              background: 'var(--cream-dark)',
              border: '0.5px solid rgba(208,138,102,0.2)',
              marginBottom: '4px',
              breakInside: 'avoid',
              aspectRatio: photo.aspect === 'tall' ? '3/4' : photo.aspect === 'wide' ? '4/3' : '1/1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '64px', color: 'rgba(208,138,102,0.15)', userSelect: 'none' }}>O&T</div>
              {photo.caption && (
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', fontSize: '11px', color: 'var(--stone)', letterSpacing: '0.1em', textAlign: 'center' }}>
                  {photo.caption}
                </div>
              )}
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--stone)', marginTop: '32px', letterSpacing: '0.1em' }}>
          Replace placeholder tiles with real photos from Supabase Storage
        </p>
      </section>
    </div>
  )
}
