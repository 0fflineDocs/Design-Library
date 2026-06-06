/* Hermes Labs — Top Bar.
   Brand mark + wordmark (left); UTC clock + CPU/MEM sparkline blips (right). */

function Sparkline({ values, warn }) {
  return (
    <span className={'spark' + (warn ? ' spark--warn' : '')}>
      {values.map((v, i) => (
        <span key={i} style={{ height: Math.max(3, v) + 'px' }} />
      ))}
    </span>
  );
}

function TopBar({ time }) {
  // deterministic, hand-tuned sparkline bars (no random — calm + repeatable)
  const cpu = [6, 9, 7, 11, 8, 13, 10, 9, 12, 8];
  const mem = [12, 13, 13, 14, 15, 14, 16, 15, 16, 17];
  return (
    <header className="topbar">
      <div className="brand">
        <img className="brand__mark" src="hermes-mark.svg" alt="" />
        <span className="brand__name">Hermes <b>Labs</b></span>
        <span className="brand__tag">Control</span>
      </div>

      <div className="topbar__right">
        <div className="blips">
          <div className="blip">
            <span className="blip__label">CPU</span>
            <Sparkline values={cpu} />
          </div>
          <div className="blip">
            <span className="blip__label">MEM</span>
            <Sparkline values={mem} warn />
          </div>
        </div>
        <div className="clock">
          {time}
          <small>UTC</small>
        </div>
      </div>
    </header>
  );
}

window.TopBar = TopBar;
