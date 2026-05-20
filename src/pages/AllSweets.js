import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/PriceFilter";
import "../styles/AllSweets.css";
import sweetsImages from "../assets/images/sweets";
import Hero from "../components/Hero";


const initialSweets = [
  {
    id: 1,
    name: "Mysore Pak",
    desc: "Traditional South Indian sweet made with ghee",
    price: 150,
    rating: 5,
    reviews: 120,
    isBestSeller: true,
    image: sweetsImages.mysorePak,
  },
  {
    id: 2,
    name: "Rava Laddu",
    desc: "Soft and sweet coconut rava laddu",
    price: 140,
    rating: 4,
    reviews: 98,
    isBestSeller: false,
    image: sweetsImages.ravaladdu,
  },
  {
    id: 3,
    name: "Rava Kesari",
    desc: "Kesari made with semolina and saffron",
    price: 120,
    rating: 4,
    reviews: 80,
    isBestSeller: false,
    image: sweetsImages.ravakesari,
  },
  {
    id: 4,
    name: "Payatham Urundai",
    desc: "Protein rich traditional sweet balls",
    price: 180,
    rating: 5,
    reviews: 150,
    isBestSeller: true,
    image: sweetsImages.payiththamurundai,
  },
  {
    id: 5,
    name: "Rich Laddu",
    desc: "Premium dry fruit laddu",
    price: 220,
    rating: 5,
    reviews: 200,
    isBestSeller: true,
    image: sweetsImages.richladdu,
  },
  {
    id: 6,
    name: "Turkish Delight",
    desc: "Soft chewy middle eastern sweet",
    price: 350,
    rating: 5,
    reviews: 300,
    isBestSeller: true,
    image: sweetsImages.TURKISHDELIGHT,
  },
  {
    id: 7,
    name: "Boondi Laddu",
    desc: "Classic crunchy boondi laddu",
    price: 160,
    rating: 4,
    reviews: 140,
    isBestSeller: false,
    image: sweetsImages.BOONDILADDU,
  },
  {
    id: 8,
    name: "Coconut Burfi",
    desc: "Soft coconut milk sweet squares",
    price: 180,
    rating: 4,
    reviews: 110,
    isBestSeller: false,
    image: sweetsImages.COCONUTBURFI,
  },
];

export default function AllSweets() {
  const MAX = 3000;

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX);
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [sortBy, setSortBy] = useState("featured");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const clearAllFilters = () => {
    setMinPrice(0);
    setMaxPrice(MAX);
    setShowOutOfStock(true);
  };

  const sortingOptions = [
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
  ];

  // FILTER
  const filteredSweets = initialSweets.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  // SORT
  const sortedSweets = [...filteredSweets].sort((a, b) => {
    if (sortBy === "Price, low to high") return a.price - b.price;
    if (sortBy === "Price, high to low") return b.price - a.price;
    if (sortBy === "Alphabetically, A-Z") return a.name.localeCompare(b.name);
    if (sortBy === "Alphabetically, Z-A") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div className="product-page-wrapper">
      <Navbar />
      <Hero />

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

        {/* MAIN */}
        <main className="product-content">

          <div className="product-top-bar">
            <span className="product-count">{sortedSweets.length} products</span>

            <div className="sort-dropdown-container">
              <button
                className="sort-dropdown-btn"
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                <span>{sortBy === "featured" ? "Featured" : sortBy}</span>
                <span className={`arrow-icon ${isSortOpen ? "up" : "down"}`}>▼</span>
              </button>

              {isSortOpen && (
                <ul className="sort-dropdown-menu">
                  {sortingOptions.map((option) => (
                    <li
                      key={option}
                      className={sortBy === option ? "selected" : ""}
                      onClick={() => {
                        setSortBy(option);
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

          {/* GRID */}
          <div className="product-grid">
            {sortedSweets.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="image-container">
                  {item.isBestSeller && (
                    <span className="badge best-seller-badge">★ Best Seller</span>
                  )}
                  <img src={item.image} alt={item.name} className="product-img" />
                </div>

                <div className="product-info">
                  <h4 className="product-name">{item.name}</h4>
                  <p className="product-desc">{item.desc}</p>

                  <div className="rating-section">
                    <span className="stars">{"★".repeat(item.rating)}</span>
                    <span className="review-count">({item.reviews} reviews)</span>
                  </div>

                  <div className="product-price">Rs. {item.price}.00</div>
                  <button className="add-to-cart-btn">ADD TO CART</button>
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
}