import { Reveal } from '@/components/motion/Reveal'
import GalleryGrid from '@/components/GalleryGrid'
import { getGalleryImages } from '@/lib/cloudinary'

export default async function Gallery() {
  const images = await getGalleryImages()

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: "linear-gradient(rgba(30,54,38,0.72), rgba(30,54,38,0.84)), url('/assests/laykay08.jpeg') center/cover", padding: '100px 32px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Gallery ✦</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
            Our memories
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--stone-light)', marginTop: '20px', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.8 }}>
            Photographs from our journey together. After each event, guests can add their own photos here.
          </p>
        </Reveal>
      </section>

      <GalleryGrid images={images} />
    </div>
  )
}
