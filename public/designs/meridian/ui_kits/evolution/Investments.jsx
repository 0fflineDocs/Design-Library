/* global React */
const { useState, useMemo } = React;

// Total private investment in AI labs, $B/year (illustrative)
const FUNDING_OVER_TIME = [
  { y: 2010, v: 0.3 }, { y: 2011, v: 0.4 }, { y: 2012, v: 0.7 }, { y: 2013, v: 1.1 },
  { y: 2014, v: 1.8 }, { y: 2015, v: 3.2 }, { y: 2016, v: 5.0 }, { y: 2017, v: 7.5 },
  { y: 2018, v: 12.4 }, { y: 2019, v: 18.0 }, { y: 2020, v: 28.0 }, { y: 2021, v: 68.0 },
  { y: 2022, v: 47.0 }, { y: 2023, v: 95.0 }, { y: 2024, v: 142.0 },
];

const FUNDING_BY_LAB = [
  { lab: "OpenAI",     total: 21.9, last: "$6.6B · 2024", investors: "Microsoft, Thrive, Khosla" },
  { lab: "Anthropic",  total: 16.0, last: "$4.0B · 2024", investors: "Amazon, Google, Spark" },
  { lab: "xAI",        total: 12.0, last: "$6.0B · 2024", investors: "Sequoia, a16z, Valor" },
  { lab: "Mistral",    total: 1.3,  last: "€600M · 2024", investors: "General Catalyst, Lightspeed" },
  { lab: "Inflection", total: 1.5,  last: "$1.3B · 2023", investors: "Microsoft, NVIDIA, Reid Hoffman" },
  { lab: "Cohere",     total: 1.0,  last: "$500M · 2024", investors: "Cisco, AMD, NVIDIA" },
  { lab: "Perplexity", total: 0.5,  last: "$500M · 2024", investors: "IVP, NEA, Bezos" },
];

const ROUNDS = [
  { date: "Jan 2023", lab: "OpenAI",    amt: "$10.0B", inv: "Microsoft", note: "Multi-year compute + cap-table." },
  { date: "Sep 2023", lab: "Anthropic", amt: "$4.0B",  inv: "Amazon",    note: "Cloud + minority stake." },
  { date: "Oct 2023", lab: "Anthropic", amt: "$2.0B",  inv: "Google",    note: "Strategic." },
  { date: "May 2024", lab: "xAI",       amt: "$6.0B",  inv: "Sequoia +", note: "Series B at ~$24B post." },
  { date: "Oct 2024", lab: "OpenAI",    amt: "$6.6B",  inv: "Thrive +",  note: "$157B post." },
  { date: "Nov 2024", lab: "Anthropic", amt: "$4.0B",  inv: "Amazon",    note: "Doubles down." },
];

function AreaChart({ data, height = 280, accent }) {
  const max = Math.max(...data.map(d => d.v));
  const w = 1, h = 1;
  const padX = 0.04;
  const xs = data.map((_, i) => padX + (1 - 2 * padX) * (i / (data.length - 1)));
  const ys = data.map(d => 1 - 0.06 - (d.v / max) * 0.86);
  const linePts = xs.map((x, i) => `${x},${ys[i]}`).join(" ");
  const areaPts = `${xs[0]},1 ${linePts} ${xs[xs.length-1]},1`;
  const yticks = [0, 0.25, 0.5, 0.75, 1].map(t => 1 - 0.06 - t * 0.86);

  return (
    <div style={{ position: "relative" }}>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height, display: "block" }}>
        {/* gridlines */}
        {yticks.map((y, i) => (
          <line key={i} x1={padX} x2={1 - padX} y1={y} y2={y} stroke="#2A2620" strokeWidth="0.0015" vectorEffect="non-scaling-stroke" />
        ))}
        {/* area */}
        <polygon points={areaPts} fill={accent} fillOpacity="0.12" />
        {/* line */}
        <polyline points={linePts} fill="none" stroke={accent} strokeWidth="0.004" vectorEffect="non-scaling-stroke" />
        {/* dots */}
        {xs.map((x, i) => (
          <circle key={i} cx={x} cy={ys[i]} r="0.005" fill={accent} />
        ))}
      </svg>
      {/* y axis labels */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px 0", pointerEvents: "none" }}>
        {[max, max*0.75, max*0.5, max*0.25, 0].map((v, i) => (
          <span key={i} className="t-label" style={{ color: "var(--fg-tertiary)" }}>${v.toFixed(0)}B</span>
        ))}
      </div>
      {/* x axis labels */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, padding: "0 4%" }}>
        {data.filter((_, i) => i % 2 === 0).map(d => (
          <span key={d.y} className="t-label">{d.y}</span>
        ))}
      </div>
    </div>
  );
}

function BarChart({ data, accent }) {
  const max = Math.max(...data.map(d => d.total));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {data.map((d, i) => (
        <div key={d.lab} style={{ display: "grid", gridTemplateColumns: "120px 1fr 90px", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg)" }}>{d.lab}</span>
          <div style={{ height: 28, background: "var(--surface-2)", position: "relative" }}>
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0,
              width: `${(d.total / max) * 100}%`,
              background: i === 0 ? accent : i === 1 ? "var(--accent-rust)" : "var(--fg-secondary)",
              transition: "width 600ms var(--ease-settle)",
            }} />
          </div>
          <span className="t-data" style={{ fontSize: 14, textAlign: "right", color: "var(--fg)" }}>${d.total.toFixed(1)}B</span>
        </div>
      ))}
    </div>
  );
}

function Investments() {
  const [filter, setFilter] = useState("all");
  const filtered = useMemo(() => {
    if (filter === "all") return FUNDING_OVER_TIME;
    if (filter === "decade") return FUNDING_OVER_TIME.filter(d => d.y >= 2014);
    if (filter === "boom") return FUNDING_OVER_TIME.filter(d => d.y >= 2020);
    return FUNDING_OVER_TIME;
  }, [filter]);

  return (
    <section id="investments" data-screen-label="Investments" style={{ padding: "192px 48px", borderBottom: "1px solid var(--border)", background: "var(--bg)", position: "relative" }}>
      {/* Rust accent rule — signals this is the capital section */}
      <div style={{ position: "absolute", top: 0, left: 0, height: 4, width: "20%", background: "var(--accent-rust)" }} />

      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
          <div>
            <SectionLabel index={7} accent>Investments</SectionLabel>
            <h2 className="t-h2" style={{ margin: "16px 0 0", maxWidth: 600 }}>Capital didn't follow the field. <span style={{ fontStyle: "italic", color: "var(--accent-rust)" }}>It steered it.</span></h2>
          </div>
          <p className="t-body-lg" style={{ color: "var(--fg-secondary)", maxWidth: 460, justifySelf: "end" }}>
            From a low billions in 2015 to nine-figure Series rounds in 2024. The compute thesis became an investment thesis became an industry.
          </p>
        </div>

        {/* big stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--border-emphasis)", borderBottom: "1px solid var(--border-emphasis)" }}>
          <Stat value="$1.2T" label="Total tracked · 2010–2024" />
          <Stat value="$142B" label="2024 alone" accent />
          <Stat value="473×" label="Growth since 2015" />
          <Stat value="$13.0B" label="Largest single commitment" rust />
        </div>

        {/* filters */}
        <div style={{ display: "flex", gap: 8, marginTop: 48, marginBottom: 24, alignItems: "center", flexWrap: "wrap" }}>
          <span className="t-label">Filter</span>
          {[["all", "All time"], ["decade", "2014–"], ["boom", "Boom 2020–"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "6px 12px", borderRadius: 0, cursor: "pointer",
                background: filter === id ? "var(--accent-rust)" : "transparent",
                color: filter === id ? "var(--fg-inverse)" : "var(--fg-secondary)",
                border: `1px solid ${filter === id ? "var(--accent-rust)" : "var(--border-emphasis)"}`,
              }}>{label}</button>
          ))}
          <span style={{ flex: 1 }} />
          <span className="t-label">USD · private rounds + corporate commitments</span>
        </div>

        {/* the big chart */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "32px 40px 24px", marginBottom: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, margin: 0 }}>Funding over time</h3>
            <span className="t-label">Annual · global</span>
          </div>
          <Hairline />
          <div style={{ paddingLeft: 40, paddingTop: 24 }}>
            <AreaChart data={filtered} accent="#D9603B" />
          </div>
        </div>

        {/* two-up: bars + rounds timeline */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 400, margin: 0 }}>By lab · cumulative</h3>
              <span className="t-label">$B raised</span>
            </div>
            <Hairline style={{ marginBottom: 20 }} />
            <BarChart data={FUNDING_BY_LAB} accent="#C7F23C" />
          </div>

          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 400, margin: 0 }}>Major rounds</h3>
              <span className="t-label">2023 — 2024</span>
            </div>
            <Hairline style={{ marginBottom: 12 }} />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {ROUNDS.map((r, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "90px 1fr 80px", padding: "14px 0", borderBottom: i === ROUNDS.length - 1 ? "none" : "1px solid var(--border)", gap: 16, alignItems: "baseline" }}>
                  <span className="t-data" style={{ fontSize: 12, color: "var(--fg-secondary)" }}>{r.date}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>{r.lab} <span style={{ color: "var(--fg-tertiary)", fontSize: 13, marginLeft: 6 }}>· {r.inv}</span></div>
                    <div className="t-small" style={{ color: "var(--fg-secondary)" }}>{r.note}</div>
                  </div>
                  <span className="t-data" style={{ fontSize: 16, color: "var(--accent-rust)", textAlign: "right", fontWeight: 500 }}>{r.amt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* milestone profile cards */}
        <div style={{ marginTop: 96 }}>
          <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, margin: 0 }}>Milestone deals</h3>
            <span className="t-label">Selected · 2019 — 2024</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)" }}>
            {[
              { date: "Jul 2019", title: "Microsoft → OpenAI", amt: "$1.0B", body: "First major commitment. Establishes the Azure-OpenAI dependency that defined the era." },
              { date: "Jan 2023", title: "Microsoft → OpenAI", amt: "$10.0B", body: "10× the original. Multi-year compute, cap-table position. Rewrites the lab-cloud playbook." },
              { date: "Sep 2023", title: "Amazon → Anthropic", amt: "$4.0B", body: "Counter-move. Cloud-aligned frontier-lab parity for AWS." },
            ].map((d, i) => (
              <Reveal key={i} delay={i * 60}>
                <article style={{ padding: 32, borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface)", minHeight: 240, display: "flex", flexDirection: "column", gap: 16 }}>
                  <header style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className="t-label">{d.date}</span>
                    <span className="t-data" style={{ fontSize: 22, color: "var(--accent-rust)", fontWeight: 500 }}>{d.amt}</span>
                  </header>
                  <Hairline />
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 400, margin: 0, lineHeight: 1.1 }}>{d.title}</h4>
                  <p className="t-small" style={{ color: "var(--fg-secondary)", margin: 0, lineHeight: 1.55 }}>{d.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* narrative coda */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginTop: 96, paddingTop: 48, borderTop: "1px solid var(--border-emphasis)" }}>
          <SectionLabel>Coda</SectionLabel>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.25, fontStyle: "italic", color: "var(--fg)", margin: 0, textWrap: "pretty" }}>
            For most of the field's history, AI ran on academic salaries and government grants. After 2020, capital arrived at a different scale — and arrived first at the labs that were already winning. <span style={{ color: "var(--accent-rust)" }}>The compute thesis became an investment thesis became an industry.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, accent, rust }) {
  return (
    <div style={{ padding: "32px 24px", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 8 }}>
      <div className="t-data" style={{
        fontSize: 56, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.025em",
        color: accent ? "var(--accent)" : rust ? "var(--accent-rust)" : "var(--fg)"
      }}>{value}</div>
      <div className="t-label">{label}</div>
    </div>
  );
}

window.Investments = Investments;
