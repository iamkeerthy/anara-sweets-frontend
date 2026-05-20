import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterSidebar from '../components/PriceFilter';
import '../styles/allTraditional.css';
import '../styles/filter.css';

import heroImg from '../assets/images/img2.jpg';
import WhatsAppButton from '../components/WhatsAppButton';

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
  const MAX = 3000;

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX);
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

  const clearAllFilters = () => {
    setMinPrice(0);
    setMaxPrice(MAX);
    setShowOutOfStock(true);
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

        {/* FILTER SIDEBAR COMPONENT */}
        <FilterSidebar
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinChange={setMinPrice}
          onMaxChange={setMaxPrice}
          showOutOfStock={showOutOfStock}
          onOutOfStockChange={setShowOutOfStock}
          onClearAll={clearAllFilters}
          max={MAX}
          step={100}
        />

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
              <div className="product-card" key={product.id}>
                <div className="image-container">
                  {product.badge === 'New Launch' && (
                    <div className="badge new-launch-badge">New Launch</div>
                  )}
                  {product.badge === 'Best Seller' && (
                    <div className="badge best-seller-badge">Best Seller</div>
                  )}
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
                  <button className="add-to-cart-btn">View Details</button>
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

export default AllTraditional;