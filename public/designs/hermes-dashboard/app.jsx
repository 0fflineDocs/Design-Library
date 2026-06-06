// app.jsx — top-level Hermes Dashboard app.
// Hash routing: #/home, #/agents, #/agent/<id>, #/output?agent=atlas, etc.

const { useState, useEffect, useMemo, useCallback } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "amber",
  "density": "comfortable"
}/*EDITMODE-END*/;

// Hue per accent option. Each picked to stay within the amber/copper family
// so the "single accent" constraint holds; lightness/chroma stay locked.
const ACCENT_HUES = {
  amber:   65,
  copper:  45,
  citrine: 88,
};
const ACCENT_SWATCHES = [
  { key: 'amber',   color: 'oklch(0.78 0.15 65)' },
  { key: 'copper',  color: 'oklch(0.72 0.15 45)' },
  { key: 'citrine', color: 'oklch(0.84 0.14 88)' },
];

// ── Routing ────────────────────────────────────────────────────────────────
// Route shape: { view: string, agentId?, ...query }
function parseHash() {
  const h = (window.location.hash || '#/home').replace(/^#\/?/, '');
  const [pathPart, qs] = h.split('?');
  const parts = pathPart.split('/').filter(Boolean);
  const view = parts[0] || 'home';
  const query = {};
  if (qs) qs.split('&').forEach((kv) => {
    const [k, v] = kv.split('=');
    if (k) query[decodeURIComponent(k)] = v ? decodeURIComponent(v) : '';
  });
  if (view === 'agent') {
    return { view: 'agent', agentId: parts[1], ...query };
  }
  return { view, ...query };
}
function toHash(route) {
  const { view, agentId, ...rest } = route;
  let p = '#/' + view;
  if (view === 'agent' && agentId) p += '/' + agentId;
  const qs = Object.entries(rest).filter(([, v]) => v != null && v !== '').map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
  return qs ? `${p}?${qs}` : p;
}

function App() {
  const [route, setRoute] = useState(() => parseHash());
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Listen for hashchange (browser back/forward, manual edits).
  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((next) => {
    window.location.hash = toHash(next);
    setRoute(next);
    // Scroll the main column to top on view change.
    requestAnimationFrame(() => {
      const main = document.querySelector('.main');
      if (main) main.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, []);

  // Per-view query setter — merges into route without changing view.
  const setQuery = useCallback((patch) => {
    const next = { ...route, ...patch };
    // Avoid noise from rewriting identical state.
    if (JSON.stringify(next) === JSON.stringify(route)) return;
    window.location.hash = toHash(next);
    setRoute(next);
  }, [route]);

  // Apply tweaks to the document root.
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-h', String(ACCENT_HUES[t.accent] || 65));
    document.documentElement.dataset.density = t.density === 'compact' ? 'compact' : '';
  }, [t.accent, t.density]);

  const counts = {
    agents: D.agents.length,
    outputs: D.outputs.length,
    skills: D.skills.length,
    workflows: D.workflows.length,
  };

  let body;
  switch (route.view) {
    case 'home':      body = <HomeView navigate={navigate} />; break;
    case 'agents':    body = <AgentsView navigate={navigate} query={route} setQuery={setQuery} />; break;
    case 'agent':     body = <AgentProfile route={route} navigate={navigate} />; break;
    case 'output':    body = <OutputView navigate={navigate} query={route} setQuery={setQuery} />; break;
    case 'skills':    body = <SkillsView navigate={navigate} query={route} setQuery={setQuery} />; break;
    case 'workflows': body = <WorkflowsView navigate={navigate} query={route} setQuery={setQuery} />; break;
    default:
      body = (
        <>
          <Header title="Not found" />
          <div className="body">
            <EmptyState title={`Unknown view: ${route.view}`}
              action={<button className="btn btn--sm" onClick={() => navigate({ view: 'home' })}>Go home</button>} />
          </div>
        </>
      );
  }

  return (
    <div className="app">
      <Sidebar route={route} navigate={navigate} counts={counts} />
      <main className="main">{body}</main>
      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENT_SWATCHES.map((s) => s.color)}
          onChange={(c) => {
            const match = ACCENT_SWATCHES.find((s) => s.color === c);
            setTweak('accent', match ? match.key : 'amber');
          }}
        />
        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={['comfortable', 'compact']}
          onChange={(v) => setTweak('density', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
