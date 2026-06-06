/* global React */
function Hero() {
  return (
    <header id="top" style={{ position: "relative", padding: "120px 48px 96px", borderBottom: "1px solid var(--border)" }}>
      {/* corner anchors */}
      <div style={{ position: "absolute", top: 80, left: 48, right: 48, display: "flex", justifyContent: "space-between" }}>
        <span className="t-label">§ Evolution / 2026</span>
        <span className="t-label">A history · in seven parts</span>
      </div>

      <h1 className="t-wordmark" style={{ margin: "32px 0 0", textAlign: "center", lineHeight: 0.88, letterSpacing: "-0.035em" }}>EVOLUTION</h1>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
        <span style={{ width: 8, height: 8, background: "var(--accent)" }} />
      </div>

      <p style={{ margin: "32px auto 0", maxWidth: 720, textAlign: "center", fontFamily: "var(--font-display)", fontSize: 28, fontStyle: "italic", lineHeight: 1.25, color: "var(--fg-secondary)" }}>
        A History of Artificial Intelligence
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, maxWidth: 1100, margin: "96px auto 0" }}>
        <div>
          <SectionLabel index={0}>Intro</SectionLabel>
          <p style={{ marginTop: 14, fontSize: 18, lineHeight: 1.55, color: "var(--fg)" }}>
            The history of artificial intelligence is not a single story. It is many — of theorists, of laboratories, of dollars, of decades-long winters, of a few decisive afternoons. <span style={{ color: "var(--fg-secondary)" }}>Evolution is a record.</span>
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignContent: "start" }}>
          <MonoStat value="68" label="Years covered" />
          <MonoStat value="42" label="Labs indexed" />
          <MonoStat value="180+" label="People profiled" accent />
          <MonoStat value="$1.2T" label="Capital tracked" />
        </div>
      </div>
    </header>
  );
}

window.Hero = Hero;
