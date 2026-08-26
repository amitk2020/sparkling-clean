function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Thoughtful home cleaning</p>

        <h1>
          More time for
          <br />
          the <em>good stuff.</em>
        </h1>

        <p className="hero-description">
          A beautifully simple cleaning service for homes that deserve a
          little shine — and people who deserve their weekends back.
        </p>

        <a className="primary-button" href="#contact">
          Get your free quote <span>→</span>
        </a>

        <p className="small-print">
          No obligation. Replies within one business day.
        </p>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="sun" />

        <div className="window">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="plant">
          <span />
          <span />
          <span />
          <span />
        </div>

        <span className="sparkle sparkle-one">✦</span>
        <span className="sparkle sparkle-two">✦</span>
      </div>
    </section>
  )
}

export default Hero