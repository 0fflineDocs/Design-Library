// views.jsx — the five top-level views + agent profile.
// Reads from window.HERMES_DATA. Each view receives { route, navigate, query, setQuery }.

const D = window.HERMES_DATA;

function HomeView({ navigate }) {
  const activeCount = D.agents.filter((a) => a.status === 'ok').length;
  const totalAgents = D.agents.length;
  const tasksInFlight = D.agents.filter((a) => a.status === 'ok' || a.status === 'warn').length;
  const outputs24h = D.outputs.length;
  const incidents24h = D.outputs.filter((o) => o.type === 'alert' || o.type === 'incident').length;

  const runningWorkflows = D.workflows.filter((w) => w.cron.includes('*') && w.status !== 'paused').slice(0, 4);

  const now = '14:32 PT · Tue May 13 · 2026';

  return (
    <>
      <Header
        title="Main"
        sub={now}
        right={(
          <>
            <button className="btn btn--ghost btn--sm">{Icons.refresh}<span>Refresh</span></button>
            <button className="btn btn--primary btn--sm">New task</button>
          </>
        )}
      />
      <div className="body">
        <div className="kpis">
          <div className="kpi">
            <span className="kpi__label">Active agents</span>
            <span className="kpi__value">{activeCount}<span style={{ color: 'var(--fg-3)', fontSize: 16 }}> / {totalAgents}</span></span>
            <span className="kpi__delta">1 halted · 1 paused</span>
          </div>
          <div className="kpi">
            <span className="kpi__label">Tasks in flight</span>
            <span className="kpi__value">{tasksInFlight}</span>
            <span className="kpi__delta kpi__delta--up">+3 vs. 1h ago</span>
          </div>
          <div className="kpi">
            <span className="kpi__label">Outputs · 24h</span>
            <span className="kpi__value">{outputs24h}</span>
            <span className="kpi__delta kpi__delta--up">+12% vs. yesterday</span>
          </div>
          <div className="kpi">
            <span className="kpi__label">Incidents · 24h</span>
            <span className="kpi__value">{incidents24h}</span>
            <span className="kpi__delta">avg resolution 22m</span>
          </div>
        </div>

        <div className="home-grid">
          <div className="panel">
            <div className="panel__head">
              <span className="panel__title">Recent activity</span>
              <span className="panel__sub">last 4h · all agents</span>
            </div>
            <div className="feed">
              {D.activity.map((row, i) => (
                <div key={i} className="feed__row" role="button" tabIndex={0}>
                  <span className="feed__time">{row.t}</span>
                  <AgentBadge agent={D.A[row.agent]} onNav={() => navigate({ view: 'agent', agentId: row.agent })} />
                  <span className="feed__msg">
                    <span className="feed__tag" style={{ marginRight: 8 }}>[{row.tag}]</span>
                    <strong>{row.msg}</strong>
                    <span style={{ color: 'var(--fg-4)', marginLeft: 8 }}>· {row.detail}</span>
                  </span>
                  <span style={{ color: 'var(--fg-4)' }}>{Icons.chevR}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="panel">
              <div className="panel__head">
                <span className="panel__title">Agents now</span>
                <button className="sect-h__action" onClick={() => navigate({ view: 'agents' })}>View all</button>
              </div>
              <div>
                {D.agents.map((a) => (
                  <div key={a.id} className="amini" role="button" tabIndex={0}
                       onClick={() => navigate({ view: 'agent', agentId: a.id })}
                       style={{ cursor: 'pointer' }}>
                    <StatusDot status={a.status} />
                    <span style={{ minWidth: 70, fontWeight: 500, color: 'var(--fg)' }}>{a.name}</span>
                    <span className="amini__msg">{a.current}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel__head">
                <span className="panel__title">Workflows running</span>
                <button className="sect-h__action" onClick={() => navigate({ view: 'workflows' })}>View all</button>
              </div>
              <div>
                {runningWorkflows.map((w) => (
                  <div key={w.name} className="amini">
                    <StatusDot status={w.status} />
                    <span className="mono" style={{ fontSize: 12, color: 'var(--fg)', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{w.name}</span>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)' }}>{w.cron}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AgentsView({ navigate, query, setQuery }) {
  const [search, setSearch] = useState(query.search || '');
  const [status, setStatus] = useState(query.status || '');
  useEffect(() => { setQuery({ search, status }); }, [search, status]);

  const filtered = useMemo(() => {
    return D.agents.filter((a) => {
      if (status && a.status !== status) return false;
      if (search && !(a.name + ' ' + a.role).toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, status]);

  return (
    <>
      <Header
        title="Agents"
        sub={`${D.agents.length} total`}
        right={<button className="btn btn--primary btn--sm">Add agent</button>}
      />
      <div className="body">
        <div className="filter-bar">
          <div className="field">
            <span className="field__icon">{Icons.search}</span>
            <input className="input input--search" type="search"
                   placeholder="Search by name or role…"
                   value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <select className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Any status</option>
            <option value="ok">Active</option>
            <option value="warn">Degraded</option>
            <option value="err">Halted</option>
            <option value="paused">Paused</option>
          </select>
          {(search || status) && (
            <button className="btn btn--ghost btn--sm" onClick={() => { setSearch(''); setStatus(''); }}>Clear</button>
          )}
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            title="No agents match these filters"
            hint="Try clearing the search or changing the status filter."
            action={<button className="btn btn--sm" onClick={() => { setSearch(''); setStatus(''); }}>Clear filters</button>}
          />
        ) : (
          <div className="agrid">
            {filtered.map((a) => (
              <button key={a.id} className="acard"
                      onClick={() => navigate({ view: 'agent', agentId: a.id })}>
                <div className="acard__top">
                  <Monogram agent={a} size="lg" />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="acard__name">{a.name}</div>
                    <div className="acard__role">{a.role}</div>
                  </div>
                  <StatusDot status={a.status} />
                </div>
                <div className="acard__status">
                  <span style={{ color: 'var(--fg-2)' }}>{a.current}</span>
                </div>
                <div className="acard__chips">
                  <div className="acard__chip">
                    <span className="acard__chip-n">{a.counts.outputs}</span>
                    <span className="acard__chip-l">Outputs</span>
                  </div>
                  <div className="acard__chip">
                    <span className="acard__chip-n">{a.counts.skills}</span>
                    <span className="acard__chip-l">Skills</span>
                  </div>
                  <div className="acard__chip">
                    <span className="acard__chip-n">{a.counts.workflows}</span>
                    <span className="acard__chip-l">Workflows</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function AgentProfile({ route, navigate }) {
  const agent = D.A[route.agentId];
  if (!agent) {
    return (
      <>
        <Header title="Unknown agent" />
        <div className="body">
          <EmptyState title="Agent not found"
            hint={`No agent with id "${route.agentId}".`}
            action={<button className="btn btn--sm" onClick={() => navigate({ view: 'agents' })}>Back to agents</button>}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Header
        crumbs={[
          { label: 'Agents', onClick: () => navigate({ view: 'agents' }) },
          { label: agent.name },
        ]}
        title={agent.name}
        sub={`v${agent.version} · last active ${agent.lastActive}`}
        right={(
          <>
            <button className="btn btn--sm">{Icons.refresh}<span>Reload config</span></button>
            <button className="btn btn--sm">Pause</button>
            <button className="btn btn--primary btn--sm">{Icons.play}<span>Run task</span></button>
          </>
        )}
      />
      <div className="body">
        <div className="aprof__head">
          <Monogram agent={agent} size="xl" />
          <div className="aprof__meta">
            <h2 className="aprof__name">{agent.name}</h2>
            <p className="aprof__role">{agent.role}</p>
            <div className="aprof__meta-row">
              <span><StatusDot status={agent.status} /> {STATUS_LABEL[agent.status]}</span>
              <span>· {agent.current}</span>
            </div>
          </div>
        </div>

        <div className="aprof__layout">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
            <div className="panel">
              <div className="panel__head">
                <span className="panel__title">AGENTS.md</span>
                <span className="panel__sub">identity · role · permissions</span>
              </div>
              <Markdown source={agent.identity} />
            </div>
            <div className="panel">
              <div className="panel__head">
                <span className="panel__title">SOUL.md</span>
                <span className="panel__sub">behavioral directives</span>
              </div>
              <Markdown source={agent.soul} />
            </div>
          </div>

          <aside className="aprof__rail">
            <div className="aprof__rail-card">
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-3)', fontWeight: 600, marginBottom: 8 }}>
                Scoped to {agent.name}
              </div>
              <button className="aprof__rail-link" onClick={() => navigate({ view: 'output', agent: agent.id })}>
                <span>Outputs</span><span>{agent.counts.outputs} →</span>
              </button>
              <button className="aprof__rail-link" onClick={() => navigate({ view: 'skills', agent: agent.id })}>
                <span>Skills</span><span>{agent.counts.skills} →</span>
              </button>
              <button className="aprof__rail-link" onClick={() => navigate({ view: 'workflows', agent: agent.id })}>
                <span>Workflows</span><span>{agent.counts.workflows} →</span>
              </button>
            </div>

            <div className="aprof__rail-card">
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-3)', fontWeight: 600, marginBottom: 10 }}>
                System
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12, color: 'var(--fg-3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Version</span><span className="mono" style={{ color: 'var(--fg)' }}>{agent.version}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Status</span><span style={{ color: 'var(--fg)' }}>{STATUS_LABEL[agent.status]}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Last active</span><span className="mono" style={{ color: 'var(--fg)' }}>{agent.lastActive}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Agent ID</span><span className="mono" style={{ color: 'var(--fg)' }}>{agent.id}</span>
                </div>
              </div>
            </div>

            <div className="aprof__rail-card">
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-3)', fontWeight: 600, marginBottom: 10 }}>
                Recent outputs
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {D.outputs.filter((o) => o.agent === agent.id).slice(0, 4).map((o) => (
                  <button key={o.id} onClick={() => navigate({ view: 'output', agent: agent.id })}
                    style={{ display: 'block', background: 'transparent', border: 0, padding: 0, textAlign: 'left', cursor: 'pointer', color: 'inherit', font: 'inherit', width: '100%' }}>
                    <div style={{ fontSize: 12, color: 'var(--fg)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.title}</div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)' }}>{o.t} · {o.type}</div>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

function OutputView({ navigate, query, setQuery }) {
  const [search, setSearch] = useState(query.search || '');
  const [agentId, setAgentId] = useState(query.agent || '');
  const [type, setType] = useState(query.type || '');
  const [openId, setOpenId] = useState(null);
  useEffect(() => { setQuery({ search, agent: agentId, type }); }, [search, agentId, type]);
  useEffect(() => { if (query.agent !== undefined) setAgentId(query.agent); }, [query.agent]);

  const types = useMemo(() => Array.from(new Set(D.outputs.map((o) => o.type))).sort(), []);
  const filtered = useMemo(() => {
    return D.outputs.filter((o) => {
      if (agentId && o.agent !== agentId) return false;
      if (type && o.type !== type) return false;
      if (search && !(o.title + ' ' + o.preview).toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, agentId, type]);

  const grouped = useMemo(() => {
    const out = {};
    filtered.forEach((o) => { (out[o.date] = out[o.date] || []).push(o); });
    return out;
  }, [filtered]);

  const scoped = agentId ? D.A[agentId] : null;

  return (
    <>
      <Header
        crumbs={scoped ? [{ label: 'Agents', onClick: () => navigate({ view: 'agents' }) }, { label: scoped.name, onClick: () => navigate({ view: 'agent', agentId: scoped.id }) }, { label: 'Outputs' }] : []}
        title="Output"
        sub={`${filtered.length} of ${D.outputs.length}`}
        right={<button className="btn btn--sm">{Icons.copy}<span>Export</span></button>}
      />
      <div className="body">
        <FilterBar
          agents={D.agents} agentFilter={agentId} onAgentFilter={setAgentId}
          search={search} onSearch={setSearch}
          canClear={!!(search || agentId || type)}
          onClear={() => { setSearch(''); setAgentId(''); setType(''); }}>
          <select className="select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Any type</option>
            {types.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </FilterBar>

        {filtered.length === 0 ? (
          <EmptyState
            title="No outputs match these filters"
            hint="Try clearing the search or expanding the agent filter."
            action={<button className="btn btn--sm" onClick={() => { setSearch(''); setAgentId(''); setType(''); }}>Clear filters</button>}
          />
        ) : (
          <div className="panel" style={{ padding: 0 }}>
            {Object.entries(grouped).map(([date, rows]) => (
              <React.Fragment key={date}>
                <div style={{ padding: '10px 18px', background: 'var(--bg-1)', borderBottom: '1px solid var(--line-soft)', display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{date}</span>
                  <span style={{ fontSize: 11, color: 'var(--fg-4)' }}>{rows.length} entries</span>
                </div>
                {rows.map((o) => (
                  <React.Fragment key={o.id}>
                    <div className="out-row" data-open={openId === o.id}
                         onClick={() => setOpenId(openId === o.id ? null : o.id)}>
                      <span className="mono" style={{ fontSize: 12, color: 'var(--fg-3)' }}>{o.t}</span>
                      <AgentBadge agent={D.A[o.agent]} onNav={() => navigate({ view: 'agent', agentId: o.agent })} />
                      <span className="pill">{o.type}</span>
                      <div style={{ minWidth: 0 }}>
                        <div className="out-row__title">{o.title}</div>
                        <div className="out-row__preview">{o.preview}</div>
                      </div>
                      <span style={{ color: 'var(--fg-4)' }}>{openId === o.id ? Icons.chev : Icons.chevR}</span>
                    </div>
                    {openId === o.id && (
                      <div className="out-expand">
                        <div style={{ marginBottom: 12, color: 'var(--fg)' }}>{o.preview}</div>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button className="btn btn--sm">{Icons.external}<span>Open</span></button>
                          <button className="btn btn--sm">{Icons.copy}<span>Copy</span></button>
                          <button className="btn btn--sm" onClick={(e) => { e.stopPropagation(); navigate({ view: 'agent', agentId: o.agent }); }}>Open agent</button>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function SkillsView({ navigate, query, setQuery }) {
  const [search, setSearch] = useState(query.search || '');
  const [agentId, setAgentId] = useState(query.agent || '');
  useEffect(() => { setQuery({ search, agent: agentId }); }, [search, agentId]);
  useEffect(() => { if (query.agent !== undefined) setAgentId(query.agent); }, [query.agent]);

  const filtered = useMemo(() => {
    return D.skills.filter((s) => {
      if (agentId && s.agent !== agentId) return false;
      if (search && !(s.name + ' ' + s.desc).toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, agentId]);

  const scoped = agentId ? D.A[agentId] : null;

  const columns = [
    { key: 'name',        label: 'Skill',       sort: (r) => r.name,        width: '24%' },
    { key: 'desc',        label: 'Description', sort: (r) => r.desc,        width: '38%' },
    { key: 'agent',       label: 'Agent',       sort: (r) => D.A[r.agent].name, width: '14%' },
    { key: 'invocations', label: 'Invocations', sort: (r) => r.invocations, width: '12%' },
    { key: 'lastUsed',    label: 'Last used',   sort: (r) => r.lastUsed,    width: '8%' },
    { key: 'actions',     label: '',                                         width: '4%' },
  ];

  return (
    <>
      <Header
        crumbs={scoped ? [{ label: 'Agents', onClick: () => navigate({ view: 'agents' }) }, { label: scoped.name, onClick: () => navigate({ view: 'agent', agentId: scoped.id }) }, { label: 'Skills' }] : []}
        title="Skills"
        sub={`${filtered.length} of ${D.skills.length}`}
      />
      <div className="body">
        <FilterBar
          agents={D.agents} agentFilter={agentId} onAgentFilter={setAgentId}
          search={search} onSearch={setSearch}
          canClear={!!(search || agentId)}
          onClear={() => { setSearch(''); setAgentId(''); }}
        />

        <div className="panel" style={{ padding: 0 }}>
          <SortableTable
            columns={columns} rows={filtered}
            initialSort={{ key: 'invocations', dir: 'desc' }}
            emptyTitle="No skills match these filters"
            emptyHint="Try broadening the search or clearing the agent filter."
            renderRow={(s) => (
              <tr key={s.name}>
                <td><span className="mono" style={{ color: 'var(--fg)', fontWeight: 500 }}>{s.name}</span></td>
                <td style={{ color: 'var(--fg-3)' }}>{s.desc}</td>
                <td><AgentBadge agent={D.A[s.agent]} onNav={() => navigate({ view: 'agent', agentId: s.agent })} /></td>
                <td className="num">{s.invocations.toLocaleString()}</td>
                <td className="num" style={{ color: 'var(--fg-3)' }}>{s.lastUsed}</td>
                <td>
                  <button className="btn btn--ghost btn--sm row-action">{Icons.play}<span>Invoke</span></button>
                </td>
              </tr>
            )}
          />
        </div>
      </div>
    </>
  );
}

function WorkflowsView({ navigate, query, setQuery }) {
  const [search, setSearch] = useState(query.search || '');
  const [agentId, setAgentId] = useState(query.agent || '');
  const [openWf, setOpenWf] = useState(null);
  useEffect(() => { setQuery({ search, agent: agentId }); }, [search, agentId]);
  useEffect(() => { if (query.agent !== undefined) setAgentId(query.agent); }, [query.agent]);

  const filtered = useMemo(() => {
    return D.workflows.filter((w) => {
      if (agentId && w.agent !== agentId) return false;
      if (search && !(w.name + ' ' + w.cron).toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, agentId]);

  const scoped = agentId ? D.A[agentId] : null;

  const renderHistory = (s) => (
    <span className="runbar" title="Last 20 runs">
      {Array.from(s).map((ch, i) => {
        const cls = ch === 'o' ? 'runbar__cell--ok' : ch === 'e' ? 'runbar__cell--err' : ch === 'w' ? 'runbar__cell--skip' : 'runbar__cell--skip';
        return <span key={i} className={`runbar__cell ${cls}`} />;
      })}
    </span>
  );

  const columns = [
    { key: 'status',  label: '',          width: '32px' },
    { key: 'name',    label: 'Workflow',  sort: (r) => r.name,    width: '24%' },
    { key: 'cron',    label: 'Schedule',  sort: (r) => r.cron,    width: '14%' },
    { key: 'agent',   label: 'Agent',     sort: (r) => D.A[r.agent].name, width: '14%' },
    { key: 'lastRun', label: 'Last run',  sort: (r) => r.lastRun, width: '10%' },
    { key: 'nextRun', label: 'Next run',  sort: (r) => r.nextRun, width: '10%' },
    { key: 'success', label: 'Success',   sort: (r) => r.success, width: '8%' },
    { key: 'history', label: 'Last 20 runs',                       width: '14%' },
  ];

  return (
    <>
      <Header
        crumbs={scoped ? [{ label: 'Agents', onClick: () => navigate({ view: 'agents' }) }, { label: scoped.name, onClick: () => navigate({ view: 'agent', agentId: scoped.id }) }, { label: 'Workflows' }] : []}
        title="Workflows"
        sub={`${filtered.length} of ${D.workflows.length}`}
        right={<button className="btn btn--primary btn--sm">New workflow</button>}
      />
      <div className="body">
        <FilterBar
          agents={D.agents} agentFilter={agentId} onAgentFilter={setAgentId}
          search={search} onSearch={setSearch}
          canClear={!!(search || agentId)}
          onClear={() => { setSearch(''); setAgentId(''); }}
        />

        <div className="panel" style={{ padding: 0 }}>
          <SortableTable
            columns={columns} rows={filtered}
            initialSort={{ key: 'lastRun', dir: 'desc' }}
            emptyTitle="No workflows match these filters"
            emptyHint="Try broadening the search or clearing the agent filter."
            renderRow={(w) => (
              <tr key={w.name} onClick={() => setOpenWf(w)} style={{ cursor: 'pointer' }}>
                <td><StatusDot status={w.status} /></td>
                <td><span className="mono" style={{ color: 'var(--fg)', fontWeight: 500 }}>{w.name}</span></td>
                <td><span className="mono" style={{ color: 'var(--fg-3)' }}>{w.cron}</span></td>
                <td><AgentBadge agent={D.A[w.agent]} onNav={() => { event.stopPropagation(); navigate({ view: 'agent', agentId: w.agent }); }} /></td>
                <td className="num" style={{ color: 'var(--fg-3)' }}>{w.lastRun}</td>
                <td className="num" style={{ color: 'var(--fg-3)' }}>{w.nextRun}</td>
                <td className="num">
                  <span style={{ color: w.success >= 95 ? 'var(--ok)' : w.success >= 85 ? 'var(--warn)' : 'var(--err)' }}>
                    {w.success}%
                  </span>
                </td>
                <td>{renderHistory(w.history)}</td>
              </tr>
            )}
          />
        </div>
      </div>

      {openWf && (
        <Drawer title={openWf.name} onClose={() => setOpenWf(null)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <StatusDot status={openWf.status} />
              <span style={{ fontSize: 14, color: 'var(--fg)' }}>{STATUS_LABEL[openWf.status] || 'Healthy'}</span>
              <span style={{ marginLeft: 'auto' }} className="pill pill--accent">{openWf.success}% success</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '8px 14px', fontSize: 13 }}>
              <span style={{ color: 'var(--fg-3)' }}>Owner</span>
              <AgentBadge agent={D.A[openWf.agent]} />
              <span style={{ color: 'var(--fg-3)' }}>Schedule</span>
              <span className="mono" style={{ color: 'var(--fg)' }}>{openWf.cron}</span>
              <span style={{ color: 'var(--fg-3)' }}>Last run</span>
              <span className="mono" style={{ color: 'var(--fg)' }}>{openWf.lastRun}</span>
              <span style={{ color: 'var(--fg-3)' }}>Next run</span>
              <span className="mono" style={{ color: 'var(--fg)' }}>{openWf.nextRun}</span>
            </div>

            <div>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg-3)', fontWeight: 600, marginBottom: 8 }}>
                Last 20 runs
              </div>
              {renderHistory(openWf.history)}
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn--primary btn--sm">{Icons.play}<span>Run now</span></button>
              <button className="btn btn--sm">Pause</button>
              <button className="btn btn--sm" onClick={() => { setOpenWf(null); navigate({ view: 'agent', agentId: openWf.agent }); }}>Open agent</button>
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
}

Object.assign(window, {
  HomeView, AgentsView, AgentProfile, OutputView, SkillsView, WorkflowsView,
});
