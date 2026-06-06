---
name: Philosophae
tagline: Forest green and parchment. EB Garamond. An encyclopedia of philosophical history.
preview: index.html

palette:
  - name: Forest Black
    hex: "#0d150d"
    role: Page background — deep forest, not pure black
    token: bg
  - name: Surface
    hex: "#1c2a1c"
    role: Card and panel backgrounds
    token: surface
  - name: Parchment
    hex: "#e3ded3"
    role: Primary text — warm parchment
    token: ink
  - name: Antique Gold
    hex: "#c9a84c"
    role: Accent — rules, section marks, emphasis
    token: gold
  - name: Deep Gold
    hex: "#b8860b"
    role: Deep gold — active states
    token: gold-deep
  - name: Silver
    hex: "#b0b4b8"
    role: Secondary text and metadata
    token: silver
  - name: Wine
    hex: "#4a1515"
    role: Special callouts and chapter marks
    token: wine

surfaces:
  - name: Background
    token: --bg
    hex: "#0d150d"
  - name: Background 2
    token: --bg-2
    hex: "#141e14"
  - name: Surface
    token: --surface
    hex: "#1c2a1c"
  - name: Surface 2
    token: --surface-2
    hex: "#233323"

typography:
  display:
    fontFamily: EB Garamond
    label: Display · EB Garamond
    weights: [Regular 400, Medium 500, Semibold 600, Bold 700, Italic]

typescale:
  - id: D1
    label: WORDMARK
    font: display
    size: 30
    lh: 30
    text: Philosophae
  - id: D2
    label: HERO
    font: display
    size: 42
    lh: 46
    text: Encyclopedia of Philosophical History
  - id: D3
    label: SECTION
    font: display
    size: 28
    lh: 34
    text: The Pre-Socratics
  - id: B1
    label: BODY
    font: display
    size: 17
    lh: 28
    text: Thales of Miletus proposed that the fundamental substance of all things is water.
  - id: L1
    label: LABEL
    font: display
    size: 11
    lh: 14
    text: VOL. I · ANCIENT PHILOSOPHY

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px

rounded:
  sm: 0px
  md: 0px

---

## Overview

**Forest green and parchment. A scholar's companion.** Philosophae is an encyclopedia of philosophical history — from the Pre-Socratics through to the present. The visual language is deeply typographic: EB Garamond throughout, gold rules as structural elements, forest-green surfaces that feel like aged leather bindings.

## 01 — Palette

The forest-green ground (`#0d150d`) reads as emerald in shadow — richer than black, quieter than true green. Parchment text sits against it with natural contrast. Gold enters as decoration and emphasis — rules, chapter numbers, volume markers.

## 02 — Type

A single-family system. EB Garamond handles everything: display headlines in upright, editorial subheads in italic, body at 17px with generous leading. Optical features (`liga`, `dlig`, `onum`, `kern`) are enabled throughout.

## 03 — Structure

The layout echoes a printed encyclopedia: sidebar navigation with small-cap labels, a generous main column, colophon at the foot. Rules are 1px gold at reduced opacity. No decorative imagery — the text carries the weight.

## 04 — Voice

Third-person, scholarly, unhurried. Citations in the margin. Period-accurate dates. No hedging.
