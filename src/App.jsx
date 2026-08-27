import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from './context/CartContext'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleNavigate = (view) => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectProduct = (product) => {
    setSelectedProduct(product)
    setCurrentView('product-details')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <CartProvider>
      <div className="app-container">
        <Navbar currentView={currentView} onNavigate={handleNavigate} />
        {currentView === 'cart' ? (
          <Cart onNavigate={handleNavigate} />
        ) : currentView === 'product-details' ? (
          <ProductDetails
            product={selectedProduct}
            onNavigate={handleNavigate}
          />
        ) : (
          <Home onSelectProduct={handleSelectProduct} />
        )}
      </div>
    </CartProvider>
  )
}

export default App
