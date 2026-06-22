import type { DesignSystem, TypeScaleEntry } from '../lib/types'
import { el } from '../lib/el'

const HAIR = '1px solid rgba(255,255,255,0.08)'

/** Safely set inner HTML without using innerHTML directly */
function setHtml(el: HTMLElement, html: string): void {
  el.appendChild(document.createRange().createContextualFragment(html))
}

export function renderTopbar(design: DesignSystem): HTMLElement {
  const bar = el('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '14px 40px',
      borderBottom: HAIR,
      position: 'sticky',
      top: '0',
      background: 'rgba(10,10,10,0.94)',
      backdropFilter: 'blur(8px)',
      zIndex: '100',
    },
  })

  const back = el('a', {
    href: '#/',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--lib-fg-faint)',
      letterSpacing: '0.08em',
    },
  }, '← All designs')

  const sep = el('span', { style: { color: 'var(--lib-fg-faint)' } }, '/')

  const name = el('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      color: 'var(--lib-accent)',
      fontWeight: '400',
      letterSpacing: '0.04em',
    },
  }, design.name)

  const copyBtn = el('button', {
    style: {
      marginLeft: 'auto',
      background: 'transparent',
      border: HAIR,
      color: 'var(--lib-accent)',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '7px 16px',
      cursor: 'pointer',
      transition: 'background 0.15s, color 0.15s',
    },
  }, 'Copy DESIGN.md')

  copyBtn.addEventListener('mouseenter', () => {
    copyBtn.style.background = 'var(--lib-accent)'
    copyBtn.style.color = '#0a0a0a'
  })
  copyBtn.addEventListener('mouseleave', () => {
    if (copyBtn.textContent !== 'Copied!') {
      copyBtn.style.background = 'transparent'
      copyBtn.style.color = 'var(--lib-accent)'
    }
  })
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(design.raw).then(() => {
      copyBtn.textContent = 'Copied!'
      copyBtn.style.background = 'rgba(100,180,100,0.1)'
      copyBtn.style.color = '#6abf6a'
      copyBtn.style.borderColor = 'rgba(100,180,100,0.3)'
      setTimeout(() => {
        copyBtn.textContent = 'Copy DESIGN.md'
        copyBtn.style.background = 'transparent'
        copyBtn.style.color = 'var(--lib-accent)'
        copyBtn.style.borderColor = 'rgba(255,255,255,0.08)'
      }, 2000)
    })
  })

  bar.appendChild(back)
  bar.appendChild(sep)
  bar.appendChild(name)
  bar.appendChild(copyBtn)
  return bar
}

export function renderSection(
  num: string,
  title: string,
  desc: string,
  content: HTMLElement
): HTMLElement {
  const section = el('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: '48px',
      alignItems: 'start',
      marginBottom: '80px',
    },
  })

  const meta = el('div', { style: { position: 'sticky', top: '57px', paddingTop: '4px' } })

  const numEl = el('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      color: 'var(--lib-accent-dim)',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
  }, num)

  const titleEl = el('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.8rem',
      fontWeight: '600',
      letterSpacing: '0.03em',
      color: 'var(--lib-fg)',
      marginTop: '6px',
      lineHeight: '1.1',
    },
  }, title)

  const descEl = el('div', {
    style: {
      fontSize: '13px',
      color: 'var(--lib-fg-muted)',
      marginTop: '12px',
      lineHeight: '1.65',
      fontWeight: '300',
    },
  })
  // Trusted content: parsed from author-controlled DESIGN.md
  setHtml(descEl, desc)

  meta.appendChild(numEl)
  meta.appendChild(titleEl)
  meta.appendChild(descEl)
  section.appendChild(meta)
  section.appendChild(content)
  return section
}

export function renderPalette(design: DesignSystem): HTMLElement {
  const grid = el('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1px',
      background: 'rgba(212,175,55,0.1)',
      border: HAIR,
    },
  })

  for (const color of design.palette) {
    const card = el('div', { style: { background: '#0a0a0a' } })
    const swatch = el('div', { style: { height: '100px', background: color.hex } })
    const body = el('div', { style: { padding: '14px 16px', borderTop: HAIR } })
    body.appendChild(el('div', {
      style: { fontFamily: 'var(--font-display)', fontSize: '15px', color: 'var(--lib-fg)', letterSpacing: '0.04em' },
    }, color.name))
    body.appendChild(el('div', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-fg-muted)', marginTop: '3px', letterSpacing: '0.06em' },
    }, color.role))
    body.appendChild(el('div', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-fg-faint)', marginTop: '5px', opacity: '0.65' },
    }, color.hex))
    card.appendChild(swatch)
    card.appendChild(body)
    grid.appendChild(card)
  }

  return grid
}

export function renderSurfaces(design: DesignSystem): HTMLElement {
  const row = el('div', { style: { display: 'flex', border: HAIR } })

  for (const surface of design.surfaces) {
    const tile = el('div', {
      style: {
        flex: '1',
        height: '110px',
        padding: '12px',
        background: surface.hex,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRight: HAIR,
      },
    })
    tile.appendChild(el('div', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em' },
    }, surface.hex))
    const bottom = el('div')
    bottom.appendChild(el('div', {
      style: { fontFamily: 'var(--font-display)', fontSize: '15px', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.04em' },
    }, surface.name))
    bottom.appendChild(el('div', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' },
    }, surface.token))
    tile.appendChild(bottom)
    row.appendChild(tile)
  }

  return row
}

type TypographyKey = 'display' | 'ui' | 'mono'

const TYPEFACE_STYLES: Record<TypographyKey, {
  fontVar: string
  aaColor: string
  aaWeight: string
  aaLetterSpacing: string
  sentenceFontSize: string
  sentenceLineHeight: string
  sentenceLetterSpacing?: string
  sentenceFontWeight: string
  sentence: string
}> = {
  display: {
    fontVar: 'var(--font-display)',
    aaColor: 'var(--lib-accent)',
    aaWeight: '400',
    aaLetterSpacing: '0.03em',
    sentenceFontSize: '1.05rem',
    sentenceLineHeight: '1.45',
    sentenceLetterSpacing: '0.03em',
    sentenceFontWeight: '400',
    sentence: 'Intelligence meets elegance. Precision in every letter.',
  },
  ui: {
    fontVar: 'var(--font-ui)',
    aaColor: 'var(--lib-fg-muted)',
    aaWeight: '300',
    aaLetterSpacing: '-0.02em',
    sentenceFontSize: '14px',
    sentenceLineHeight: '1.7',
    sentenceFontWeight: '300',
    sentence: 'For the working interface. Body copy and labels live here.',
  },
  mono: {
    fontVar: 'var(--font-mono)',
    aaColor: 'var(--lib-fg-faint)',
    aaWeight: '400',
    aaLetterSpacing: '0',
    sentenceFontSize: '13px',
    sentenceLineHeight: '1.7',
    sentenceFontWeight: '400',
    sentence: 'const x = "mono"; // technical data',
  },
}

export function renderTypography(design: DesignSystem): HTMLElement {
  const entries = (['display', 'ui', 'mono'] as TypographyKey[])
    .filter((key) => design.typography[key] !== undefined)
    .map((key) => ({ key, spec: design.typography[key]! }))

  const grid = el('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${entries.length}, 1fr)`,
      gap: '1px',
      background: 'rgba(212,175,55,0.1)',
      border: HAIR,
    },
  })

  for (const { key, spec } of entries) {
    const s = TYPEFACE_STYLES[key]
    const card = el('div', {
      style: { background: '#0a0a0a', padding: '28px', display: 'flex', flexDirection: 'column' },
    })
    card.appendChild(el('div', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-accent-dim)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' },
    }, spec.label))
    card.appendChild(el('div', {
      style: {
        fontFamily: s.fontVar,
        fontSize: '96px',
        lineHeight: '0.9',
        color: s.aaColor,
        fontWeight: s.aaWeight,
        letterSpacing: s.aaLetterSpacing,
      },
    }, 'Aa'))
    const sentence = el('div', {
      style: {
        marginTop: '20px',
        fontFamily: s.fontVar,
        fontSize: s.sentenceFontSize,
        color: 'var(--lib-fg)',
        lineHeight: s.sentenceLineHeight,
        ...(s.sentenceLetterSpacing ? { letterSpacing: s.sentenceLetterSpacing } : {}),
        fontWeight: s.sentenceFontWeight,
        flex: '1',
      },
    }, s.sentence)
    card.appendChild(sentence)
    const weights = el('div', {
      style: { marginTop: '20px', paddingTop: '14px', borderTop: HAIR, display: 'flex', flexWrap: 'wrap', gap: '16px' },
    })
    for (const w of spec.weights) {
      weights.appendChild(el('span', {
        style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-fg-faint)', letterSpacing: '0.1em' },
      }, `· ${w}`))
    }
    card.appendChild(weights)
    grid.appendChild(card)
  }

  return grid
}

function fontFamilyForEntry(entry: TypeScaleEntry): string {
  if (entry.font === 'display') return 'var(--font-display)'
  if (entry.font === 'mono') return 'var(--font-mono)'
  return 'var(--font-ui)'
}

export function renderTypescale(design: DesignSystem): HTMLElement {
  const table = el('div', { style: { border: HAIR } })

  design.typescale.forEach((entry, i) => {
    const row = el('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '52px 100px 1fr 64px',
        gap: '12px',
        padding: '10px 18px',
        alignItems: 'baseline',
        borderBottom: i < design.typescale.length - 1 ? HAIR : 'none',
      },
    })
    row.appendChild(el('span', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--lib-accent-dim)', letterSpacing: '0.14em' },
    }, entry.id))
    row.appendChild(el('span', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-fg-faint)', letterSpacing: '0.1em' },
    }, entry.label))
    row.appendChild(el('span', {
      style: {
        fontFamily: fontFamilyForEntry(entry),
        fontSize: `${Math.min(entry.size, 48)}px`,
        lineHeight: '1',
        color: 'var(--lib-fg)',
        ...(entry.font === 'display' ? { letterSpacing: '0.03em' } : {}),
        fontWeight: entry.font === 'ui' ? '300' : '400',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    }, entry.text))
    row.appendChild(el('span', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-fg-faint)', textAlign: 'right' },
    }, `${entry.size}/${entry.lh}`))
    table.appendChild(row)
  })

  return table
}

export function renderSigils(design: DesignSystem): HTMLElement {
  const grid = el('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1px',
      background: 'rgba(212,175,55,0.1)',
      border: HAIR,
    },
  })

  for (const sigil of design.sigils ?? []) {
    const card = el('div', {
      style: { background: '#0a0a0a', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' },
    })
    card.appendChild(el('div', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-accent-dim)', letterSpacing: '0.18em', textTransform: 'uppercase' },
    }, sigil.label))
    const img = el('img', {
      src: `/designs/${design.slug}/sigils/${sigil.file}`,
      alt: sigil.label,
      style: { width: '80px', height: '80px' },
    })
    card.appendChild(img)
    card.appendChild(el('div', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-fg-faint)', letterSpacing: '0.1em' },
    }, sigil.caption))
    grid.appendChild(card)
  }

  return grid
}
