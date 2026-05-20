import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../styles/hero.css";

import hero1 from "../assets/images/img1.jpg";
import hero2 from "../assets/images/img2.jpg";
import hero3 from "../assets/images/img3.jpg";
import hero4 from "../assets/images/img4.jpg";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="overlay"></div>

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-subtitle">Anara sweets</h2>
          <h1 className="hero-title">Sweet and Snacks</h1>
          <p className="hero-description">
            ethnic SriLankan FLAVOUR'S{" "}
            <span className="highlight">40+ Outlets</span>
          </p>
          <p className="hero-tagline">HANDCRAFTED SWEETS & SAVOURIES</p>
          <Link to="/all-collections" className="hero-btn">Shop now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;