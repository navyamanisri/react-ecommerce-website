import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products = [] }) {
  if (products.length === 0) {
    return (
      <div className="product-grid-empty" role="status">
        <p className="empty-title">No products found</p>
        <p className="empty-subtitle">Try selecting a different category to explore more items.</p>
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
