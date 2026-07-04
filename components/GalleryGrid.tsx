'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '@/components/motion/Reveal'
import type { GalleryImage } from '@/lib/cloudinary'

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const reduce = useReducedMotion()
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [error, setError] = useState('')

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
  const canUpload = Boolean(cloudName && uploadPreset)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !canUpload) return

    setUploading(true)
    setError('')
    try {
      const form = new FormData()
      form.append('file', file)
      form.append('upload_preset', uploadPreset as string)

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: 'POST', body: form }
      )
      if (!res.ok) throw new Error('Upload failed')
      setUploaded(true)
    } catch {
      setError('Sorry, that upload didn’t go through. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      {/* Upload section */}
      <section style={{ background: 'var(--gold)', padding: '40px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(110,21,38,0.65)', marginBottom: '12px' }}>
          Attended one of our events?
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--charcoal)', fontStyle: 'italic', marginBottom: '20px' }}>
          Share your photos with us
        </h2>
        {uploaded ? (
          <div style={{ fontSize: '14px', color: 'var(--charcoal)' }}>✦ Thank you! Your photo has been shared — it will appear here shortly.</div>
        ) : canUpload ? (
          <>
            <label style={{ display: 'inline-block', padding: '12px 32px', background: 'var(--charcoal)', color: 'var(--cream)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
              {uploading ? 'Uploading…' : 'Upload a photo'}
              <input type="file" accept="image/*" onChange={handleUpload} disabled={uploading} style={{ display: 'none' }} />
            </label>
            {error && <div style={{ fontSize: '13px', color: 'var(--charcoal)', marginTop: '12px' }}>{error}</div>}
          </>
        ) : (
          <div style={{ fontSize: '13px', color: 'rgba(110,21,38,0.75)' }}>Photo sharing opens closer to the wedding.</div>
        )}
      </section>

      {/* Photo grid */}
      <section style={{ padding: '64px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        {images.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--stone)', lineHeight: 1.8 }}>
            Our photos are on the way — check back soon.
          </p>
        ) : (
          <div style={{ columns: '3 220px', gap: '4px' }}>
            {images.map((photo, i) => (
              <motion.div
                key={photo.publicId}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
                whileHover={reduce ? undefined : { scale: 1.03 }}
                style={{
                  marginBottom: '4px',
                  breakInside: 'avoid',
                  overflow: 'hidden',
                  border: '0.5px solid rgba(185,142,76,0.2)',
                  cursor: 'pointer',
                  lineHeight: 0,
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  width={photo.width || undefined}
                  height={photo.height || undefined}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
