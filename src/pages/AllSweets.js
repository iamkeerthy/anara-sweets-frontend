import React from "react";
import "../styles/AllSweets.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sweetsImages from "../assets/images/sweets";

const sweets = [
  {
    id: 1,
    name: "Mysore Pak",
    price: "Rs. 150",
    image: sweetsImages.mysorePak,
  },
  {
    id: 2,
    name: "Payiththamurundai",
    price: "Rs. 180",
    image: sweetsImages.payiththamurundai,
  },
  {
    id: 3,
    name: "Rava Kesari",
    price: "Rs. 120",
    image: sweetsImages.ravakesari,
  },
  {
    id: 4,
    name: "Rava Laddu",
    price: "Rs. 140",
    image: sweetsImages.ravaladdu,
  },
  {
    id: 5,
    name: "Rich Laddu",
    price: "Rs. 200",
    image: sweetsImages.richladdu,
  },
  {
    id: 6,
    name: "Turkish Delight",
    price: "Rs. 350",
    image: sweetsImages.TURKISHDELIGHT,
  },
  {
    id: 7,
    name: "Boondi Laddu",
    price: "Rs. 160",
    image: sweetsImages.BOONDILADDU,
  },
  {
    id: 8,
    name: "Coconut Burfi",
    price: "Rs. 180",
    image: sweetsImages.COCONUTBURFI,
  },
];

export default function AllSweets() {
  return (
    <div>
      <Navbar />

      <div className="collection-container">
        {/* Header */}
        <div className="collection-header">
          <h1>All Sweets</h1>
          <p>Fresh traditional Sri Lankan & Indian sweets made daily</p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <select>
            <option>Sort by: Featured</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Alphabetical</option>
          </select>
        </div>

        {/* Grid */}
        <div className="sweets-grid">
          {sweets.map((item) => (
            <div className="sweet-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}