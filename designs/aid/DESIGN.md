---
name: AID — AI Dictionary
tagline: Semantic OS for AI literacy. Dark shell, light workspace, purple graph. Concept navigation over memorization.
preview: index.html

palette:
  - name: Void
    hex: "#07080B"
    role: Sidebar background — true dark, no blue bleed
    token: aid-black
  - name: Panel Black
    hex: "#101116"
    role: Active sidebar row, central graph node background
    token: aid-panel-black
  - name: App Surface
    hex: "#F7F7F8"
    role: Main workspace background
    token: aid-bg
  - name: White Card
    hex: "#FFFFFF"
    role: Definition cards, example cards, graph outer nodes
    token: aid-white
  - name: Primary Text
    hex: "#111216"
    role: Body text, headings, primary content
    token: aid-text
  - name: Muted Text
    hex: "#6F7380"
    role: Metadata, secondary labels, placeholder hints
    token: aid-muted
  - name: Border
    hex: "#E7E7EB"
    role: Card edges, dividers, layout hairlines
    token: aid-border
  - name: Signal Purple
    hex: "#7B4DFF"
    role: Primary accent — active state, graph emphasis, interaction, badges
    token: aid-purple
  - name: Purple Soft
    hex: "#EFE9FF"
    role: Badge backgrounds, subtle highlights
    token: aid-purple-soft
  - name: Sync Green
    hex: "#19C37D"
    role: Status dot, healthy sync indicator
    token: aid-green

surfaces:
  - name: Sidebar
    token: --aid-black
    hex: "#07080B"
  - name: Active Row
    token: --aid-panel-black
    hex: "#101116"
  - name: App Background
    token: --aid-bg
    hex: "#F7F7F8"
  - name: Card Surface
    token: --aid-white
    hex: "#FFFFFF"
  - name: Graph Glow
    token: --aid-purple-glow
    hex: "rgba(123,77,255,0.32)"

typography:
  display:
    fontFamily: Syne
    label: Display · Syne
    weights: [Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800]
  ui:
    fontFamily: DM Sans
    label: Interface · DM Sans
    weights: [Regular 400, Medium 500, SemiBold 600]
  mono:
    fontFamily: JetBrains Mono
    label: Mono · JetBrains Mono
    weights: [Regular 400, Medium 500]

typescale:
  - id: D1
    label: TERM TITLE
    font: display
    size: 48
    lh: 52
    text: Vector Embedding
  - id: D2
    label: SECTION HEAD
    font: display
    size: 20
    lh: 26
    text: Relationship Graph
  - id: H1
    label: CARD HEADING
    font: ui
    size: 13
    lh: 18
    text: DEFINITION
  - id: B1
    label: BODY
    font: ui
    size: 15
    lh: 24
    text: Vector embeddings encode data into numeric coordinates that preserve semantic relationships.
  - id: M1
    label: MONO · METADATA
    font: mono
    size: 12
    lh: 16
    text: TECHNIQUE / NLP / ML / 2003+
  - id: S1
    label: SIDEBAR NAV
    font: ui
    size: 15
    lh: 20
    text: Techniques

spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px

rounded:
  default: 12px
  node: 18px
  chip: 999px
  badge: 6px
  input: 10px
---

## Overview

**A personal knowledge OS for AI literacy.** AID is a semantic workspace where users read, understand, and navigate AI concepts by relationship — not by browsing category trees or memorizing isolated definitions. The interface pairs a dark navigation shell with a bright, focused workspace. Everything is built to reward direct intent and reward curiosity with meaningful connections.

The Vector Embedding term page is the primary pattern: command bar at the top, definition panel in the center, relationship graph on the right. The graph is not decoration — it is the primary navigation model. Click a node, move to that concept, follow the thread.

## 01 — Color

Two-tone by design. The sidebar lives in near-black (`#07080B`) with the panel active state at `#101116`. The workspace is off-white (`#F7F7F8`) with pure white cards on top. One accent: Signal Purple (`#7B4DFF`) at full strength for interaction — active states, graph node glow, focus rings, difficulty badges. It also appears at low opacity (`rgba(123,77,255,0.32)`) as the central graph node aura. Sync Green (`#19C37D`) is the only other hue, reserved strictly for the status dot. Nothing else competes for color priority.

## 02 — Typography

Syne handles display weight — term titles, graph panel heading, sidebar brand lockup. It reads as technical-geometric without tipping into cold. DM Sans is the interface workhorse: definition body, example usage, metadata labels, sidebar navigation. JetBrains Mono surfaces for anything that needs machine-readability: domain tags, dates, IDs, the command bar slash hint. Three fonts, three jobs, no ambiguity about which register is active.

## 03 — Layout

Three-column desktop shell. Sidebar fixed at 280px. Main term panel takes 42–46% of the remaining width. Relationship graph takes the rest. A top command bar spans the full width. Bottom status bar closes the shell. The grid uses named areas — no float hacks, no absolute positioning for the primary structure.

## 04 — Graph Model

The relationship graph is a live navigation element, not a diagram. Center node is dark with a purple glow. Related concept nodes are white cards with visible labels. Edges carry verb labels — `input to embed`, `enables retrieval`, `used in workflow`. A node without a labelled edge is just decoration. The hover inspector panel shows relation type, strength, and a one-line concept description. Concentric guide rings suggest semantic distance without overlabelling it.

## 05 — Interaction

The command bar is the entry point. `Cmd + K` anywhere opens it. It supports concept names, model names, people, and techniques. Slash enters command mode. Related term chips on the definition panel are navigable by click — each leads to a new term detail view. The graph nodes are also clickable. Two paths to the same destination: the analytical (read, follow chips) and the spatial (navigate the graph). Users who want depth follow the graph; users who want answers follow the chips.
