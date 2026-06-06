// components.jsx — shared building blocks for Hermes Dashboard.
// All components export to window at the bottom so other <script type="text/babel">
// blocks can use them.

const { useState, useEffect, useMemo, useRef, useCallback } = React;

// ── Icons (single-stroke set, 14×14). Keep tiny, consistent. ────────────────
const Icon = ({ d, size = 14, fill = false, stroke = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ? stroke : 'none'}
       stroke={fill ? 'none' : stroke} strokeWidth="1.6" strokeLinecap="round"
       strokeLinejoin="round" aria-hidden="true">
    {typeof d === 'string' ? <path d={d} /> : d}
  </svg>
);
const Icons = {
  home:      <Icon d="M3 11l9-8 9 8M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />,
  agents:    <Icon d={<><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5"/><path d="M14 19c0-2 2-3.5 4-3.5s3 1 3 3"/></>} />,
  output:    <Icon d={<><path d="M4 5h12M4 9h12M4 13h8M4 17h6"/><path d="M16 17l3 3 4-5" stroke="currentColor"/></>} />,
  skills:    <Icon d={<><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M21 12h-3M6 12H3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7L5.6 5.6"/></>} />,
  workflows: <Icon d={<><rect x="3" y="4" width="6" height="6" rx="1"/><rect x="15" y="4" width="6" height="6" rx="1"/><rect x="9" y="14" width="6" height="6" rx="1"/><path d="M6 10v2h12v-2M12 14v-2"/></>} />,
  search:    <Icon d={<><circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/></>} />,
  filter:    <Icon d="M3 5h18l-7 9v6l-4-2v-4z" />,
  chev:      <Icon d="M6 9l6 6 6-6" />,
  chevR:     <Icon d="M9 6l6 6-6 6" />,
  close:     <Icon d="M6 6l12 12M18 6L6 18" />,
  refresh:   <Icon d={<><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 21v-5h5"/></>} />,
  arrow:     <Icon d="M5 12h14M13 6l6 6-6 6" />,
  external:  <Icon d={<><path d="M7 17L17 7"/><path d="M9 7h8v8"/></>} />,
  play:      <Icon d="M8 5l11 7-11 7z" fill={true} />,
  copy:      <Icon d={<><rect x="8" y="8" width="12" height="12" rx="1"/><path d="M4 16V5a1 1 0 0 1 1-1h11"/></>} />,
  more:      <Icon d={<><circle cx="5" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.2" fill="currentColor" stroke="none"/></>} />,
};

// ── Monogram tile (per-agent color) ─────────────────────────────────────────
function Monogram({ agent, size = 'md' }) {
  const cls = 'abadge__mono';
  const bg = `oklch(0.78 0.12 ${agent.hue})`;
  return (
    <span className={cls} style={{ background: bg, width: size === 'lg' ? 32 : size === 'xl' ? 56 : 22, height: size === 'lg' ? 32 : size === 'xl' ? 56 : 22, fontSize: size === 'xl' ? 22 : size === 'lg' ? 13 : 11, borderRadius: size === 'xl' ? 10 : 5 }}>
      {agent.mono}
    </span>
  );
}

// ── AgentBadge — used in every list. Click navigates to agent profile. ──────
function AgentBadge({ agent, size = 'md', onNav, withName = true, withRole = false, withStatus = false }) {
  if (!agent) return null;
  const handle = (e) => {
    e.stopPropagation();
    onNav && onNav();
  };
  return (
    <span className={`abadge ${size === 'lg' ? 'abadge--lg' : size === 'xl' ? 'abadge--xl' : ''}`}
          onClick={onNav ? handle : undefined}
          style={onNav ? { cursor: 'pointer' } : undefined}>
      <Monogram agent={agent} size={size} />
      {withName && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
          <span className="abadge__name" style={size === 'xl' ? { fontSize: 18 } : undefined}>{agent.name}</span>
          {withRole && <span style={{ fontSize: 11, color: 'var(--fg-3)' }}>{agent.role}</span>}
          {withStatus && (
            <span style={{ fontSize: 11, color: 'var(--fg-3)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <StatusDot status={agent.status} /> {STATUS_LABEL[agent.status]}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

// ── Status mapping ──────────────────────────────────────────────────────────
const STATUS_LABEL = { ok: 'Active', warn: 'Degraded', err: 'Halted', idle: 'Idle', paused: 'Paused' };

function StatusDot({ status }) {
  return <span className={`dot dot--${status}`} aria-label={STATUS_LABEL[status]} />;
}

// ── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar({ route, navigate, counts }) {
  const items = [
    { id: 'home',      label: 'Main',      icon: Icons.home },
    { id: 'agents',    label: 'Agents',    icon: Icons.agents,    count: counts.agents },
    { id: 'output',    label: 'Output',    icon: Icons.output,    count: counts.outputs },
    { id: 'skills',    label: 'Skills',    icon: Icons.skills,    count: counts.skills },
    { id: 'workflows', label: 'Workflows', icon: Icons.workflows, count: counts.workflows },
  ];
  // Match by route prefix so the agent profile keeps "Agents" highlighted.
  const isActive = (id) => route.view === id || (id === 'agents' && route.view === 'agent');
  return (
    <aside className="rail">
      <div className="rail__brand">
        <span className="rail__mark">H</span>
        <span className="rail__name">Hermes</span>
      </div>
      <nav className="rail__nav" aria-label="Primary">
        {items.map((it) => (
          <button key={it.id} className="rail__item"
                  aria-current={isActive(it.id) ? 'page' : undefined}
                  onClick={() => navigate({ view: it.id })}>
            <span className="rail__item-icon">{it.icon}</span>
            <span>{it.label}</span>
            {it.count != null && <span className="rail__count">{it.count}</span>}
          </button>
        ))}
      </nav>
      <div className="rail__footer">
        <span className="dot dot--ok" />
        <span>system nominal</span>
        <span style={{ marginLeft: 'auto' }}>v2.6.0</span>
      </div>
    </aside>
  );
}

// ── Page header ─────────────────────────────────────────────────────────────
function Header({ crumbs = [], title, sub, right }) {
  return (
    <header className="head">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
        {crumbs.length > 0 && (
          <div className="head__crumbs">
            {crumbs.map((c, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="head__crumb-sep">/</span>}
                {c.onClick
                  ? <button className="btn btn--ghost btn--sm" style={{ padding: 0, height: 'auto', color: 'inherit' }} onClick={c.onClick}>{c.label}</button>
                  : <span>{c.label}</span>}
              </React.Fragment>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <h1 className="head__title">{title}</h1>
          {sub && <span className="head__sub">{sub}</span>}
        </div>
      </div>
      {right && <div className="head__right">{right}</div>}
    </header>
  );
}

// ── Filter bar (agent dropdown + search + extras) ───────────────────────────
function FilterBar({ agents, agentFilter, onAgentFilter, search, onSearch, children, onClear, canClear }) {
  return (
    <div className="filter-bar">
      <div className="field">
        <span className="field__icon">{Icons.search}</span>
        <input className="input input--search" type="search"
               placeholder="Search…" value={search}
               onChange={(e) => onSearch(e.target.value)} />
      </div>
      <select className="select" value={agentFilter} onChange={(e) => onAgentFilter(e.target.value)}>
        <option value="">All agents</option>
        {agents.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
      </select>
      {children}
      {canClear && (
        <button className="btn btn--ghost btn--sm" onClick={onClear}>Clear filters</button>
      )}
    </div>
  );
}

// ── Empty / Error / Skeleton ────────────────────────────────────────────────
function EmptyState({ title, hint, action }) {
  return (
    <div className="empty">
      <div className="empty__title">{title}</div>
      {hint && <div className="empty__hint">{hint}</div>}
      {action}
    </div>
  );
}
function ErrorBanner({ message, onRetry }) {
  return (
    <div className="banner banner--err">
      <span>{message}</span>
      {onRetry && <button className="banner__retry" onClick={onRetry}>Retry</button>}
    </div>
  );
}
function SkeletonRows({ rows = 6, cols = 4 }) {
  return (
    <div style={{ padding: 4 }}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: `1fr `.repeat(cols).trim(), gap: 12, padding: '14px 18px', borderBottom: '1px solid var(--line-soft)' }}>
          {Array.from({ length: cols }).map((__, j) => (
            <div key={j} className="sk" style={{ height: 14, width: j === cols - 1 ? '60%' : '85%' }} />
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Markdown renderer (limited subset, no third-party deps) ─────────────────
// Supports headings (#, ##, ###), paragraphs, ul/ol, **bold**, *italic*,
// `code`, > blockquote, --- hr. Inline-safe HTML escaping.
function renderMarkdown(src) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');

  const lines = src.split('\n');
  let html = '';
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^\s*$/.test(line)) { i++; continue; }
    if (/^---+\s*$/.test(line)) { html += '<hr/>'; i++; continue; }
    let m;
    if ((m = line.match(/^(#{1,3})\s+(.*)$/))) {
      const lvl = m[1].length;
      html += `<h${lvl}>${inline(m[2])}</h${lvl}>`;
      i++; continue;
    }
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      html += `<blockquote>${inline(buf.join(' '))}</blockquote>`;
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        buf.push(lines[i].replace(/^\s*[-*]\s+/, ''));
        i++;
      }
      html += '<ul>' + buf.map((b) => `<li>${inline(b)}</li>`).join('') + '</ul>';
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        buf.push(lines[i].replace(/^\s*\d+\.\s+/, ''));
        i++;
      }
      html += '<ol>' + buf.map((b) => `<li>${inline(b)}</li>`).join('') + '</ol>';
      continue;
    }
    // paragraph: collect until blank line
    const buf = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^#{1,3}\s/.test(lines[i]) && !/^\s*[-*]\s/.test(lines[i]) && !/^\s*\d+\.\s/.test(lines[i]) && !/^>/.test(lines[i]) && !/^---+\s*$/.test(lines[i])) {
      buf.push(lines[i]);
      i++;
    }
    html += `<p>${inline(buf.join(' '))}</p>`;
  }
  return html;
}

function Markdown({ source }) {
  const html = useMemo(() => renderMarkdown(source), [source]);
  return <div className="md" dangerouslySetInnerHTML={{ __html: html }} />;
}

// ── Sortable table primitive ────────────────────────────────────────────────
function SortableTable({ columns, rows, initialSort, renderRow, emptyTitle, emptyHint }) {
  const [sort, setSort] = useState(initialSort || { key: columns[0].key, dir: 'desc' });
  const sorted = useMemo(() => {
    const col = columns.find((c) => c.key === sort.key);
    if (!col || !col.sort) return rows;
    const dir = sort.dir === 'asc' ? 1 : -1;
    return [...rows].sort((a, b) => {
      const va = col.sort(a), vb = col.sort(b);
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
  }, [rows, sort, columns]);
  const toggle = (key) => setSort((s) => s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'desc' });
  if (rows.length === 0) {
    return <EmptyState title={emptyTitle || 'Nothing here'} hint={emptyHint} />;
  }
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key} className={c.sort ? 'sortable' : undefined}
                onClick={c.sort ? () => toggle(c.key) : undefined}
                style={{ width: c.width }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                {c.label}
                {c.sort && sort.key === c.key && (
                  <span style={{ fontSize: 9, color: 'var(--accent)' }}>{sort.dir === 'asc' ? '▲' : '▼'}</span>
                )}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map(renderRow)}
      </tbody>
    </table>
  );
}

// ── Relative time helper. Uses TWEAK_DEFAULTS.timestamp via global handle. ──
function fmtTime(timeStr, mode = 'auto') {
  // Our seed data uses HH:MM strings. Auto-mode: leave as-is. Relative shortcuts
  // already encoded for some rows (e.g. "47s", "2m"); we preserve them.
  if (mode === 'absolute' || /^\d{1,2}:\d{2}$/.test(timeStr)) return timeStr;
  return timeStr;
}

// ── Drawer ──────────────────────────────────────────────────────────────────
function Drawer({ title, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <>
      <div className="drawer-bg" onClick={onClose} />
      <aside className="drawer" role="dialog" aria-labelledby="drawer-t">
        <div className="drawer__head">
          <span className="drawer__title" id="drawer-t">{title}</span>
          <button className="drawer__close" onClick={onClose} aria-label="Close">{Icons.close}</button>
        </div>
        <div className="drawer__body">{children}</div>
      </aside>
    </>
  );
}

Object.assign(window, {
  Icon, Icons, Monogram, AgentBadge, StatusDot, STATUS_LABEL,
  Sidebar, Header, FilterBar, EmptyState, ErrorBanner, SkeletonRows,
  Markdown, renderMarkdown, SortableTable, fmtTime, Drawer,
});
