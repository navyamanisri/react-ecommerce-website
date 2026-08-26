import { useState } from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ProductGrid from '../components/ProductGrid'
import { products, categories } from '../data/products'
import './Home.css'

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  // Reset all filters and search
  const handleResetFilters = () => {
    setSelectedCategory('All')
    setSearchQuery('')
    setSortBy('default')
  }

  // Combined Category Filter + Search Query + Sorting Pipeline
  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === 'All') return true
      return product.category === selectedCategory
    })
    .filter((product) => {
      if (!searchQuery.trim()) return true
      const query = searchQuery.toLowerCase().trim()
      return product.name.toLowerCase().includes(query)
    })
    .sort((a, b) => {
      if (sortBy === 'price-low-to-high') {
        return a.price - b.price
      }
      if (sortBy === 'price-high-to-low') {
        return b.price - a.price
      }
      if (sortBy === 'rating-high-to-low') {
        return b.rating.rate - a.rating.rate
      }
      return 0 // default order
    })

  const isFiltered = selectedCategory !== 'All' || searchQuery.trim() !== '' || sortBy !== 'default'

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

          {/* Search and Sort Toolbar */}
          <div className="catalog-toolbar">
            <div className="toolbar-search">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onClear={() => setSearchQuery('')}
              />
            </div>

            <div className="toolbar-sort">
              <label htmlFor="sort-select" className="sort-label">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
                aria-label="Sort products"
              >
                <option value="default">Default</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
                <option value="rating-high-to-low">Rating: High to Low</option>
              </select>
            </div>
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

            {/* Product Count & Active Filters Indicator */}
            <div className="products-count-bar">
              <p style={{ margin: 0 }}>
                Showing <span>{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
                {selectedCategory !== 'All' && (
                  <> in <span>{selectedCategory}</span></>
                )}
                {searchQuery.trim() && (
                  <> matching &ldquo;<span>{searchQuery.trim()}</span>&rdquo;</>
                )}
              </p>

              {isFiltered && (
                <button
                  type="button"
                  className="reset-filters-link"
                  onClick={handleResetFilters}
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>

          {/* Responsive Product Grid */}
          <ProductGrid
            products={filteredProducts}
            onResetFilters={isFiltered ? handleResetFilters : undefined}
          />
        </div>
      </section>
    </main>
  )
}

export default Home
