'use client'
import { useState } from 'react'
import GalleryGrid from '@/components/GalleryGrid'
import type { GalleryImage } from '@/lib/drive'

interface Tab {
  label: string
  items: GalleryImage[]
  empty: string
}

export default function GalleryTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)

  return (
    <>
      <div role="tablist" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', padding: '48px 16px 0' }}>
        {tabs.map((tab, i) => {
          const selected = i === active
          return (
            <button
              key={tab.label}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              style={{
                padding: '12px 24px',
                border: '1px solid var(--gold)',
                background: selected ? 'var(--gold)' : 'transparent',
                color: selected ? 'var(--cream)' : 'var(--gold)',
                fontSize: '12px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Keyed so switching tabs resets "See more" back to the first page. */}
      <GalleryGrid key={active} images={tabs[active].items} emptyMessage={tabs[active].empty} />
    </>
  )
}
