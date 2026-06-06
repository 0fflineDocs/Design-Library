// BriefCard — the core unit. Featured variant spans 2 cols with a
// moss wash + permanent gold border. Loading variant = upcoming brief.
function BriefCard({ brief }) {
  if (brief.loading) {
    return (
      <article className="card card--loading" aria-label="Upcoming brief">
        <div className="card__top">
          <span className="skel skel-line pulse" style={{ width: "56px" }}></span>
          <span className="skel skel-line pulse" style={{ width: "44px" }}></span>
        </div>
        <span className="skel pulse" style={{ width: "80%", height: "1.4rem", marginTop: "0.4rem" }}></span>
        <span className="skel skel-line pulse" style={{ width: "100%" }}></span>
        <span className="skel skel-line pulse" style={{ width: "90%" }}></span>
        <span className="card__date" style={{ color: "var(--copper)" }}>In progress · soon</span>
      </article>
    );
  }

  const TitleTag = brief.featured ? "h2" : "h3";
  return (
    <article
      className={"card" + (brief.featured ? " card--featured" : "")}
      tabIndex="0"
      role="link"
    >
      <div className="card__top">
        <div className="card__tags">
          {brief.cats.map((c) => <window.TopicTag key={c} cat={c} />)}
        </div>
        <span className="card__time">{brief.minutes} min</span>
      </div>
      <TitleTag className="card__title">
        {brief.title}
        {brief.kicker && <span className="card__kicker"> — {brief.kicker}</span>}
      </TitleTag>
      <p className="card__excerpt">{brief.excerpt}</p>
      <span className="card__date">{brief.date}</span>
    </article>
  );
}
window.BriefCard = BriefCard;
