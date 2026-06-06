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
