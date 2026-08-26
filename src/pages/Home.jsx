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
            <span className="section-tag">Explore Catalog</span>
            <h2 className="section-title">Discover Our Products</h2>
            <p className="section-subtitle">
              Browse top-quality items curated for contemporary living, everyday convenience, and personal style.
            </p>
          </div>

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
            <p>
              Showing <span>{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'item' : 'items'} in{' '}
              <span>{selectedCategory}</span>
            </p>
          </div>

          {/* Responsive Product Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </main>
  )
}

export default Home
