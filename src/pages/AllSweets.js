import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AllSweets.css";
import sweetsImages from "../assets/images/sweets";
import Hero from "../components/Hero";
import WhatsAppButton from "../components/WhatsAppButton";

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
  const [priceRange, setPriceRange] = useState(400);
  const [sortBy, setSortBy] = useState("featured");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getProcessed = () => {
    let data = initialSweets.filter((p) => p.price <= priceRange);

    if (sortBy === "low-high") data.sort((a, b) => a.price - b.price);
    if (sortBy === "high-low") data.sort((a, b) => b.price - a.price);

    return data;
  };

  const sweets = getProcessed();

  return (
    <div className="product-page-wrapper">
      <Navbar />
      <Hero />

      <div className="product-container">

        {/* SIDEBAR */}
        {isSidebarOpen && (
          <aside className="filter-sidebar">
            <div className="filter-section">
              <h4>Price</h4>
              <div className="price-inputs">
                <div className="price-box">Rs. 0</div>
                <div className="price-box">Rs. {priceRange}</div>
              </div>

              <input
                type="range"
                min="0"
                max="400"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="price-slider"
              />
            </div>
          </aside>
        )}

        {/* MAIN */}
        <main className="product-content">

          <div className="content-header">
            <button
              className="icon-filter-btn"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              Filter
            </button>

            <h3 className="category-title">All Sweets</h3>

            <div className="sort-dropdown-container">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select-dropdown"
              >
                <option value="featured">Featured</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>
          </div>

          {/* GRID */}
          <div className={`product-grid ${!isSidebarOpen ? "sidebar-hidden" : ""}`}>
            {sweets.map((item) => (
              <div className="product-card" key={item.id}>
                
                <div className="image-container">
                  {item.isBestSeller && (
                    <span className="bestseller-badge">★ Best Seller</span>
                  )}
                  <img src={item.image} alt={item.name} className="product-img" />
                </div>

                <div className="product-info">
                  <h4 className="product-title">{item.name}</h4>
                  <p className="product-desc">{item.desc}</p>

                  <div className="rating-row">
                    <span className="stars">{"★".repeat(item.rating)}</span>
                    <span className="reviews-count">
                      ({item.reviews} reviews)
                    </span>
                  </div>

                  <div className="product-price">Rs. {item.price}.00</div>
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