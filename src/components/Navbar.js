import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/images/logo.png';

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

const toggleTheme = () => {
  setDarkMode(!darkMode);
  document.body.className = !darkMode ? "dark-mode" : "light-mode";
};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveSubMenu(null);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  // Function to handle menu link clicks - closes both menu and submenu
  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  };

  // Function to handle submenu item click
  const handleSubmenuItemClick = () => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  };

  const submenuItems = {
    'All': [
      { name: 'All Items', path: '/Product' },
      { name: 'All Sweets', path: '/all-sweets' },
      { name: 'All Traditional', path: '/all-traditional' },
      { name: 'All Health Mix', path: '/all-health-mix' }
    ]
  };

  return (
    <>
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-bar-container">
            <form onSubmit={handleSearch} className="search-form-full">
              <input
                type="text"
                placeholder="Search for sweets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-full"
                autoFocus
              />
              <button type="submit" className="search-submit-btn">Search</button>
              <button type="button" onClick={toggleSearch} className="search-close-btn">✕</button>
            </form>
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
            <span className="center-text">SriLankan Sweets</span>
          </div>
          <div className="top-bar-right"></div>
        </div>
      </div>

      <div className="middle-bar">
        <div className="middle-bar-container">
          <div className="search-icon-wrapper desktop-search">
            <button className="search-icon-middle" onClick={toggleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Search
            </button>
          </div>

          <div className="mobile-left-actions">
            <button className="mobile-menu-icon" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <button className="mobile-search-icon" onClick={toggleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <div className="logo-wrapper" onClick={handleLogoClick}>
            <img src={logo} alt="Anara Sweets" className="middle-logo" />
          </div>

          
         <div className="account-cart-wrapper">
  <button className="account-icon" onClick={toggleTheme}>
    {darkMode ? (
      // 🌙 Dark mode icon (Moon)
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
      </svg>
    ) : (
      // ☀️ Light mode icon (Sun)
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5"></circle>
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
      </svg>
    )}
    <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
  </button>
</div>
            <button className="cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Cart</span>
            </button>
          </div>
        </div>
    

      <div className="nav-bar">
        <div className="nav-bar-container">
          <div className="nav-links">
            <div
              className="nav-dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="nav-link dropdown-trigger">
                All <span className="dropdown-arrow">▼</span>
              </span>
              {isDropdownOpen && (
                <div className="dropdown-menu">


                  <Link to="/product" className="dropdown-item">All Items</Link>
                  <Link to="/sweets" className="dropdown-item">All Sweets</Link>
                  <Link to="/all-traditional" className="dropdown-item">All Traditional</Link>
                  <Link to="/all-health-mix" className="dropdown-item">All Health Mix</Link>

                </div>
              )}
            </div>
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

        <div className="mobile-dropdown">
          <div
            className="mobile-dropdown-title"
            onClick={() => setActiveSubMenu('All')}
          >
            All
            <span className="arrow">›</span>
          </div>
        </div>

        <a href="#product" onClick={handleMenuLinkClick}>Product</a>
        <a href="#about" onClick={handleMenuLinkClick}>About Us</a>
        <Link to="/contact" onClick={handleMenuLinkClick}>Contact Us</Link>
      </div>

      <div className={`mobile-submenu-panel ${activeSubMenu ? 'active' : ''}`}>
        {activeSubMenu && (
          <>
            <div className="submenu-header">
              <button className="submenu-back-btn" onClick={() => setActiveSubMenu(null)}>
                ←
              </button>
              <span className="submenu-title">{activeSubMenu}</span>
            </div>
            <div className="submenu-items">
              {submenuItems[activeSubMenu]?.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="submenu-item"
                  onClick={handleSubmenuItemClick}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;