'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '@/components/motion/Reveal'
import type { GalleryImage } from '@/lib/drive'

const PAGE_SIZE = 12

export default function GalleryGrid({ images, emptyMessage }: { images: GalleryImage[]; emptyMessage: string }) {
  const reduce = useReducedMotion()
  // Videos show a thumbnail until clicked, so the page doesn't load every player up front.
  const [playing, setPlaying] = useState<string | null>(null)
  // Only render the first batch; "See more" reveals the next one.
  const [visible, setVisible] = useState(PAGE_SIZE)

  return (
    <section style={{ padding: '64px 32px', maxWidth: '1100px', margin: '0 auto' }}>
      {images.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--stone)', lineHeight: 1.8 }}>
          {emptyMessage}
        </p>
      ) : (
        <>
        <div style={{ columns: '3 220px', gap: '4px' }}>
          {images.slice(0, visible).map((photo, i) => {
            const isPlaying = photo.videoUrl && playing === photo.publicId
            return (
              <motion.div
                key={photo.publicId}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
                whileHover={reduce || isPlaying ? undefined : { scale: 1.03 }}
                onClick={photo.videoUrl ? () => setPlaying(photo.publicId) : undefined}
                style={{
                  position: 'relative',
                  marginBottom: '4px',
                  breakInside: 'avoid',
                  overflow: 'hidden',
                  border: '0.5px solid rgba(222,154,110,0.2)',
                  cursor: 'pointer',
                  lineHeight: 0,
                }}
              >
                {isPlaying ? (
                  <iframe
                    src={photo.videoUrl}
                    title="Video"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ width: '100%', aspectRatio: photo.width && photo.height ? `${photo.width} / ${photo.height}` : '16 / 9', border: 0, display: 'block' }}
                  />
                ) : (
                  <>
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      width={photo.width || undefined}
                      height={photo.height || undefined}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    {photo.videoUrl && (
                      <div
                        aria-label="Play video"
                        style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(30,54,38,0.25)' }}
                      >
                        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(30,54,38,0.75)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: '20px', lineHeight: 1, paddingLeft: '4px' }}>
                          ▶
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )
          })}
        </div>
        {visible < images.length && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => setVisible(v => v + PAGE_SIZE)}
              style={{ padding: '14px 32px', border: '1px solid var(--gold)', background: 'transparent', color: 'var(--gold)', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}
            >
              See more ({images.length - visible} more)
            </button>
          </div>
        )}
        </>
      )}
    </section>
  )
}
