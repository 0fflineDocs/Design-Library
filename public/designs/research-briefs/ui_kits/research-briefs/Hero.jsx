// Hero — editorial header. Decorative gold-rule composition on the
// left; typographic content on the right.
function Hero({ briefCount, wordCount, updated }) {
  return (
    <section className="hero pad">
      <div className="hero__deco" aria-hidden="true">
        <span className="hero__rule-v"></span>
        <span className="hero__dot hero__dot--a"></span>
        <span className="hero__dot hero__dot--b"></span>
        <span className="hero__dot hero__dot--c"></span>
        <img className="hero__watermark" src="../../assets/hermes-mark.svg" alt="" />
      </div>
      <div className="hero__content">
        <span className="hero__accent-rule"></span>
        <h1 className="hero__title">The Research<br />Briefs</h1>
        <p className="hero__subtitle">
          A curated collection of deep-dive syntheses across AI, neuroscience,
          pharmacology, and beyond.
        </p>
        <div className="hero__meta">
          <div><b>{briefCount} briefs</b> · {wordCount} words</div>
          <div>Last updated: {updated}</div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
