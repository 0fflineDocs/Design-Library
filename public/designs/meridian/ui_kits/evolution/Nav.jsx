/* global React */
const { useState, useEffect } = React;

const NAV_ITEMS = [
  { id: "timeline", label: "Timeline" },
  { id: "labs", label: "Labs" },
  { id: "people", label: "People" },
  { id: "breakthroughs", label: "Breakthroughs" },
  { id: "models", label: "Models" },
  { id: "movements", label: "Movements" },
  { id: "investments", label: "Investments" },
];

function Nav() {
  const [active, setActive] = useState("timeline");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(s => io.observe(s));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 48px",
      background: scrolled ? "rgba(14,13,11,0.92)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "background 180ms var(--ease-settle), border-color 180ms var(--ease-settle)",
    }}>
      <a href="#top" style={{ fontFamily: "var(--font-display)", fontSize: 24, letterSpacing: "-0.02em", color: "var(--fg)", textDecoration: "none" }}>Evolution</a>
      <div style={{ display: "flex", gap: 22 }}>
        {NAV_ITEMS.map((n, i) => (
          <a key={n.id} href={`#${n.id}`} style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
            color: active === n.id ? "var(--fg)" : "var(--fg-secondary)",
            textDecoration: "none", display: "flex", alignItems: "center", gap: 8,
            transition: "color 180ms",
          }}>
            <span style={{
              width: 6, height: 6,
              background: active === n.id ? "var(--accent)" : "transparent",
              border: active === n.id ? "none" : "1px solid var(--border-emphasis)",
            }} />
            {String(i + 1).padStart(2, "0")} {n.label}
          </a>
        ))}
      </div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-tertiary)", letterSpacing: "0.08em" }}>2026 · §</span>
    </nav>
  );
}

window.Nav = Nav;
