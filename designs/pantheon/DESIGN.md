---
name: Pantheon
tagline: Warm paper and antique gold. Spectral serif. A scholar's reference to the Greek gods.
preview: index.html

palette:
  - name: Aged Paper
    hex: "#f1e9d6"
    role: Page background — warm, aged vellum
    token: paper
  - name: Iron Ink
    hex: "#1a1410"
    role: Primary text — deep warm black
    token: ink
  - name: Antique Gold
    hex: "#c9a84c"
    role: Accent — rules, nav markers, ornaments
    token: gold
  - name: Deep Gold
    hex: "#b8922e"
    role: Active and hover state gold
    token: gold-deep
  - name: Claret Wine
    hex: "#5c1a1b"
    role: Special callouts, chapter dividers
    token: wine
  - name: Bronze
    hex: "#8b6f47"
    role: Tertiary text and edition marks
    token: bronze
  - name: Night
    hex: "#1f1a13"
    role: Dark mode surface base
    token: night

surfaces:
  - name: Paper
    token: --paper
    hex: "#f1e9d6"
  - name: Paper Warm
    token: --paper-warm
    hex: "#ede4d5"
  - name: Paper Deep
    token: --paper-deep
    hex: "#e4d8bf"
  - name: Paper Edge
    token: --paper-edge
    hex: "#d6c7a6"

typography:
  display:
    fontFamily: Spectral
    label: Display · Spectral
    weights: [Light 300, Regular 400, Medium 500, Bold 700, Italic]

typescale:
  - id: D1
    label: MASTHEAD
    font: display
    size: 30
    lh: 30
    text: Pantheon
  - id: D2
    label: SECTION
    font: display
    size: 26
    lh: 32
    text: The Greek Pantheon
  - id: D3
    label: ENTRY TITLE
    font: display
    size: 20
    lh: 26
    text: Zeus — Lord of Olympus
  - id: B1
    label: BODY
    font: display
    size: 16
    lh: 26
    text: The thunderer. Ruler of Olympus, patron of hospitality, wielder of the lightning bolt.
  - id: L1
    label: LABEL
    font: display
    size: 11
    lh: 14
    text: VOL. I · THE OLYMPIANS

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px

rounded:
  sm: 2px
  md: 4px
---

## Overview

**Aged paper and antique gold. A classical reference.** Pantheon is a light-mode scholarly design system — the inverse of the dark editorial systems. Warm paper grounds, iron-ink text, gold ornamentation drawn from Greek manuscript and museum catalogue traditions. The system uses Spectral throughout, a refined book-serif with proper small-caps support.

## 01 — Ground

`#f1e9d6` — aged vellum, not bright white. Every surface variant (`paper-warm`, `paper-deep`, `paper-edge`) descends from this ground, darkening fractionally. The layering system reads as physical paper weight — a sheet, a page, a folio.

## 02 — Ornament

Gold is structural and decorative. Gold rules separate sections. Gold dots mark active navigation. Gold glyphs — Greek key meander, laurel, lozenge, asterism — appear as ornamentation at section breaks. Ornament is earned, not scattered.

## 03 — Type

Spectral with Small Caps. Headings at heavy weight with gentle tracking. Body at 16px, generous leading (1.65). All caps labels tracked wide in small-cap variant. No sans-serif — this is a one-family system.

## 04 — Tone

A museum catalogue meets a scholarly dictionary. Entries are precise, cross-referenced, illustrated by line-art. The voice is authoritative and slightly reverential — as if describing things that actually happened.
