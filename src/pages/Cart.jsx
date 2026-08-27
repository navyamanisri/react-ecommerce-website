import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart({ onNavigate }) {
  const { cartItems, updateQuantity, removeFromCart, totalItems, subtotal } = useCart()

  const handleContinueShopping = () => {
    if (onNavigate) {
      onNavigate('home')
    }
  }

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-container">
          <div className="empty-cart-view" role="status">
            <div className="empty-cart-icon-wrapper">
              <svg
                className="empty-cart-svg"
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25c-.669 0-1.189-.578-1.119-1.243l1.263-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.993z"
                />
              </svg>
            </div>
            <h2 className="empty-cart-heading">Your Cart is Empty</h2>
            <p className="empty-cart-subtext">
              Looks like you haven&apos;t added any items to your cart yet. Explore our curated products and find something you love.
            </p>
            <button
              type="button"
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="cart-container">
        {/* Page Title & Breadcrumb Navigation */}
        <div className="cart-header">
          <div className="cart-title-row">
            <h1 className="cart-title">Shopping Cart</h1>
            <span className="cart-count-pill">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            type="button"
            className="back-to-shop-link"
            onClick={handleContinueShopping}
          >
            ← Back to Shop
          </button>
        </div>

        <div className="cart-layout">
          {/* Items List Section */}
          <section className="cart-items-section" aria-label="Cart Items">
            <div className="cart-items-table-header">
              <span className="col-product">Product</span>
              <span className="col-price">Price</span>
              <span className="col-quantity">Quantity</span>
              <span className="col-total">Total</span>
            </div>

            <ul className="cart-items-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item-row">
                  {/* Product Info (Image + Details) */}
                  <div className="cart-item-info">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                      loading="lazy"
                    />
                    <div className="cart-item-details">
                      <span className="cart-item-category">{item.category}</span>
                      <h3 className="cart-item-name">{item.name}</h3>
                      <span className="cart-item-mobile-price">
                        ₹{item.price.toLocaleString('en-IN')} each
                      </span>
                    </div>
                  </div>

                  {/* Unit Price (Desktop) */}
                  <div className="cart-item-price-unit">
                    ₹{item.price.toLocaleString('en-IN')}
                  </div>

                  {/* Quantity Selector & Remove Action */}
                  <div className="cart-item-qty-cell">
                    <div className="qty-counter" aria-label="Quantity Controls">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span className="qty-value" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <svg
                        className="remove-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="cart-item-total">
                    <span className="mobile-total-label">Item total: </span>
                    <span className="total-value">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order Summary Sidebar */}
          <aside className="order-summary-sidebar" aria-label="Order Summary">
            <div className="order-summary-card">
              <h2 className="summary-title">Order Summary</h2>

              <div className="summary-row">
                <span>Items ({totalItems}):</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Charges:</span>
                <span className="free-shipping-tag">FREE</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total-row">
                <span className="total-title">Total Amount:</span>
                <span className="total-amount">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <p className="summary-tax-note">Includes all applicable GST & taxes</p>

              <button
                type="button"
                className="checkout-btn"
                onClick={() => alert('Checkout functionality will be available in the next milestone.')}
              >
                Proceed to Checkout
              </button>

              <div className="trust-badges">
                <div className="trust-item">
                  <span>🔒</span>
                  <span>100% Secure Checkout</span>
                </div>
                <div className="trust-item">
                  <span>⚡</span>
                  <span>Free Standard Delivery across India</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Cart
