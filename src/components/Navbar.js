import React, { useState, useEffect, useMemo } from 'react';
import '../styles/navbar.css';
import logo from '../assets/images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { products } from '../data/products';
import { filterProductsBySearch } from '../utils/searchProducts';

const SEARCH_PREVIEW_LIMIT = 6;

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(
    () => filterProductsBySearch(products, searchQuery),
    [searchQuery]
  );

  const previewResults = searchResults.slice(0, SEARCH_PREVIEW_LIMIT);
  const hasMoreResults = searchResults.length > SEARCH_PREVIEW_LIMIT;
  
  const topBarMessages = ['SriLankan Sweets', 'Made fresh daily | One time use Pure Groundnut Oil'];
  const [topBarIndex, setTopBarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopBarIndex((prev) => (prev + 1) % topBarMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [topBarMessages.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const goToSearchResults = (query) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/product?search=${encodeURIComponent(trimmed)}`);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    goToSearchResults(searchQuery);
  };

  const handleProductSelect = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  // Function to handle menu link clicks - closes the mobile menu
  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-bar-container">
            <form onSubmit={handleSearch} className="search-form-full">
              <input
                type="text"
                placeholder="Search products (e.g. sweets, laddu, snacks)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-full"
                autoFocus
              />
              <button type="submit" className="search-submit-btn">Search</button>
              <button type="button" onClick={toggleSearch} className="search-close-btn">✕</button>
            </form>

            {searchQuery.trim() && (
              <div className="search-results-dropdown">
                {searchResults.length > 0 ? (
                  <>
                    <p className="search-results-count">
                      {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found
                    </p>
                    <ul className="search-results-list">
                      {previewResults.map((product) => (
                        <li key={product.id}>
                          <button
                            type="button"
                            className="search-result-item"
                            onClick={() => handleProductSelect(product.id)}
                          >
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="search-result-thumb"
                            />
                            <span className="search-result-info">
                              <span className="search-result-name">{product.name}</span>
                              <span className="search-result-meta">
                                {product.category.charAt(0).toUpperCase() + product.category.slice(1)} · Rs. {product.price}
                              </span>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="search-view-all-btn"
                      onClick={() => goToSearchResults(searchQuery)}
                    >
                      {hasMoreResults
                        ? `View all ${searchResults.length} results`
                        : 'View on product page'}
                    </button>
                  </>
                ) : (
                  <p className="search-no-results">No products found for &quot;{searchQuery.trim()}&quot;</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="top-bar">
        <div className="top-bar-container">
          <div className="social-icons">
            <a href="https://www.facebook.com/share/17txCyc8JA/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.7v-2.9h2.7V9.4c0-2.7 1.6-4.2 4-4.2 1.2 0 2.4.2 2.4.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6v2h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/anarasweets.inc?igsh=MWc4aXhrcG84MWptaw==" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5z" />
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                <circle cx="17.5" cy="6.5" r="1.2" />
              </svg>
            </a>
          </div>
          <div className="top-bar-center">
            <div className='c'>
              <span
                key={topBarIndex}
                className={`top-bar-message ${topBarIndex === 1 ? 'from-bottom' : 'fade'}`}
                aria-live="polite"
              >
                {topBarMessages[topBarIndex]}
              </span>
            </div>
          </div>
          <div className="top-bar-right"></div>
        </div>
      </div>

      <div className="middle-bar">
        <div className="middle-bar-container">
          <div className="middle-bar-spacer" />

          <div className="mobile-left-actions">
            <button className="mobile-menu-icon" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="logo-wrapper" onClick={handleLogoClick}>
            <img src={logo} alt="Anara Sweets" className="middle-logo" />
          </div>

          <div className="nav-actions-wrapper">
            <button className="search-icon-middle" onClick={toggleSearch} aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-bar-container">
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </div>
        </div>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={handleMenuLinkClick}></div>}

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="menu-brand">
            <h2>ANARA</h2>
            <span>SWEETS</span>
          </div>
          <button className="mobile-menu-close" onClick={handleMenuLinkClick}>✕</button>
        </div>

        <Link to="/" onClick={handleMenuLinkClick}>Home</Link>
        <Link to="/product" onClick={handleMenuLinkClick}>Product</Link>
        <Link to="/about" onClick={handleMenuLinkClick}>About Us</Link>
        <Link to="/contact" onClick={handleMenuLinkClick}>Contact Us</Link>
      </div>
    </>
  );
};

export default Navbar;