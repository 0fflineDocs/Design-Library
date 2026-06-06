---
name: Semantic OS
tagline: Terminal-dark knowledge graph interface. JetBrains Mono. Vivid purple on near-black.
preview: index.html

palette:
  - name: Background
    hex: "#131313"
    role: Base canvas and darkest surface
    token: bg
  - name: Surface Container
    hex: "#201f1f"
    role: Default panel surface
    token: surface
  - name: Surface Elevated
    hex: "#2a2a2a"
    role: Elevated panels and hover targets
    token: surface-high
  - name: Surface Highest
    hex: "#353534"
    role: Header bars, code block headers
    token: surface-highest
  - name: Primary
    hex: "#ecb1ff"
    role: Primary accent — soft lavender for text and icons
    token: primary
  - name: Primary Container
    hex: "#bf00ff"
    role: Strong accent — vivid electric purple for node fills and active state
    token: primary-container
  - name: On Surface
    hex: "#e5e2e1"
    role: Primary text — warm off-white
    token: fg
  - name: On Surface Variant
    hex: "#d5c0d7"
    role: Secondary text — muted lavender-grey
    token: fg-2
  - name: Outline
    hex: "#9d8ba0"
    role: Borders and dividers
    token: outline
  - name: Outline Variant
    hex: "#514254"
    role: Subtle borders and inactive separators
    token: outline-dim
  - name: Tertiary
    hex: "#c8c6c5"
    role: String literals in code blocks
    token: tertiary
  - name: Error
    hex: "#ffb4ab"
    role: Error state
    token: error

surfaces:
  - name: Canvas
    token: --bg
    hex: "#131313"
  - name: Container Lowest
    token: --surface-lowest
    hex: "#0e0e0e"
  - name: Container Low
    token: --surface-low
    hex: "#1c1b1b"
  - name: Container
    token: --surface
    hex: "#201f1f"
  - name: Container High
    token: --surface-high
    hex: "#2a2a2a"
  - name: Container Highest
    token: --surface-highest
    hex: "#353534"

typography:
  mono:
    fontFamily: JetBrains Mono
    label: Mono · JetBrains Mono
    weights: [Regular 400, Medium 500, SemiBold 600, Bold 700]

typescale:
  - id: DI
    label: DISPLAY
    font: mono
    size: 32
    lh: 38
    ls: -0.02em
    text: VECTOR EMBEDDING
  - id: H1
    label: HEADLINE LG
    font: mono
    size: 24
    lh: 31
    text: LOCAL TOPOLOGY
  - id: H2
    label: HEADLINE MD
    font: mono
    size: 20
    lh: 26
    text: DEFINITION
  - id: B1
    label: BODY LG
    font: mono
    size: 16
    lh: 24
    text: Dense mathematical representation of semantic meaning.
  - id: B2
    label: BODY MD
    font: mono
    size: 14
    lh: 21
    text: Vector embeddings translate words into high-dimensional arrays.
  - id: CO
    label: CODE
    font: mono
    size: 13
    lh: 21
    text: vector_embedding = np.array(response.data[0].embedding)
  - id: LB
    label: LABEL SM
    font: mono
    size: 12
    lh: 14
    ls: 0.05em
    text: EXECUTION_CONTEXT

spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  gutter: 12px
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

**Terminal-dark knowledge OS. Monospace all the way down.** Semantic OS is a knowledge graph interface built for navigating vector embeddings, semantic nodes, and AI-adjacent concepts. The palette is pure Material Design 3 dark — near-black background, vivid electric purple primary, warm off-white text. JetBrains Mono is the only typeface: display, headline, body, code, and labels all share the same monospace DNA. The result reads like a living terminal.

## 01 — Surfaces

Six surface steps from `#0e0e0e` (lowest) to `#353534` (highest), all near-black with no hue shift. Elevation is expressed through lightness alone — no shadows, no blurs except deliberate glass-panel effects. The surface system is borrowed from Material Design 3's dark tone mapping: each step is a discrete luminance increase, not a gradient.

## 02 — Primary

Two purple tokens do all the work. `#ecb1ff` (primary) — a soft lavender used for text, active icons, and terminal accents. `#bf00ff` (primary container) — vivid electric purple reserved for filled node indicators and strong interactive states. The contrast between cool-dark ground and saturated purple creates immediate focal hierarchy without any secondary accent color.

## 03 — Typography

JetBrains Mono exclusively, across all roles. Display at 32px / -0.02em tracking for hero identifiers. Label SM at 12px / +0.05em for section headers in all-caps. Code at 13px / 1.6 line-height for dense snippet blocks. The monospace-only constraint is the system's core aesthetic commitment: every character is the same width, every surface feels like a terminal.

## 04 — Graph & Animation

The system includes a local topology SVG visualization — nodes connected by `#bf00ff` stroke lines at 50% opacity, peripheral nodes in `#e5e2e1`, a pulsing terminal cursor in `#ecb1ff` (blink animation, 1s step-end). These micro-interactions reinforce the OS metaphor without requiring any animation library.

## 05 — Code Blocks

Syntax is colored with three tokens only: `primary` (`#ecb1ff`) for keywords and operators, `on-surface` (`#e5e2e1`) for identifiers and punctuation, `tertiary` (`#c8c6c5`) for string literals. Comments in `on-surface-variant` (`#d5c0d7`). No additional syntax theme needed — the three-token system covers every case.
