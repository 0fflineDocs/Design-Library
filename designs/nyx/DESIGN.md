---
name: Nyx
tagline: Void and static. Terminal-first AI workspace. JetBrains Mono meets Instrument Serif.
preview: index.html

palette:
  - name: Void
    hex: "#000000"
    role: Page frame — absolute black
    token: void
  - name: Surface
    hex: "#0a0a0a"
    role: Application background
    token: surface
  - name: Bubble
    hex: "#27272a"
    role: Message bubbles and raised surfaces
    token: bubble
  - name: Border
    hex: "#3f3f46"
    role: Borders and structural dividers
    token: border
  - name: Ink Primary
    hex: "#f4f4f5"
    role: High-emphasis text
    token: ink-primary
  - name: Ink Muted
    hex: "#a1a1aa"
    role: Secondary text and metadata
    token: ink-muted
  - name: Ink Subtle
    hex: "#71717a"
    role: Tertiary text and placeholders
    token: ink-subtle
  - name: Accent
    hex: "#8850f3"
    role: Primary accent — violet, interactive and focus states
    token: accent
  - name: Spark
    hex: "#c8f040"
    role: Measure accent — acid green, progress and positive states
    token: spark
  - name: Rose
    hex: "#f26ac9"
    role: AI marker — warm chromatic signal in the void
    token: rose
  - name: Blue
    hex: "#56b6ff"
    role: Info accent — links and informational states
    token: blue

surfaces:
  - name: Void
    token: --color-void
    hex: "#000000"
  - name: Surface
    token: --color-surface
    hex: "#0a0a0a"
  - name: Bubble
    token: --color-bubble
    hex: "#27272a"
  - name: Border
    token: --color-border
    hex: "#3f3f46"

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
    label: Body · JetBrains Mono
    weights: [Light 100, Regular 400, Medium 500, Bold 700]

typescale:
  - id: D1
    label: DISPLAY
    font: display
    size: 20
    lh: 28
    text: Nyx — the void before thought
  - id: T1
    label: TITLE
    font: ui
    size: 14
    lh: 21
    text: Session Memory
  - id: B1
    label: BODY
    font: mono
    size: 14
    lh: 22
    text: Query patterns suggest recursive intent. Confidence 0.91.
  - id: L1
    label: LABEL
    font: mono
    size: 12
    lh: 17
    text: INFERENCE · 0.15s · 214 TOKENS
  - id: C1
    label: CODE
    font: mono
    size: 13
    lh: 20
    text: const res = await nyx.query(prompt)

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px

rounded:
  sm: 2px
  md: 4px
  lg: 6px
---

## Overview

**Void and static. Terminal-first.** Nyx is a monospace-dominant AI workspace — the interface dissolves into conversation, leaving only text and signal. JetBrains Mono carries everything from body copy to labels; Instrument Serif surfaces only in headlines, as a reminder that thought precedes the machine. Colour is almost entirely withheld: three accents mark the moments that warrant attention — violet for interaction, acid green for measure, rose for the AI's own voice.

## 01 — Void Architecture

The background hierarchy descends through absolute black. `--color-void` (#000000) is the page frame; `--color-surface` (#0a0a0a) is the application ground; `--color-bubble` (#27272a) is the raised surface for message bubbles and panels. `--color-border` (#3f3f46) draws faint zinc lines that divide without decorating. These are not design choices in the aesthetic sense — they are the load-bearing walls of a system that treats darkness as content.

## 02 — Signal and Accent

Three accents punctuate the void. `--color-accent` (oklch(55% 0.22 290) — violet) is the primary interactive signal: focus rings, user message surfaces, active states. `--color-spark` (#c8f040) is measurement and progress — acid green reserved for bars, completions, and the gradient `--gradient-measure`. `--color-rose` (#f26ac9) marks the AI's own outputs: a warm chromatic signal in an otherwise monochrome field. `--color-blue` (#56b6ff) is informational only, never structural.

## 03 — Typography

JetBrains Mono is the body font — a deliberate inversion of convention. The interface is a terminal; the monospace grid is the grid. Every label, every sentence, every data value inherits the same optical rhythm. Space Grotesk handles higher-level UI chrome — geometric, traceable to Futura, never decorative. Instrument Serif appears only at display scale: nameplates and section headings where human authorship should be legible in the type.

## 04 — Motion and Restraint

Transitions are fast and precise: 100ms for micro-interactions, 150ms for state changes, 250ms for reveals. The interface responds immediately — latency is the enemy of focus. Radius values are near-zero: 2px (sm), 4px (md), 6px (lg). The single gradient in the system — `--gradient-measure` — runs violet to spark and is reserved exclusively for progress and usage bars.
