# Design Library Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vite + TypeScript static site that renders DESIGN.md files as rich brand reference pages, deployable to Vercel.

**Architecture:** Hash-based router (`#/` gallery, `#/:slug` detail). DESIGN.md files in `designs/*/DESIGN.md` are read at build time via `import.meta.glob`. `preview.html` files live in `public/designs/*/` and are served statically. No framework — pure TypeScript DOM manipulation.

**Tech Stack:** Vite, TypeScript, gray-matter (frontmatter), marked (markdown → HTML), Vitest (tests)

---

## File Map

| File | Responsibility |
|------|---------------|
| `src/lib/types.ts` | All TypeScript interfaces (DesignSystem, PaletteColor, etc.) |
| `src/lib/parser.ts` | `parseDesignMd(raw, slug)` → `DesignSystem`. Pure function, testable. |
| `src/lib/loader.ts` | `loadDesigns()` — uses `import.meta.glob`, calls parser, returns `DesignSystem[]` |
| `src/router.ts` | Hash-based router — reads `location.hash`, mounts Gallery or Detail |
| `src/main.ts` | Entry — calls `loadDesigns()`, wires router, listens to hashchange |
| `src/pages/Gallery.ts` | `renderGallery(designs)` → DOM node for the grid page |
| `src/pages/Detail.ts` | `renderDetail(design)` → DOM node for the full brand reference page |
| `src/styles/global.css` | CSS reset, CSS vars for library chrome (not tied to any design) |
| `tests/parser.test.ts` | Unit tests for parser.ts |
| `designs/hermes-labs/DESIGN.md` | Pilot design data |
| `public/designs/hermes-labs/preview.html` | Existing HTML copied as static asset |
| `public/designs/hermes-labs/sigils/*.svg` | Three SVG mark files |
| `index.html` | Vite entry HTML |
| `vite.config.ts` | Vite config |
| `tsconfig.json` | TypeScript config |
| `package.json` | Dependencies |

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/styles/global.css`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "design-library",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "gray-matter": "^4.0.3",
    "marked": "^12.0.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "vite": "^5.2.0",
    "vitest": "^1.5.0"
  }
}
```

- [ ] **Step 2: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "skipLibCheck": true,
    "lib": ["ES2020", "DOM"]
  },
  "include": ["src", "tests"]
}
```

- [ ] **Step 3: Create vite.config.ts**

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  test: {
    environment: 'node',
  },
})
```

- [ ] **Step 4: Create index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Design Library</title>
    <link rel="stylesheet" href="/src/styles/global.css" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 5: Create src/styles/global.css**

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --lib-bg:        #0a0a0a;
  --lib-surface:   #111111;
  --lib-border:    rgba(255, 255, 255, 0.08);
  --lib-fg:        #e8e2d5;
  --lib-fg-muted:  #9a9285;
  --lib-fg-faint:  #5a5650;
  --lib-accent:    #d4af37;
  --lib-accent-dim:#b8922a;

  --font-display:  "Cormorant Garamond", Georgia, serif;
  --font-ui:       "Manrope", -apple-system, sans-serif;
  --font-mono:     "JetBrains Mono", monospace;
}

html, body {
  background: var(--lib-bg);
  color: var(--lib-fg);
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

#app { min-height: 100vh; }

a { color: inherit; text-decoration: none; }
```

- [ ] **Step 6: Install dependencies**

```bash
cd /Users/cipher/projects/Design-Library && npm install
```

Expected: `node_modules/` created, no errors.

- [ ] **Step 7: Verify dev server starts**

```bash
cd /Users/cipher/projects/Design-Library && npm run dev
```

Expected: Vite starts, page loads at `http://localhost:5173` (blank, that's fine — #app is empty).

Kill with Ctrl+C.

- [ ] **Step 8: Commit**

```bash
cd /Users/cipher/projects/Design-Library
git init
git add package.json tsconfig.json vite.config.ts index.html src/styles/global.css
git commit -m "feat: scaffold Vite + TypeScript project"
```

---

## Task 2: TypeScript Types

**Files:**
- Create: `src/lib/types.ts`

- [ ] **Step 1: Create src/lib/types.ts**

```typescript
export interface PaletteColor {
  name: string
  hex: string
  role: string
  token?: string
}

export interface Surface {
  name: string
  token: string
  hex: string
}

export interface TypefaceSpec {
  fontFamily: string
  label: string
  weights: string[]
}

export interface Typography {
  display?: TypefaceSpec
  ui?: TypefaceSpec
  mono?: TypefaceSpec
}

export interface TypeScaleEntry {
  id: string
  label: string
  font: 'display' | 'ui' | 'mono'
  size: number
  lh: number
  text: string
}

export interface Sigil {
  label: string
  file: string
  caption: string
}

export interface ProseSection {
  num: string    // e.g. "01"
  title: string  // e.g. "Pigments"
  body: string   // rendered HTML
}

export interface DesignSystem {
  slug: string
  name: string
  tagline: string
  preview?: string
  palette: PaletteColor[]
  surfaces: Surface[]
  typography: Typography
  typescale: TypeScaleEntry[]
  spacing: Record<string, string>
  rounded: Record<string, string>
  sigils?: Sigil[]
  prose: {
    overview: string       // rendered HTML of ## Overview section
    sections: ProseSection[]
  }
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/cipher/projects/Design-Library
git add src/lib/types.ts
git commit -m "feat: add TypeScript types for DesignSystem"
```

---

## Task 3: Parser — Tests First

**Files:**
- Create: `tests/parser.test.ts`
- Create: `src/lib/parser.ts`

- [ ] **Step 1: Create tests/parser.test.ts**

```typescript
import { describe, it, expect } from 'vitest'
import { parseDesignMd } from '../src/lib/parser'

const MINIMAL_MD = `---
name: Test Design
tagline: A test design system.
palette:
  - name: Black
    hex: "#000000"
    role: Background
surfaces:
  - name: Base
    token: --base
    hex: "#000000"
typography:
  ui:
    fontFamily: Inter
    label: Interface · Inter
    weights: [Regular 400]
typescale:
  - id: B1
    label: BODY
    font: ui
    size: 14
    lh: 18
    text: Sample text here.
spacing:
  sm: 8px
rounded:
  md: 4px
---

## Overview

This is the overview paragraph.

## 01 — Palette

Palette description here.
`

describe('parseDesignMd', () => {
  it('parses name and tagline', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.name).toBe('Test Design')
    expect(result.tagline).toBe('A test design system.')
    expect(result.slug).toBe('test-design')
  })

  it('parses palette', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.palette).toHaveLength(1)
    expect(result.palette[0]).toMatchObject({
      name: 'Black',
      hex: '#000000',
      role: 'Background',
    })
  })

  it('parses surfaces', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.surfaces).toHaveLength(1)
    expect(result.surfaces[0]).toMatchObject({ name: 'Base', token: '--base', hex: '#000000' })
  })

  it('parses typography', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.typography.ui?.fontFamily).toBe('Inter')
    expect(result.typography.ui?.weights).toEqual(['Regular 400'])
  })

  it('parses typescale', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.typescale).toHaveLength(1)
    expect(result.typescale[0]).toMatchObject({ id: 'B1', font: 'ui', size: 14 })
  })

  it('parses spacing and rounded', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.spacing).toEqual({ sm: '8px' })
    expect(result.rounded).toEqual({ md: '4px' })
  })

  it('extracts overview prose as HTML', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.prose.overview).toContain('This is the overview paragraph.')
  })

  it('extracts numbered sections', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.prose.sections).toHaveLength(1)
    expect(result.prose.sections[0]).toMatchObject({
      num: '01',
      title: 'Palette',
    })
    expect(result.prose.sections[0].body).toContain('Palette description here.')
  })

  it('returns undefined preview when not in frontmatter', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.preview).toBeUndefined()
  })

  it('parses optional preview field', () => {
    const mdWithPreview = MINIMAL_MD.replace('tagline: A test design system.', 'tagline: A test design system.\npreview: preview.html')
    const result = parseDesignMd(mdWithPreview, 'test-design')
    expect(result.preview).toBe('preview.html')
  })

  it('returns undefined sigils when not in frontmatter', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.sigils).toBeUndefined()
  })

  it('parses optional sigils field', () => {
    const mdWithSigils = MINIMAL_MD.replace(
      'spacing:',
      `sigils:
  - label: Test Mark
    file: test.svg
    caption: test caption
spacing:`
    )
    const result = parseDesignMd(mdWithSigils, 'test-design')
    expect(result.sigils).toHaveLength(1)
    expect(result.sigils![0].label).toBe('Test Mark')
  })
})
```

- [ ] **Step 2: Run tests — verify they all fail**

```bash
cd /Users/cipher/projects/Design-Library && npm test
```

Expected: All tests fail with "Cannot find module '../src/lib/parser'".

- [ ] **Step 3: Create src/lib/parser.ts**

```typescript
import matter from 'gray-matter'
import { marked } from 'marked'
import type {
  DesignSystem, PaletteColor, Surface, TypefaceSpec,
  Typography, TypeScaleEntry, Sigil, ProseSection
} from './types'

marked.setOptions({ async: false })

function renderMd(md: string): string {
  return marked(md) as string
}

function parseProse(body: string): DesignSystem['prose'] {
  // Split on ## headings
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
```

- [ ] **Step 4: Run tests — verify they all pass**

```bash
cd /Users/cipher/projects/Design-Library && npm test
```

Expected: All tests pass. If any fail, fix `parser.ts` before proceeding.

- [ ] **Step 5: Commit**

```bash
cd /Users/cipher/projects/Design-Library
git add src/lib/parser.ts tests/parser.test.ts
git commit -m "feat: add DESIGN.md parser with tests"
```

---

## Task 4: Loader

**Files:**
- Create: `src/lib/loader.ts`

- [ ] **Step 1: Create src/lib/loader.ts**

```typescript
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
```

- [ ] **Step 2: Commit**

```bash
cd /Users/cipher/projects/Design-Library
git add src/lib/loader.ts
git commit -m "feat: add design loader using import.meta.glob"
```

---

## Task 5: Router + Entry

**Files:**
- Create: `src/router.ts`
- Create: `src/main.ts`

- [ ] **Step 1: Create src/router.ts**

```typescript
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
```

- [ ] **Step 2: Create src/main.ts**

```typescript
import { loadDesigns } from './lib/loader'
import { createRouter } from './router'
import './styles/global.css'

async function main(): Promise<void> {
  const designs = await loadDesigns()
  const root = document.getElementById('app')
  if (!root) throw new Error('#app not found')
  createRouter(root, designs)
}

main().catch(console.error)
```

- [ ] **Step 3: Commit**

```bash
cd /Users/cipher/projects/Design-Library
git add src/router.ts src/main.ts
git commit -m "feat: add hash router and entry point"
```

---

## Task 6: Gallery Page

**Files:**
- Create: `src/pages/Gallery.ts`

- [ ] **Step 1: Create src/pages/Gallery.ts**

```typescript
import type { DesignSystem } from '../lib/types'

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Partial<HTMLElementTagNameMap[K]> & { style?: Partial<CSSStyleDeclaration> } = {},
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
```

- [ ] **Step 2: Create a minimal placeholder DESIGN.md to test the gallery**

```bash
mkdir -p /Users/cipher/projects/Design-Library/designs/test-design
```

Create `designs/test-design/DESIGN.md`:

```yaml
---
name: Test Design
tagline: Placeholder for development.
palette:
  - name: Black
    hex: "#111111"
    role: Background
  - name: Accent
    hex: "#d4af37"
    role: Accent color
surfaces:
  - name: Base
    token: --base
    hex: "#111111"
typography:
  ui:
    fontFamily: Manrope
    label: Interface · Manrope
    weights: [Regular 400]
typescale:
  - id: B1
    label: BODY
    font: ui
    size: 14
    lh: 18
    text: Sample text.
spacing:
  sm: 8px
rounded:
  md: 4px
---

## Overview

Test design overview.

## 01 — Colors

Test colors section.
```

- [ ] **Step 3: Run dev server and verify gallery renders**

```bash
cd /Users/cipher/projects/Design-Library && npm run dev
```

Open `http://localhost:5173`. Should see "Design Library / All Designs" heading and one card for "Test Design" with color swatches.

Kill with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
cd /Users/cipher/projects/Design-Library
git add src/pages/Gallery.ts designs/test-design/DESIGN.md
git commit -m "feat: add gallery page with design cards"
```

---

## Task 7: Detail Page

**Files:**
- Create: `src/pages/Detail.ts`

- [ ] **Step 1: Create src/pages/Detail.ts**

```typescript
import type { DesignSystem, TypeScaleEntry } from '../lib/types'

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Partial<HTMLElementTagNameMap[K]> & { style?: Partial<CSSStyleDeclaration> } = {},
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

const HAIR = '1px solid rgba(255,255,255,0.08)'

function renderTopbar(design: DesignSystem): HTMLElement {
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
    // The raw DESIGN.md content is not stored in DesignSystem.
    // We fetch it from the same glob path used by loader.ts.
    const modules = import.meta.glob('/designs/*/DESIGN.md', { eager: true, as: 'raw' }) as Record<string, string>
    const key = `/designs/${design.slug}/DESIGN.md`
    const raw = modules[key] ?? ''
    navigator.clipboard.writeText(raw).then(() => {
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

function renderSection(
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
  descEl.innerHTML = desc

  meta.appendChild(numEl)
  meta.appendChild(titleEl)
  meta.appendChild(descEl)
  section.appendChild(meta)
  section.appendChild(content)
  return section
}

function renderPalette(design: DesignSystem): HTMLElement {
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
    const swatch = el('div', {
      style: { height: '100px', background: color.hex },
    })
    const body = el('div', {
      style: {
        padding: '14px 16px',
        borderTop: HAIR,
      },
    })
    const name = el('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '15px',
        color: 'var(--lib-fg)',
        letterSpacing: '0.04em',
      },
    }, color.name)
    const role = el('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--lib-fg-muted)',
        marginTop: '3px',
        letterSpacing: '0.06em',
      },
    }, color.role)
    const hex = el('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--lib-fg-faint)',
        marginTop: '5px',
        opacity: '0.65',
      },
    }, color.hex)
    body.appendChild(name)
    body.appendChild(role)
    body.appendChild(hex)
    card.appendChild(swatch)
    card.appendChild(body)
    grid.appendChild(card)
  }

  return grid
}

function renderSurfaces(design: DesignSystem): HTMLElement {
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
    const hexEl = el('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: '0.14em',
      },
    }, surface.hex)
    const bottom = el('div')
    const nameEl = el('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '15px',
        color: 'rgba(255,255,255,0.85)',
        letterSpacing: '0.04em',
      },
    }, surface.name)
    const tokenEl = el('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'rgba(255,255,255,0.35)',
        marginTop: '2px',
      },
    }, surface.token)
    bottom.appendChild(nameEl)
    bottom.appendChild(tokenEl)
    tile.appendChild(hexEl)
    tile.appendChild(bottom)
    row.appendChild(tile)
  }

  return row
}

function renderTypography(design: DesignSystem): HTMLElement {
  const specs = [design.typography.display, design.typography.ui].filter(Boolean)
  const grid = el('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${specs.length}, 1fr)`,
      gap: '1px',
      background: 'rgba(212,175,55,0.1)',
      border: HAIR,
    },
  })

  for (const spec of specs) {
    if (!spec) continue
    const isDisplay = spec === design.typography.display

    const card = el('div', {
      style: {
        background: '#0a0a0a',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
      },
    })
    const label = el('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--lib-accent-dim)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: '12px',
      },
    }, spec.label)

    const aaEl = el('div', {
      style: {
        fontFamily: isDisplay ? 'var(--font-display)' : 'var(--font-ui)',
        fontSize: '96px',
        lineHeight: '0.9',
        color: isDisplay ? 'var(--lib-accent)' : 'var(--lib-fg-muted)',
        fontWeight: isDisplay ? '400' : '300',
        letterSpacing: isDisplay ? '0.03em' : '-0.02em',
      },
    }, 'Aa')

    const sentence = el('div', {
      style: {
        marginTop: '20px',
        fontFamily: isDisplay ? 'var(--font-display)' : 'var(--font-ui)',
        fontSize: isDisplay ? '1.05rem' : '14px',
        color: 'var(--lib-fg)',
        lineHeight: isDisplay ? '1.45' : '1.7',
        letterSpacing: isDisplay ? '0.03em' : undefined,
        fontWeight: isDisplay ? '400' : '300',
        flex: '1',
      },
    }, isDisplay
      ? 'Intelligence meets elegance. Precision in every letter.'
      : 'For the working interface. Body copy and short labels live here.')

    const weights = el('div', {
      style: {
        marginTop: '20px',
        paddingTop: '14px',
        borderTop: HAIR,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
      },
    })
    for (const w of spec.weights) {
      weights.appendChild(el('span', {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--lib-fg-faint)',
          letterSpacing: '0.1em',
        },
      }, `· ${w}`))
    }

    card.appendChild(label)
    card.appendChild(aaEl)
    card.appendChild(sentence)
    card.appendChild(weights)
    grid.appendChild(card)
  }

  return grid
}

function fontFamilyForEntry(entry: TypeScaleEntry, design: DesignSystem): string {
  if (entry.font === 'display') return 'var(--font-display)'
  if (entry.font === 'mono') return 'var(--font-mono)'
  return 'var(--font-ui)'
}

function renderTypescale(design: DesignSystem): HTMLElement {
  const table = el('div', { style: { border: HAIR } })

  for (let i = 0; i < design.typescale.length; i++) {
    const entry = design.typescale[i]
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

    const id = el('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--lib-accent-dim)',
        letterSpacing: '0.14em',
      },
    }, entry.id)

    const label = el('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--lib-fg-faint)',
        letterSpacing: '0.1em',
      },
    }, entry.label)

    const sample = el('span', {
      style: {
        fontFamily: fontFamilyForEntry(entry, design),
        fontSize: `${Math.min(entry.size, 48)}px`,
        lineHeight: '1',
        color: 'var(--lib-fg)',
        letterSpacing: entry.font === 'display' ? '0.03em' : undefined,
        fontWeight: entry.font === 'ui' ? '300' : '400',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    }, entry.text)

    const size = el('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--lib-fg-faint)',
        textAlign: 'right',
      },
    }, `${entry.size}/${entry.lh}`)

    row.appendChild(id)
    row.appendChild(label)
    row.appendChild(sample)
    row.appendChild(size)
    table.appendChild(row)
  }

  return table
}

function renderSigils(design: DesignSystem): HTMLElement {
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
      style: {
        background: '#0a0a0a',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      },
    })

    const labelEl = el('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--lib-accent-dim)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
      },
    }, sigil.label)

    const img = el('img', {
      src: `/designs/${design.slug}/sigils/${sigil.file}`,
      alt: sigil.label,
      style: { width: '80px', height: '80px' },
    })

    const caption = el('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--lib-fg-faint)',
        letterSpacing: '0.1em',
      },
    }, sigil.caption)

    card.appendChild(labelEl)
    card.appendChild(img)
    card.appendChild(caption)
    grid.appendChild(card)
  }

  return grid
}

export function renderDetail(design: DesignSystem): HTMLElement {
  const wrapper = el('div')
  wrapper.appendChild(renderTopbar(design))

  const page = el('div', {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px 80px',
    },
  })

  // Preview iframe (optional)
  if (design.preview) {
    const previewWrap = el('div', {
      style: { marginTop: '32px', marginBottom: '48px' },
    })
    const previewLabel = el('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--lib-fg-faint)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '8px',
      },
    }, 'Preview')
    const iframe = el('iframe', {
      src: `/designs/${design.slug}/${design.preview}`,
      style: {
        width: '100%',
        height: '500px',
        border: HAIR,
        borderRadius: '4px',
        display: 'block',
      },
    })
    ;(iframe as HTMLIFrameElement).allow = ''
    previewWrap.appendChild(previewLabel)
    previewWrap.appendChild(iframe)
    page.appendChild(previewWrap)
  }

  // Masthead
  const masthead = el('div', {
    style: {
      padding: '60px 0 50px',
      borderBottom: HAIR,
      marginBottom: '64px',
    },
  })
  const eyebrow = el('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      color: 'var(--lib-accent-dim)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      marginBottom: '16px',
    },
  }, 'Design Reference')
  const mastheadName = el('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '3.8rem',
      lineHeight: '1.0',
      color: 'var(--lib-fg)',
      fontWeight: '600',
      letterSpacing: '0.03em',
    },
  }, design.name)
  const mastheadSub = el('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--lib-fg-muted)',
      marginTop: '12px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
    },
  }, design.tagline)
  const mastheadDesc = el('div', {
    style: {
      maxWidth: '540px',
      marginTop: '24px',
      fontSize: '14px',
      color: 'var(--lib-fg-muted)',
      lineHeight: '1.75',
      fontWeight: '300',
    },
  })
  mastheadDesc.innerHTML = design.prose.overview
  masthead.appendChild(eyebrow)
  masthead.appendChild(mastheadName)
  masthead.appendChild(mastheadSub)
  masthead.appendChild(mastheadDesc)
  page.appendChild(masthead)

  // Numbered prose sections guide section descriptions
  const sectionDescs = Object.fromEntries(
    design.prose.sections.map(s => [s.num, s.body])
  )

  // 01 Palette
  const paletteDesc = sectionDescs['01'] ?? ''
  page.appendChild(renderSection('01 — Pigments', 'Color palette', paletteDesc, renderPalette(design)))

  // 02 Surfaces
  const surfaceDesc = sectionDescs['02'] ?? ''
  page.appendChild(renderSection('02 — Atmosphere', 'Surface tones', surfaceDesc, renderSurfaces(design)))

  // 03 Typography
  const typeDesc = sectionDescs['03'] ?? ''
  page.appendChild(renderSection('03 — Voice', 'Typography', typeDesc, renderTypography(design)))

  // 04 Type scale
  const scaleDesc = sectionDescs['04'] ?? ''
  page.appendChild(renderSection('04 — Cadence', 'Type scale', scaleDesc, renderTypescale(design)))

  // 05 Sigils (optional)
  if (design.sigils && design.sigils.length > 0) {
    const sigilDesc = sectionDescs['05'] ?? ''
    page.appendChild(renderSection('05 — Sigils', 'Marks & ornament', sigilDesc, renderSigils(design)))
  }

  wrapper.appendChild(page)
  return wrapper
}
```

- [ ] **Step 2: Update test-design DESIGN.md to include all required fields for smoke-test**

Update `designs/test-design/DESIGN.md` — add a second palette color and surfaces entry so the grid renders (add one more `palette` entry and one more `surfaces` entry to the existing file).

- [ ] **Step 3: Run dev and verify the detail page renders**

```bash
cd /Users/cipher/projects/Design-Library && npm run dev
```

Open `http://localhost:5173/#/test-design`. Should see the full detail page with topbar, masthead, palette grid, surfaces row, typography specimens, type scale table.

Kill with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
cd /Users/cipher/projects/Design-Library
git add src/pages/Detail.ts designs/test-design/DESIGN.md
git commit -m "feat: add detail page with all sections"
```

---

## Task 8: Hermes Labs DESIGN.md

**Files:**
- Create: `designs/hermes-labs/DESIGN.md`
- Create: `public/designs/hermes-labs/preview.html` (copy)
- Create: `public/designs/hermes-labs/sigils/hermes-mark.svg`
- Create: `public/designs/hermes-labs/sigils/diamond-chevron.svg`
- Create: `public/designs/hermes-labs/sigils/profile-sigil.svg`

- [ ] **Step 1: Create directories**

```bash
mkdir -p /Users/cipher/projects/Design-Library/designs/hermes-labs
mkdir -p /Users/cipher/projects/Design-Library/public/designs/hermes-labs/sigils
```

- [ ] **Step 2: Create designs/hermes-labs/DESIGN.md**

```yaml
---
name: Hermes Labs Design System
tagline: Obsidian gold. Luxury dark design system.
preview: preview.html

palette:
  - name: Obsidian Black
    hex: "#0A0A0A"
    role: Primary surface — the void
    token: obsidian
  - name: Antique Gold
    hex: "#D4AF37"
    role: Identity · emphasis · sigil
    token: gold
  - name: Copper Ember
    hex: "#B67333"
    role: Warm secondary · warnings
    token: copper
  - name: Champagne Ivory
    hex: "#E5DFD0"
    role: Primary text on dark
    token: ivory
  - name: Frost Silver
    hex: "#B7BDC6"
    role: Secondary text · data
    token: silver
  - name: Deep Moss
    hex: "#172B22"
    role: State · verified · clear
    token: moss

surfaces:
  - name: Obsidian
    token: --obsidian
    hex: "#0A0A0A"
  - name: Surface
    token: --surface
    hex: "#121210"
  - name: Elevated
    token: --elevated
    hex: "#1A1A16"
  - name: Elevated Hi
    token: --elevated-hi
    hex: "#222019"

typography:
  display:
    fontFamily: Cormorant Garamond
    label: Display · Cormorant Garamond
    weights: [Regular, Italic, Medium, Semibold]
  ui:
    fontFamily: Manrope
    label: Interface · Manrope
    weights: [Light 300, Regular 400, Medium 500, Semibold 600]
  mono:
    fontFamily: JetBrains Mono
    label: Mono · JetBrains Mono
    weights: [Regular 400, Medium 500]

typescale:
  - id: D1
    label: TITLE
    font: display
    size: 78
    lh: 97
    text: Hermes Labs
  - id: D2
    label: HERO
    font: display
    size: 46
    lh: 57
    text: Six agents have been at work
  - id: D3
    label: SECTION
    font: display
    size: 32
    lh: 40
    text: On the 60ms shoulder
  - id: D4
    label: SUBTITLE
    font: display
    size: 20
    lh: 25
    text: Visual branding — design reference
  - id: B1
    label: BODY
    font: ui
    size: 14
    lh: 18
    text: Distills sprawling primary sources into structured arguments.
  - id: B2
    label: BODY SMALL
    font: ui
    size: 12
    lh: 15
    text: Provenance verified on 178 of 184 sources. Six items flagged.
  - id: L1
    label: LABEL · MONO
    font: mono
    size: 11
    lh: 14
    text: ARC-3175 · CORRESPONDENCE · 1488
  - id: L2
    label: EYEBROW
    font: ui
    size: 10
    lh: 13
    text: INTELLIGENCE · ELEGANCE · ADVANCEMENT

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px

rounded:
  sm: 2px
  md: 4px
  lg: 8px

sigils:
  - label: Hermes Mark
    file: hermes-mark.svg
    caption: hermes-mark.svg
  - label: Diamond Chevron
    file: diamond-chevron.svg
    caption: favicon / corner tick
  - label: Profile Sigil
    file: profile-sigil.svg
    caption: agent portrait fallback
---

## Overview

**Intelligence. Elegance. Advancement.** A dark control center meets luxury watch face. Warm blacks, antique gold, precision typography. Every neutral is tinted toward the brand hue — nothing is pure #000 or #fff.

## 01 — Pigments

Drawn from the visual moodboard. The system is drenched in obsidian, with antique gold reserved for moments of emphasis. Saturation is restrained on purpose.

## 02 — Atmosphere

Where black meets black. Four obsidian tints build hierarchy without raising the volume.

## 03 — Voice

Cormorant Garamond carries refined expression — titles, pull-quotes, agent names. Manrope handles the working interface. JetBrains Mono is reserved for data, identifiers, and the machine's voice.

## 04 — Cadence

Two parallel scales — one for the display register, one for the working interface.

## 05 — Sigils

The Hermes mark, the diamond chevron, the corner tick. Use sparingly. Marks are reserved for moments of identity, not decoration.
```

- [ ] **Step 3: Copy preview.html from existing design**

```bash
cp "/Users/cipher/projects/Designs/Hermes Labs Design System/index.html" \
   /Users/cipher/projects/Design-Library/public/designs/hermes-labs/preview.html
```

- [ ] **Step 4: Create public/designs/hermes-labs/sigils/hermes-mark.svg**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <g fill="none" stroke="#D4AF37" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M18 66 L50 38 L82 66"/>
    <path d="M28 80 L50 60 L72 80"/>
  </g>
  <polygon points="50,6 60,18 50,30 40,18" fill="#D4AF37"/>
</svg>
```

- [ ] **Step 5: Create public/designs/hermes-labs/sigils/diamond-chevron.svg**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <polygon points="32,3 61,32 32,61 3,32" stroke="#D4AF37" stroke-width="1.5" fill="none" opacity="0.55"/>
  <path d="M16 38 L32 21 L48 38" stroke="#E6C552" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="32" cy="32" r="2.4" fill="#E6C552"/>
</svg>
```

- [ ] **Step 6: Create public/designs/hermes-labs/sigils/profile-sigil.svg**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <circle cx="32" cy="32" r="28" stroke="#D4AF37" stroke-width="1.5" fill="none" opacity="0.45"/>
  <circle cx="32" cy="24" r="8" fill="#D4AF37" opacity="0.8"/>
  <path d="M16 52 Q32 36 48 52" stroke="#D4AF37" stroke-width="2" fill="none" opacity="0.6"/>
</svg>
```

- [ ] **Step 7: Verify in browser**

```bash
cd /Users/cipher/projects/Design-Library && npm run dev
```

Open `http://localhost:5173`. Gallery should show both "Hermes Labs Design System" and "Test Design". Click Hermes Labs — detail page should render with all 5 sections including sigils and the iframe preview.

Kill with Ctrl+C.

- [ ] **Step 8: Commit**

```bash
cd /Users/cipher/projects/Design-Library
git add designs/hermes-labs/ public/designs/hermes-labs/
git commit -m "feat: add Hermes Labs DESIGN.md and assets"
```

---

## Task 9: Clean Up and Deploy

**Files:**
- Delete: `designs/test-design/` (placeholder, no longer needed)
- Create: `.gitignore`
- Create: `vercel.json` (minimal, only if needed)

- [ ] **Step 1: Add .gitignore**

```
node_modules/
dist/
.DS_Store
.superpowers/
```

- [ ] **Step 2: Remove placeholder test design**

```bash
rm -rf /Users/cipher/projects/Design-Library/designs/test-design
```

- [ ] **Step 3: Run build and verify**

```bash
cd /Users/cipher/projects/Design-Library && npm run build
```

Expected: `dist/` created, no TypeScript errors, no build errors.

- [ ] **Step 4: Preview the built site**

```bash
cd /Users/cipher/projects/Design-Library && npm run preview
```

Open `http://localhost:4173`. Verify gallery loads, Hermes Labs detail page works, copy button works, back navigation works.

Kill with Ctrl+C.

- [ ] **Step 5: Verify TypeScript passes**

```bash
cd /Users/cipher/projects/Design-Library && npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 6: Final commit**

```bash
cd /Users/cipher/projects/Design-Library
git add .gitignore
git rm -r designs/test-design 2>/dev/null || true
git commit -m "feat: complete design library with Hermes Labs pilot"
```

- [ ] **Step 7: Push to GitHub**

```bash
# Create repo on GitHub first, then:
git remote add origin https://github.com/0fflineDocs/design-library.git
git branch -M main
git push -u origin main
```

- [ ] **Step 8: Deploy to Vercel**

Connect the GitHub repo in Vercel dashboard:
- Framework preset: Vite
- Build command: `vite build`
- Output directory: `dist`
- No environment variables needed

Or via CLI:
```bash
npx vercel --prod
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] Vite + TS project — Task 1
- [x] DESIGN.md format (gray-matter + marked) — Task 3
- [x] Loader with import.meta.glob — Task 4
- [x] Hash-based router — Task 5
- [x] Gallery grid page — Task 6
- [x] Detail page: topbar, masthead, palette, surfaces, typography, type scale, sigils (optional) — Task 7
- [x] Copy DESIGN.md button — Task 7
- [x] Preview iframe (optional) — Task 7
- [x] Hermes Labs DESIGN.md as pilot — Task 8
- [x] Vercel deployment — Task 9

**Type consistency:**
- `parseDesignMd` returns `DesignSystem` — used by loader, gallery, detail ✓
- `renderGallery(designs: DesignSystem[])` ✓
- `renderDetail(design: DesignSystem)` ✓
- `sigils` is `Sigil[] | undefined` — checked with `design.sigils && design.sigils.length > 0` before rendering ✓

**No placeholders:** All steps have exact code or exact commands. ✓
