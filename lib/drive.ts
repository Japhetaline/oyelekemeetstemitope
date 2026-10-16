/**
 * Server-only helper that lists every photo and video in a public Google Drive
 * folder (including subfolders) so the gallery can render them.
 *
 * Required environment variables (set in .env.local and in your hosting settings):
 *   GOOGLE_DRIVE_API_KEY    API key from Google Cloud Console with the Drive API enabled
 *   GOOGLE_DRIVE_FOLDER_ID  (optional) folder to list — defaults to the wedding folder
 *
 * The folder must be shared as "Anyone with the link can view", otherwise the
 * API returns nothing and the images will not load for visitors.
 */

import type { GalleryImage } from '@/lib/cloudinary'

export const DRIVE_FOLDER_ID =
  process.env.GOOGLE_DRIVE_FOLDER_ID || '1SToA7g_7XzSu5uGBNP4pQMz-p5_PxM6z'

export const DRIVE_FOLDER_URL = `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`

const FOLDER_MIME = 'application/vnd.google-apps.folder'
// Guard against runaway recursion if someone nests folders very deeply.
const MAX_FOLDERS = 50

interface DriveFile {
  id: string
  name: string
  mimeType: string
  imageMediaMetadata?: { width?: number; height?: number; rotation?: number }
  videoMediaMetadata?: { width?: number; height?: number }
}

async function listFolder(folderId: string, apiKey: string): Promise<DriveFile[]> {
  const files: DriveFile[] = []
  let pageToken: string | undefined

  do {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed = false and (mimeType contains 'image/' or mimeType contains 'video/' or mimeType = '${FOLDER_MIME}')`,
      fields: 'nextPageToken, files(id, name, mimeType, imageMediaMetadata(width, height, rotation), videoMediaMetadata(width, height))',
      orderBy: 'createdTime desc',
      pageSize: '1000',
      key: apiKey,
    })
    if (pageToken) params.set('pageToken', pageToken)

    const res = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`, {
      // Refresh at most once a minute so new files appear without a redeploy.
      next: { revalidate: 60 },
    })
    if (!res.ok) throw new Error(`Drive list failed: ${res.status} ${await res.text()}`)

    const data = (await res.json()) as { files?: DriveFile[]; nextPageToken?: string }
    files.push(...(data.files ?? []))
    pageToken = data.nextPageToken
  } while (pageToken)

  return files
}

export async function getDriveMedia(): Promise<GalleryImage[]> {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY

  // Without an API key there is nothing to list — render without Drive items.
  if (!apiKey) return []

  try {
    const media: DriveFile[] = []
    const queue = [DRIVE_FOLDER_ID]
    let visited = 0

    while (queue.length && visited < MAX_FOLDERS) {
      const files = await listFolder(queue.shift() as string, apiKey)
      visited++
      for (const f of files) {
        if (f.mimeType === FOLDER_MIME) queue.push(f.id)
        else media.push(f)
      }
    }

    return media.map(f => {
      const isVideo = f.mimeType.startsWith('video/')
      const meta = isVideo ? f.videoMediaMetadata : f.imageMediaMetadata
      // Rotation 1 or 3 means the photo is displayed sideways, so swap dimensions.
      const sideways = !isVideo && (f.imageMediaMetadata?.rotation ?? 0) % 2 === 1
      const width = (sideways ? meta?.height : meta?.width) ?? 0
      const height = (sideways ? meta?.width : meta?.height) ?? 0

      return {
        url: isVideo
          ? `https://drive.google.com/thumbnail?id=${f.id}&sz=w1200`
          : `https://lh3.googleusercontent.com/d/${f.id}=w1200`,
        publicId: `drive-${f.id}`,
        width,
        height,
        alt: 'Oyeleke & Temitope',
        videoUrl: isVideo ? `https://drive.google.com/file/d/${f.id}/preview` : undefined,
      }
    })
  } catch (err) {
    console.error('Google Drive request error:', err)
    return []
  }
}
