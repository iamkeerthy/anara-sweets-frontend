import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

import hero1 from "../assets/images/img1.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-subtitle">Anara sweets</h2>

          <h1 className="hero-title">
            Sweet and Snacks
          </h1>

          <p className="hero-description">
            ethnic SriLankan FLAVOUR'S{" "}
            <span className="highlight">40+ Outlets</span>
          </p>

          <p className="hero-tagline">
            HANDCRAFTED SWEETS & SAVOURIES
          </p>

          <Link to="/all-collections" className="hero-btn">
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;