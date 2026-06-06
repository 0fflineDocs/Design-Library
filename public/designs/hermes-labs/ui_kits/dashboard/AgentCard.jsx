/* Hermes Labs — Agent status card.
   Five share one structure; differentiation comes from status + content.
   States: running (gold, ▲), idle (dim, ●), down (red, ✕, pulsing dot). */

const HL_AGENT_STATE = {
  running: { glyph: '\u25B2', label: 'online',  tone: '' },        // ▲
  idle:    { glyph: '\u25CF', label: 'idle',    tone: 'is-idle' }, // ●
  down:    { glyph: '\u2715', label: 'offline', tone: 'is-down' }, // ✕
};

function AgentCard({ agent }) {
  const s = HL_AGENT_STATE[agent.status] || HL_AGENT_STATE.running;
  const dotClass =
    agent.status === 'down' ? 'dot dot--down'
    : agent.status === 'idle' ? 'dot dot--idle'
    : 'dot';

  return (
    <article className="agent" tabIndex={0}>
      <div className="agent__top">
        <span className={dotClass} />
        <span className="agent__name">{agent.name}</span>
      </div>

      <div className={'agent__glyph ' + s.tone}>{s.glyph}</div>
      <div className={'agent__status ' + s.tone}>{s.label}</div>
      <div className={'agent__uptime ' + s.tone}>
        {agent.status === 'down' ? '—' : agent.uptime}
        <span>{agent.status === 'down' ? 'offline' : 'uptime'}</span>
      </div>

      <div className="agent__last">last: {agent.last}</div>

      {/* hover-reveal detail popover */}
      <div className="agent__detail" aria-hidden="true">
        <dl>
          <dt>Role</dt><dd>{agent.role}</dd>
          <dt>PID</dt><dd>{agent.pid}</dd>
          <dt>Memory</dt><dd>{agent.mem}</dd>
          <dt>Requests</dt><dd>{agent.reqs}</dd>
        </dl>
      </div>
    </article>
  );
}

window.AgentCard = AgentCard;
