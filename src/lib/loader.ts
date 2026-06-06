import { parseDesignMd } from './parser'
import type { DesignSystem } from './types'

export async function loadDesigns(): Promise<DesignSystem[]> {
  // import.meta.glob returns { '/designs/slug/DESIGN.md': rawString, ... }
  const modules = import.meta.glob('/designs/*/DESIGN.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  }) as Record<string, string>

  const results: DesignSystem[] = []

  for (const [path, raw] of Object.entries(modules)) {
    const slug = path.split('/')[2]
    try {
      const design = parseDesignMd(raw, slug)
      design.raw = raw
      results.push(design)
    } catch (err) {
      console.error(`[design-library] Failed to parse ${path}:`, err)
    }
  }

  return results.sort((a, b) => a.name.localeCompare(b.name))
}
