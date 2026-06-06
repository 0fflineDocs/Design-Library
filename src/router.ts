import type { DesignSystem } from './lib/types'
import { renderGallery } from './pages/Gallery'
import { renderDetail } from './pages/Detail'

export function createRouter(
  root: HTMLElement,
  designs: DesignSystem[]
): void {
  function route(): void {
    const hash = location.hash.replace(/^#\/?/, '')
    root.innerHTML = ''

    if (!hash) {
      root.appendChild(renderGallery(designs))
    } else {
      const design = designs.find(d => d.slug === hash)
      if (design) {
        root.appendChild(renderDetail(design))
      } else {
        root.innerHTML = `<p style="padding:40px;color:#666;">Design "${hash}" not found.</p>`
      }
    }

    window.scrollTo(0, 0)
  }

  window.addEventListener('hashchange', route)
  route()
}
