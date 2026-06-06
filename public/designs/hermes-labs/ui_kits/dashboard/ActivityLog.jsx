/* Hermes Labs — Activity Log.
   Full-width reverse-chronological feed. Newest first; older entries
   fade in opacity (1.0 → ~0.55) to suggest recency depth. */

function LogRow({ entry, dim }) {
  return (
    <div className="log__row" style={{ opacity: dim }}>
      <span className="log__time">[{entry.time}]</span>
      <span className={'log__text' + (entry.down ? ' is-down' : '')}>
        <span className="path">{entry.path}</span> — {entry.text}
      </span>
      <span className="log__tag">{entry.tag}</span>
    </div>
  );
}

function ActivityLog({ entries }) {
  return (
    <section className="panel">
      <div className="panel__head">
        <span className="panel__title">Recent Activity</span>
        <span className="panel__meta">{entries.length} events</span>
      </div>
      <div className="log">
        {entries.map((entry, i) => (
          <LogRow key={i} entry={entry} dim={Math.max(0.55, 1 - i * 0.06)} />
        ))}
      </div>
    </section>
  );
}

window.ActivityLog = ActivityLog;
