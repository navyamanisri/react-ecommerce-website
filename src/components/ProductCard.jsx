import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ product, onSelectProduct }) {
  const { addToCart } = useCart()

  if (!product) return null

  const { name, price, category, image, description, rating } = product

  const handleCardClick = () => {
    if (onSelectProduct) {
      onSelectProduct(product)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCardClick()
    }
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <article
      className="product-card"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${name}`}
    >
      {/* Product Image Frame */}
      <div className="product-image-frame">
        <img
          src={image}
          alt={name}
          className="product-image"
          loading="lazy"
        />
        <span className="product-category-badge">{category}</span>
      </div>

      {/* Product Details */}
      <div className="product-body">
        {/* Rating Pill */}
        <div className="product-rating-row">
          <span className="rating-pill">
            <span>{rating?.rate?.toFixed(1) || '4.5'}</span>
            <span className="rating-star">★</span>
          </span>
          <span className="rating-count">({rating?.count || 0} reviews)</span>
        </div>

        {/* Product Title */}
        <h3 className="product-title" title={name}>
          {name}
        </h3>

        {/* Short Description */}
        <p className="product-description" title={description}>
          {description}
        </p>

        {/* Price & Action Area */}
        <div className="product-footer">
          <div className="product-price-block">
            <span className="product-price">₹{price.toLocaleString('en-IN')}</span>
            <span className="price-tax-note">Incl. of all taxes</span>
          </div>

          <button
            type="button"
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            aria-label={`Add ${name} to cart`}
          >
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
