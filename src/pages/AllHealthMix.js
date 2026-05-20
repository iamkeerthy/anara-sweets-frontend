import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/allhealthmix.css';
import WhatsAppButton from '../components/WhatsAppButton';
import heroImg from '../assets/images/img2.jpg';

// Placeholder image in case images don't load
const placeholderImage = 'https://via.placeholder.com/400x400?text=Product+Image';

const initialProducts = [
  {
    id: 1,
    name: 'Kaju Bulbul',
    price: 255,
    rating: 5,
    reviews: 49,
    badge: 'New Launch',
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
  {
    id: 2,
    name: 'Mini jamun jars',
    price: 135,
    rating: 5,
    reviews: 49,
    badge: 'Best Seller',
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
  {
    id: 3,
    name: 'Holes Mysore Pak',
    price: 100,
    rating: 5,
    reviews: 58,
    badge: null,
    image: require('../assets/images/PAYATHAM URUNDAI.jpg') || placeholderImage,
  },
];

const AllHealthMix = () => {
  const [minPrice, setMinPrice] = useState(399);
  const [maxPrice, setMaxPrice] = useState(1510);
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [sortOption, setSortOption] = useState('Featured');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter Logic - also filter by out of stock if needed
  const filteredProducts = initialProducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  // Sorting Logic
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
    <div className="product-page-wrapper">
      <Navbar />

      {/* HERO SECTION */}
      <section className="healthmix-hero">
        <img src={heroImg} alt="Hero" />
        <div className="hero-text">
          <h1>All Health Mix</h1>
          <p>Healthy & nutritious traditional blends</p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="product-container">
        {/* SIDEBAR FILTERS */}
        <aside className="filter-sidebar">
          <div className="filter-header">
            <div className="filter-title-section">
              {/* SLIDER ADJUSTMENT ICON */}
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
              
              {/* CHEVRON-LEFT ARROW */}
              <span className="filter-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>

          <div className="applied-filters">
            <div className="applied-title">Applied filters</div>
            <div className="price-tag">
              Rs. {minPrice.toLocaleString('en-IN')}.00 - Rs. {maxPrice.toLocaleString('en-IN')}.00
              <button className="remove-filter" onClick={removePriceFilter}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <button className="clear-all" onClick={clearAllFilters}>
              Clear all
            </button>
          </div>

          <div className="filter-section">
            <div className="section-header">
              <h4>Out of stock</h4>
              <div className="toggle-buttons">
                <button className={showOutOfStock ? 'active' : ''} onClick={() => setShowOutOfStock(true)}>
                  Show
                </button>
                <button className={!showOutOfStock ? 'active' : ''} onClick={() => setShowOutOfStock(false)}>
                  Hide
                </button>
              </div>
            </div>
          </div>

          {/* Price Range Filter Area */}
          <div className="filter-section price-section-wrapper">
            <div className="section-header price-header-toggle">
              <h4 className="price-heading">Price</h4>
              <span className="accordion-indicator">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>

            <div className="price-inputs-container">
              <div className="input-box-field">
                <span className="currency-symbol">Rs</span>
                <input 
                  type="number" 
                  value={minPrice} 
                  onChange={handleMinInputChange} 
                  min="0"
                  max="1510"
                />
              </div>
              <div className="input-box-field">
                <span className="currency-symbol">₹</span>
                <input 
                  type="number" 
                  value={maxPrice} 
                  onChange={handleMaxInputChange} 
                  min="0"
                  max="1510"
                />
              </div>
            </div>

            {/* Slider Widget Area */}
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
                  className="native-slider thumb-left"
                />
                <input
                  type="range"
                  min="0"
                  max="1510"
                  value={maxPrice}
                  onChange={handleMaxSliderChange}
                  className="native-slider thumb-right"
                />
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCTS CONTENT GRID */}
        <main className="product-content">
          <div className="product-top-bar">
            <span className="product-count">{sortedProducts.length} products</span>
            
            <div className="sort-dropdown-container">
              <button className="sort-dropdown-btn" onClick={() => setIsSortOpen(!isSortOpen)}>
                <span>{sortOption}</span>
                <span className={`arrow-icon ${isSortOpen ? 'up' : 'down'}`}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
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

          <div className="product-grid">
            {sortedProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="image-container">
                  {product.badge === 'New Launch' && (
                    <div className="badge new-launch-badge">New Launch</div>
                  )}
                  {product.badge === 'Best Seller' && (
                    <div className="badge best-seller-badge">
                      Best Seller
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                    onError={(e) => {
                      e.target.src = placeholderImage;
                      e.target.onerror = null;
                    }}
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>

                  <div className="rating-section">
                    <div className="stars">
                      {'★'.repeat(product.rating)}
                      {'☆'.repeat(5 - product.rating)}
                    </div>
                    <span className="review-count">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="product-price">
                    {product.name === 'Holes Mysore Pak' ? 'From ' : ''}Rs. {product.price}.00
                  </div>

                  <button className="add-to-cart-btn">ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* WhatsApp Action Button */}
      <a href="https://wa.me/#" className="whatsapp-floating-btn" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path d="M16 2a13 13 0 0 0-11.27 19.51L3 29l7.73-2A13 13 0 1 0 16 2zm6.75 18.39c-.3.84-1.48 1.54-2.42 1.63-.64.06-1.47.09-3.79-.88a10.93 10.93(0 0 1-4.82-4.25 5.09 5.09 0 0 1-1.07-2.71 3.2 3.2 0 0 1 1-2.4c.18-.18.4-.26.6-.26h.43c.13 0 .3.05.44.38l.94 2.27c.09.21.14.45.01.71l-.42.53c-.13.16-.27.35-.12.61a7.8 7.8 0 0 0 2.45 3.06 6.47 6.47 0 0 0 3.26 1.48c.31.05.49 0 .68-.21l.62-.83c.18-.24.37-.2.61-.11l2.31 1.09c.24.12.37.18.43.29.07.13.07.72-.23 1.56z" fill="#fff"/>
        </svg>
      </a>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AllHealthMix;