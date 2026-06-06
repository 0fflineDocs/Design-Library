/* Hermes Labs — Cron Schedule panel.
   Table-style list, no grid lines. name + schedule badge | status pill | arrow. */

const HL_CRON_PILL = {
  ok:     { cls: 'pill pill--ok',     label: 'ok' },
  warn:   { cls: 'pill pill--warn',   label: 'pending' },
  failed: { cls: 'pill pill--failed', label: 'failed' },
};

function CronRow({ job }) {
  const p = HL_CRON_PILL[job.status] || HL_CRON_PILL.ok;
  return (
    <div className="cron__row" tabIndex={0}>
      <div className="cron__main">
        <span className="cron__name">
          <b>{job.agent}</b>&nbsp; {job.name}
        </span>
        <span className="badge">{job.schedule}{job.note ? ' · ' + job.note : ''}</span>
      </div>
      <span className={p.cls}>{p.label}</span>
      <span className="cron__arrow">{'\u25B8'}</span>
    </div>
  );
}

function CronSchedule({ crons }) {
  const healthy = crons.filter((c) => c.status === 'ok').length;
  return (
    <section className="panel">
      <div className="panel__head">
        <span className="panel__title">Cron Schedule</span>
        <span className="panel__meta">{healthy}/{crons.length} healthy</span>
      </div>
      <div className="cron">
        {crons.map((job, i) => <CronRow key={i} job={job} />)}
      </div>
    </section>
  );
}

window.CronSchedule = CronSchedule;
