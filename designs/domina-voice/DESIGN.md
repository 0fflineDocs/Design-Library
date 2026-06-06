---
name: Domina Voice
tagline: Near-black with blood red. An AI voice assistant interface.
preview: index.html
preview: index.html

palette:
  - name: Void
    hex: "#0a0a0a"
    role: Page background — near black
    token: bg-0
  - name: Panel
    hex: "#0f0d0e"
    role: Panel and sidebar surfaces
    token: panel
  - name: Blood Red
    hex: "#b91c1c"
    role: Primary accent — danger and activation
    token: blood
  - name: CTA Red
    hex: "#dc2626"
    role: Interactive CTA elements
    token: cta
  - name: Ember
    hex: "#ff5141"
    role: Warm highlight — active microphone, live state
    token: ember
  - name: Parchment
    hex: "#ece7e2"
    role: Primary text — warm off-white
    token: fg
  - name: Ash
    hex: "#9a918c"
    role: Secondary text and metadata
    token: fg-2
  - name: Green Signal
    hex: "#22c55e"
    role: Connected / success state
    token: green

surfaces:
  - name: Void
    token: --bg-0
    hex: "#0a0a0a"
  - name: Ground
    token: --bg-1
    hex: "#121212"
  - name: Panel
    token: --panel
    hex: "#0f0d0e"
  - name: Panel 2
    token: --panel-2
    hex: "#141113"

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
    label: WORDMARK
    font: display
    size: 32
    lh: 32
    text: Domina
  - id: B1
    label: BODY
    font: ui
    size: 14
    lh: 21
    text: Your voice, amplified. A dedicated AI voice interface.
  - id: L1
    label: LABEL · MONO
    font: mono
    size: 11
    lh: 14
    text: LISTENING · 00:04:23

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
---

## Overview

**The void with a red signal.** Domina Voice is a dark AI voice assistant interface — near-black surfaces, blood-red activation states, green for live connection. The type system mirrors Evolution (Instrument Serif / Space Grotesk / JetBrains Mono) but the palette is colder and more stark.

## 01 — Palette

Near-black surfaces lean very slightly warm (`#0f0d0e`), barely enough to distinguish from pure black. Red is the only saturated presence — blood and ember signify danger, activation, and the live microphone state. Green appears only for connection status.

## 02 — Interaction States

Three signal colors govern state: green (connected), red (active/listening), ash (idle). The border color shifts in the ring around interactive elements to communicate state without text labels.

## 03 — Typography

Instrument Serif for the wordmark and any editorial moments. Space Grotesk for all interface text. JetBrains Mono for timestamps, session identifiers, and machine output.
