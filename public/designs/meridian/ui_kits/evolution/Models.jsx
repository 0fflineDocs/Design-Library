/* global React */
const MODELS = [
  { name: "ELIZA",     lab: "MIT",        year: 1966, params: "—",      why: "Pattern-match dialogue. The first chatbot." },
  { name: "Deep Blue", lab: "IBM",        year: 1997, params: "—",      why: "Defeats Kasparov. Search beats intuition at chess." },
  { name: "AlexNet",   lab: "Toronto",    year: 2012, params: "60M",    why: "Wins ImageNet by 10pp. The deep-learning era opens." },
  { name: "AlphaGo",   lab: "DeepMind",   year: 2016, params: "—",      why: "Defeats Lee Sedol. RL + tree search beats pros at Go." },
  { name: "Transformer", lab: "Google Brain", year: 2017, params: "65M", why: "Attention. The architecture that ate everything." },
  { name: "BERT",      lab: "Google",     year: 2018, params: "340M",   why: "Bidirectional pretraining. NLP changes overnight." },
  { name: "GPT-3",     lab: "OpenAI",     year: 2020, params: "175B",   why: "Few-shot in-context learning. Scale is the lesson." },
  { name: "AlphaFold 2", lab: "DeepMind", year: 2021, params: "—",      why: "Protein structure to ~atomic accuracy." },
  { name: "ChatGPT",   lab: "OpenAI",     year: 2022, params: "175B",   why: "RLHF + product. AI becomes a consumer category." },
  { name: "GPT-4",     lab: "OpenAI",     year: 2023, params: "Undisclosed", why: "Multimodal frontier model. Bar resets again." },
  { name: "Claude 3.5", lab: "Anthropic", year: 2024, params: "Undisclosed", why: "Tool use, long context, constitutional alignment." },
  { name: "Gemini 1.5", lab: "Google DeepMind", year: 2024, params: "Undisclosed", why: "1M-token context. Multimodal native." },
];

function Models() {
  return (
    <section id="models" data-screen-label="Models" style={{ padding: "192px 48px", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel index={5} accent>Models</SectionLabel>
          <h2 className="t-h2" style={{ margin: "16px 0 0" }}>Landmark models, in sequence.</h2>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)" }}>
          <thead>
            <tr style={{ borderTop: "1px solid var(--border-emphasis)", borderBottom: "1px solid var(--border-emphasis)" }}>
              <th style={th()}>Model</th>
              <th style={th()}>Lab</th>
              <th style={{ ...th(), textAlign: "right", width: 100 }}>Year</th>
              <th style={{ ...th(), textAlign: "right", width: 140 }}>Parameters</th>
              <th style={{ ...th(), width: "44%" }}>Why it mattered</th>
            </tr>
          </thead>
          <tbody>
            {MODELS.map((m, i) => (
              <tr key={m.name} style={{ borderBottom: "1px solid var(--border)" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--surface)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <td style={td()}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400 }}>{m.name}</span>
                </td>
                <td style={td()}><span className="t-small" style={{ color: "var(--fg-secondary)" }}>{m.lab}</span></td>
                <td style={{ ...td(), textAlign: "right" }}><span className="t-data" style={{ fontSize: 14 }}>{m.year}</span></td>
                <td style={{ ...td(), textAlign: "right" }}><span className="t-data" style={{ fontSize: 14, color: i >= 7 ? "var(--accent)" : "var(--fg)" }}>{m.params}</span></td>
                <td style={td()}><span className="t-small" style={{ color: "var(--fg-secondary)" }}>{m.why}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  function th() { return { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-tertiary)", textAlign: "left", padding: "16px 16px", fontWeight: 400 }; }
  function td() { return { padding: "20px 16px", verticalAlign: "baseline" }; }
}

window.Models = Models;
