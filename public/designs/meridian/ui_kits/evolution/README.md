# Evolution — UI Kit

A pixel-precise recreation of the Evolution website, built from the design system in this folder.

## Files

- `index.html` — interactive single-page recreation. Uses Babel + React via CDN, broken into the JSX components below. Open this to see the site.
- `primitives.jsx` — `Button`, `SectionLabel`, `Card`, `Badge`, `MonoStat`, `Hairline`. Atomic building blocks shared across sections.
- `Nav.jsx` — sticky top nav with active-section highlighting on scroll.
- `Hero.jsx` — `EVOLUTION` wordmark + "A History of Artificial Intelligence" subtitle.
- `Timeline.jsx` — vertical milestone timeline 1956 → 2024.
- `Labs.jsx` — editorial card grid for major AI labs.
- `People.jsx` — monochrome portrait cards.
- `Breakthroughs.jsx` — modular grid of technical milestones.
- `Models.jsx` — landmark-models table.
- `Movements.jsx` — eras grid with bold typographic blocks.
- `Investments.jsx` — first-class section with a custom area-chart, bar-chart, funding-round timeline, and stat blocks. Uses inline SVG charts in the brand data-viz palette.
- `Footer.jsx` — single-line mono footer.

## How interactivity is faked

This is a UI-fidelity kit, not production code. Behaviors that are mocked:

- Nav links smooth-scroll to sections; active state tracks via `IntersectionObserver`.
- "Filter" controls in Investments (era / lab) update the SVG chart locally — no backend.
- Hover states are real CSS.
- Scroll reveals are real (one-shot, on intersect).

## Visual references

Built directly from `../../README.md` (visual foundations) and `../../colors_and_type.css`. There is no Figma or codebase source to defer to — see the project README for substitution flags on fonts and icons.
