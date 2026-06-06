---
name: Hermes Dashboard
tagline: Dark blue-grey control surface. IBM Plex. Agent operations interface.
preview: index.html

palette:
  - name: Sidebar
    hex: "#1a2035"
    role: Sidebar and deepest surface (approx. oklch 0.175 0.012 250)
    token: bg-0
  - name: Canvas
    hex: "#1e2640"
    role: Main canvas background
    token: bg-1
  - name: Panel
    hex: "#232d4b"
    role: Panel surface
    token: bg-2
  - name: Golden Accent
    hex: "#c9a84c"
    role: Primary accent — approx. oklch 0.78 0.15 65 (warm gold-amber)
    token: accent
  - name: Frost
    hex: "#f0f3fa"
    role: Primary text — cold white
    token: fg
  - name: Mist
    hex: "#9aa8c8"
    role: Secondary text and metadata
    token: fg-2
  - name: Success
    hex: "#4caf82"
    role: OK / healthy state
    token: ok
  - name: Warning
    hex: "#d4a94c"
    role: Warning / degraded
    token: warn
  - name: Error
    hex: "#d45c4c"
    role: Error / down
    token: err

surfaces:
  - name: Sidebar
    token: --bg-0
    hex: "#1a2035"
  - name: Canvas
    token: --bg-1
    hex: "#1e2640"
  - name: Panel
    token: --bg-2
    hex: "#232d4b"
  - name: Elevated
    token: --bg-3
    hex: "#2a3558"

typography:
  ui:
    fontFamily: IBM Plex Sans
    label: Interface · IBM Plex Sans
    weights: [Regular 400, Medium 500, Semibold 600]
  mono:
    fontFamily: IBM Plex Mono
    label: Mono · IBM Plex Mono
    weights: [Regular 400, Medium 500]

typescale:
  - id: H1
    label: PAGE TITLE
    font: ui
    size: 22
    lh: 28
    text: Agent Operations
  - id: H2
    label: SECTION
    font: ui
    size: 18
    lh: 24
    text: System Health
  - id: B1
    label: BODY
    font: ui
    size: 14
    lh: 20
    text: Six agents are currently active across three pipelines.
  - id: M1
    label: MONO · DATA
    font: mono
    size: 11
    lh: 16
    text: arc-3175 · ACTIVE · 00:04:23

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px

rounded:
  sm: 4px
  md: 6px
  lg: 8px
---

## Overview

**Blue-grey control surface. Agent operations at a glance.** Hermes Dashboard is a data-dense operations interface for AI agent orchestration. The palette is built from blue-grey OKLCH surfaces — cooler and more neutral than the gold-tinted Hermes Labs system. IBM Plex provides a technical, functional type character suited to dense data layouts.

## 01 — Surfaces

Five surface steps in blue-grey OKLCH, lightness `0.175` to `0.32`, constant chroma. The sidebar sits darkest; elevated panels and hover states rise progressively. All surfaces share hue `250` — consistent cool temperature throughout.

## 02 — Accent

A single warm-gold accent (`oklch(0.78 0.15 65)`) provides the only warmth in an otherwise cool system. It marks active agents, interactive controls, and navigation highlights. The contrast between cool ground and warm accent creates immediate focal hierarchy.

## 03 — Typography

IBM Plex Sans and IBM Plex Mono — a matched pair. Sans for UI labels, headings, body copy. Mono for identifiers, timestamps, status codes, and all machine-generated output. No display serif — this is a pure control interface.

## 04 — Status System

Three semantic states: `ok` (green), `warn` (amber), `err` (red). Used exclusively for agent and system status indicators. Status colors are desaturated and warm-shifted to reduce eye strain during extended use.
