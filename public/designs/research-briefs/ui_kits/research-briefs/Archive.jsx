// Archive — compact list of older briefs.
function Archive({ rows }) {
  return (
    <section className="archive pad">
      <div className="archive__head">
        <span className="archive__label">Archive</span>
        <span style={{ flex: 1, height: 1, background: "var(--gold-tint-soft)" }}></span>
      </div>
      {rows.map((r, i) => (
        <div className="archive__row" key={i} role="link" tabIndex="0">
          <span className="archive__bullet">◆</span>
          <span className="archive__title">{r.title}</span>
          <span className="archive__date">{r.date}</span>
          <span className="archive__pill">{r.minutes} min</span>
        </div>
      ))}
    </section>
  );
}
window.Archive = Archive;

// Pagination — present for future growth; one page for now.
function Pagination({ page, total }) {
  return (
    <nav className="pagination" aria-label="Pagination">
      <button className="pagination__btn" disabled>← Older</button>
      <span>Page {page} of {total}</span>
      <button className="pagination__btn" disabled>Newer →</button>
    </nav>
  );
}
window.Pagination = Pagination;

// Footer — minimal attribution.
function Footer() {
  return (
    <footer className="footer">
      <p>HERMES LABS · Vault research outputs</p>
      <p>Research by the Hermes Researcher profile · Curated from daily briefings</p>
    </footer>
  );
}
window.Footer = Footer;
