// Filters — horizontal category pill row. Clicking filters the grid.
function Filters({ active, onSelect }) {
  return (
    <nav className="filters pad" aria-label="Filter briefs by category">
      {window.CATEGORIES.map((c) => {
        const isActive = active === c.key;
        return (
          <button
            key={c.key}
            className={"pill" + (isActive ? " is-active" : "")}
            aria-pressed={isActive}
            onClick={() => onSelect(c.key)}
          >
            <span className="pill__diamond">◆</span>
            {c.label}
          </button>
        );
      })}
    </nav>
  );
}
window.Filters = Filters;
