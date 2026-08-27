import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const handleNavigate = (view) => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <CartProvider>
      <div className="app-container">
        <Navbar currentView={currentView} onNavigate={handleNavigate} />
        {currentView === 'cart' ? (
          <Cart onNavigate={handleNavigate} />
        ) : (
          <Home />
        )}
      </div>
    </CartProvider>
  )
}

export default App


