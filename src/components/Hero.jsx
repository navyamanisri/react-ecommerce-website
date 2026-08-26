import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" aria-label="Hero Showcase">
      <div className="hero-container">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-content">
          <span className="hero-badge">✨ New Season Collection</span>
          <h1 className="hero-title">
            Elevate Your Everyday Style with <span className="hero-highlight">TrendMart</span>
          </h1>
          <p className="hero-description">
            Discover curated fashion, cutting-edge lifestyle essentials, and premium accessories designed for comfort, quality, and timeless appeal.
          </p>

          <div className="hero-actions">
            <a href="#shop" className="btn btn-primary">
              Shop Now
              <svg
                className="btn-arrow"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#categories" className="btn btn-secondary">
              Browse Categories
            </a>
          </div>

          {/* Social Proof / Stats Strip */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Curated Products</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.9 ★</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column: Pure CSS Visual Showcase */}
        <div className="hero-visual">
          <div className="visual-card-wrapper">
            <div className="visual-card">
              <div className="visual-card-header">
                <span className="card-tag">Featured Special</span>
                <span className="card-discount">-30% OFF</span>
              </div>
              <div className="visual-graphic">
                <div className="graphic-circle"></div>
                <div className="graphic-cube">
                  <span className="cube-icon">🛍️</span>
                </div>
              </div>
              <div className="visual-card-footer">
                <h3 className="card-item-title">Premium Lifestyle Collection</h3>
                <p className="card-item-subtitle">Handcrafted & Sustainable Materials</p>
              </div>
            </div>

            {/* Floating Info Badges */}
            <div className="floating-badge badge-top-right">
              <span className="badge-icon">⚡</span>
              <div>
                <strong>Fast Delivery</strong>
                <p>2-3 Business Days</p>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <span className="badge-icon">🛡️</span>
              <div>
                <strong>Verified Quality</strong>
                <p>100% Authentic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
