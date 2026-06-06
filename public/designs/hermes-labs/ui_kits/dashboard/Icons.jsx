/* Hermes Labs — thin-stroke line icons (1.5px, currentColor).
   Geometric, precise, no fills. Matches the "watch face" precision motif.
   Shared via window for cross-file <script> scope. */

const HLIcon = {
  disk: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  ),
  swap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4v13" /><path d="M4 14l3 3 3-3" />
      <path d="M17 20V7" /><path d="M20 10l-3-3-3 3" />
    </svg>
  ),
  gateway: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.5" />
      <path d="M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
      <path d="M8.4 8.4a5 5 0 0 0 0 7.2M15.6 8.4a5 5 0 0 1 0 7.2" />
    </svg>
  ),
  errors: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 2.5 20h19L12 4Z" />
      <path d="M12 10v4" /><path d="M12 17.5v.01" />
    </svg>
  ),
};

window.HLIcon = HLIcon;
