---
name: Nyx
tagline: Void and moonstone. The primordial night. Cormorant serif meets Jost geometric.
preview: index.html

palette:
  - name: Void
    hex: "#06060e"
    role: Page frame — near-absolute darkness
    token: void
  - name: Night
    hex: "#0c0c1e"
    role: Application background
    token: night
  - name: Dusk
    hex: "#12122a"
    role: Card and surface backgrounds
    token: dusk
  - name: Twilight
    hex: "#1e1e3a"
    role: Raised surfaces and hover states
    token: twilight
  - name: Starlight
    hex: "#f0eef8"
    role: High-emphasis text — almost white, with violet warmth
    token: starlight
  - name: Moonstone
    hex: "#c8c0e8"
    role: Primary text — lavender cool white
    token: moonstone
  - name: Frost
    hex: "#7875a8"
    role: Secondary text and metadata
    token: frost
  - name: Lunar
    hex: "#a89ec8"
    role: Primary accent — moonstone silver
    token: lunar
  - name: Aurora
    hex: "#5ae8c8"
    role: Positive and interactive accent — bioluminescent teal
    token: aurora
  - name: Dawnrise
    hex: "#e87890"
    role: Danger and urgency — the edge of night
    token: dawnrise

surfaces:
  - name: Void
    token: --void
    hex: "#06060e"
  - name: Night
    token: --night
    hex: "#0c0c1e"
  - name: Dusk
    token: --dusk
    hex: "#12122a"
  - name: Twilight
    token: --twilight
    hex: "#1e1e3a"

typography:
  display:
    fontFamily: Cormorant
    label: Display · Cormorant
    weights: [Light 300, Regular 400, Medium 500, SemiBold 600, Italic]
  ui:
    fontFamily: Jost
    label: Interface · Jost
    weights: [Light 300, Regular 400, Medium 500, SemiBold 600]

typescale:
  - id: D1
    label: WORDMARK
    font: display
    size: 52
    lh: 52
    text: NYX
  - id: D2
    label: DISPLAY
    font: display
    size: 36
    lh: 40
    text: Goddess of Night
  - id: D3
    label: SECTION
    font: display
    size: 22
    lh: 28
    text: The Primordial Darkness
  - id: B1
    label: BODY
    font: ui
    size: 15
    lh: 24
    text: From the void before creation, Nyx arose — night made sovereign, feared even by Zeus.
  - id: L1
    label: LABEL
    font: ui
    size: 10
    lh: 14
    text: PRIMORDIAL · COSMOGONY

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px

rounded:
  xs: 2px
  sm: 4px
  md: 6px
---

## Overview

**Void and moonstone. The primordial night.** Nyx is a dark design system drawn from the Greek goddess of night — not simply "dark mode" but a study in cosmic darkness itself: the difference between the void between stars and the faint iridescent light that outlasts them. A single serif and a single sans carry all expression; colour is almost entirely withheld, with accent reserved for three celestial phenomena. Atmosphere is carried by the palette alone, never by decoration.

## 01 — Void Architecture

The background hierarchy descends from near-absolute darkness: `--void` (#06060e) as the page frame, `--night` (#0c0c1e) as the application ground, `--dusk` (#12122a) for surfaces, `--twilight` (#1e1e3a) for raised elements. Each step is a threshold of perception — discernible only in proximity to its neighbour. There are no gradients in surfaces, only solid thresholds. The void is not decorative; it is structural.

## 02 — Moonstone and Accent

`--lunar` (#a89ec8) is the primary accent — moonstone, a lavender-grey that reads as silver in deep context. `--starlight` (#f0eef8) and `--moonstone` (#c8c0e8) are the two text registers: near-white with just enough violet warmth to feel alive against the void. `--aurora` (#5ae8c8) is the only warm positive signal in the system — bioluminescent teal, reserved for interactive and pass states. `--dawnrise` (#e87890) marks the moment Nyx retreats: danger, urgency, the edge of darkness ceding to light.

## 03 — Typography

Cormorant carries all display weight. Its extreme optical contrast — hairline thins against heavy strokes — gives headlines the quality of astronomical manuscripts. Light 300 for body text; Medium 500 for section headings; italic for emphasis and pull quotes. Jost handles interface labelling: geometric, traceable to Futura but lighter and more current. The pairing is deliberate — ancient scholar meets modern instrument. Eyebrow labels in Jost, all-caps, widely tracked. No mixing within a hierarchy level.

## 04 — Restraint

Nyx uses near-zero rounding (2px–6px). Borders are ghost-thin, drawn in `--twilight`, brightening only on focus or hover. The constellation marker `✦` is the single permitted ornament, used as a section separator. A 1px rule in `--lunar` divides primary navigation. These are the two decorative elements; everything else is withheld. Restraint here is not minimalism — it is reverence for darkness as content.

## 05 — Motion and Atmosphere

Transitions are slow and deliberate: 400ms ease with a slight delay stagger between elements. Nothing bounces. The night does not hurry. Hover states shift surface colour one step warmer (`--dusk` → `--twilight`), with a faint `--lunar` border appearing. Focus rings are `--lunar` at 1.5px offset. Active states dim accent by 15% rather than brightening — pressure, not excitement.
