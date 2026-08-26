import './CategoryFilter.css'

function CategoryFilter({ categories = [], selectedCategory = 'All', onSelectCategory }) {
  return (
    <div className="category-filter-wrapper" role="region" aria-label="Filter products by category">
      <div className="category-filter-list" role="tablist">
        {categories.map((category) => {
          const isSelected = selectedCategory === category

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`category-filter-btn ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectCategory?.(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryFilter
