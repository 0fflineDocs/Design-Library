/* global React */
const PEOPLE = [
  { name: "Alan Turing", role: "Mathematician", lab: "Bletchley Park", years: "1912–1954", body: "Imitation game; foundations of computability. The seed.", initials: "AT" },
  { name: "Marvin Minsky", role: "Cognitive scientist", lab: "MIT", years: "1927–2016", body: "Society of Mind. Co-founded the MIT AI Lab.", initials: "MM" },
  { name: "Geoffrey Hinton", role: "Computer scientist", lab: "Toronto · Google", years: "1947–", body: "Backpropagation, Boltzmann machines, AlexNet. Three decades, one through-line.", initials: "GH" },
  { name: "Yann LeCun", role: "Computer scientist", lab: "Meta FAIR", years: "1960–", body: "Convolutional networks. PyTorch. Open weights.", initials: "YL" },
  { name: "Yoshua Bengio", role: "Computer scientist", lab: "Mila · Université de Montréal", years: "1964–", body: "Deep learning theory; sequence modeling.", initials: "YB" },
  { name: "Demis Hassabis", role: "Researcher · CEO", lab: "DeepMind", years: "1976–", body: "Reinforcement learning at scale. AlphaFold 2.", initials: "DH" },
  { name: "Ilya Sutskever", role: "Researcher", lab: "OpenAI · SSI", years: "1986–", body: "AlexNet. Sequence-to-sequence. GPT lineage.", initials: "IS" },
  { name: "Fei-Fei Li", role: "Computer scientist", lab: "Stanford HAI", years: "1976–", body: "ImageNet. The dataset that made the breakthrough possible.", initials: "FL" },
];

function Portrait({ initials }) {
  return (
    <div style={{
      width: "100%", aspectRatio: "1/1", background: "var(--surface-2)",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      filter: "grayscale(1)",
      backgroundImage: "linear-gradient(135deg, #2A2620 0%, #16140F 100%)",
    }}>
      <span style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 30%, rgba(232,226,213,0.15), transparent 60%)" }} />
      <span style={{
        fontFamily: "var(--font-display)", fontSize: 96, color: "var(--fg-tertiary)",
        letterSpacing: "-0.03em", fontStyle: "italic",
      }}>{initials}</span>
      <span className="t-label" style={{ position: "absolute", top: 12, left: 12, color: "var(--fg-tertiary)" }}>PORTRAIT</span>
      <span style={{ position: "absolute", bottom: 12, right: 12, width: 6, height: 6, background: "var(--accent)" }} />
    </div>
  );
}

function People() {
  return (
    <section id="people" data-screen-label="People" style={{ padding: "192px 48px", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <SectionLabel index={3} accent>People</SectionLabel>
          <h2 className="t-h2" style={{ margin: "16px 0 0", maxWidth: 720 }}>The work has names. <span style={{ color: "var(--fg-secondary)", fontStyle: "italic" }}>And faces.</span></h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {PEOPLE.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i * 50, 320)}>
              <article style={{ background: "var(--surface)", border: "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
                <Portrait initials={p.initials} />
                <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  <header style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className="t-label">{p.role}</span>
                    <span className="t-label" style={{ color: "var(--fg-tertiary)" }}>{p.years}</span>
                  </header>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 400, lineHeight: 1.1, margin: 0 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: "var(--fg-secondary)", lineHeight: 1.5, margin: 0 }}>{p.body}</p>
                  <div style={{ paddingTop: 10, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
                    <span className="t-label">Affiliation</span>
                    <span className="t-data" style={{ fontSize: 12, color: "var(--fg)" }}>{p.lab}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.People = People;
