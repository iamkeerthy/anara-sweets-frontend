import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from "../components/WhatsAppButton";
import '../styles/product.css';
import { products } from "../data/products";
import { filterProductsBySearch } from "../utils/searchProducts";

const SORT_OPTIONS = [
  'Alphabetically, A-Z',
  'Alphabetically, Z-A',
  'Price, low to high',
  'Price, high to low',
];

const MAX_PRICE_LIMIT = 1000;

// IN-CARD SLIDER COMPONENT
const ProductCardImageSlider = ({ imagesList, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  if (!imagesList || imagesList.length === 0) {
    return <div className="product-img-placeholder">No Image</div>;
  }

  return (
    <div className="card-slider-wrapper">
      <button type="button" aria-label="Previous image" className="slider-arrow left-arrow" onClick={handlePrev}>&#10094;</button>
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
              loading="lazy"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
              }}
            />
          ))}
        </div>
      </div>
      <button type="button" aria-label="Next image" className="slider-arrow right-arrow" onClick={handleNext}>&#10095;</button>
      <div className="slider-dots">
        {imagesList.map((_, idx) => (
          <span 
            key={idx} 
            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
};

// MAIN PRODUCT COMPONENT
const Product = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromUrl = searchParams.get('search') || '';

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE_LIMIT);
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [sortOption, setSortOption] = useState('Alphabetically, A-Z');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState(searchFromUrl);

  useEffect(() => {
    setSearchTerm(searchFromUrl);
  }, [searchFromUrl]);

  // Get unique categories from products data
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(products.map(p => p.category))];
    return cats;
  }, []);

  // Performance Optimization: Cache filtered and sorted operations
  const processedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesPrice && matchesCategory;
    });

    filtered = filterProductsBySearch(filtered, searchTerm);

    // Sort the filtered products
    return [...filtered].sort((a, b) => {
      if (sortOption === 'Price, low to high') return a.price - b.price;
      if (sortOption === 'Price, high to low') return b.price - a.price;
      if (sortOption === 'Alphabetically, A-Z') return a.name.localeCompare(b.name);
      if (sortOption === 'Alphabetically, Z-A') return b.name.localeCompare(a.name);
      return 0;
    });
  }, [minPrice, maxPrice, selectedCategory, sortOption, searchTerm]);

  const handleMinSlider = (e) => {
    const val = Math.min(Number(e.target.value), maxPrice - 10);
    setMinPrice(val);
  };

  const handleMaxSlider = (e) => {
    const val = Math.max(Number(e.target.value), minPrice + 10);
    setMaxPrice(val);
  };

  const handleMinInput = (e) => {
    const val = Math.max(0, Math.min(Number(e.target.value), maxPrice - 10));
    setMinPrice(val);
  };

  const handleMaxInput = (e) => {
    const val = Math.min(MAX_PRICE_LIMIT, Math.max(Number(e.target.value), minPrice + 10));
    setMaxPrice(val);
  };

  const clearSearch = () => {
    setSearchTerm('');
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('search');
    setSearchParams(nextParams);
  };

  const clearAllFilters = () => {
    setMinPrice(0);
    setMaxPrice(MAX_PRICE_LIMIT);
    setShowOutOfStock(true);
    setSelectedCategory('all');
    setSortOption('Alphabetically, A-Z');
    clearSearch();
  };

  const fillLeft = `${(minPrice / MAX_PRICE_LIMIT) * 100}%`;
  const fillRight = `${100 - (maxPrice / MAX_PRICE_LIMIT) * 100}%`;

  return (
    <div className="traditional-page-wrapper">
      <Navbar />

      <div className="product-container">
        {/* SIDEBAR FILTER PANEL */}
        <aside className="filter-sidebar">
          <div className="filter-header">
            <div className="filter-title-section">
              <svg className="filter-icon-svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="11" x2="28" y2="11" />
                <circle cx="10" cy="11" r="2.5" fill="black" />
                <line x1="4" y1="21" x2="28" y2="21" />
                <circle cx="22" cy="21" r="2.5" fill="black" />
              </svg>
              <h2 className="filter-title">Filters</h2>
            </div>
          </div>

          <div className="applied-filters">
            <div className="applied-title">Applied filters</div>
            <div className="price-tag">
              Rs. {minPrice} - Rs. {maxPrice}
              <button className="remove-filter" onClick={() => { setMinPrice(0); setMaxPrice(MAX_PRICE_LIMIT); }}>✕</button>
            </div>
            {selectedCategory !== 'all' && (
              <div className="price-tag category-tag-text">
                Category: {selectedCategory}
                <button className="remove-filter" onClick={() => setSelectedCategory('all')}>✕</button>
              </div>
            )}
            {searchTerm.trim() && (
              <div className="price-tag category-tag-text">
                Search: {searchTerm}
                <button className="remove-filter" onClick={clearSearch}>✕</button>
              </div>
            )}
            {(minPrice > 0 || maxPrice < MAX_PRICE_LIMIT || selectedCategory !== 'all' || searchTerm.trim()) && (
              <button className="clear-all" onClick={clearAllFilters}>Clear all</button>
            )}
          </div>

          <div className="filter-section">
            <div className="section-header">
              <h4>Availability</h4>
              <div className="toggle-buttons">
                <button className={showOutOfStock ? 'active' : ''} onClick={() => setShowOutOfStock(true)}>Show All</button>
                <button className={!showOutOfStock ? 'active' : ''} onClick={() => setShowOutOfStock(false)}>In Stock Only</button>
              </div>
            </div>
          </div>

          <div className="filter-section price-section-wrapper">
            <div className="section-header price-header-toggle" onClick={() => setPriceOpen(!priceOpen)}>
              <h4 className="price-heading">Price Range</h4>
              <span className="accordion-indicator" style={{ transform: priceOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            {priceOpen && (
              <div className="price-controls-body">
                <div className="range-track-wrapper">
                  <div className="range-track-bg" />
                  <div className="range-track-fill" style={{ left: fillLeft, right: fillRight }} />
                  <input 
                    type="range" 
                    className="dual-range" 
                    min={0} 
                    max={MAX_PRICE_LIMIT} 
                    step={10} 
                    value={minPrice} 
                    onChange={handleMinSlider} 
                    aria-label="Minimum price range" 
                  />
                  <input 
                    type="range" 
                    className="dual-range" 
                    min={0} 
                    max={MAX_PRICE_LIMIT} 
                    step={10} 
                    value={maxPrice} 
                    onChange={handleMaxSlider} 
                    aria-label="Maximum price range" 
                  />
                </div>

                <div className="price-inputs-container">
                  <div className="input-box-field">
                    <span className="currency-symbol">Rs.</span>
                    <input type="number" value={minPrice} onChange={handleMinInput} min={0} max={MAX_PRICE_LIMIT} step={10} />
                  </div>
                  <div className="input-box-field">
                    <span className="currency-symbol">Rs.</span>
                    <input type="number" value={maxPrice} onChange={handleMaxInput} min={0} max={MAX_PRICE_LIMIT} step={10} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* MAIN DISPLAY REGION */}
        <main className="product-content">
          {/* CATEGORY TABS BANNER */}
          <div className="category-tabs-container">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`category-tab-btn ${selectedCategory === cat ? 'active-tab' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="product-top-bar">
            <span className="product-count">
              Showing {processedProducts.length}
              {searchTerm.trim() ? ` result${processedProducts.length !== 1 ? 's' : ''} for "${searchTerm}"` : ` ${selectedCategory !== 'all' ? selectedCategory : ''} product${processedProducts.length !== 1 ? 's' : ''}`}
            </span>

            <div className="sort-dropdown-container">
              <button className="sort-dropdown-btn" onClick={() => setIsSortOpen(!isSortOpen)}>
                <span>Sort by: {sortOption}</span>
                <span className={`arrow-icon ${isSortOpen ? 'up' : 'down'}`}>▼</span>
              </button>

              {isSortOpen && (
                <ul className="sort-dropdown-menu">
                  {SORT_OPTIONS.map((option) => (
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

          {/* DYNAMIC PRODUCT GRID */}
          <div className="product-grid">
            {processedProducts.map((product) => (
              <div
                className="product-card"
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') navigate(`/product/${product.id}`);
                }}
              >
                <div className="image-container">
                  {product.isBestSeller && (
                    <div className="badge best-seller-badge">Best Seller</div>
                  )}
                  <ProductCardImageSlider imagesList={product.images} productName={product.name} />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  
                  <div className="rating-section">
                    <div className="stars" aria-label={`${product.rating} out of 5 stars`}>
                      {'★'.repeat(product.rating)}
                      {'☆'.repeat(5 - product.rating)}
                    </div>
                    <span className="review-count">({product.reviews} reviews)</span>
                  </div>

                  <div className="product-price">Rs. {product.price}.00</div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {processedProducts.length === 0 && (
            <div className="no-products-fallback">
              <p>No products found matching your current filters.</p>
              <button onClick={clearAllFilters} className="clear-filters-btn">Clear all filters</button>
            </div>
          )}
        </main>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Product;