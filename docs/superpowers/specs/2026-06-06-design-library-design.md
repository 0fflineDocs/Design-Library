# Design Library — Spec

**Date:** 2026-06-06  
**Status:** Approved

---

## Overview

A Vite + TypeScript static site that serves as a visual browser for design systems stored as `DESIGN.md` files. Each design is documented in a structured markdown format (YAML frontmatter + prose) and rendered into a rich brand reference page. The site deploys to Vercel via GitHub.

---

## DESIGN.md Format

Each design lives in `designs/<slug>/DESIGN.md`. The format follows the `google-labs-code/design.md` specification: machine-readable YAML frontmatter for exact design tokens, plus markdown prose sections explaining rationale.

```yaml
---
name: Hermes Labs Design System
tagline: Obsidian gold. Luxury dark design system.
preview: preview.html          # optional — relative path to existing HTML file

palette:
  - name: Obsidian Black
    hex: "#0A0A0A"
    role: Primary surface — the void
    token: obsidian
  - name: Antique Gold
    hex: "#D4AF37"
    role: Identity · emphasis · sigil
    token: gold
  # ... additional colors

surfaces:
  - name: Obsidian
    token: --obsidian
    hex: "#0A0A0A"
  # ... additional surfaces (3–4 tiers)

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

typescale:
  - id: D1
    label: TITLE
    font: display        # references typography key
    size: 78
    lh: 97
    text: Hermes Labs
  - id: B1
    label: BODY
    font: ui
    size: 14
    lh: 18
    text: Sample body text here.
  # ... full scale entries

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

sigils:                  # OPTIONAL — omit if design has no custom marks
  - label: Hermes Mark
    file: hermes-mark.svg
    caption: hermes-mark.svg
  - label: Diamond Chevron
    file: diamond-chevron.svg
    caption: favicon / corner tick
---

## Overview

Brand description and design philosophy.

## 01 — [Section Name]

Rationale for color palette decisions.

## 02 — [Section Name]

Rationale for surface tones.

## 03 — [Section Name]

Rationale for typography choices.

## 04 — [Section Name]

Rationale for type scale.

## 05 — [Section Name]    ← only if sigils present

Rationale for marks and ornament.
```

**Rules:**
- `sigils` key is optional. If absent, the sigils section is not rendered.
- `preview` key is optional. If present, an iframe is embedded at the top of the detail page.
- Prose section headings are free-form — each design writes its own cultural labels (e.g. "01 — Pigments" vs "01 — Depth").
- `typography` must have at least one key (`display` or `ui`). `mono` is optional.

---

## Architecture

```
/Users/cipher/projects/Design-Library/
├── src/
│   ├── main.ts                  # entry — sets up hash router
│   ├── router.ts                # hash-based router (#/ and #/:slug)
│   ├── pages/
│   │   ├── Gallery.ts           # grid of all design cards
│   │   └── Detail.ts            # full brand reference page per design
│   ├── lib/
│   │   ├── loader.ts            # import.meta.glob + parse DESIGN.md files
│   │   ├── parser.ts            # gray-matter (frontmatter) + marked (prose)
│   │   └── types.ts             # DesignSystem, Palette, Typography, etc.
│   └── styles/
│       └── global.css           # reset + shared tokens
├── designs/
│   └── hermes-labs/
│       ├── DESIGN.md
│       ├── preview.html         # copy of existing HTML
│       └── sigils/              # optional SVG files
│           ├── hermes-mark.svg
│           └── diamond-chevron.svg
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

**Routing:** Hash-based (`#/` for gallery, `#/hermes-labs` for detail). No server rewrites needed — works on Vercel and GitHub Pages without config.

**Data flow:**
1. `loader.ts` uses `import.meta.glob('../../designs/*/DESIGN.md', { as: 'raw' })` to read all DESIGN.md files at build time.
2. `parser.ts` splits frontmatter (parsed with `gray-matter`) from prose body (rendered with `marked`).
3. Gallery and Detail pages receive typed `DesignSystem[]` data — no runtime fetching.

**Dependencies:** `gray-matter`, `marked`, `js-yaml` (gray-matter peer). Vite handles everything else.

---

## Gallery Page (`#/`)

- Dark background matching the library's own aesthetic (near-black, neutral — not tied to any design)
- Grid of cards, 3 columns on desktop, 2 on tablet, 1 on mobile
- Each card shows:
  - Design name (display font)
  - Tagline (mono, muted)
  - Color swatches — first 5 palette colors as small circles
  - Hover: subtle gold border
- Clicking a card navigates to `#/:slug`

---

## Detail Page (`#/:slug`)

Matches the structure of the validated mockup. Sections render in order; optional sections are skipped if data is absent.

1. **Topbar** — sticky. Back link, design name, `Copy DESIGN.md` button.
2. **Preview iframe** — only if `preview` key present in frontmatter.
3. **Masthead** — eyebrow, name, subtitle, description from prose `## Overview`.
4. **01 Palette** — 3-col grid of swatch cards (color block 100px, name, role, hex).
5. **02 Surfaces** — horizontal row of surface tiles with hex, name, token.
6. **03 Typography** — 2-col grid of Aa specimens per font. Only fonts defined in frontmatter are rendered.
7. **04 Type scale** — table rows: id, label, live text sample, size/lh.
8. **05 Sigils** — 3-col grid of SVG marks. Skipped entirely if no `sigils` key.

Each numbered section uses the prose body of the corresponding `## NN — ...` heading as its description.

**Copy button:** copies the raw DESIGN.md text to clipboard. Button text changes to "Kopierat!" for 2s then resets.

---

## Pilot Design — Hermes Labs

The first DESIGN.md to be created and validated before rolling out the template to all other designs.

Data sourced from:
- `colors_and_type.css` → surfaces, typography tokens
- React component at `localhost:5173/#dashboard/design` → palette with roles, type scale entries, sigils
- Existing `Hermes Labs Design System/index.html` → used as `preview.html`

All other designs (`Meridian`, `Ocean`, `Olympus Key Guard`, `Pantheon`, `Philosophae`, `Domina Voice`, `Hermes Dashboard`) will have their DESIGN.md authored after the pilot is validated. For full-app designs (Olympus, Pantheon, Domina Voice), design tokens are extracted manually from component/CSS source.

---

## Deployment

- **GitHub repo:** `cipher/design-library` (or similar)
- **Vercel:** auto-detect Vite, build command `vite build`, output dir `dist`
- **No `vercel.json` needed** — hash routing requires no server rewrites

---

## Out of Scope

- Search or filtering in the gallery
- Editing DESIGN.md files in-browser
- Dark/light theme toggle for the library itself (library is always dark)
- Authentication
