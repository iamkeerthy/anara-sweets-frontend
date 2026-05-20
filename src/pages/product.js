import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from "../components/WhatsAppButton";
import sweetsImages from "../assets/images/sweets";
import '../styles/product.css';

// Webpack Context for asset bundling fallbacks
const images = require.context(
  '../assets/images',
  false,
  /\.(png|jpe?g|svg)$/
);

// Constant Data Store
const INITIAL_PRODUCTS = [
  // --- SWEETS (8 ITEMS) ---
  {
    id: 1,
    name: "Mysore Pak",
    desc: "Traditional South Indian sweet made with ghee",
    price: 150,
    rating: 5,
    reviews: 120,
    isBestSeller: true,
    category: 'sweets',
    imagesList: Array(4).fill(sweetsImages.mysorePak),
  },
  {
    id: 2,
    name: "Rava Laddu",
    desc: "Soft and sweet coconut rava laddu",
    price: 140,
    rating: 4,
    reviews: 98,
    isBestSeller: false,
    category: 'sweets',
    imagesList: Array(4).fill(sweetsImages.ravaladdu),
  },
  {
    id: 3,
    name: "Rava Kesari",
    desc: "Kesari made with semolina and saffron",
    price: 120,
    rating: 4,
    reviews: 80,
    isBestSeller: false,
    category: 'sweets',
    imagesList: Array(4).fill(sweetsImages.ravakesari),
  },
  {
    id: 4,
    name: "Payatham Urundai",
    desc: "Protein rich traditional sweet balls",
    price: 180,
    rating: 5,
    reviews: 150,
    isBestSeller: true,
    category: 'sweets',
    imagesList: Array(4).fill(sweetsImages.payiththamurundai),
  },
  {
    id: 5,
    name: "Rich Laddu",
    desc: "Premium dry fruit laddu",
    price: 220,
    rating: 5,
    reviews: 200,
    isBestSeller: true,
    category: 'sweets',
    imagesList: Array(4).fill(sweetsImages.richladdu),
  },
  {
    id: 6,
    name: "Turkish Delight",
    desc: "Soft chewy middle eastern sweet",
    price: 350,
    rating: 5,
    reviews: 300,
    isBestSeller: true,
    category: 'sweets',
    imagesList: Array(4).fill(sweetsImages.TURKISHDELIGHT),
  },
  {
    id: 7,
    name: "Boondi Laddu",
    desc: "Classic crunchy boondi laddu",
    price: 160,
    rating: 4,
    reviews: 140,
    isBestSeller: false,
    category: 'sweets',
    imagesList: Array(4).fill(sweetsImages.BOONDILADDU),
  },
  {
    id: 8,
    name: "Coconut Burfi",
    desc: "Soft coconut milk sweet squares",
    price: 180,
    rating: 4,
    reviews: 110,
    isBestSeller: false,
    category: 'sweets',
    imagesList: Array(4).fill(sweetsImages.COCONUTBURFI),
  },
  // --- TRADITIONAL ---
  {
    id: 9,
    name: 'Achu Murukku + Thattai',
    desc: 'Traditional sweet crunchy combinations',
    price: 138,
    rating: 4,
    reviews: 147,
    isBestSeller: false,
    category: 'traditional',
    imagesList: Array(4).fill(images('./PAYATHAM URUNDAI.jpg')),
  },
  {
    id: 10,
    name: 'Jaffna Spicy Special',
    desc: 'Fiery Mixture, Chickpeas, Cassava Chips',
    price: 680,
    rating: 5,
    reviews: 184,
    isBestSeller: false,
    category: 'traditional',
    imagesList: Array(4).fill(images('./PAYATHAM URUNDAI.jpg')),
  },
  {
    id: 11,
    name: 'Traditional Village Treat',
    desc: 'Kavum, Kokis, Aluwa, Athirasa combo',
    price: 850,
    rating: 4,
    reviews: 95,
    isBestSeller: false,
    category: 'traditional',
    imagesList: Array(4).fill(images('./PAYATHAM URUNDAI.jpg')),
  },
  {
    id: 12,
    name: 'Snack Attack Crunch',
    desc: 'Spicy Murukku, Ribbon Pakoda, Garlic Sev',
    price: 340,
    rating: 4,
    reviews: 212,
    isBestSeller: false,
    category: 'traditional',
    imagesList: Array(4).fill(images('./PAYATHAM URUNDAI.jpg')),
  },
  // --- HEALTH MIX ---
  {
    id: 13,
    name: 'Nutritious Ragi Health Mix',
    desc: 'Finger millet, almonds, walnuts, and cardamom formula',
    price: 450,
    rating: 5,
    reviews: 120,
    isBestSeller: false,
    category: 'healthmix',
    imagesList: Array(4).fill(images('./PAYATHAM URUNDAI.jpg')),
  },
  {
    id: 14,
    name: 'Millet & Nuts Power Mix',
    desc: 'Multi-grain roasted health mix breakfast drink',
    price: 580,
    rating: 5,
    reviews: 88,
    isBestSeller: true,
    category: 'healthmix',
    imagesList: Array(4).fill(images('./PAYATHAM URUNDAI.jpg')),
  },
  {
    id: 15,
    name: 'Herbal Immunity Porridge',
    desc: 'Traditional health mix mix with authentic greens',
    price: 390,
    rating: 4,
    reviews: 64,
    isBestSeller: false,
    category: 'healthmix',
    imagesList: Array(4).fill(images('./PAYATHAM URUNDAI.jpg')),
  },
];

const SORT_OPTIONS = [
  'Alphabetically, A-Z',
  'Alphabetically, Z-A',
  'Price, low to high',
  'Price, high to low',
];

const MAX_PRICE_LIMIT = 3000;

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

  if (!imagesList || imagesList.length === 0) return <div className="product-img-placeholder" />;

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
          />
        ))}
      </div>
    </div>
  );
};

// MAIN PRODUCT COMPONENT
const Product = () => {
  const navigate = useNavigate();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE_LIMIT);
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [sortOption, setSortOption] = useState('Alphabetically, A-Z');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Performance Optimization: Cache filtered and sorted operations
  const processedProducts = useMemo(() => {
    const filtered = INITIAL_PRODUCTS.filter((product) => {
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesPrice && matchesCategory;
    });

    return [...filtered].sort((a, b) => {
      if (sortOption === 'Price, low to high') return a.price - b.price;
      if (sortOption === 'Price, high to low') return b.price - a.price;
      if (sortOption === 'Alphabetically, A-Z') return a.name.localeCompare(b.name);
      if (sortOption === 'Alphabetically, Z-A') return b.name.localeCompare(a.name);
      return 0;
    });
  }, [minPrice, maxPrice, selectedCategory, sortOption]);

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
    const val = Math.min(MAX_PRICE_LIMIT, Math.max(Number(e.target.value), minPrice + 100));
    setMaxPrice(val);
  };

  const clearAllFilters = () => {
    setMinPrice(0);
    setMaxPrice(MAX_PRICE_LIMIT);
    setShowOutOfStock(true);
    setSelectedCategory('all');
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
              Rs. {minPrice}.00 - Rs. {maxPrice}.00
              <button className="remove-filter" onClick={() => { setMinPrice(0); setMaxPrice(MAX_PRICE_LIMIT); }}>✕</button>
            </div>
            {selectedCategory !== 'all' && (
              <div className="price-tag category-tag-text">
                Category: {selectedCategory}
                <button className="remove-filter" onClick={() => setSelectedCategory('all')}>✕</button>
              </div>
            )}
            <button className="clear-all" onClick={clearAllFilters}>Clear all</button>
          </div>

          <div className="filter-section">
            <div className="section-header">
              <h4>Availability</h4>
              <div className="toggle-buttons">
                <button className={showOutOfStock ? 'active' : ''} onClick={() => setShowOutOfStock(true)}>Show</button>
                <button className={!showOutOfStock ? 'active' : ''} onClick={() => setShowOutOfStock(false)}>Hide</button>
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
                  <input type="range" className="dual-range" min={0} max={MAX_PRICE_LIMIT} step={50} value={minPrice} onChange={handleMinSlider} aria-label="Minimum price range" />
                  <input type="range" className="dual-range" min={0} max={MAX_PRICE_LIMIT} step={50} value={maxPrice} onChange={handleMaxSlider} aria-label="Maximum price range" />
                </div>

                <div className="price-inputs-container">
                  <div className="input-box-field">
                    <span className="currency-symbol">Rs.</span>
                    <input type="number" value={minPrice} onChange={handleMinInput} min={0} max={MAX_PRICE_LIMIT} />
                  </div>
                  <div className="input-box-field">
                    <span className="currency-symbol">Rs.</span>
                    <input type="number" value={maxPrice} onChange={handleMaxInput} min={0} max={MAX_PRICE_LIMIT} />
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
            {['all', 'sweets', 'traditional', 'healthmix'].map((cat) => (
              <button 
                key={cat}
                className={`category-tab-btn ${selectedCategory === cat ? 'active-tab' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? 'All Products' : cat === 'traditional' ? 'Traditional Treats' : cat === 'healthmix' ? 'Health Mix' : 'Sweets'}
              </button>
            ))}
          </div>

          <div className="product-top-bar">
            <span className="product-count">
              Showing {processedProducts.length} {selectedCategory !== 'all' ? selectedCategory : ''} products
            </span>

            <div className="sort-dropdown-container">
              <button className="sort-dropdown-btn" onClick={() => setIsSortOpen(!isSortOpen)}>
                <span>{sortOption}</span>
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
              >
                <div className="image-container">
                  {product.isBestSeller && (
                    <div className="badge best-seller-badge">Best Seller</div>
                  )}
                  <ProductCardImageSlider imagesList={product.imagesList} productName={product.name} />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>

                  <div className="rating-section">
                    <div className="stars" aria-label={`${product.rating} out of 5 stars`}>
                      {'★'.repeat(product.rating)}
                      {'☆'.repeat(5 - product.rating)}
                    </div>
                    <span className="review-count">({product.reviews} reviews)</span>
                  </div>

                  <div className="product-price">Rs. {product.price}.00</div>
                  <button className="add-to-cart-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
          
          {processedProducts.length === 0 && (
            <div className="no-products-fallback">
              <p>No products found matching your current price or category combination.</p>
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