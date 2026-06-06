// App — assembles the Research Briefs reading room.
const { useState } = React;

function App() {
  const [filter, setFilter] = useState("all");

  const all = window.BRIEFS;
  const visible = filter === "all"
    ? all
    : all.filter((b) => b.cats.includes(filter));

  // Featured first (only when it matches the filter), then the rest.
  const featured = visible.find((b) => b.featured);
  const rest = visible.filter((b) => !b.featured);

  return (
    <div className="page">
      <window.TopBar />
      <window.Hero briefCount={11} wordCount="42,500" updated="May 29, 2026" />
      <hr className="divider" />
      <window.Filters active={filter} onSelect={setFilter} />

      <main className="grid pad">
        {featured && <window.BriefCard brief={featured} />}
        {rest.map((b) => <window.BriefCard key={b.id} brief={b} />)}
        {visible.length === 0 && (
          <div className="empty">No briefs in this category yet.</div>
        )}
        {/* upcoming brief placeholder (loading state) shown only on "All" */}
        {filter === "all" && <window.BriefCard brief={{ loading: true }} />}
      </main>

      <window.Archive rows={window.ARCHIVE} />
      <window.Pagination page={1} total={1} />
      <window.Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
