import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './ProductDetails.css'

function ProductDetails({ product, onNavigate }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [addedMessage, setAddedMessage] = useState('')

  if (!product) {
    return (
      <main className="product-details-page">
        <div className="product-details-container not-found">
          <h2>Product Not Found</h2>
          <p>The product you are looking for is unavailable or does not exist.</p>
          <button
            type="button"
            className="back-btn primary"
            onClick={() => onNavigate && onNavigate('home')}
          >
            ← Back to Products
          </button>
        </div>
      </main>
    )
  }

  const { name, price, category, image, description, rating } = product

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAddedMessage(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart!`)
    setTimeout(() => {
      setAddedMessage('')
    }, 4000)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    if (onNavigate) {
      onNavigate('cart')
    }
  }

  const handleBack = () => {
    if (onNavigate) {
      onNavigate('home')
    }
  }

  return (
    <main className="product-details-page">
      <div className="product-details-container">
        {/* Breadcrumb & Navigation Bar */}
        <div className="details-nav-bar">
          <button
            type="button"
            className="back-nav-btn"
            onClick={handleBack}
            aria-label="Back to product listing"
          >
            <svg
              className="back-arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Products</span>
          </button>

          <nav className="details-breadcrumb" aria-label="Breadcrumb">
            <span className="crumb-link" onClick={handleBack}>Home</span>
            <span className="crumb-separator">/</span>
            <span className="crumb-category">{category}</span>
            <span className="crumb-separator">/</span>
            <span className="crumb-current" title={name}>{name}</span>
          </nav>
        </div>

        {/* Main Product Showcase Card */}
        <div className="product-details-layout">
          {/* Left Column: High-Resolution Product Image */}
          <div className="product-details-gallery">
            <div className="main-image-frame">
              <img
                src={image}
                alt={name}
                className="details-product-img"
              />
              <span className="details-category-badge">{category}</span>
            </div>
          </div>

          {/* Right Column: Product Info & Purchase Controls */}
          <div className="product-details-info">
            {/* Category and Stock Indicator */}
            <div className="details-header-row">
              <span className="category-tag">{category}</span>
              <span className="stock-status in-stock">
                <span className="stock-dot"></span> In Stock
              </span>
            </div>

            {/* Product Title */}
            <h1 className="details-title">{name}</h1>

            {/* Rating and Review Count */}
            <div className="details-rating-bar">
              <span className="details-rating-pill">
                <span>{rating?.rate?.toFixed(1) || '4.5'}</span>
                <span className="rating-star">★</span>
              </span>
              <span className="details-review-count">
                {rating?.count || 0} customer reviews
              </span>
              <span className="verified-badge">✓ Verified Quality</span>
            </div>

            {/* Price Section */}
            <div className="details-price-section">
              <div className="price-row">
                <span className="details-price">₹{price.toLocaleString('en-IN')}</span>
                <span className="best-price-pill">Best Price</span>
              </div>
              <p className="details-tax-note">Inclusive of all taxes & free standard shipping on orders over ₹999</p>
            </div>

            {/* Full Product Description */}
            <div className="details-desc-section">
              <h2 className="section-heading">Description</h2>
              <p className="details-description">{description}</p>
            </div>

            {/* Product Value Highlights */}
            <div className="details-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <div className="highlight-text">
                  <strong>Fast Delivery</strong>
                  <span>Dispatched in 24 hours</span>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🛡️</span>
                <div className="highlight-text">
                  <strong>100% Genuine</strong>
                  <span>Direct from verified brands</span>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔄</span>
                <div className="highlight-text">
                  <strong>Easy 7-Day Returns</strong>
                  <span>Hassle-free replacement</span>
                </div>
              </div>
            </div>

            {/* Success Notification Banner when Added */}
            {addedMessage && (
              <div className="added-notification" role="status">
                <div className="notification-content">
                  <span className="notification-check">✓</span>
                  <span>{addedMessage}</span>
                </div>
                <button
                  type="button"
                  className="view-cart-link-btn"
                  onClick={() => onNavigate && onNavigate('cart')}
                >
                  View Cart →
                </button>
              </div>
            )}

            {/* Quantity Selector & Action Buttons */}
            <div className="details-actions-wrapper">
              <div className="quantity-selection-block">
                <label htmlFor="product-qty-value" className="quantity-label">
                  Quantity:
                </label>
                <div className="quantity-stepper" aria-label="Quantity Selector">
                  <button
                    type="button"
                    className="stepper-btn decrease"
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span
                    id="product-qty-value"
                    className="stepper-value"
                    aria-live="polite"
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    className="stepper-btn increase"
                    onClick={handleIncreaseQuantity}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cta-button-group">
                <button
                  type="button"
                  className="details-add-to-cart-btn"
                  onClick={handleAddToCart}
                  aria-label={`Add ${quantity} of ${name} to cart`}
                >
                  <svg
                    className="cart-svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25c-.669 0-1.189-.578-1.119-1.243l1.263-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.993z"
                    />
                  </svg>
                  <span>Add to Cart</span>
                </button>

                <button
                  type="button"
                  className="details-buy-now-btn"
                  onClick={handleBuyNow}
                  aria-label={`Buy ${quantity} of ${name} now`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails
