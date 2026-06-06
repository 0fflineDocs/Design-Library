/* global React */
function Footer() {
  return (
    <footer style={{ padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
      <span className="t-label">§ Evolution · A History of Artificial Intelligence · 2026</span>
      <span className="t-label" style={{ color: "var(--fg-tertiary)" }}>01 Timeline · 02 Labs · 03 People · 04 Breakthroughs · 05 Models · 06 Movements · 07 Investments</span>
      <span className="t-label">↗ Colophon</span>
    </footer>
  );
}
window.Footer = Footer;
