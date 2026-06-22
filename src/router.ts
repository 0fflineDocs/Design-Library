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
      document.title = 'Design Library'
      root.appendChild(renderGallery(designs))
    } else {
      const design = designs.find(d => d.slug === hash)
      if (design) {
        document.title = `${design.name} — Design Library`
        root.appendChild(renderDetail(design))
      } else {
        document.title = 'Design Library'
        const notFound = document.createElement('p')
        notFound.style.cssText = 'padding:40px;color:#666;'
        notFound.textContent = `Design "${hash}" not found.`
        root.appendChild(notFound)
      }
    }

    window.scrollTo(0, 0)
  }

  window.addEventListener('hashchange', route)
  route()
}
