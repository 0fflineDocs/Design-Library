/* global React */
const TIMELINE = [
  { year: "1950", title: "The Imitation Game", body: "Turing publishes 'Computing Machinery and Intelligence'.", era: "Foundations" },
  { year: "1956", title: "Dartmouth", body: "Ten researchers, eight weeks. The field is named.", era: "Foundations", marker: true },
  { year: "1969", title: "Perceptrons", body: "Minsky and Papert. A book that ushered in the first winter.", era: "Symbolic" },
  { year: "1974", title: "First AI Winter", body: "DARPA funding collapses. Expert-systems hopes deferred.", era: "Winter" },
  { year: "1986", title: "Backpropagation", body: "Rumelhart, Hinton, Williams. Multi-layer learning becomes practical.", era: "Connectionism", marker: true },
  { year: "1997", title: "Deep Blue", body: "IBM defeats Kasparov. Search at industrial scale.", era: "Symbolic" },
  { year: "2012", title: "AlexNet", body: "Krizhevsky, Sutskever, Hinton. ImageNet falls.", era: "Deep Learning", marker: true },
  { year: "2017", title: "Transformer", body: "'Attention Is All You Need.' The architecture that swallowed the field.", era: "Transformers", marker: true },
  { year: "2020", title: "GPT-3", body: "175B parameters. Few-shot learning at scale.", era: "Generative" },
  { year: "2022", title: "ChatGPT", body: "Public release. AI becomes a consumer category.", era: "Generative", marker: true },
  { year: "2024", title: "Frontier Models", body: "GPT-4o, Claude 3.5, Gemini 1.5. Multimodal, agentic, contested.", era: "Frontier" },
];

function Timeline() {
  return (
    <section id="timeline" data-screen-label="Timeline" style={{ padding: "192px 48px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 64, maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ position: "sticky", top: 96, alignSelf: "start" }}>
          <SectionLabel index={1} accent>Timeline</SectionLabel>
          <h2 className="t-h2" style={{ margin: "16px 0 12px" }}>Seventy years, in fifteen moments.</h2>
          <p className="t-small" style={{ color: "var(--fg-secondary)" }}>From foundational theory through generative AI. Each marker a turn.</p>
        </div>
        <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: 48 }}>
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={Math.min(i * 30, 240)}>
              <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 140px", gap: 32, padding: "28px 0", borderBottom: "1px solid var(--border)", alignItems: "baseline", position: "relative" }}>
                <div style={{ position: "absolute", left: -56, top: 36, width: t.marker ? 10 : 6, height: t.marker ? 10 : 6, background: t.marker ? "var(--accent)" : "var(--border-bright)" }} />
                <div className="t-data" style={{ fontSize: 24, color: "var(--fg)", letterSpacing: "-0.01em" }}>{t.year}</div>
                <div>
                  <div className="t-h3" style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 400 }}>{t.title}</div>
                  <div className="t-small" style={{ color: "var(--fg-secondary)", marginTop: 6 }}>{t.body}</div>
                </div>
                <div style={{ textAlign: "right" }}><Badge>{t.era}</Badge></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Timeline = Timeline;
