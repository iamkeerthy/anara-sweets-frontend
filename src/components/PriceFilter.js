import React, { useState } from 'react';
import '../styles/filter.css';

const PriceFilter = ({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
  showOutOfStock,
  onOutOfStockChange,
  onClearAll,
  extraFilters = [],
  max = 3000,
  step = 100,
}) => {
  const [priceOpen, setPriceOpen] = useState(true);

  const trackInset = 18;
  const minPercent = minPrice / max;
  const maxPercent = maxPrice / max;
  const fillLeft = `calc(${trackInset}px + ${minPercent * 100}% - ${minPercent * trackInset * 2}px)`;
  const fillRight = `calc(${trackInset}px + ${(1 - maxPercent) * 100}% - ${(1 - maxPercent) * trackInset * 2}px)`;
  const hasPriceFilter = minPrice > 0 || maxPrice < max;
  const hasAppliedFilters = hasPriceFilter || extraFilters.length > 0;

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
    <aside className="filter-sidebar price-filter">
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
          <span className="filter-title">Filters</span>
        </div>
      </div>

      <div className="applied-filters">
        <div className="applied-title">Applied filters</div>
        <div className="price-tag">
          Rs. {minPrice} - Rs. {maxPrice}
          <button className="remove-filter" onClick={removePriceFilter} aria-label="Remove price filter">
            &times;
          </button>
        </div>
        {extraFilters.map((filter) => (
          <div className="price-tag category-tag-text" key={filter.label}>
            {filter.label}
            <button className="remove-filter" onClick={filter.onRemove} aria-label={`Remove ${filter.label}`}>
              &times;
            </button>
          </div>
        ))}
        {hasAppliedFilters && (
          <button className="clear-all" onClick={onClearAll}>Clear all</button>
        )}
      </div>

      <div className="filter-section availability-section">
        <div className="section-header">
          <h4>Availability</h4>
          <div className="toggle-buttons">
            <button
              className={showOutOfStock ? 'active' : ''}
              onClick={() => onOutOfStockChange(true)}
            >
              Show All
            </button>
            <button
              className={!showOutOfStock ? 'active' : ''}
              onClick={() => onOutOfStockChange(false)}
            >
              In Stock Only
            </button>
          </div>
        </div>
      </div>

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
              height="30  "
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
                aria-label="Minimum price range"
              />
              <input
                type="range"
                className="dual-range"
                min={0}
                max={max}
                step={step}
                value={maxPrice}
                onChange={handleMaxSlider}
                aria-label="Maximum price range"
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

export default PriceFilter;
