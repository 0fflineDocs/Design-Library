import matter from 'gray-matter'
import { marked } from 'marked'
import type {
  DesignSystem, PaletteColor, Surface, TypefaceSpec,
  Typography, TypeScaleEntry, Sigil, ProseSection
} from './types'

function renderMd(md: string): string {
  const result = marked.parse(md)
  if (typeof result !== 'string') {
    // marked v12 returns string synchronously when no async hooks registered
    return String(result)
  }
  return result
}

function parseProse(body: string): DesignSystem['prose'] {
  const sections = body.split(/^## /m).filter(Boolean)

  let overview = ''
  const numbered: ProseSection[] = []

  for (const section of sections) {
    const newline = section.indexOf('\n')
    const heading = newline === -1 ? section : section.slice(0, newline)
    const content = newline === -1 ? '' : section.slice(newline + 1).trim()

    const numberedMatch = heading.match(/^(\d{2})\s*[—–-]\s*(.+)$/)
    if (numberedMatch) {
      numbered.push({
        num: numberedMatch[1],
        title: numberedMatch[2].trim(),
        body: renderMd(content),
      })
    } else if (heading.trim().toLowerCase() === 'overview') {
      overview = renderMd(content)
    }
  }

  return { overview, sections: numbered }
}

export function parseDesignMd(raw: string, slug: string): DesignSystem {
  const { data, content } = matter(raw)

  const typography: Typography = {}
  if (data.typography?.display) {
    typography.display = data.typography.display as TypefaceSpec
  }
  if (data.typography?.ui) {
    typography.ui = data.typography.ui as TypefaceSpec
  }
  if (data.typography?.mono) {
    typography.mono = data.typography.mono as TypefaceSpec
  }

  return {
    slug,
    name: String(data.name ?? ''),
    tagline: String(data.tagline ?? ''),
    preview: data.preview !== undefined ? String(data.preview) : undefined,
    palette: (data.palette ?? []) as PaletteColor[],
    surfaces: (data.surfaces ?? []) as Surface[],
    typography,
    typescale: (data.typescale ?? []) as TypeScaleEntry[],
    spacing: (data.spacing ?? {}) as Record<string, string>,
    rounded: (data.rounded ?? {}) as Record<string, string>,
    sigils: data.sigils !== undefined ? (data.sigils as Sigil[]) : undefined,
    prose: parseProse(content),
  }
}
