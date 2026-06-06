/* global React */
const MOVEMENTS = [
  { name: "Symbolic AI", years: "1956–1980", body: "Logic, search, knowledge representation. The early conviction that intelligence is rule-following." },
  { name: "Expert Systems", years: "1965–1985", body: "MYCIN, DENDRAL. Encoded knowledge meets the limits of the encoder." },
  { name: "Connectionism", years: "1986–2006", body: "Networks, distributed representations. A counter-tradition that was right." },
  { name: "Deep Learning", years: "2006–2017", body: "Pretraining, GPUs, large datasets. Empirical AI takes over the lab." },
  { name: "Transformer Era", years: "2017–", body: "Attention, scale, emergence. The architecture that swallowed the field." },
  { name: "Generative AI", years: "2020–", body: "Synthesis as the dominant interface. AI becomes consumer software." },
  { name: "Open-Source AI", years: "2023–", body: "LLaMA, Mistral, Qwen. Distribution by weights, not just APIs." },
  { name: "Frontier Race", years: "2023–", body: "Closed labs, billions in compute, governments at the table." },
];

function Movements() {
  return (
    <section id="movements" data-screen-label="Movements" style={{ padding: "192px 48px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
          <div>
            <SectionLabel index={6} accent>Movements</SectionLabel>
            <h2 className="t-h2" style={{ margin: "16px 0 0" }}>Eras have names.</h2>
          </div>
          <p className="t-body-lg" style={{ color: "var(--fg-secondary)", maxWidth: 480, justifySelf: "end" }}>
            The field's collective ideas about what intelligence is — and what to build — keep changing. These are the named arguments.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)" }}>
          {MOVEMENTS.map((m, i) => (
            <Reveal key={m.name} delay={Math.min(i * 50, 300)}>
              <article style={{ padding: 40, borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, minHeight: 200, background: i % 3 === 1 ? "var(--surface)" : "transparent" }}>
                <div style={{ borderRight: "1px solid var(--border)", paddingRight: 24 }}>
                  <SectionLabel index={i + 1}>Movement</SectionLabel>
                  <div className="t-data" style={{ fontSize: 14, color: "var(--fg-secondary)", marginTop: 14 }}>{m.years}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 400, lineHeight: 1.0, letterSpacing: "-0.02em", margin: 0 }}>{m.name}</h3>
                  <p style={{ fontSize: 15, color: "var(--fg-secondary)", lineHeight: 1.55, marginTop: 14, marginBottom: 0 }}>{m.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Movements = Movements;
