/* Hermes Labs — System Health panel.
   Vertical list of metrics: icon + label + value + thin progress bar. */

function HealthMetric({ m }) {
  return (
    <div className="metric">
      <div className="metric__label">
        <span className="metric__icon">{window.HLIcon[m.icon]}</span>
        {m.label}
      </div>
      <div className={'metric__value is-' + m.tone}>
        {m.value}
        {m.delta && <span className="metric__delta">{'\u2191'}{m.delta}</span>}
      </div>
      <div className="metric__bar">
        <i className={'is-' + m.tone} style={{ width: m.pct + '%' }} />
      </div>
    </div>
  );
}

function SystemHealth({ metrics }) {
  return (
    <section className="panel">
      <div className="panel__head">
        <span className="panel__title">System Health</span>
        <span className="panel__meta">live · 5s</span>
      </div>
      {metrics.map((m) => <HealthMetric key={m.id} m={m} />)}
    </section>
  );
}

window.SystemHealth = SystemHealth;
