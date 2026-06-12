---
name: Verdict
tagline: Dark slate "ink" base. Emerald signal. IBM Plex Sans meets IBM Plex Mono.
preview: index.html

palette:
  - name: Ink 950
    hex: "#070A11"
    role: Page void / letterbox
    token: --ink-950
  - name: Ink 900
    hex: "#0A0E17"
    role: App background
    token: --ink-900
  - name: Ink 800
    hex: "#121A29"
    role: Card / surface
    token: --ink-800
  - name: Signal
    hex: "#34E2A0"
    role: Brand emerald — pass state / primary CTA
    token: --signal
  - name: Azure
    hex: "#5AA2FF"
    role: Interactive accent — links, focus, info
    token: --azure
  - name: Amber
    hex: "#F2B45C"
    role: Warn / missing / WhatIf
    token: --amber
  - name: Coral
    hex: "#FF6B7D"
    role: Drift / danger
    token: --danger
  - name: Text Hi
    hex: "#EAF1FB"
    role: Headings and high-emphasis values
    token: --text-hi

surfaces:
  - name: App Background
    token: --ink-900
    hex: "#0A0E17"
  - name: Card Surface
    token: --ink-800
    hex: "#121A29"
  - name: Raised Surface
    token: --ink-700
    hex: "#18202F"

typography:
  ui:
    fontFamily: IBM Plex Sans
    label: Interface · IBM Plex Sans
    weights: [Regular 400, Medium 500, SemiBold 600]
  mono:
    fontFamily: IBM Plex Mono
    label: Mono · IBM Plex Mono
    weights: [Regular 400, Medium 500, SemiBold 600]

typescale:
  - id: D1
    label: WORDMARK
    font: mono
    size: 42
    lh: 44
    text: VERDICT
  - id: S1
    label: STAT / SCORE
    font: mono
    size: 28
    lh: 32
    text: 92.3%
  - id: B1
    label: BODY
    font: ui
    size: 14
    lh: 21
    text: 72 / 78 settings aligned across 6 baseline policies.
  - id: L1
    label: EYEBROW · MONO
    font: mono
    size: 11
    lh: 14
    text: SECURITY BASELINE ASSESSMENT

spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  6: 24px
  8: 32px
  10: 40px
  16: 64px

rounded:
  xs: 4px
  sm: 7px
  md: 10px
  lg: 14px
  xl: 20px
  pill: 999px
---

## Overview

**Cool slate "ink." Emerald signal. IBM Plex Mono is the soul.** Verdict is a CLI-only tool for assessing Microsoft Intune security baselines — pulling upstream references, reconciling against deployed tenant policy, and rendering a readable verdict: aligned, drifted, or missing. The design system is a deliberate professional evolution of the original CRT/phosphor reports: the dark terminal heritage and phosphor-green meaning of "pass" are preserved, but the palette is cooled and calmed into a security-operations product aesthetic.

## 01 — Color Architecture

The base runs from `--ink-950` (#070A11, page void) through `--ink-900` (app bg), `--ink-800` (cards), `--ink-700` (raised surfaces). This cool slate replaces the original blue-black navy with a more neutral professional tone. `--signal` (#34E2A0) is the brand accent and literal meaning of a passing verdict — softer than the original `#39ff9e`, used sparingly. `--azure` (#5AA2FF) handles all interactive / info states, keeping green for "pass" and blue for "action" cleanly separated. Amber and coral cover warn/missing and drift/danger respectively.

## 02 — Typography

IBM Plex is the complete pairing: Plex Sans for UI and headings, Plex Mono for CLI heritage — data, code, command lines, versions, identifiers, every eyebrow label. Mono is the soul of the brand. Tracking is expressive: display figures and the wordmark tighten to `-.04em`; eyebrow labels open to `.38em` in uppercase. This contrast is the typographic signature.

## 03 — Spatial Density

4px base grid, dense by default — an ops tool, not a landing page. Radii progress from chips (4px) through buttons (7px), tiles (10px), cards (14px), to the hero score panel (20px). The signature card pattern uses a 3px left status rail in the state color. Borders are hairline `--line` (#1D2840), brightening to `--border-strong` on hover.

## 04 — Signal and Glow

The phosphor glow (`--glow-signal-*`) is reserved for the signal color only: the score number, primary buttons, active nav, status dots, the wordmark accent rule. Neutral elements never glow. The hero score panel receives a subtle green halo. This restraint makes every glow carry meaning.

## 05 — Texture and Motion

Two inherited textures: a faint horizontal scanline (~1.3% white) over app backgrounds and a hairline grid behind diagrams. Both are whisper-quiet. Motion is restrained: meter fills ease over ~400ms; the only loop is the blinking cursor `█` at 1.3s. All motion respects `prefers-reduced-motion`.

## 06 — Voice and Copy

Terse, precise, a little dry — instrument readout meets man-page. CLI verbs lowercase mono (`connect`, `assess`, `deploy`). Flags PascalCase with dash (`-Source`, `--WhatIf`). Eyebrow labels UPPERCASE, widely tracked. Status words Title Case (Compliant, Drift, Missing). Numbers carry weight — state results precisely: "92.3% compliant", "62 policies, 1,445 settings". No marketing adjectives, no exclamation, no emoji. Functional glyphs only: `✓ █ → ▸ ·`.
