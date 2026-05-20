import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/product.css';
import { useNavigate } from 'react-router-dom'; // Added navigation hook import

const images = require.context(
  '../assets/images',
  false,
  /\.(png|jpe?g|svg)$/
);

// We assume you have images like: ./PAYATHAM URUNDAI.jpg, ./PAYATHAM_2.jpg, etc.
// Replace the placeholder strings below with your actual image filenames.
const initialProducts = [
  {
    id: 1,
    name: "Aswin's Flavor Fusion",
    desc: 'Murukku, Bakoda, Aswin Mixer, Mini Thattai, Badusha',
    price: 528,
    rating: 5,
    reviews: 951,
    badge: 'Best Seller',
    // Array of 4 images total (1 main + 3 extra)
    imagesList: [
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'), // Replace with extra photo 1
      images('./PAYATHAM URUNDAI.jpg'), // Replace with extra photo 2
      images('./PAYATHAM URUNDAI.jpg'), // Replace with extra photo 3
    ],
  },
  {
    id: 2,
    name: "Aswin's Delight",
    desc: 'Murukku, Bakoda, Bombay Mixer, Thattai, Jangiri',
    price: 494,
    rating: 4,
    reviews: 429,
    badge: 'Best Seller',
    imagesList: [
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'),
    ],
  },
  {
    id: 3,
    name: 'Achu Murukku + Thattai',
    desc: 'Traditional sweet crunchy combinations',
    price: 138,
    rating: 4,
    reviews: 147,
    badge: null,
    imagesList: [
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'),
    ],
  },
  {
    id: 4,
    name: 'Premium Royal Sweet Box',
    desc: 'Milk Peda, Laddu, Kaju Katli, Gulab Jamun',
    price: 1250,
    rating: 5,
    reviews: 310,
    badge: 'Best Seller',
    imagesList: [
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'),
      images('./PAYATHAM URUNDAI.jpg'),
    ],
  },
  {
    id: 5,
    name: 'Jaffna Spicy Special',
    desc: 'Fiery Mixture, Chickpeas, Cassava Chips',
    price: 680,
    rating: 5,
    reviews: 184,
    badge: null,
    imagesList: [images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg')],
  },
  {
    id: 6,
    name: 'Traditional Village Treat',
    desc: 'Kavum, Kokis, Aluwa, Athirasa combo',
    price: 850,
    rating: 4,
    reviews: 95,
    badge: null,
    imagesList: [images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg')],
  },
  {
    id: 7,
    name: 'Snack Attack Crunch',
    desc: 'Spicy Murukku, Ribbon Pakoda, Garlic Sev',
    price: 340,
    rating: 4,
    reviews: 212,
    badge: null,
    imagesList: [images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg')],
  },
  {
    id: 8,
    name: 'Anara Signature Pack',
    desc: 'Halwa, Muscat, Coconut Rock',
    price: 920,
    rating: 5,
    reviews: 440,
    badge: 'Best Seller',
    imagesList: [images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg')],
  },
  {
    id: 9,
    name: 'Anara Signature Pack',
    desc: 'Halwa, Muscat, Coconut Rock',
    price: 920,
    rating: 5,
    reviews: 440,
    badge: 'Best Seller',
    imagesList: [images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg')],
  },
  {
    id: 10,
    name: 'Anara Signature Pack',
    desc: 'Halwa, Muscat, Coconut Rock',
    price: 920,
    rating: 5,
    reviews: 440,
    badge: 'Best Seller',
    imagesList: [images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg')],
  },
  {
    id: 11,
    name: 'Anara Signature Pack',
    desc: 'Halwa, Muscat, Coconut Rock',
    price: 920,
    rating: 5,
    reviews: 440,
    badge: 'Best Seller',
    imagesList: [images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg'), images('./PAYATHAM URUNDAI.jpg')],
  },
];

// REUSABLE SUB-COMPONENT FOR SMOOTH IN-CARD SLIDER
const ProductCardImageSlider = ({ imagesList, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation(); // Stops routing to product details page
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Stops routing to product details page
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="card-slider-wrapper">
      {/* Left Arrow Button */}
      <button className="slider-arrow left-arrow" onClick={handlePrev}>
        &#10094;
      </button>

      {/* Slide Container for smooth transition */}
      <div className="slider-content-window">
        <div 
          className="slider-image-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imagesList.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${productName} view ${idx + 1}`}
              className="product-img"
            />
          ))}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button className="slider-arrow right-arrow" onClick={handleNext}>
        &#10095;
      </button>

      {/* Visual dots indicators */}
      <div className="slider-dots">
        {imagesList.map((_, idx) => (
          <span 
            key={idx} 
            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

const Product = () => {
  const navigate = useNavigate();
  const MAX = 3000;

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX);
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [sortOption, setSortOption] = useState('Featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(true);

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

  const handleMinSlider = (e) => {
    const val = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(val);
  };

  const handleMaxSlider = (e) => {
    const val = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(val);
  };

  const handleMinInput = (e) => {
    const val = Math.max(0, Math.min(Number(e.target.value), maxPrice - 100));
    setMinPrice(val);
  };

  const handleMaxInput = (e) => {
    const val = Math.min(MAX, Math.max(Number(e.target.value), minPrice + 100));
    setMaxPrice(val);
  };

  const clearAllFilters = () => {
    setMinPrice(0);
    setMaxPrice(MAX);
    setShowOutOfStock(true);
  };

  const removePriceFilter = () => {
    setMinPrice(0);
    setMaxPrice(MAX);
  };

  const fillLeft = `${(minPrice / MAX) * 100}%`;
  const fillRight = `${100 - (maxPrice / MAX) * 100}%`;

  const sortingOptions = [
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
  ];

  return (
    <div className="traditional-page-wrapper">
      <Navbar />

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
            <div
              className="section-header price-header-toggle"
              onClick={() => setPriceOpen(!priceOpen)}
            >
              <h4 className="price-heading">Price Range</h4>
              <span
                className="accordion-indicator"
                style={{
                  transform: priceOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.2s',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            {priceOpen && (
              <>
                <div className="range-track-wrapper">
                  <div className="range-track-bg" />
                  <div
                    className="range-track-fill"
                    style={{ left: fillLeft, right: fillRight }}
                  />
                  <input
                    type="range"
                    className="dual-range"
                    min={0}
                    max={MAX}
                    step={100}
                    value={minPrice}
                    onChange={handleMinSlider}
                  />
                  <input
                    type="range"
                    className="dual-range"
                    min={0}
                    max={MAX}
                    step={100}
                    value={maxPrice}
                    onChange={handleMaxSlider}
                  />
                </div>

                <div className="price-inputs-container">
                  <div className="input-box-field">
                    <span className="currency-symbol">Rs.</span>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={handleMinInput}
                      min={0}
                      max={MAX}
                      step={100}
                    />
                  </div>
                  <div className="input-box-field">
                    <span className="currency-symbol">Rs.</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={handleMaxInput}
                      min={0}
                      max={MAX}
                      step={100}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>

        {/* PRODUCTS */}
        <main className="product-content">
          <div className="product-top-bar">
            <span className="product-count">{sortedProducts.length} products</span>

            <div className="sort-dropdown-container">
              <button
                className="sort-dropdown-btn"
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
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
              <div
                className="product-card"
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="image-container">
                  {product.badge === 'Best Seller' && (
                    <div className="badge best-seller-badge">Best Seller</div>
                  )}
                  {/* REPLACED THE OLD <img /> CONTEXT WITH OUR SLIDER COMPONENT */}
                  <ProductCardImageSlider 
                    imagesList={product.imagesList} 
                    productName={product.name} 
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>

                  <div className="rating-section">
                    <div className="stars">
                      {'★'.repeat(product.rating)}
                      {'☆'.repeat(5 - product.rating)}
                    </div>
                    <span className="review-count">({product.reviews} reviews)</span>
                  </div>

                  <div className="product-price">Rs. {product.price}.00</div>

                  <button className="add-to-cart-btn">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Product;