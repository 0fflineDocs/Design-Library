import { parseDesignMd } from './parser'
import type { DesignSystem } from './types'

export async function loadDesigns(): Promise<DesignSystem[]> {
  // import.meta.glob returns { '/designs/slug/DESIGN.md': rawString, ... }
  const modules = import.meta.glob('/designs/*/DESIGN.md', {
    eager: true,
    as: 'raw',
  }) as Record<string, string>

  return Object.entries(modules).map(([path, raw]) => {
    // Extract slug from path: '/designs/hermes-labs/DESIGN.md' → 'hermes-labs'
    const slug = path.split('/')[2]
    return parseDesignMd(raw, slug)
  }).sort((a, b) => a.name.localeCompare(b.name))
}
