---
name: Research Briefs
tagline: Editorial darkness. Gold as reading-lamp glow. Hermes research surfaces.
preview: index.html

palette:
  - name: Obsidian
    hex: "#0A0A0A"
    role: Page background
    token: obsidian
  - name: Surface
    hex: "#121210"
    role: Card backgrounds
    token: surface
  - name: Antique Gold
    hex: "#D4AF37"
    role: Rules, glyphs, emphasis
    token: gold
  - name: Copper Ember
    hex: "#B67333"
    role: Bylines and warm secondary
    token: copper
  - name: Champagne Ivory
    hex: "#E5DFD0"
    role: Primary body text
    token: fg
  - name: Warm Stone
    hex: "#8A8578"
    role: Dates, reading time, metadata
    token: fg-muted

surfaces:
  - name: Obsidian
    token: --obsidian
    hex: "#0A0A0A"
  - name: Surface
    token: --surface
    hex: "#121210"
  - name: Surface Elevated
    token: --surface-elevated
    hex: "#1A1A16"

typography:
  display:
    fontFamily: Cormorant Garamond
    label: Display · Cormorant Garamond
    weights: [Regular 400, Italic, Medium 500, Semibold 600]
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
    label: DISPLAY
    font: display
    size: 64
    lh: 70
    text: Research Briefs
  - id: D2
    label: HERO
    font: display
    size: 48
    lh: 54
    text: Intelligence Distilled
  - id: D3
    label: SECTION
    font: display
    size: 32
    lh: 38
    text: On the 60ms shoulder
  - id: D4
    label: SUBTITLE
    font: display
    size: 20
    lh: 24
    text: Visual analysis — design reference
  - id: B1
    label: BODY
    font: ui
    size: 15
    lh: 23
    text: Distills sprawling primary sources into structured arguments.
  - id: B2
    label: BODY SMALL
    font: ui
    size: 12
    lh: 16
    text: Provenance verified on 178 of 184 sources. Six items flagged.
  - id: L1
    label: LABEL · MONO
    font: mono
    size: 11
    lh: 14
    text: ARC-3175 · CORRESPONDENCE · 1488

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
---

## Overview

**Editorial darkness. Gold as reading-lamp glow.** The Research Briefs design system is a variant of the Hermes Labs visual language, optimized for long-form research documents. Every surface carries a faint gold tint — nothing is sterile gray or pure black.

## 01 — Pigments

Obsidian base with antique gold reserved for rules, glyphs, and structural moments. Copper ember enters only for bylines and warm metadata. Saturation is restrained on purpose — the system breathes.

## 02 — Surfaces

Four warm-tinted blacks build hierarchy. `#0A0A0A` sits deepest, `#1A1A16` marks hover and elevated states. Each step carries fractional gold warmth.

## 03 — Voice

Cormorant Garamond carries all display work — headlines, section titles, pull-quotes. Manrope handles the working interface and body copy. JetBrains Mono is reserved for document identifiers, metadata, and the machine's voice.

## 04 — Reading Experience

Articles are designed as reading objects. Line length is constrained for comfort. Gold hairlines separate sections. Metadata is set in mono, small, copper-tinted.
