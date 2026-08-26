import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="navbar-header">
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Brand / Store Logo Area */}
        <a href="#home" className="navbar-brand" onClick={closeMobileMenu}>
          <span className="brand-accent">Trend</span>Mart
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links desktop-links">
          <li>
            <a href="#home" className="nav-link active">
              Home
            </a>
          </li>
          <li>
            <a href="#shop" className="nav-link">
              Shop
            </a>
          </li>
          <li>
            <a href="#categories" className="nav-link">
              Categories
            </a>
          </li>
        </ul>

        {/* Action / Cart Area */}
        <div className="navbar-actions">
          <button
            type="button"
            className="cart-button"
            aria-label="Shopping Cart with 0 items"
          >
            <svg
              className="cart-icon"
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
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25c-.669 0-1.189-.578-1.119-1.243l1.263-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.993z"
              />
            </svg>
            <span className="cart-badge">0</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`mobile-toggle-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-menu"
        className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="mobile-nav-links">
          <li>
            <a href="#home" className="mobile-nav-link active" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#shop" className="mobile-nav-link" onClick={closeMobileMenu}>
              Shop
            </a>
          </li>
          <li>
            <a href="#categories" className="mobile-nav-link" onClick={closeMobileMenu}>
              Categories
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
