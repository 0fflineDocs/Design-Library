/* Tweaks app — small panel exposing paper tone, accent dominance,
   and decorative corners on/off. */

const { useEffect } = React;

function PantheonTweaks() {
  // The HTML page reads the EDITMODE-BEGIN block at boot and applies it to <body>
  // dataset; we mirror those same keys here so persistence survives reload.
  const defaults = (window.PANTHEON_TWEAKS) || { tone: "warm", accent: "gold", showCorners: true };
  const [t, setTweak] = useTweaks(defaults);

  // Apply current tweak values to the DOM whenever they change.
  useEffect(() => {
    document.body.dataset.tone = t.tone;
    document.body.dataset.accent = t.accent;
    document.body.classList.toggle("no-corners", !t.showCorners);
  }, [t.tone, t.accent, t.showCorners]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Paper" />
      <TweakRadio
        label="Tone"
        value={t.tone}
        options={["warm", "ivory", "cool"]}
        onChange={(v) => setTweak("tone", v)}
      />

      <TweakSection label="Accent" />
      <TweakRadio
        label="Dominance"
        value={t.accent}
        options={["gold", "wine"]}
        onChange={(v) => setTweak("accent", v)}
      />

      <TweakSection label="Ornament" />
      <TweakToggle
        label="Corner ticks"
        value={t.showCorners}
        onChange={(v) => setTweak("showCorners", v)}
      />
    </TweaksPanel>
  );
}

const __pantheonTweaksMount = document.createElement("div");
document.body.appendChild(__pantheonTweaksMount);
ReactDOM.createRoot(__pantheonTweaksMount).render(<PantheonTweaks />);
