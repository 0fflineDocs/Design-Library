---
name: Olympus
tagline: Dark navy OKLCH. Acid green key guard. Cormorant Garamond meets Inter.

palette:
  - name: Deep Navy
    hex: "#151b2e"
    role: Page background (approx. oklch 0.16 0.01 250)
    token: background
  - name: Surface
    hex: "#1c2438"
    role: Card and panel surface
    token: surface
  - name: Acid Green
    hex: "#b8e832"
    role: Primary accent (approx. oklch 0.86 0.19 130)
    token: accent
  - name: Warm White
    hex: "#f0ede8"
    role: Primary text (approx. oklch 0.94 0.01 90)
    token: foreground
  - name: Stone
    hex: "#8a8070"
    role: Muted secondary text
    token: muted-foreground
  - name: Danger
    hex: "#d94a3a"
    role: Destructive actions (approx. oklch 0.65 0.21 25)
    token: destructive

surfaces:
  - name: Background
    token: --background
    hex: "#151b2e"
  - name: Surface
    token: --surface
    hex: "#1c2438"
  - name: Muted
    token: --muted
    hex: "#1c2438"

typography:
  display:
    fontFamily: Cormorant Garamond
    label: Display · Cormorant Garamond
    weights: [Regular 400, Italic, Semibold 600]
  ui:
    fontFamily: Inter
    label: Interface · Inter
    weights: [Regular 400, Medium 500, Semibold 600]
  mono:
    fontFamily: JetBrains Mono
    label: Mono · JetBrains Mono
    weights: [Regular 400, Medium 500]

typescale:
  - id: D1
    label: DISPLAY
    font: display
    size: 36
    lh: 40
    text: Olympus Key Guard
  - id: B1
    label: BODY
    font: ui
    size: 14
    lh: 21
    text: Secure credential management and access control.
  - id: L1
    label: LABEL · MONO
    font: mono
    size: 11
    lh: 14
    text: KEY-001 · ACTIVE · EXPIRES 2026-12-31

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px

rounded:
  sm: calc(0.5rem - 4px)
  md: calc(0.5rem - 2px)
  lg: 0.5rem
  xl: calc(0.5rem + 4px)
---

## Overview

**Navy OKLCH ground. Acid-green key.** Olympus is a secure key management and access control application. The design system uses OKLCH color throughout — a dark navy base with a single acid-green accent that echoes the Evolution system while remaining distinct in personality. Cormorant Garamond brings editorial authority to the display layer; Inter grounds the functional UI.

## 01 — Color Model

Built entirely in OKLCH to ensure perceptually uniform color relationships. The background (`oklch(0.16 0.01 250)`) and all surfaces share hue `250` (blue). The accent (`oklch(0.86 0.19 130)`) is a high-chroma acid green — maximum contrast against the dark ground.

## 02 — Accent Usage

The acid green accent appears exclusively on interactive elements that represent active keys or confirmed states. It is never decorative. On hover states and focus rings, it pulses to indicate live interaction.

## 03 — Typography

The Cormorant + Inter pairing creates tension between the editorial and the functional. Display headings in Cormorant establish authority; Inter handles all operational interface text with precision. JetBrains Mono is mandatory for all credential strings, key identifiers, and timestamps.

## 04 — Application

A Cloudflare Workers application with TanStack Router. Production-grade, not a prototype. The design system is implemented directly in the application codebase.
