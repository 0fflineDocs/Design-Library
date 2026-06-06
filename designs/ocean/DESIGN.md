---
name: Ocean
tagline: Deep oceanic darkness. Blue and teal on abyssal navy. Two-theme exploration.
preview: index.html

palette:
  - name: Abyss
    hex: "#040c14"
    role: Page background — deep ocean floor
    token: bg
  - name: Deep Navy
    hex: "#081220"
    role: Surface backgrounds
    token: surface
  - name: Ocean Blue
    hex: "#5ab4e6"
    role: Primary accent — sky meets sea
    token: blue
  - name: Teal
    hex: "#3dd6c2"
    role: Secondary accent — bioluminescent
    token: teal
  - name: Frost
    hex: "#dde8f0"
    role: Primary text — cold clear light
    token: fg
  - name: Mist
    hex: "#7fa4bc"
    role: Secondary text and metadata
    token: fg-2

surfaces:
  - name: Abyss
    token: --bg
    hex: "#040c14"
  - name: Surface
    token: --surface
    hex: "#081220"
  - name: Surface 2
    token: --surface-2
    hex: "#0d1a2e"

typography:
  display:
    fontFamily: Instrument Serif
    label: Display · Instrument Serif
    weights: [Regular 400, Italic]
  ui:
    fontFamily: Space Grotesk
    label: Interface · Space Grotesk
    weights: [Light 300, Regular 400, Medium 500, Semibold 600]
  mono:
    fontFamily: JetBrains Mono
    label: Mono · JetBrains Mono
    weights: [Regular 400, Medium 500]

typescale:
  - id: D1
    label: DISPLAY
    font: display
    size: 56
    lh: 58
    text: Ocean
  - id: D2
    label: HERO
    font: display
    size: 36
    lh: 40
    text: Deep Oceanic Theme Explorations
  - id: B1
    label: BODY
    font: ui
    size: 15
    lh: 23
    text: Two Ocean theme variations — Blue and Green — deep oceanic colour palettes.
  - id: L1
    label: LABEL · MONO
    font: mono
    size: 10
    lh: 13
    text: OCEAN THEMES · VARIANT A

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px

rounded:
  sm: 4px
  md: 8px
  lg: 12px
---

## Overview

**Abyss to bioluminescence.** Ocean is a dual-theme exploration — Blue Ocean and Green Ocean — both rooted in abyssal navy, with accent palettes drawn from the visible spectrum of deep water. The system uses the same typeface trio as Evolution (Instrument Serif / Space Grotesk / JetBrains Mono) applied to a cooler, more restrained palette.

## 01 — Blue Theme

Arctic surface. `#040c14` background, `#5ab4e6` blue accent, `#3dd6c2` teal for secondary emphasis. Cold and precise — submarine control room aesthetic.

## 02 — Green Theme

Bioluminescent floor. Deeper navy, acid-green shifted toward emerald. The green variant reads warmer and more organic than the blue.

## 03 — Typography

Same stack as the Evolution system: Instrument Serif for display, Space Grotesk for interface, JetBrains Mono for metadata. The cold palette makes the serif headlines feel more architectural than warm systems.

## 04 — Usage

A theme exploration — not a production system. The two variants demonstrate how palette temperature shifts the emotional register of a shared type and layout architecture.
