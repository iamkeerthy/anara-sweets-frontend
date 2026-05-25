import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

// Background image
import bgImage from "../assets/images/cover-image.jpeg";

// Circle slider images
import sweet1 from "../assets/images/Karaboondi.png";
import sweet2 from "../assets/images/Murukku.png";
import sweet3 from "../assets/images/Rava-Laddu.png";
import sweet4 from "../assets/images/Rich-Laddu.png";
import sweet5 from "../assets/images/sippi.png";
import sweet6 from "../assets/images/kuchci.png";

// Move outside component
const images = [sweet1, sweet2, sweet3, sweet4, sweet5,sweet6];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h2 className="hero-subtitle">Anara Sweets</h2>

          <h1 className="hero-title">
            A Taste of Tradition, A Promise of Quality
          </h1>

          <p className="hero-tagline">
            At Anara Sweets we offer a wide range of farsan, tempting sweets
            and other delicacies. We also use only the best quality ingredients
            in the preparation of our products.
          </p>

          <Link to="/product" className="hero-btn">
            Shop Now
          </Link>
        </div>

        {/* RIGHT CIRCLE IMAGE SLIDER */}
        <div className="circle-slider-wrapper">
          <div className="circle-design"></div>

          <div className="circle-slider">
            <img
              src={images[currentImage]}
              alt="Sweet"
              className="circle-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;