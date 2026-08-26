import { useState } from 'react'
import Hero from '../components/Hero'
import CategoryFilter from '../components/CategoryFilter'
import ProductGrid from '../components/ProductGrid'
import { products, categories } from '../data/products'
import './Home.css'

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <main>
      {/* Home Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Shop / Product Listing Section */}
      <section id="shop" className="shop-section" aria-label="Product Catalog">
        <div className="shop-container">
          <div className="section-header">
            <h2 className="section-title">Explore Our Collection</h2>
            <p className="section-subtitle">
              Authentic products curated across top categories with everyday fair pricing.
            </p>
          </div>

          <div className="shop-controls-bar">
            {/* Category Filter Controls */}
            <div id="categories">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {/* Product Count Indicator */}
            <div className="products-count-bar">
              <p style={{ margin: 0 }}>
                Showing <span>{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}{' '}
                in <span>{selectedCategory}</span>
              </p>
            </div>
          </div>

          {/* Responsive Product Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </main>
  )
}

export default Home
