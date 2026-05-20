import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/allTraditional.css';

import heroImg from '../assets/images/img2.jpg';

// Placeholder image
const placeholderImage =
  'https://via.placeholder.com/400x400?text=Traditional+Sweet';

const initialProducts = [
  {
    id: 1,
    name: 'Mysore Pak',
    price: 350,
    rating: 5,
    reviews: 62,
    badge: 'Best Seller',
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
  {
    id: 2,
    name: 'Laddu',
    price: 250,
    rating: 5,
    reviews: 48,
    badge: 'New Launch',
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
  {
    id: 3,
    name: 'Jangiri',
    price: 180,
    rating: 4,
    reviews: 39,
    badge: null,
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
  {
    id: 4,
    name: 'Kaju Katli',
    price: 420,
    rating: 5,
    reviews: 55,
    badge: null,
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
  {
    id: 5,
    name: 'Milk Halwa',
    price: 300,
    rating: 5,
    reviews: 44,
    badge: 'Best Seller',
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
  {
    id: 6,
    name: 'Coconut Burfi',
    price: 220,
    rating: 4,
    reviews: 30,
    badge: null,
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
];

const AllTraditional = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1510);
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [sortOption, setSortOption] = useState('Featured');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // FILTER PRODUCTS
  const filteredProducts = initialProducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  // SORT PRODUCTS
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Price, low to high') return a.price - b.price;
    if (sortOption === 'Price, high to low') return b.price - a.price;
    if (sortOption === 'Alphabetically, A-Z') return a.name.localeCompare(b.name);
    if (sortOption === 'Alphabetically, Z-A') return b.name.localeCompare(a.name);
    return 0;
  });

  const handleMinSliderChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxSliderChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  const handleMinInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minPrice && value <= 1510) {
      setMaxPrice(value);
    }
  };

  const clearAllFilters = () => {
    setMinPrice(0);
    setMaxPrice(1510);
    setShowOutOfStock(true);
  };

  const removePriceFilter = () => {
    setMinPrice(0);
    setMaxPrice(1510);
  };

  const sortingOptions = [
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old',
  ];

  return (
    <div className="traditional-page-wrapper">
      <Navbar />

      {/* HERO SECTION */}
      <section className="traditional-hero">
        <img src={heroImg} alt="Traditional Sweets" />
        <div className="hero-text">
          <h1>All Traditional Sweets</h1>
          <p>Authentic homemade traditional sweets</p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="product-container">
        {/* SIDEBAR */}
        <aside className="filter-sidebar">
          <div className="filter-header">
            <div className="filter-title-section">
              <svg
                className="filter-icon-svg"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="11" x2="28" y2="11" />
                <circle cx="10" cy="11" r="2.5" fill="black" />
                <line x1="4" y1="21" x2="28" y2="21" />
                <circle cx="22" cy="21" r="2.5" fill="black" />
              </svg>
              <span className="filter-title">Filter</span>
              <span className="filter-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          {/* APPLIED FILTERS */}
          <div className="applied-filters">
            <div className="applied-title">Applied filters</div>
            <div className="price-tag">
              Rs. {minPrice}.00 - Rs. {maxPrice}.00
              <button className="remove-filter" onClick={removePriceFilter}>✕</button>
            </div>
            <button className="clear-all" onClick={clearAllFilters}>Clear all</button>
          </div>

          {/* OUT OF STOCK */}
          <div className="filter-section">
            <div className="section-header">
              <h4>Out of stock</h4>
              <div className="toggle-buttons">
                <button
                  className={showOutOfStock ? 'active' : ''}
                  onClick={() => setShowOutOfStock(true)}
                >
                  Show
                </button>
                <button
                  className={!showOutOfStock ? 'active' : ''}
                  onClick={() => setShowOutOfStock(false)}
                >
                  Hide
                </button>
              </div>
            </div>
          </div>

          {/* PRICE FILTER */}
          <div className="filter-section price-section-wrapper">
            <div className="section-header price-header-toggle">
              <h4 className="price-heading">Price</h4>
              <span className="accordion-indicator">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <div className="price-inputs-container">
              <div className="input-box-field">
                <span className="currency-symbol">₹</span>
                <input type="number" value={minPrice} onChange={handleMinInputChange} />
              </div>
              <div className="input-box-field">
                <span className="currency-symbol">₹</span>
                <input type="number" value={maxPrice} onChange={handleMaxInputChange} />
              </div>
            </div>

            {/* RANGE SLIDER */}
            <div className="double-slider-container">
              <div className="double-slider-widget">
                <div className="base-track"></div>
                <div
                  className="active-range-progress"
                  style={{
                    left: `${(minPrice / 1510) * 100}%`,
                    right: `${100 - (maxPrice / 1510) * 100}%`,
                  }}
                ></div>

                <input
                  type="range"
                  min="0"
                  max="1510"
                  value={minPrice}
                  onChange={handleMinSliderChange}
                  className="native-slider"
                />
                <input
                  type="range"
                  min="0"
                  max="1510"
                  value={maxPrice}
                  onChange={handleMaxSliderChange}
                  className="native-slider"
                />
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCTS */}
        <main className="product-content">
          <div className="product-top-bar">
            <span className="product-count">{sortedProducts.length} products</span>
            <div className="sort-dropdown-container">
              <button className="sort-dropdown-btn" onClick={() => setIsSortOpen(!isSortOpen)}>
                <span>{sortOption}</span>
                <span className={`arrow-icon ${isSortOpen ? 'up' : 'down'}`}>▼</span>
              </button>

              {isSortOpen && (
                <ul className="sort-dropdown-menu">
                  {sortingOptions.map((option) => (
                    <li
                      key={option}
                      className={sortOption === option ? 'selected' : ''}
                      onClick={() => {
                        setSortOption(option);
                        setIsSortOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="product-grid">
            {sortedProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="image-container">
                  {product.badge === 'New Launch' && <div className="badge new-launch-badge">New Launch</div>}
                  {product.badge === 'Best Seller' && <div className="badge best-seller-badge">Best Seller</div>}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                    onError={(e) => { e.target.src = placeholderImage; }}
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="rating-section">
                    <div className="stars">
                      {'★'.repeat(product.rating)}
                      {'☆'.repeat(5 - product.rating)}
                    </div>
                    <span className="review-count">({product.reviews} reviews)</span>
                  </div>
                  <div className="product-price">Rs. {product.price}.00</div>
                  <button className="add-to-cart-btn">ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* WHATSAPP BUTTON */}
      <a href="https://wa.me/#" className="whatsapp-floating-btn" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path d="M16 2a13 13 0 0 0-11.27 19.51L3 29l7.73-2A13 13 0 1 0 16 2z" fill="#fff" />
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default AllTraditional;