/* global React */
const { useEffect, useRef, useState } = React;

// ----- SectionLabel ----- monospace, tracked, uppercase
function SectionLabel({ index, children, accent }) {
  return (
    <div className="t-label" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--fg-secondary)" }}>
      {index != null && <span style={{ color: accent ? "var(--accent)" : "var(--fg-tertiary)" }}>{String(index).padStart(2, "0")}</span>}
      <span>{children}</span>
    </div>
  );
}

function Hairline({ emphasis, style }) {
  return <hr className={`rule ${emphasis ? "rule-emphasis" : ""}`} style={style} />;
}

function Button({ variant = "ghost", children, marker, onClick, ...rest }) {
  const base = {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: variant === "primary" ? 700 : 500,
    padding: "12px 20px",
    border: "1px solid var(--border-emphasis)",
    background: "transparent",
    color: "var(--fg)",
    cursor: "pointer",
    borderRadius: 0,
    letterSpacing: "-0.005em",
    transition: "all 180ms var(--ease-settle)",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
  };
  const variants = {
    primary: { background: "var(--accent)", borderColor: "var(--accent)", color: "var(--fg-inverse)" },
    ghost: {},
    rust: { borderColor: "var(--accent-rust)", color: "var(--accent-rust)" },
  };
  return (
    <button
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={(e) => {
        if (variant === "primary") { e.currentTarget.style.background = "var(--accent-dim)"; e.currentTarget.style.borderColor = "var(--accent-dim)"; }
        else if (variant === "rust") { e.currentTarget.style.background = "var(--accent-rust)"; e.currentTarget.style.color = "var(--fg-inverse)"; }
        else { e.currentTarget.style.borderColor = "var(--border-bright)"; e.currentTarget.style.background = "var(--surface-2)"; }
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, base, variants[variant]);
      }}
      onClick={onClick}
      {...rest}
    >
      {marker && <span style={{ width: 6, height: 6, background: variant === "primary" ? "var(--fg-inverse)" : "var(--accent)" }} />}
      {children}
    </button>
  );
}

function Badge({ tone = "neutral", children }) {
  const toneStyles = {
    neutral: { borderColor: "var(--border)", color: "var(--fg-secondary)" },
    accent: { borderColor: "var(--accent)", color: "var(--accent)" },
    rust: { borderColor: "var(--accent-rust)", color: "var(--accent-rust)" },
    solid: { background: "var(--accent)", borderColor: "var(--accent)", color: "var(--fg-inverse)", fontWeight: 500 },
  };
  return (
    <span style={{
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "5px 10px",
      border: "1px solid",
      background: "var(--surface)",
      display: "inline-block",
      ...toneStyles[tone],
    }}>{children}</span>
  );
}

function Card({ label, meta, children, onClick, style }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "var(--surface-2)" : "var(--surface)",
        border: `1px solid ${hover ? "var(--border-emphasis)" : "var(--border)"}`,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        transition: "all 180ms var(--ease-settle)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}>
      {(label || meta) && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>
            <span className="t-label">{label}</span>
            {meta && <span className="t-label" style={{ color: "var(--fg-tertiary)" }}>{meta}</span>}
          </div>
        </>
      )}
      {children}
    </div>
  );
}

// ----- MonoStat ----- a number + label block, brutalist
function MonoStat({ value, label, accent }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, borderTop: "1px solid var(--border)", paddingTop: 12 }}>
      <div className="t-data" style={{ fontSize: 28, fontWeight: 500, color: accent ? "var(--accent)" : "var(--fg)", letterSpacing: "-0.01em" }}>{value}</div>
      <div className="t-label">{label}</div>
    </div>
  );
}

// ----- Reveal ----- one-shot scroll-in
function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      transform: seen ? "translateY(0)" : "translateY(24px)",
      opacity: seen ? 1 : 0,
      transition: `transform 400ms var(--ease-settle) ${delay}ms, opacity 400ms var(--ease-settle) ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

Object.assign(window, { SectionLabel, Hairline, Button, Badge, Card, MonoStat, Reveal });
