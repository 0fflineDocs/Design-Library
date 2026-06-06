# Research Briefs — UI Kit

The reference "reading room": a single-page, scrollable landing that presents the Hermes Labs
research vault as a browsable editorial collection. This is the public, editorial counterpart
to the operational dashboard.

## Run it
Open `index.html`. It loads fonts from Google Fonts and the shared tokens from
`../../colors_and_type.css`, then mounts a small React app (Babel-in-browser, no build step).

## Files
| File | Role |
|---|---|
| `index.html` | Page shell: fonts, token + kit CSS, script tags, `#root` mount |
| `styles.css` | Kit-specific component + layout styles (consumes the shared tokens) |
| `data.js` | The 11 hard-coded briefs, archive rows, category list (globals on `window`) |
| `TopBar.jsx` | Thin top chrome (brand mark + section label) and `TopicTag` |
| `Hero.jsx` | Editorial header: decorative gold-rule composition + typographic content |
| `Filters.jsx` | Category filter pills (clicking filters the grid) |
| `BriefCard.jsx` | Core card unit; featured + loading variants |
| `Archive.jsx` | Compact archive list, pagination, footer |
| `App.jsx` | Assembles the page, owns the active-filter state |

## Interaction
- Filter pills are live: clicking a category filters the grid; the featured card only appears
  when it matches. An empty category shows the empty-state.
- Cards lift to the elevated surface and reveal a gold left-border on hover; they are
  keyboard-focusable.
- An "in progress" loading card appears at the end of the grid on the "All" view to show the
  upcoming-brief state.

## Card states covered
default · hover · focus (gold outline) · featured (permanent gold border + moss wash) ·
loading (upcoming brief skeleton) · empty (no results in category).

This is a cosmetic recreation, not production code: filtering is real but there is no routing,
data fetching, or persistence.
