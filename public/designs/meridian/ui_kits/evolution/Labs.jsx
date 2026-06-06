/* global React */
const LABS = [
  { name: "Stanford AI Lab", year: 1963, location: "Stanford, CA", body: "Founded by John McCarthy. Symbolic AI, computer vision, robotics. SAIL gave the field much of its early infrastructure and many of its first practitioners.", notable: ["SHAKEY (1966)", "LISP", "STAN-LM (2023)"], funding: "Public · undisclosed" },
  { name: "Bell Labs", year: 1925, location: "Murray Hill, NJ", body: "Speech recognition, neural-net theory, the foundations of information theory under Shannon. The industrial laboratory that made many of the prerequisites possible.", notable: ["Audrey (1952)", "LeNet (1989)"], funding: "Corporate · AT&T" },
  { name: "DeepMind", year: 2010, location: "London, UK", body: "Founded by Demis Hassabis, Shane Legg, Mustafa Suleyman. Acquired by Google in 2014 for ~$650M. Reinforcement learning, biology, multi-agent systems.", notable: ["AlphaGo", "AlphaFold 2", "Gemini"], funding: "Subsidiary · Google" },
  { name: "OpenAI", year: 2015, location: "San Francisco, CA", body: "Founded as a nonprofit research lab. Now a capped-profit. Microsoft committed $13.0B in 2023 — the largest single private commitment to an AI lab at the time.", notable: ["GPT-2/3/4", "DALL·E", "Sora"], funding: "$13.0B · Microsoft" },
  { name: "Anthropic", year: 2021, location: "San Francisco, CA", body: "Founded by Dario and Daniela Amodei with researchers from OpenAI. Constitutional AI, RLHF refinements, mechanistic interpretability. Frontier-aligned.", notable: ["Claude family", "Constitutional AI"], funding: "$8B · Amazon (2024)" },
  { name: "Meta FAIR", year: 2013, location: "Menlo Park, CA", body: "Founded by Yann LeCun. Open research with strong open-weight publishing posture. PyTorch's home.", notable: ["LLaMA family", "PyTorch", "Segment Anything"], funding: "Subsidiary · Meta" },
];

function Labs() {
  return (
    <section id="labs" data-screen-label="Labs" style={{ padding: "192px 48px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 64 }}>
          <div>
            <SectionLabel index={2} accent>Labs</SectionLabel>
            <h2 className="t-h2" style={{ margin: "16px 0 0" }}>Where the work happens.</h2>
          </div>
          <p className="t-body-lg" style={{ color: "var(--fg-secondary)", maxWidth: 480, justifySelf: "end" }}>
            Public, corporate, and frontier labs. Each one a sustained bet on a research direction — and on the people who carry it.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)" }}>
          {LABS.map((lab, i) => (
            <Reveal key={lab.name} delay={Math.min(i * 60, 360)}>
              <article style={{ padding: 32, borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface)", display: "flex", flexDirection: "column", gap: 20, height: "100%", minHeight: 380 }}>
                <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <SectionLabel index={i + 1}>Lab</SectionLabel>
                  <span className="t-label">{lab.location}</span>
                </header>
                <Hairline />
                <div>
                  <h3 className="t-h3" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400, lineHeight: 1.05, margin: 0 }}>{lab.name}</h3>
                  <div className="t-data" style={{ fontSize: 13, color: "var(--fg-tertiary)", marginTop: 8 }}>Founded {lab.year}</div>
                </div>
                <p className="t-small" style={{ color: "var(--fg-secondary)", lineHeight: 1.55, margin: 0 }}>{lab.body}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
                  {lab.notable.map(n => <Badge key={n}>{n}</Badge>)}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                  <span className="t-label">Funding</span>
                  <span className="t-data" style={{ fontSize: 13, color: "var(--fg)" }}>{lab.funding}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Labs = Labs;
