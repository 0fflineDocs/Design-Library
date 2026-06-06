import type { DesignSystem } from '../lib/types'

type ElAttrs<K extends keyof HTMLElementTagNameMap> = {
  [P in keyof Omit<HTMLElementTagNameMap[K], 'style'>]?: HTMLElementTagNameMap[K][P]
} & { style?: Partial<CSSStyleDeclaration> }

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: ElAttrs<K> = {},
  ...children: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag)
  const { style: styleObj, ...rest } = attrs
  Object.assign(node, rest)
  if (styleObj) Object.assign(node.style, styleObj)
  for (const child of children) {
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child)
  }
  return node
}

function renderCard(design: DesignSystem): HTMLElement {
  const card = el('a', {
    href: `#/${design.slug}`,
    style: {
      display: 'block',
      background: '#111',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '4px',
      padding: '24px',
      cursor: 'pointer',
      transition: 'border-color 0.15s',
      textDecoration: 'none',
    },
  })

  card.addEventListener('mouseenter', () => {
    card.style.borderColor = 'rgba(212,175,55,0.4)'
  })
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = 'rgba(255,255,255,0.07)'
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

  card.appendChild(swatchRow)
  card.appendChild(name)
  card.appendChild(tagline)

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
  header.appendChild(title)
  header.appendChild(heading)
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
