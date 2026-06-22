import type { DesignSystem } from '../lib/types'
import { el } from '../lib/el'
import {
  renderTopbar,
  renderSection,
  renderPalette,
  renderSurfaces,
  renderTypography,
  renderTypescale,
  renderSigils,
} from './DetailSections'

/** Safely set inner HTML without using innerHTML directly */
function setHtml(el: HTMLElement, html: string): void {
  el.appendChild(document.createRange().createContextualFragment(html))
}

export function renderDetail(design: DesignSystem): HTMLElement {
  const wrapper = el('div')
  wrapper.appendChild(renderTopbar(design))

  const page = el('div', {
    style: { maxWidth: '1200px', margin: '0 auto', padding: '0 40px 80px' },
  })

  // Preview iframe (optional)
  if (design.preview) {
    const previewWrap = el('div', { style: { marginTop: '32px', marginBottom: '48px' } })
    previewWrap.appendChild(el('div', {
      style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-fg-faint)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' },
    }, 'Preview'))
    const iframe = el('iframe', {
      src: `/designs/${design.slug}/${design.preview}`,
      style: { width: '100%', height: '500px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', display: 'block' },
    })
    previewWrap.appendChild(iframe)
    page.appendChild(previewWrap)
  }

  // Masthead
  const masthead = el('div', { style: { padding: '60px 0 50px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '64px' } })
  masthead.appendChild(el('div', {
    style: { fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--lib-accent-dim)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '16px' },
  }, 'Design Reference'))
  masthead.appendChild(el('div', {
    style: { fontFamily: 'var(--font-display)', fontSize: '3.8rem', lineHeight: '1.0', color: 'var(--lib-fg)', fontWeight: '600', letterSpacing: '0.03em' },
  }, design.name))
  masthead.appendChild(el('div', {
    style: { fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--lib-fg-muted)', marginTop: '12px', letterSpacing: '0.18em', textTransform: 'uppercase' },
  }, design.tagline))
  const overviewEl = el('div', {
    style: { maxWidth: '540px', marginTop: '24px', fontSize: '14px', color: 'var(--lib-fg-muted)', lineHeight: '1.75', fontWeight: '300' },
  })
  // Trusted content: parsed from author-controlled DESIGN.md
  setHtml(overviewEl, design.prose.overview)
  masthead.appendChild(overviewEl)
  page.appendChild(masthead)

  // Prose section descriptions keyed by num
  const sectionDescs = Object.fromEntries(design.prose.sections.map(s => [s.num, s.body]))

  page.appendChild(renderSection('01 — Pigments', 'Color palette', sectionDescs['01'] ?? '', renderPalette(design)))
  page.appendChild(renderSection('02 — Atmosphere', 'Surface tones', sectionDescs['02'] ?? '', renderSurfaces(design)))
  page.appendChild(renderSection('03 — Voice', 'Typography', sectionDescs['03'] ?? '', renderTypography(design)))
  page.appendChild(renderSection('04 — Cadence', 'Type scale', sectionDescs['04'] ?? '', renderTypescale(design)))

  if (design.sigils && design.sigils.length > 0) {
    page.appendChild(renderSection('05 — Sigils', 'Marks & ornament', sectionDescs['05'] ?? '', renderSigils(design)))
  }

  wrapper.appendChild(page)
  return wrapper
}
