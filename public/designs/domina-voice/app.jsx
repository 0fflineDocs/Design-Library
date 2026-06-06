/* =====================================================================
   DOMINA VOICE — app.jsx
   State machine + conversation orchestration + chat surface
   ===================================================================== */
const { useState: useS, useEffect: useE, useRef: useR, useCallback: useC } = React;

/* Domina's voice: composed, exact, quietly in command. Never breathless. */
const DOMINA_LINES = [
  "You found the door. Good. Sit — you don't have to know yet whether you're guest or subject.",
  "Slower. There is no rush in this room. Tell me what brought you here.",
  "Mm. I heard every word. Now — what is it you actually want?",
  "That's a better answer. I'll allow it.",
  "Look at the waveform when I speak. That is me, paying attention.",
  "You can stop performing now. I prefer you plain.",
  "Ask again — but this time, mean it.",
  "Good. We understand each other.",
];

const OPENER =
  "Welcome to the booth. I am Domina. When you're ready, hold the mic and speak — or type, if your hands are shaking.";

/* simulated user utterances for Talk mode */
const USER_UTTERANCES = [
  "I wasn't sure I'd come.",
  "Tell me how this works.",
  "I think I want to be told what to do.",
  "That's... unsettlingly accurate.",
  "Okay. I'm listening.",
];

function App() {
  // connecting -> connected -> (listening|thinking|speaking)
  const [phase, setPhase] = useS("connecting");
  const [mode, setMode] = useS("talk"); // 'talk' | 'chat'
  const [messages, setMessages] = useS([]);
  const [input, setInput] = useS("");
  const [inputFocus, setInputFocus] = useS(false);
  const threadRef = useR(null);
  const turnRef = useR(0);
  const uttRef = useR(0);
  const timers = useR([]);

  const setT = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  };
  useE(() => () => timers.current.forEach(clearTimeout), []);

  useE(() => {
    setT(() => {
      setPhase("connected");
      setT(() => dominaSpeak(OPENER), 500);
    }, 2600);
  }, []);

  // keep thread pinned to newest
  useE(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, phase]);

  /* Domina takes a turn: thinking bubble -> speaking + reveal text */
  function dominaSpeak(text) {
    setPhase("thinking");
    // insert a placeholder "thinking" agent bubble
    setMessages((m) => [...m, { role: "agent", text: "", thinking: true }]);
    setT(() => {
      setPhase("speaking");
      setMessages((m) => {
        const c = [...m];
        // replace the last thinking bubble with real text
        for (let i = c.length - 1; i >= 0; i--) {
          if (c[i].role === "agent" && c[i].thinking) {
            c[i] = { role: "agent", text, thinking: false };
            break;
          }
        }
        return c;
      });
      // speaking duration scaled to text length
      const dur = Math.min(6500, 1800 + text.length * 38);
      setT(() => setPhase("connected"), dur);
    }, 1400);
  }

  function pushUser(text) {
    setMessages((m) => [...m, { role: "user", text, thinking: false }]);
  }

  function nextDominaLine() {
    const line = DOMINA_LINES[turnRef.current % DOMINA_LINES.length];
    turnRef.current += 1;
    return line;
  }

  /* TEXT submit (chat mode) */
  function submitText(e) {
    e && e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    pushUser(text);
    setInput("");
    setT(() => dominaSpeak(nextDominaLine()), 420);
  }

  /* MIC press (talk mode) — simulate listen -> capture -> respond */
  function micPress() {
    if (busy) return;
    setPhase("listening");
    const utt = USER_UTTERANCES[uttRef.current % USER_UTTERANCES.length];
    uttRef.current += 1;
    // listen for a beat, then "capture" the utterance and reply
    setT(() => {
      pushUser(utt);
      setT(() => dominaSpeak(nextDominaLine()), 380);
    }, 1700);
  }

  const busy = phase === "thinking" || phase === "speaking" || phase === "listening";

  /* status row content */
  const STATUS = {
    connecting: { dot: "grey", label: "connecting" },
    connected:  { dot: "red",  label: "connected · idle" },
    listening:  { dot: "green",label: "listening" },
    thinking:   { dot: "amber",label: "domina is thinking" },
    speaking:   { dot: "red",  label: "domina speaking" },
  }[phase];

  return (
    <div className="booth">
      {/* ===================== LEFT / TOP — STAGE ===================== */}
      <section className="stage">
        <header className="stage-head">
          <div className="brand">
            <span className="brand-mark">D</span>
            <div className="brand-lock">
              <h1 className="wordmark">Domina</h1>
              <span className="wordmark-sub">Voice · Booth</span>
            </div>
          </div>
          <div className={"status status-" + STATUS.dot}>
            <span className="status-dot" />
            <span className="status-label t-label" key={phase}>{STATUS.label}</span>
          </div>
        </header>

        <div className="viz-stage">
          {phase === "connecting" ? (
            <LoadingRing label="opening the booth" />
          ) : (
            <Visualizer state={phase} />
          )}
        </div>

        <div className="stage-controls">
          <MicIndicator
            state={phase}
            disabled={phase === "connecting" || mode !== "talk"}
            onPress={micPress}
          />
          <div className="mode-toggle" role="tablist" aria-label="Interaction mode">
            <span className="mode-thumb" data-mode={mode} />
            <button
              className={"mode-opt" + (mode === "talk" ? " is-on" : "")}
              onClick={() => setMode("talk")}
            >Talk</button>
            <button
              className={"mode-opt" + (mode === "chat" ? " is-on" : "")}
              onClick={() => setMode("chat")}
            >Chat</button>
          </div>
        </div>
      </section>

      {/* ===================== RIGHT / BOTTOM — CHAT ===================== */}
      <section className="chat">
        <div className="chat-head">
          <span className="t-label">transcript</span>
          <span className="t-label chat-head-meta">
            {messages.length ? messages.length + (messages.length === 1 ? " exchange" : " exchanges") : "—"}
          </span>
        </div>

        <div className="thread" ref={threadRef}>
          {phase === "connecting" && (
            <div className="thread-empty t-caption">establishing a private line…</div>
          )}
          {messages.map((m, i) => (
            <Message key={i} role={m.role} text={m.text} thinking={m.thinking} />
          ))}
        </div>

        <form
          className={"composer" + (inputFocus ? " is-focus" : "") + (mode !== "chat" ? " is-locked" : "")}
          onSubmit={submitText}
        >
          <input
            className="composer-input"
            placeholder={mode === "chat" ? "Speak plainly…" : "Switch to Chat to type"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            disabled={mode !== "chat" || phase === "connecting"}
          />
          <SendButton disabled={mode !== "chat" || !input.trim() || busy} />
        </form>
      </section>
    </div>
  );
}

/* Send button with click ripple + hover micro-scale */
function SendButton({ disabled }) {
  const [ripples, setR] = useS([]);
  const idc = useR(0);
  function onClick(e) {
    if (disabled) return;
    const id = idc.current++;
    setR((r) => [...r, id]);
    setTimeout(() => setR((r) => r.filter((x) => x !== id)), 600);
  }
  return (
    <button type="submit" className="send-btn" disabled={disabled} onMouseDown={onClick}>
      {ripples.map((id) => <span key={id} className="send-ripple" />)}
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
