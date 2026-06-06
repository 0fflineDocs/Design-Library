// TopBar — thin top chrome with brand mark + section label
function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__brand">
        <img className="topbar__mark" src="../../assets/hermes-mark.svg" alt="Hermes Labs" />
        <span className="topbar__name">Hermes Labs</span>
      </div>
      <span className="topbar__section">Research Briefs</span>
    </header>
  );
}

// TopicTag — color-coded by category
function TopicTag({ cat }) {
  return <span className={`tag tag--${cat}`}>{window.CAT_LABELS[cat]}</span>;
}

window.TopBar = TopBar;
window.TopicTag = TopicTag;
