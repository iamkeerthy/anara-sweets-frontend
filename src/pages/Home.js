import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/home.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import WhatsAppButton from "../components/WhatsAppButton";

// Import all images (multiple angles/variants per product)
import mysorePak1 from "../assets/images/MYSORE PAK.jpg";
import mysorePak2 from "../assets/images/MYSORE PAK.jpg";
import mysorePak3 from "../assets/images/MYSORE PAK.jpg";

import ravaKesari1 from "../assets/images/RAVA KESARI.jpg";
import ravaKesari2 from "../assets/images/RAVA KESARI.jpg";
import ravaKesari3 from "../assets/images/RAVA KESARI.jpg";

import chocolateBrownies1 from "../assets/images/CHOCOLATE BROWNIES.jpg";
import chocolateBrownies2 from "../assets/images/CHOCOLATE BROWNIES.jpg";
import chocolateBrownies3 from "../assets/images/CHOCOLATE BROWNIES.jpg";

import coconutBurfi1 from "../assets/images/COCONUT BURFI.jpg";
import coconutBurfi2 from "../assets/images/COCONUT BURFI.jpg";
import coconutBurfi3 from "../assets/images/COCONUT BURFI.jpg";

import boondiLaddu1 from "../assets/images/BOONDI LADDU.jpg";
import boondiLaddu2 from "../assets/images/BOONDI LADDU.jpg";
import boondiLaddu3 from "../assets/images/BOONDI LADDU.jpg";

import turkishDelight1 from "../assets/images/TURKISH DELIGHT.jpg";
import turkishDelight2 from "../assets/images/TURKISH DELIGHT.jpg";
import turkishDelight3 from "../assets/images/TURKISH DELIGHT.jpg";

import eggFlour1 from "../assets/images/EGG FLOUR.jpg";
import eggFlour2 from "../assets/images/EGG FLOUR.jpg";
import eggFlour3 from "../assets/images/EGG FLOUR.jpg";

import healthMix1 from "../assets/images/HEALTH MIX.jpg";
import healthMix2 from "../assets/images/HEALTH MIX.jpg";
import healthMix3 from "../assets/images/HEALTH MIX.jpg";

import karaBoondi1 from "../assets/images/KARA BOONDI.jpg";
import karaBoondi2 from "../assets/images/KARA BOONDI.jpg";
import karaBoondi3 from "../assets/images/KARA BOONDI.jpg";

import karaSippi1 from "../assets/images/KARA SIPPI.jpg";
import karaSippi2 from "../assets/images/KARA SIPPI.jpg";
import karaSippi3 from "../assets/images/KARA SIPPI.jpg";

import kuchchiMurukku1 from "../assets/images/KUCHCHI MURUKKU.jpg";
import kuchchiMurukku2 from "../assets/images/KUCHCHI MURUKKU.jpg";
import kuchchiMurukku3 from "../assets/images/KUCHCHI MURUKKU.jpg";

import mixture1 from "../assets/images/MIXTURE.jpg";
import mixture2 from "../assets/images/MIXTURE.jpg";
import mixture3 from "../assets/images/MIXTURE.jpg";

import mulluMurukku1 from "../assets/images/MULLU MURUKKU.jpg";
import mulluMurukku2 from "../assets/images/MULLU MURUKKU.jpg";
import mulluMurukku3 from "../assets/images/MULLU MURUKKU.jpg";

import payathamUrundai1 from "../assets/images/PAYATHAM URUNDAI.jpg";
import payathamUrundai2 from "../assets/images/PAYATHAM URUNDAI.jpg";
import payathamUrundai3 from "../assets/images/PAYATHAM URUNDAI.jpg";

import ravaLaddu1 from "../assets/images/RAVA LADDU.jpg";
import ravaLaddu2 from "../assets/images/RAVA LADDU.jpg";
import ravaLaddu3 from "../assets/images/RAVA LADDU.jpg";

import richLaddu1 from "../assets/images/RICH LADDU.jpg";
import richLaddu2 from "../assets/images/RICH LADDU.jpg";
import richLaddu3 from "../assets/images/RICH LADDU.jpg";

import thattuVadai1 from "../assets/images/THATTU VADAI.jpg";
import thattuVadai2 from "../assets/images/THATTU VADAI.jpg";
import thattuVadai3 from "../assets/images/THATTU VADAI.jpg";

// Best Sellers product images (3 images each for gallery)
import thattai1 from "../assets/images/img1.jpg";
import thattai2 from "../assets/images/img1.jpg";
import thattai3 from "../assets/images/img1.jpg";

import kaiMurukku1 from "../assets/images/img1.jpg";
import kaiMurukku2 from "../assets/images/img1.jpg";
import kaiMurukku3 from "../assets/images/img1.jpg";

import achuMurukku1 from "../assets/images/img1.jpg";
import achuMurukku2 from "../assets/images/img1.jpg";
import achuMurukku3 from "../assets/images/img1.jpg";

import aswinsMixture1 from "../assets/images/img1.jpg";
import aswinsMixture2 from "../assets/images/img1.jpg";
import aswinsMixture3 from "../assets/images/img1.jpg";

import ribbonBakoda1 from "../assets/images/img1.jpg";
import ribbonBakoda2 from "../assets/images/img1.jpg";
import ribbonBakoda3 from "../assets/images/img1.jpg";

// Video imports for the new reels section
import reel1 from "../assets/images/anara.mp4";
import reel2 from "../assets/images/anara.mp4";
import reel3 from "../assets/images/anara.mp4";
import reel4 from "../assets/images/anara.mp4";
import reel5 from "../assets/images/anara.mp4";

// Small images for video reels (thumbnails)
import thumbnail1 from "../assets/images/img1.jpg";
import thumbnail2 from "../assets/images/img1.jpg";
import thumbnail3 from "../assets/images/img1.jpg";
import thumbnail4 from "../assets/images/img1.jpg";
import thumbnail5 from "../assets/images/img1.jpg";

// Flavourful Delights Section Images
import savouriesImg from "../assets/images/img1.jpg";
import sweetsImg from "../assets/images/BOONDI LADDU.jpg";
import podiImg from "../assets/images/EGG FLOUR.jpg";
import picklesImg from "../assets/images/MIXTURE.jpg";
import combosImg from "../assets/images/img2.jpg";
// New full width image for Flavourful Delights section (placed after the grid)
import flavourfulFullWidthImg from "../assets/images/img2.jpg";

// What Makes Anara Special Section Images
import special25Years from "../assets/images/img1.jpg";
import specialFlour from "../assets/images/img1.jpg";
import specialOil from "../assets/images/img1.jpg";
import specialWomen from "../assets/images/img1.jpg";

// Data for the video reels section
const reels = [
  {
    id: 1,
    video: reel1,
    title: "Glimpse of Anara Top Seller Achu Murukku",
    product: "Achu Murukku - Kaaram",
    price: 67,
    thumbnail: thumbnail1,
  },
  {
    id: 2,
    video: reel2,
    title: "A glimpse on how we make our Famous Thattai",
    product: "Thattai",
    price: 71,
    thumbnail: thumbnail2,
  },
  {
    id: 3,
    video: reel3,
    title: "Sneakpeek of Juicy Jamoon",
    product: "BIG JAMUN JARS",
    price: 145,
    thumbnail: thumbnail3,
  },
  {
    id: 4,
    video: reel4,
    title: "We have something Special for Christmas",
    product: "Pocket Plum Cake",
    price: 50,
    thumbnail: thumbnail4,
  },
  {
    id: 5,
    video: reel5,
    title: "It's Yummy",
    product: "Thengai Paal Murukku",
    price: 130,
    thumbnail: thumbnail5,
  },
];

// Data for Best Sellers section with multiple images per product
const bestSellers = [
  {
    id: 1,
    name: "Thattai",
    rating: 5,
    reviews: 130,
    price: 71.00,
    images: [thattai1, thattai2, thattai3],
  },
  {
    id: 2,
    name: "Kai murukku",
    rating: 5,
    reviews: 483,
    price: 96.00,
    images: [kaiMurukku1, kaiMurukku2, kaiMurukku3],
  },
  {
    id: 3,
    name: "Achu muruku - Kaaram",
    rating: 5,
    reviews: 111,
    price: 67.00,
    images: [achuMurukku1, achuMurukku2, achuMurukku3],
  },
  {
    id: 4,
    name: "Anara Mixture",
    rating: 5,
    reviews: 196,
    price: 105.00,
    images: [aswinsMixture1, aswinsMixture2, aswinsMixture3],
  },
  {
    id: 5,
    name: "Ribbon Bakoda",
    rating: 5,
    reviews: 72,
    price: 86.00,
    images: [ribbonBakoda1, ribbonBakoda2, ribbonBakoda3],
  },
];

// Flavourful Delights Section Data
const flavourfulDelights = [
  {
    id: 1,
    name: "Savouries",
    image: savouriesImg,
  },
  {
    id: 2,
    name: "Sweets",
    image: sweetsImg,
  },
  {
    id: 3,
    name: "Podi",
    image: podiImg,
  },
  {
    id: 4,
    name: "Pickles",
    image: picklesImg,
  },
  {
    id: 5,
    name: "Combos",
    image: combosImg,
  },
];

// Review data for "Tasted & Trusted by Millions" section
const reviewsData = [
  {
    id: 1,
    name: "Sudharsan Rama...",
    rating: 5,
    text: "Very good",
    product: "Special Mysore Pak",
  },
  {
    id: 2,
    name: "Nallathambi R",
    rating: 5,
    text: "Excellent substitute for Ni... Light crisp bite and amazing flavour. Not too...",
    product: "Special Mysore Pak",
  },
  {
    id: 3,
    name: "J E",
    rating: 5,
    text: "",
    product: "Special Mysore Pak",
  },
  {
    id: 4,
    name: "Subramanian A k",
    rating: 5,
    text: "So tasty I ordered this for friends and family travelling overseas. The crunchness a...",
    product: "Sweet Achu Murukku",
  },
  {
    id: 5,
    name: "Vijayakumar Chel...",
    rating: 5,
    text: "",
    product: "Sweet Achu Murukku",
  },
];

// Component for image gallery inside each combo card
const ImageGallery = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(null);

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setPreviewIndex(null);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setPreviewIndex(null);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = rect.width / 2;
    if (x < half) {
      setPreviewIndex((currentIndex - 1 + images.length) % images.length);
    } else {
      setPreviewIndex((currentIndex + 1) % images.length);
    }
  };

  const handleMouseLeave = () => setPreviewIndex(null);

  const displayedIndex = previewIndex !== null ? previewIndex : currentIndex;

  return (
    <div
      className="image-gallery"
      onMouseMove={images.length > 1 ? handleMouseMove : undefined}
      onMouseLeave={images.length > 1 ? handleMouseLeave : undefined}
    >
      <img
        src={images[displayedIndex]}
        alt={`${productName} - view ${displayedIndex + 1}`}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
        }}
      />

      {images.length > 1 && (
        <>
          <button
            className={`gallery-arrow left-arrow ${previewIndex === ((currentIndex - 1 + images.length) % images.length) ? 'preview' : ''}`}
            onClick={prevImage}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>

          <button
            className={`gallery-arrow right-arrow ${previewIndex === ((currentIndex + 1) % images.length) ? 'preview' : ''}`}
            onClick={nextImage}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>

          <div className="image-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const combos = [
  {
    id: 1,
    name: "Thattai",
    price: 71,
    images: [thattai1, thattai2, thattai3],
    reviews: 130,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Kai murukku",
    price: 96,
    images: [kaiMurukku1, kaiMurukku2, kaiMurukku3],
    reviews: 483,
    isBestSeller: true
  },
  {
    id: 3,
    name: "Achu muruku - Kaaram",
    price: 67,
    images: [achuMurukku1, achuMurukku2, achuMurukku3],
    reviews: 111,
    isBestSeller: true
  },
  {
    id: 4,
    name: "Anara Mixture",
    price: 105,
    images: [aswinsMixture1, aswinsMixture2, aswinsMixture3],
    reviews: 196,
    isBestSeller: true
  },
  {
    id: 5,
    name: "Ribbon Bakoda",
    price: 86,
    images: [ribbonBakoda1, ribbonBakoda2, ribbonBakoda3],
    reviews: 72,
    isBestSeller: true
  },
  {
    id: 6,
    name: "Mysore Pak",
    price: 197,
    images: [mysorePak1, mysorePak2, mysorePak3],
    reviews: 207,
    isBestSeller: true
  },
  {
    id: 7,
    name: "Egg Flour",
    price: 149,
    images: [eggFlour1, eggFlour2, eggFlour3],
    reviews: 12,
    isBestSeller: false
  },
  {
    id: 8,
    name: "Health Mix",
    price: 175,
    images: [healthMix1, healthMix2, healthMix3],
    reviews: 32,
    isBestSeller: true
  },
  {
    id: 9,
    name: "Kara Boondi",
    price: 155,
    images: [karaBoondi1, karaBoondi2, karaBoondi3],
    reviews: 27,
    isBestSeller: false
  },
  {
    id: 10,
    name: "Kara Sippi",
    price: 168,
    images: [karaSippi1, karaSippi2, karaSippi3],
    reviews: 19,
    isBestSeller: false
  },
  {
    id: 11,
    name: "Kuchchi Murukku",
    price: 172,
    images: [kuchchiMurukku1, kuchchiMurukku2, kuchchiMurukku3],
    reviews: 56,
    isBestSeller: true
  },
  {
    id: 12,
    name: "Mixture",
    price: 158,
    images: [mixture1, mixture2, mixture3],
    reviews: 94,
    isBestSeller: false
  },
  {
    id: 13,
    name: "Mullu Murukku",
    price: 164,
    images: [mulluMurukku1, mulluMurukku2, mulluMurukku3],
    reviews: 41,
    isBestSeller: false
  },
  {
    id: 14,
    name: "Payatham Urundai",
    price: 185,
    images: [payathamUrundai1, payathamUrundai2, payathamUrundai3],
    reviews: 23,
    isBestSeller: false
  },
  {
    id: 15,
    name: "Rava Laddu",
    price: 179,
    images: [ravaLaddu1, ravaLaddu2, ravaLaddu3],
    reviews: 68,
    isBestSeller: true
  },
  {
    id: 16,
    name: "Rich Laddu",
    price: 199,
    images: [richLaddu1, richLaddu2, richLaddu3],
    reviews: 88,
    isBestSeller: true
  },
  {
    id: 17,
    name: "Thattu Vadai",
    price: 143,
    images: [thattuVadai1, thattuVadai2, thattuVadai3],
    reviews: 37,
    isBestSeller: false
  }
];

// Video reels section component
const ReelsSection = () => {
  const reelRef = useRef(null);
  const [hoveredReelId, setHoveredReelId] = useState(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (reelRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = reelRef.current;
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollReel = (dir) => {
    if (!reelRef.current) return;
    const scrollAmount = 340;
    reelRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 300);
  };

  useEffect(() => {
    const container = reelRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section className="reels-section">
      <div className="reels-container" ref={reelRef}>
        {reels.map((reel) => (
          <div key={reel.id} className="reel-card">
            <div
              className="video-wrapper"
              onMouseEnter={() => setHoveredReelId(reel.id)}
              onMouseLeave={() => setHoveredReelId(null)}
            >
              <video
                src={reel.video}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controlsList="nodownload noplaybackrate nofullscreen"
                className="reel-video"
              />
              {hoveredReelId === reel.id && (
                <div className="video-overlay">
                  <p>{reel.title}</p>
                </div>
              )}
            </div>
            <div className="reel-info">
              <div className="reel-thumbnail">
                <img src={reel.thumbnail} alt={reel.product} />
              </div>
              <div className="reel-details">
                <p className="reel-product-name">{reel.product}</p>
                <p className="reel-price">Rs. {reel.price}.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          className="fixed-scroll-arrow right-end-arrow"
          onClick={() => scrollReel("right")}
        >
          &#8250;
        </button>
      )}
    </section>
  );
};

// Best Sellers section component - SAME PATTERN AS COMBOS (horizontal scroll) - NO ARROW ON RIGHT SIDE IN HEADER
const BestSellersSection = () => {
  const bestSellersScrollRef = useRef(null);
  const [bestSellersCartItems, setBestSellersCartItems] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleAddToCartBestSellers = (id) => {
    setBestSellersCartItems((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  const checkScrollPosition = () => {
    if (bestSellersScrollRef.current) {
      const { scrollLeft } = bestSellersScrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
    }
  };

  const scrollBestSellers = (dir) => {
    if (!bestSellersScrollRef.current) return;
    const amount = 340;
    bestSellersScrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth"
    });
    setTimeout(checkScrollPosition, 300);
  };

  useEffect(() => {
    const container = bestSellersScrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  return (
    <section className="bestsellers-section">
      <div className="bestsellers-header">
        <button
          className="nav-arrow bestsellers-nav-arrow"
          onClick={() => scrollBestSellers("left")}
          style={{ visibility: showLeftArrow ? 'visible' : 'hidden' }}
        >
          &#8249;
        </button>

        <div className="title-box">
          <h2>Best Sellers</h2>
          <a href="/best-sellers" className="view-all-link">VIEW ALL</a>
        </div>

        {/* No right arrow in header - consistent with request */}
      </div>

      <div className="bestsellers-scroll-container" ref={bestSellersScrollRef}>
        {bestSellers.map((item) => {
          const isAdded = bestSellersCartItems.includes(item.id);
          return (
            <div key={item.id} className="bestseller-card">
              <div className="image-wrapper">
                <ImageGallery
                  images={item.images}
                  productName={item.name}
                />
              </div>
              <div className="bestseller-card-body">
                <p className="bestseller-product-name">{item.name}</p>
                <p className="bestseller-reviews">
                  {'⭐'.repeat(item.rating)} <span>{item.reviews} reviews</span>
                </p>
                <p className="bestseller-price">Rs. {item.price.toFixed(2)}</p>
              </div>
              <button
                className={`bestseller-add-btn ${isAdded ? "added" : ""}`}
                onClick={() => handleAddToCartBestSellers(item.id)}
              >
                {isAdded ? "ADDED TO CART" : "ADD TO CART"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Flavourful Delights Section
const FlavourfulDelightsSection = () => {
  return (
    <section className="flavourful-section">
      <div className="flavourful-container">
        <h2 className="flavourful-title">Flavourful Delights</h2>

        <div className="flavourful-grid">
          {flavourfulDelights.map((item) => (
            <div key={item.id} className="flavourful-card">
              <div className="flavourful-image">
                <img src={item.image} alt={item.name} />
              </div>
              <p className="flavourful-name">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="flavourful-fullwidth-image">
          <img src={flavourfulFullWidthImg} alt="Traditional Savouries" />
          <div className="fullwidth-overlay">
            <p className="fullwidth-text">Traditional Savouries, <br />made the native way</p>
            <Link to="/all-collections" className="fullwidth-shop-btn">Shop now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== ABOUT US SECTION ====================
const AboutUsSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-images">
          <img
            src={boondiLaddu1}
            alt="Traditional sweets"
            className="about-img about-img-left"
          />
          <img
            src={richLaddu1}
            alt="Snack package"
            className="about-img about-img-right"
          />
        </div>

        <div className="about-content">
          <p className="about-subtitle">ABOUT US</p>
          <h5 className="about-heading">
            Anara Sweets is a delicious tribute to our Ethnic Indian flavours and Age-
            Old Traditional Recipes.<br /><br />
            Every bite is a Celebration of Our Ethnic Indian flavours and Rich Heritage.
          </h5>
          <Link to="/about" className="about-btn">KNOW MORE</Link>
        </div>

      </div>
    </section>
  );
};

// ==================== WHAT MAKES ASWINS SPECIAL ====================

const SpecialSection = () => {
  const specialItems = [
    {
      id: 1,
      image: special25Years,
      title: "40+ Outlets",
      large: true,
      imageTop: false,
    },
    {
      id: 2,
      image: specialFlour,
      title: "Made with Traditionally Hand Pounded Flour",
      imageTop: true,
    },
    {
      id: 3,
      image: specialOil,
      title: "One-time-use Fresh Groundnut Oil",
      imageTop: false,
    },
    {
      id: 4,
      image: specialWomen,
      title: "Supporting 500+ women",
      imageTop: true,
    },
  ];

  return (
    <section className="special-section">

      <div className="special-border"></div>

      <div className="special-container">
        <h2 className="special-heading">
          What makes Anara special?
        </h2>

        <div className="special-grid">
          {specialItems.map((item) => (
            <div
              key={item.id}
              className={`special-card ${item.large ? "large-card" : ""}`}
            >
              {item.imageTop && (
                <>
                  <div className="special-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="special-image"
                    />
                  </div>
                  <p className="special-text">
                    {item.title}
                  </p>
                </>
              )}

              {!item.imageTop && (
                <>
                  <p className="special-text">
                    {item.title}
                  </p>
                  <div className="special-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="special-image"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="special-border"></div>

    </section>
  );
};

// ==================== TASTED & TRUSTED SECTION ====================

const TrustedReviewsSection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  return (
    <section className="trusted-section">
      <div className="trusted-header">
        <h2 className="trusted-title">Tasted & Trusted by Millions</h2>
        <div className="trusted-stars">
          ⭐⭐⭐⭐⭐ <span className="trusted-reviews-count">from 3833 reviews</span>
        </div>
      </div>

      <div className="trusted-slider-wrapper">
        {showLeftArrow && (
          <button className="trusted-arrow trusted-left-arrow" onClick={() => scroll("left")}>
            &#8249;
          </button>
        )}

        <div className="trusted-scroll-container" ref={scrollRef}>
          {reviewsData.map((review) => (
            <div key={review.id} className="trusted-card">
              <div className="trusted-card-header">
                <div className="trusted-product-tag">{review.product}</div>
                <div className="trusted-rating">★★★★★</div>
              </div>
              <p className="trusted-review-text">
                {review.text || (review.name === "J E" ? "" : "")}
              </p>
              <div className="trusted-reviewer">
                <span className="trusted-reviewer-name">{review.name}</span>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button className="trusted-arrow trusted-right-arrow" onClick={() => scroll("right")}>
            &#8250;
          </button>
        )}
      </div>
    </section>
  );
};

const Home = () => {
  const scrollRef = useRef(null);
  const [cartItems, setCartItems] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleAddToCart = (id) => {
    setCartItems((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth"
    });
    setTimeout(checkScrollPosition, 300);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {/* Combos Section */}
      <section className="combos-section">
        <div className="combos-header">
          <button
            className="nav-arrow"
            onClick={() => scroll("left")}
            style={{ visibility: showLeftArrow ? 'visible' : 'hidden' }}
            aria-label="Scroll combos left"
          >
            <FaChevronLeft />
          </button>

          <div className="title-box">
            <h2>Combos</h2>
            <a href="/combos" className="view-all-link">VIEW ALL</a>
          </div>

          <button
            className="nav-arrow"
            onClick={() => scroll("right")}
            style={{ visibility: showRightArrow ? 'visible' : 'hidden' }}
            aria-label="Scroll combos right"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="scroll-container" ref={scrollRef}>
          {combos.map((item) => {
            const isAdded = cartItems.includes(item.id);
            return (
              <div key={item.id} className="card">
                <div className="image-wrapper">
                  <ImageGallery
                    images={item.images}
                    productName={item.name}
                  />
                </div>

                <div className="card-body">
                  <p className="product-name">{item.name}</p>
                  <p className="reviews">
                    ⭐⭐⭐⭐⭐ <span>{item.reviews} reviews</span>
                  </p>
                  <p className="price">Rs. {item.price}.00</p>
                </div>

                <button
                  className={`add-btn ${isAdded ? "added" : ""}`}
                  onClick={() => handleAddToCart(item.id)}
                >
                  {isAdded ? "ADDED TO CART" : "ADD TO CART"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Reels Section */}
      <ReelsSection />

      {/* Best Sellers Section - Now with same pattern as Combos, but no right arrow in header */}
      <BestSellersSection />

      {/* Flavourful Delights Section */}
      <FlavourfulDelightsSection />

      {/* About Us Section */}
      
      <AboutUsSection />

      {/* What Makes Anara Special */}
      <SpecialSection />

      {/* Tasted & Trusted by Millions Section */}
      <TrustedReviewsSection />


      

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
