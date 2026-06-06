/* global React */
const BREAKS = [
  { year: 1958, title: "Perceptron", body: "Rosenblatt builds a single-layer neural network. The first learnable machine.", tag: "Theory" },
  { year: 1986, title: "Backpropagation", body: "Practical gradient-descent learning for deep networks.", tag: "Method" },
  { year: 1997, title: "LSTM", body: "Hochreiter & Schmidhuber. Sequence memory at last.", tag: "Architecture" },
  { year: 2006, title: "Deep Belief Nets", body: "Hinton et al. Pretraining unlocks deeper models.", tag: "Method" },
  { year: 2012, title: "AlexNet on ImageNet", body: "Convnet on GPUs. The empirical turn.", tag: "Empirical" },
  { year: 2014, title: "GANs", body: "Goodfellow. A second network as a critic.", tag: "Architecture" },
  { year: 2017, title: "Transformer", body: "Attention replaces recurrence. The decade is decided.", tag: "Architecture" },
  { year: 2020, title: "Scaling laws", body: "Kaplan et al. Performance is a power law in compute.", tag: "Empirical" },
  { year: 2022, title: "RLHF at scale", body: "Alignment from preferences. The product unlocked.", tag: "Method" },
];

function Breakthroughs() {
  return (
    <section id="breakthroughs" data-screen-label="Breakthroughs" style={{ padding: "192px 48px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
          <div>
            <SectionLabel index={4} accent>Breakthroughs</SectionLabel>
            <h2 className="t-h2" style={{ margin: "16px 0 0" }}>Nine ideas that changed direction.</h2>
          </div>
          <p className="t-body-lg" style={{ color: "var(--fg-secondary)", maxWidth: 460, justifySelf: "end" }}>
            Method, architecture, theory. The technical inflections that, in retrospect, the field organized itself around.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)" }}>
          {BREAKS.map((b, i) => (
            <Reveal key={b.title} delay={Math.min(i * 40, 280)}>
              <article style={{ padding: 32, borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface)", display: "flex", flexDirection: "column", gap: 18, minHeight: 240 }}>
                <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="t-data" style={{ fontSize: 20, color: "var(--accent)" }}>{b.year}</span>
                  <Badge>{b.tag}</Badge>
                </header>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 400, lineHeight: 1.1, margin: 0 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: "var(--fg-secondary)", lineHeight: 1.55, margin: 0 }}>{b.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Breakthroughs = Breakthroughs;
