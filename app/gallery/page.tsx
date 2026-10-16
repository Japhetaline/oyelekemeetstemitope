import { Reveal } from '@/components/motion/Reveal'
import GalleryTabs from '@/components/GalleryTabs'
import { getDriveMedia, folderUrl, UK_FOLDER_ID, NIGERIA_FOLDER_ID } from '@/lib/drive'

const buttonStyle = { display: 'inline-block', padding: '14px 32px', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' } as const

export default async function Gallery() {
  const [uk, nigeria] = await Promise.all([getDriveMedia(UK_FOLDER_ID), getDriveMedia(NIGERIA_FOLDER_ID)])

  const tabs = [
    { label: 'UK Wedding', items: uk.photos, empty: 'Our UK wedding photos are on the way — check back soon.' },
    { label: 'Nigeria Wedding', items: nigeria.photos, empty: 'Our Nigeria wedding photos are coming soon.' },
    { label: 'Videos', items: [...uk.videos, ...nigeria.videos], empty: 'Our videos are on the way — check back soon.' },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: "linear-gradient(rgba(30,54,38,0.72), rgba(30,54,38,0.84)), url('/assests/laykay08.jpeg') center/cover", padding: '100px 32px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Gallery ✦</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
            Our memories
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--stone-light)', marginTop: '20px', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.8 }}>
            Photographs and videos from our journey together and from each of our events.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '32px' }}>
            <a href={folderUrl(UK_FOLDER_ID)} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
              UK photos &amp; videos
            </a>
            {NIGERIA_FOLDER_ID && (
              <a href={folderUrl(NIGERIA_FOLDER_ID)} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
                Nigeria photos &amp; videos
              </a>
            )}
          </div>
        </Reveal>
      </section>

      <GalleryTabs tabs={tabs} />
    </div>
  )
}
