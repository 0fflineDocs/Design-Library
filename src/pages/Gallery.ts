import type { DesignSystem } from '../lib/types'
import { el } from '../lib/el'

function renderCard(design: DesignSystem): HTMLElement {
  const card = el('a', {
    href: `#/${design.slug}`,
    style: {
      display: 'block',
      background: '#111',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'border-color 0.15s, transform 0.15s',
      textDecoration: 'none',
      overflow: 'hidden',
    },
  })

  card.addEventListener('mouseenter', () => {
    card.style.borderColor = 'rgba(212,175,55,0.4)'
    card.style.transform = 'translateY(-2px)'
  })
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = 'rgba(255,255,255,0.07)'
    card.style.transform = 'translateY(0)'
  })

  const previewFrame = el('div', {
    style: {
      position: 'relative',
      height: '220px',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      background: '#0b0b0b',
    },
  })

  if (design.preview) {
    const iframe = el('iframe', {
      src: `/designs/${design.slug}/${design.preview}`,
      title: `${design.name} preview`,
      loading: 'lazy',
      tabIndex: '-1',
      style: {
        width: '1280px',
        height: '800px',
        border: '0',
        transform: 'scale(0.34)',
        transformOrigin: 'top left',
        pointerEvents: 'none',
      },
    })
    previewFrame.appendChild(iframe)
  } else {
    previewFrame.appendChild(el('div', {
      style: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--lib-fg-faint)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      },
    }, 'Preview unavailable'))
  }

  const body = el('div', {
    style: { padding: '20px 24px 24px' },
  })

  // Color swatches (first 5)
  const swatchRow = el('div', {
    style: { display: 'flex', gap: '6px', marginBottom: '16px' },
  })
  design.palette.slice(0, 5).forEach(color => {
    const swatch = el('div', {
      title: color.name,
      style: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: color.hex,
        border: '1px solid rgba(255,255,255,0.1)',
        flexShrink: '0',
      },
    })
    swatchRow.appendChild(swatch)
  })

  const name = el('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.3rem',
      color: 'var(--lib-fg)',
      letterSpacing: '0.03em',
      marginBottom: '6px',
    },
  }, design.name)

  const tagline = el('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      color: 'var(--lib-fg-faint)',
      letterSpacing: '0.08em',
    },
  }, design.tagline)

  body.appendChild(swatchRow)
  body.appendChild(name)
  body.appendChild(tagline)
  card.appendChild(previewFrame)
  card.appendChild(body)

  return card
}

export function renderGallery(designs: DesignSystem[]): HTMLElement {
  const page = el('div', {
    style: { maxWidth: '1100px', margin: '0 auto', padding: '48px 40px 80px' },
  })

  const header = el('div', {
    style: { marginBottom: '48px' },
  })
  const title = el('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      color: 'var(--lib-fg-faint)',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: '10px',
    },
  }, 'Design Library')
  const heading = el('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.5rem',
      fontWeight: '400',
      color: 'var(--lib-fg)',
      letterSpacing: '0.03em',
    },
  }, 'All Designs')
  const subtitle = el('p', {
    style: {
      maxWidth: '640px',
      marginTop: '14px',
      color: 'var(--lib-fg-muted)',
      lineHeight: '1.7',
      fontWeight: '300',
    },
  }, 'A grid of live preview windows. Click any card to open that design system’s full reference page.')
  header.appendChild(title)
  header.appendChild(heading)
  header.appendChild(subtitle)
  page.appendChild(header)

  const grid = el('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '16px',
    },
  })

  for (const design of designs) {
    grid.appendChild(renderCard(design))
  }

  page.appendChild(grid)
  return page
}
