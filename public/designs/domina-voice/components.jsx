/* =====================================================================
   DOMINA VOICE — components.jsx
   Visualizer · MicIndicator · LoadingRing · Message · StatusRow
   ===================================================================== */
const { useRef, useEffect, useState, useCallback } = React;

/* ---------------------------------------------------------------------
   Smoothly interpolate a value toward a target. Used everywhere so the
   canvas "data-state" change interpolates instead of click-switching.
--------------------------------------------------------------------- */
function damp(current, target, lambda, dt) {
  return current + (target - current) * (1 - Math.exp(-lambda * dt));
}

/* =====================================================================
   VISUALIZER — full-width breathing sine field.
   Soft attack/decay, glow under wave peaks, faint mirror reflection
   below the baseline (fire reflected in water).
   ===================================================================== */
function Visualizer({ state }) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  // mutable animation state lives in refs so the rAF loop never restarts
  const ampRef = useRef(0.06);          // smoothed master amplitude
  const energyRef = useRef(0);          // smoothed reactive energy
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext("2d");
    let raf, last = performance.now();
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // colour ramp by salience: wine -> blood -> cta
    const RAMP = ["#4a0000", "#8a1418", "#b91c1c", "#dc2626", "#ff5141"];

    function targets() {
      switch (stateRef.current) {
        case "listening": return { amp: 0.34, react: 0.55, hue: "green" };
        case "thinking":  return { amp: 0.16, react: 0.10, hue: "red" };
        case "speaking":  return { amp: 0.92, react: 0.85, hue: "red" };
        case "connecting":return { amp: 0.04, react: 0.0,  hue: "red" };
        default:          return { amp: 0.10, react: 0.06, hue: "red" }; // connected/idle — breathing
      }
    }

    function colourFor(hue, t) {
      if (hue === "green") {
        // listening = green studio glow
        const g = ["#0c3b1e", "#157a36", "#22c55e", "#4ade80"];
        return g[Math.min(g.length - 1, Math.floor(t * g.length))];
      }
      return RAMP[Math.min(RAMP.length - 1, Math.floor(t * RAMP.length))];
    }

    function draw(now) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      const tg = targets();

      // organic breathing — a slow LFO modulates idle amplitude
      const breath = 0.5 + 0.5 * Math.sin(now * 0.0011);
      const ampTarget = tg.amp * (0.82 + 0.18 * breath);
      // reactive noise (simulated voice energy) when listening/speaking
      const noise =
        tg.react *
        (0.5 +
          0.5 *
            Math.sin(now * 0.013 + Math.sin(now * 0.0071) * 2.3));
      ampRef.current = damp(ampRef.current, ampTarget, 4.0, dt);
      energyRef.current = damp(energyRef.current, noise, 6.5, dt);

      // clamp amplitude so the wave can never exceed its budget
      const amp = Math.min(1.0, ampRef.current + energyRef.current * 0.5);
      const hue = tg.hue;
      ctx.clearRect(0, 0, w, h);

      // safe inset — the line must always breathe INSIDE the box
      const pad = Math.max(8, h * 0.07);
      const mid = h * 0.55;            // baseline, leaves room below for reflection
      const headroom = mid - pad;      // max upward swing
      const t = now * 0.001;

      // three summed sine layers -> the wave path (normalized to sum ≤ 1)
      const layers = [
        { f: 1.1, a: 1.0, s: 0.9, p: 0.0 },
        { f: 2.3, a: 0.45, s: 1.7, p: 1.7 },
        { f: 4.1, a: 0.22, s: 2.6, p: 3.4 },
      ];
      const layerNorm = layers.reduce((s, L) => s + L.a, 0); // 1.67
      const maxA = headroom;           // full swing fits exactly within headroom
      const step = 3;
      const pts = [];
      for (let x = 0; x <= w; x += step) {
        const u = x / w;
        // window so the wave tapers at both edges (no hard clip)
        const win = Math.pow(Math.sin(Math.PI * u), 0.7);
        let s = 0;
        for (const L of layers) {
          s += L.a * Math.sin(u * Math.PI * 2 * L.f + t * L.s + L.p);
        }
        s /= layerNorm;                // now in [-1, 1]
        let y = mid - s * maxA * amp * win;
        // hard safety clamp — never cross the top inset
        if (y < pad) y = pad;
        pts.push([x, y]);
      }

      const grad = ctx.createLinearGradient(0, mid - maxA, 0, mid + 6);
      const c1 = colourFor(hue, Math.min(0.95, 0.35 + amp * 0.7));
      grad.addColorStop(0, hexA(c1, 0.0));
      grad.addColorStop(0.55, hexA(c1, 0.10 + amp * 0.22));
      grad.addColorStop(1, hexA(c1, 0.02));
      ctx.beginPath();
      ctx.moveTo(0, mid);
      for (const [x, y] of pts) ctx.lineTo(x, y);
      ctx.lineTo(w, mid);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.save();
      ctx.globalAlpha = 0.14 + amp * 0.12;
      const rg = ctx.createLinearGradient(0, mid, 0, h);
      rg.addColorStop(0, hexA(c1, 0.5));
      rg.addColorStop(1, hexA(c1, 0));
      ctx.beginPath();
      ctx.moveTo(0, mid);
      for (const [x, y] of pts) {
        let ry = mid + (mid - y) * 0.85;
        if (ry > h - pad) ry = h - pad;   // keep reflection inside the box
        ctx.lineTo(x, ry);
      }
      ctx.lineTo(w, mid);
      ctx.closePath();
      ctx.fillStyle = rg;
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.shadowColor = hexA(colourFor(hue, Math.min(0.95, 0.5 + amp * 0.5)), 0.9);
      ctx.shadowBlur = 10 + amp * 26;
      ctx.strokeStyle = colourFor(hue, Math.min(0.99, 0.55 + amp * 0.45));
      ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.stroke();
      ctx.restore();

      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, mid + 0.5);
      ctx.lineTo(w, mid + 0.5);
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="viz-wrap" ref={wrapRef} data-state={state}>
      <canvas ref={canvasRef} className="viz-canvas" />
    </div>
  );
}

/* hex (#rrggbb) + alpha -> rgba() string */
function hexA(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* =====================================================================
   MIC INDICATOR — studio-mic circle.
   grey idle · green glow listening · red glow speaking.
   ===================================================================== */
function MicIndicator({ state, disabled, onPress }) {
  const [ripples, setRipples] = useState([]);
  const idc = useRef(0);

  const mode =
    state === "listening" ? "listening" :
    state === "speaking" ? "speaking" :
    state === "thinking" ? "thinking" : "idle";

  function spawnRipple(e) {
    if (disabled) return;
    const id = idc.current++;
    setRipples((r) => [...r, id]);
    setTimeout(() => setRipples((r) => r.filter((x) => x !== id)), 650);
    onPress && onPress();
  }

  return (
    <div className="mic-cluster">
      <button
        className={"mic-btn mic-" + mode}
        onClick={spawnRipple}
        disabled={disabled}
        aria-label="Toggle microphone"
      >
        <span className="mic-pulse" />
        <span className="mic-pulse mic-pulse-2" />
        {ripples.map((id) => (
          <span key={id} className="mic-ripple" />
        ))}
        <svg className="mic-glyph" viewBox="0 0 24 24" width="26" height="26"
             fill="none" stroke="currentColor" strokeWidth="1.6"
             strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M6 11a6 6 0 0 0 12 0" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <line x1="8.5" y1="21" x2="15.5" y2="21" />
        </svg>
      </button>
      <span className="mic-state-label t-label">
        {mode === "listening" ? "listening" :
         mode === "speaking" ? "speaking" :
         mode === "thinking" ? "holding" : "tap to speak"}
      </span>
    </div>
  );
}

/* =====================================================================
   LOADING RING — a thin circle that draws itself (stroke-dasharray),
   text opacity pulsing softly beneath.
   ===================================================================== */
function LoadingRing({ label }) {
  return (
    <div className="loader">
      <svg className="loader-ring" viewBox="0 0 120 120" width="92" height="92">
        <circle className="loader-track" cx="60" cy="60" r="54" />
        <circle className="loader-arc" cx="60" cy="60" r="54" />
      </svg>
      <div className="loader-label t-label">{label}</div>
    </div>
  );
}

/* =====================================================================
   MESSAGE — slides in from its side, fades + scales.
   Agent bubble pulses its border-glow while Domina is "thinking".
   ===================================================================== */
function Message({ role, text, thinking }) {
  return (
    <div className={"msg msg-" + role}>
      <div className="msg-meta t-label">
        {role === "agent" ? "Domina" : "You"}
      </div>
      <div className={"bubble bubble-" + role + (thinking ? " bubble-thinking" : "")}>
        {thinking ? (
          <span className="typing-dots"><i /><i /><i /></span>
        ) : (
          text
        )}
      </div>
    </div>
  );
}

Object.assign(window, {
  Visualizer, MicIndicator, LoadingRing, Message, damp, hexA,
});
