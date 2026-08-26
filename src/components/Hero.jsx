import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" aria-label="Hero Promotion">
      <div className="hero-container">
        {/* Left Column: Retail Promo Content */}
        <div className="hero-content">
          <div className="hero-tag-badge">Seasonal Clearance Sale</div>
          <h1 className="hero-title">
            Premium Essentials for Everyday Living
          </h1>
          <p className="hero-description">
            Discover handpicked electronics, timeless apparel, and contemporary home accents engineered for comfort, style, and durability.
          </p>

          <div className="hero-actions">
            <a href="#shop" className="btn btn-primary">
              Shop Now
            </a>
            <a href="#categories" className="btn btn-secondary">
              Browse Categories
            </a>
          </div>

          <div className="hero-offer-highlight">
            <span className="offer-tag">Special Offer</span>
            <span className="offer-text">Enjoy up to 40% off selected bestsellers this week</span>
          </div>
        </div>

        {/* Right Column: Clean Retail Banner Showcase */}
        <div className="hero-banner-frame">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
            alt="TrendMart Lifestyle Collection Showcase"
            className="hero-banner-image"
            loading="eager"
          />
          <div className="hero-banner-badge">
            <span className="badge-title">Handpicked Quality</span>
            <span className="badge-subtitle">Verified authentic products</span>
          </div>
        </div>
      </div>

      {/* Trust & Guarantee Strip */}
      <div className="trust-strip-wrapper">
        <div className="trust-strip">
          <div className="trust-item">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75a1.125 1.125 0 00-1.125-1.125H3.375A1.125 1.125 0 002.25 3.75v10.5" />
            </svg>
            <div>
              <p className="trust-title">Free Delivery</p>
              <p className="trust-subtitle">On all orders above ₹999</p>
            </div>
          </div>

          <div className="trust-item">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <div>
              <p className="trust-title">100% Genuine</p>
              <p className="trust-subtitle">Direct from verified brands</p>
            </div>
          </div>

          <div className="trust-item">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <div>
              <p className="trust-title">7-Day Returns</p>
              <p className="trust-subtitle">Easy, hassle-free policy</p>
            </div>
          </div>

          <div className="trust-item">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 002.25 18.75z" />
            </svg>
            <div>
              <p className="trust-title">Secure Payments</p>
              <p className="trust-subtitle">UPI, Cards & NetBanking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
