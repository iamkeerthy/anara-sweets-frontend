import React, { useState } from 'react';

const FilterSidebar = ({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
  showOutOfStock,
  onOutOfStockChange,
  onClearAll,
  max = 3000,
  step = 100,
}) => {
  const [priceOpen, setPriceOpen] = useState(true);

  const fillLeft = `${(minPrice / max) * 100}%`;
  const fillRight = `${100 - (maxPrice / max) * 100}%`;

  const handleMinSlider = (e) => {
    const val = Math.min(Number(e.target.value), maxPrice - step);
    onMinChange(val);
  };

  const handleMaxSlider = (e) => {
    const val = Math.max(Number(e.target.value), minPrice + step);
    onMaxChange(val);
  };

  const handleMinInput = (e) => {
    const val = Math.max(0, Math.min(Number(e.target.value), maxPrice - step));
    onMinChange(val);
  };

  const handleMaxInput = (e) => {
    const val = Math.min(max, Math.max(Number(e.target.value), minPrice + step));
    onMaxChange(val);
  };

  const removePriceFilter = () => {
    onMinChange(0);
    onMaxChange(max);
  };

  return (
    <aside className="filter-sidebar">

      {/* FILTER HEADER */}
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
        <button className="clear-all" onClick={onClearAll}>Clear all</button>
      </div>

      {/* OUT OF STOCK */}
      <div className="filter-section">
        <div className="section-header">
          <h4>Out of stock</h4>
          <div className="toggle-buttons">
            <button
              className={showOutOfStock ? 'active' : ''}
              onClick={() => onOutOfStockChange(true)}
            >
              Show
            </button>
            <button
              className={!showOutOfStock ? 'active' : ''}
              onClick={() => onOutOfStockChange(false)}
            >
              Hide
            </button>
          </div>
        </div>
      </div>

      {/* PRICE RANGE FILTER */}
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
                max={max}
                step={step}
                value={minPrice}
                onChange={handleMinSlider}
              />
              <input
                type="range"
                className="dual-range"
                min={0}
                max={max}
                step={step}
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
                  max={max}
                  step={step}
                />
              </div>
              <div className="input-box-field">
                <span className="currency-symbol">Rs.</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={handleMaxInput}
                  min={0}
                  max={max}
                  step={step}
                />
              </div>
            </div>
          </>
        )}
      </div>

    </aside>
  );
};

export default FilterSidebar;