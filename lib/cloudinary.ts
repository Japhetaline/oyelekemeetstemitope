/**
 * Server-only helper that lists every image in the Cloudinary account (or a
 * specific folder) so the gallery can render whatever has been uploaded.
 *
 * Required environment variables (set in .env.local — see .env.local.example):
 *   CLOUDINARY_CLOUD_NAME   your Cloudinary cloud name
 *   CLOUDINARY_API_KEY      Admin API key
 *   CLOUDINARY_API_SECRET   Admin API secret
 *   CLOUDINARY_FOLDER       (optional) only list images inside this folder
 */

export interface GalleryImage {
  url: string
  publicId: string
  width: number
  height: number
  alt: string
}

interface CloudinaryResource {
  secure_url: string
  public_id: string
  width: number
  height: number
  context?: { custom?: { alt?: string; caption?: string } }
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET
  const folder = process.env.CLOUDINARY_FOLDER

  // Without credentials there is nothing to list — render an empty gallery.
  if (!cloudName || !apiKey || !apiSecret) return []

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')
  // Match images directly in the folder AND in any subfolder. Cloudinary's
  // `folder:x/*` glob does not match assets sitting directly in `x`, so we OR both.
  const expression = folder
    ? `resource_type:image AND (folder="${folder}" OR folder="${folder}/*")`
    : 'resource_type:image'

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          expression,
          sort_by: [{ created_at: 'desc' }],
          max_results: 100,
          with_field: ['context'],
        }),
        // Refresh at most once a minute so new uploads appear without a redeploy.
        next: { revalidate: 60 },
      }
    )

    if (!res.ok) {
      console.error('Cloudinary search failed:', res.status, await res.text())
      return []
    }

    const data = (await res.json()) as { resources?: CloudinaryResource[] }

    return (data.resources ?? []).map(r => ({
      url: r.secure_url,
      publicId: r.public_id,
      width: r.width,
      height: r.height,
      alt: r.context?.custom?.alt || r.context?.custom?.caption || 'Oyeleke & Temitope',
    }))
  } catch (err) {
    console.error('Cloudinary request error:', err)
    return []
  }
}
