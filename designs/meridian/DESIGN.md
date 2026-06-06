---
name: Meridian — Evolution
tagline: Brutalist editorial. Acid green on warm off-black. A history of AI.
preview: index.html

palette:
  - name: Off-Black
    hex: "#0E0D0B"
    role: Page background — warm, never pure black
    token: bg
  - name: Surface
    hex: "#16140F"
    role: Cards and panels
    token: surface
  - name: Acid Green
    hex: "#C7F23C"
    role: Signature accent — active state, milestones, data-viz primary
    token: accent
  - name: Rust
    hex: "#D9603B"
    role: Secondary accent — Investments section, callout flags
    token: rust
  - name: Bone
    hex: "#E8E2D5"
    role: Primary text — warm, not cold white
    token: fg
  - name: Stone
    hex: "#9A9285"
    role: Secondary text and metadata
    token: fg-secondary

surfaces:
  - name: Background
    token: --bg
    hex: "#0E0D0B"
  - name: Surface
    token: --surface
    hex: "#16140F"
  - name: Surface 2
    token: --surface-2
    hex: "#1F1C16"
  - name: Surface 3
    token: --surface-3
    hex: "#2A2620"

typography:
  display:
    fontFamily: Instrument Serif
    label: Display · Instrument Serif
    weights: [Regular 400, Italic]
  ui:
    fontFamily: Space Grotesk
    label: Interface · Space Grotesk
    weights: [Regular 400, Medium 500, Bold 700]
  mono:
    fontFamily: JetBrains Mono
    label: Mono · JetBrains Mono
    weights: [Regular 400, Medium 500]

typescale:
  - id: D1
    label: DISPLAY 1
    font: display
    size: 240
    lh: 216
    text: Evolution
  - id: D2
    label: DISPLAY 2
    font: display
    size: 96
    lh: 96
    text: A History of Artificial Intelligence
  - id: H1
    label: H1
    font: display
    size: 64
    lh: 67
    text: The Dartmouth Proposal
  - id: H2
    label: H2
    font: ui
    size: 40
    lh: 44
    text: Timeline · 1956–1974
  - id: B1
    label: BODY
    font: ui
    size: 16
    lh: 25
    text: Ten researchers, eight weeks, one proposal — the field is named.
  - id: M1
    label: MONO · LABEL
    font: mono
    size: 12
    lh: 16
    text: TIMELINE / 1956–1974

spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  6: 24px
  8: 32px
  12: 48px
  16: 64px
  24: 96px
  32: 128px

rounded:
  default: 0px
  input: 2px

sigils:
  - label: Evolution Mark
    file: evolution-mark-e.svg
    caption: evolution-mark-e.svg
  - label: Evolution Wordmark
    file: evolution-wordmark.svg
    caption: evolution-wordmark.svg
---

## Overview

**A History of Artificial Intelligence.** An editorial dark-mode design system for the Evolution archive — mapping AI across Timeline, Labs, People, Breakthroughs, Models, Movements, and Investments. The mood is cinematic and archival: warm off-black, a single acid-green signature, heavy serif titles, thin architectural rules.

## 01 — Color

Off-black room with acid green as the only live signal. Rust enters only in the Investments section. Nothing else competes. Surfaces are layered in warm neutrals — `#0E0D0B` to `#2A2620` — each tinted warm, never gray.

## 02 — Typography

Instrument Serif carries all display weight — titles, pull-quotes, hero labels. Space Grotesk is the working interface voice. JetBrains Mono handles dates, identifiers, and anything numerical. Years are first-class typographic objects in the mono font.

## 03 — Rhythm

Sharp corners everywhere. `border-radius: 0` is the default; `2px` is the maximum on inputs. No drop shadows. No gradients on text. No glassmorphism. Architectural 1px hairlines define cards, sections, and tables — borders carry the structural weight.

## 04 — Voice

Third-person, declarative. No marketing hedges. No exclamation marks. No emoji. Numbers are precise: `$13.0B` not "billions." Dates and dollar amounts are typographic objects — set in mono, tracked wide.

## 05 — Data

Five data-viz series: bone, acid, rust, slate, ochre. Ordered by salience. The Investments section is the only place rust dominates and where data-viz lives at scale.
