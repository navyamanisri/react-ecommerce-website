import './ProductCard.css'

function ProductCard({ product }) {
  if (!product) return null

  const { name, price, category, image, description, rating } = product

  return (
    <article className="product-card" aria-label={name}>
      {/* Product Image Container */}
      <div className="product-image-wrapper">
        <img
          src={image}
          alt={name}
          className="product-image"
          loading="lazy"
        />
        <span className="product-category-tag">{category}</span>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-rating" aria-label={`Rating ${rating?.rate || 0} out of 5 stars`}>
          <span className="rating-star" aria-hidden="true">★</span>
          <span className="rating-score">{rating?.rate?.toFixed(1) || '0.0'}</span>
          <span className="rating-count">({rating?.count || 0})</span>
        </div>

        <h3 className="product-title" title={name}>
          {name}
        </h3>

        <p className="product-description" title={description}>
          {description}
        </p>

        {/* Footer: Price & Add to Cart */}
        <div className="product-card-footer">
          <div className="product-price-wrapper">
            <span className="price-label">Price</span>
            <span className="product-price">₹{price.toLocaleString('en-IN')}</span>
          </div>

          <button
            type="button"
            className="add-to-cart-btn"
            aria-label={`Add ${name} to cart`}
          >
            <svg
              className="cart-btn-icon"
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
