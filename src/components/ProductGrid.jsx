import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products = [], onResetFilters }) {
  if (products.length === 0) {
    return (
      <div className="product-grid-empty" role="status">
        <svg
          className="empty-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
          />
        </svg>
        <p className="empty-title">No products found</p>
        <p className="empty-subtitle">
          We couldn't find any products matching your current search or category filter.
        </p>
        {onResetFilters && (
          <button
            type="button"
            className="empty-reset-btn"
            onClick={onResetFilters}
          >
            Clear Search & Filters
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="product-grid-wrapper">
      <div className="product-grid" aria-label="Product list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
