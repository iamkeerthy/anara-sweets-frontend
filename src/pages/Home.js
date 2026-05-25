import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/home.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import badgeIcon from "../assets/images/icon.png";
import { products } from "../data/Products";
import WhatsAppButton from "../components/WhatsAppButton";

// Press Features Images
import astaLogo from "../assets/images/asta.png";
import feastoLogo from "../assets/images/LogoFeasto.png";
import logos1 from "../assets/images/Logos1.png";
import logosCloud from "../assets/images/LogosCloud.png";
import logosVM from "../assets/images/LogosVM.png";


// Flavourful Delights Section Images
import savouriesImg from "../assets/images/FreshOil.png";
import sweetsImg from "../assets/images/BOONDI LADDU.jpg";
import podiImg from "../assets/images/EGG FLOUR.jpg";
import picklesImg from "../assets/images/MIXTURE.jpg";
import combosImg from "../assets/images/img2.jpg";
import flavourfulFullWidthImg from "../assets/images/img2.jpg";

// What Makes Anara Special Section Images
import special25Years from "../assets/images/FreshOil.png";
import specialFlour from "../assets/images/HandCrafted.png";
import specialOil from "../assets/images/Homemade.png";
import specialWomen from "../assets/images/Organic.png";

// About Us Section Images
import boondiLaddu1 from "../assets/images/BOONDI LADDU.jpg";
import richLaddu1 from "../assets/images/RICH LADDU.jpg";

import srilankaIcon from "../assets/images/icon/Srilanka.png";
import handmadeIcon from "../assets/images/icon/handmade-icon.png";
import noPreservativesIcon from "../assets/images/icon/no-preservatives-icon.png";
import shippingIcon from "../assets/images/icon/shipping-icon.png";

const bestSellerIds = [12, 10, 14, 9];
const combos = products; // or filter category if needed

// Press Features Data
const pressFeatures = [
  {
    id: 1,
    name: "Behindwoods",
    logo: astaLogo,
    alt: "Behindwoods",
  },
  {
    id: 2,
    name: "Vikatan",
    logo: feastoLogo,
    alt: "Vikatan",
  },
  {
    id: 3,
    name: "The Hindu",
    logo: logos1,
    alt: "The Hindu",
  },
   {
    id: 4,
    name: "The Hindu",
    logo: logosCloud,
    alt: "The Hindu",
  },
   {
    id: 5,
    name: "The Hindu",
    logo: logosVM,
    alt: "The Hindu",
  },

];

// Flavourful Delights Data
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
    name: "Sudharsan R.",
    rating: 5,
    text: "Very fresh and tasty sweets. Loved the Mysore Pak!",
    product: "Special Mysore Pak",
  },
  {
    id: 2,
    name: "Nallathambi R.",
    rating: 5,
    text: "Excellent taste and perfect sweetness. Feels homemade and authentic.",
    product: "Special Mysore Pak",
  },
  {
    id: 3,
    name: "J. Eshan",
    rating: 5,
    text: "Amazing quality snacks. Crispy and fresh delivery.",
    product: "Sweet Achu Murukku",
  },
  {
    id: 4,
    name: "Subramanian A.",
    rating: 5,
    text: "Bought for overseas travel. Everyone loved the crunch and taste.",
    product: "Sweet Achu Murukku",
  },
  {
    id: 5,
    name: "Vijayakumar C.",
    rating: 5,
    text: "Best sweets shop I've tried so far. Highly recommended!",
    product: "Boondi Laddu",
  },
  {
    id: 6,
    name: "Priya S.",
    rating: 5,
    text: "Fresh, hygienic and very tasty traditional sweets.",
    product: "Coconut Burfi",
  },
  {
    id: 7,
    name: "Karthik M.",
    rating: 4,
    text: "Good taste and value for money. Delivery was on time.",
    product: "Mixture",
  },
  {
    id: 8,
    name: "Anjali P.",
    rating: 5,
    text: "Loved the texture and freshness. Will order again for festivals.",
    product: "Rava Laddu",
  },
  {
    id: 9,
    name: "Ramesh K.",
    rating: 5,
    text: "Authentic taste like homemade sweets. Very satisfied.",
    product: "Health Mix",
  },
  {
    id: 10,
    name: "Nirosha M.",
    rating: 5,
    text: "Packaging was clean and premium. Taste is excellent.",
    product: "Turkish Delight",
  },
];

// Component for image gallery inside each combo card
const ImageGallery = ({ images, productName, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setPreviewIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
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

  const handleImageContainerClick = (e) => {
    if (e.target.closest('.gallery-arrow') || e.target.closest('.image-dots')) {
      return;
    }
    if (onImageClick) {
      onImageClick();
    }
  };

  return (
    <div
      className="image-gallery"
      onMouseMove={images.length > 1 ? handleMouseMove : undefined}
      onMouseLeave={images.length > 1 ? handleMouseLeave : undefined}
      onClick={handleImageContainerClick}
      style={{ cursor: 'pointer' }}
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

// Best Sellers section component - Make entire card clickable - CORRECTED
const BestSellersSection = () => {
  const navigate = useNavigate();
  const bestSellersScrollRef = useRef(null);

  const bestSellers = bestSellerIds
    .map((id) => products.find((item) => item.id === id))
    .filter(Boolean);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  const checkScrollPosition = () => {
    const el = bestSellersScrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scrollBestSellers = (dir) => {
    const el = bestSellersScrollRef.current;
    if (!el) return;

    const amount = 320;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = bestSellersScrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();

    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <section className="bestsellers-section">

      {/* HEADER */}
      <div className="bestsellers-header">

        <button
          className="bestsellers-nav-arrow left"
          onClick={() => scrollBestSellers("left")}
          style={{ visibility: showLeftArrow ? "visible" : "hidden" }}
        >
          &#8249;
        </button>

        <div className="title-box">
          <h2>Best Sellers</h2>
          <a
            href="/product"
            className="view-all-link"
            onClick={(e) => {
              e.preventDefault();
              navigate("/product");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            VIEW ALL
          </a>
        </div>

        <button
          className="bestsellers-nav-arrow right"
          onClick={() => scrollBestSellers("right")}
          style={{ visibility: showRightArrow ? "visible" : "hidden" }}
        >
          &#8250;
        </button>

      </div>

      {/* SCROLL AREA */}
      <div className="bestsellers-scroll-container" ref={bestSellersScrollRef}>
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="bestseller-card"
            onClick={() => handleNavigate(item.id)}
          >
            <div className="image-wrapper product-image-wrapper">
              <img src={badgeIcon} alt="badge" className="product-badge-icon" />
              <ImageGallery
                images={item.images}
                productName={item.name}
                onImageClick={() => handleNavigate(item.id)}
              />
            </div>

            <div className="bestseller-card-body">
              <p className="bestseller-product-name">{item.name}</p>
              <p className="bestseller-price">Rs. {item.price.toFixed(2)}</p>
            </div>

            <button
              className="bestseller-add-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate(item.id);
              }}
            >
              VIEW DETAILS
            </button>
          </div>
        ))}
      </div>

    </section>
  );
};
// Flavourful Delights Section
const FlavourfulDelightsSection = () => {
  const navigate = useNavigate();

  const handleShopNow = (e) => {
    e.preventDefault();
    navigate('/product');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

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
            <a href="/product" className="fullwidth-shop-btn" onClick={handleShopNow}>Shop now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Us Section
const AboutUsSection = () => {
  const navigate = useNavigate();

  const handleKnowMore = (e) => {
    e.preventDefault();
    navigate('/about');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };
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
          <h2 className="about-subtitle">ABOUT US</h2>
          <p className="about-heading">
            Anara Sweets is a delicious tribute to our Ethnic Indian flavours and Age-
            Old Traditional Recipes.<br /><br />
            Every bite is a Celebration of Our Ethnic Indian flavours and Rich Heritage.
          </p>
          <a href="/about" className="about-btn" onClick={handleKnowMore}>KNOW MORE</a>
        </div>
      </div>
    </section>
  );
};

// Press Features Section
const PressFeaturesSection = () => {
  return (
    <section className="press-section">
      <div className="press-container">
        <h2 className="press-title">Press Features</h2>

        <div className="press-grid">
          {pressFeatures.map((item) => (
            <div key={item.id} className="press-card">
              <img
                src={item.logo}
                alt={item.alt}
                className="press-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// What Makes Anara Special Section
const SpecialSection = () => {
  const specialItems = [
    {
      id: 1,
      image: special25Years,
      title: "40+ Outlets",
      // large: true,
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

// Tasted & Trusted Section
const TrustedReviewsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="trusted-section">
      <h2 className="trusted-title">
        Tasted & Trusted by Millions
      </h2>
      <div className="trusted-wrapper">
        <button className="review-arrow left" onClick={() => scroll("left")}>
          ‹
        </button>
        <div className="trusted-scroll" ref={scrollRef}>
          {reviewsData.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-top">
                <span className="review-product">{review.product}</span>
                <span className="review-stars">★★★★★</span>
              </div>
              <p className="review-text">
                “{review.text || "Amazing taste and quality!"}”
              </p>
              <div className="review-user">
                <div className="avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="name">{review.name}</p>
                  <p className="verified">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="review-arrow right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
};

const Home = () => {
  const navigate = useNavigate(); // Added useNavigate hook
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleNavigate = (id) => {
    navigate(`/product/${id}`); // Changed to use navigate
  };

  // Triple the combos list for seamless infinite scroll
  const extendedCombos = [...combos, ...combos, ...combos];

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

  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const oneThirdWidth = scrollWidth / 3;

    if (scrollLeft < 200) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = scrollLeft + oneThirdWidth;
      container.style.scrollBehavior = "smooth";
    } else if (scrollLeft > scrollWidth - clientWidth - 200) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = scrollLeft - oneThirdWidth;
      container.style.scrollBehavior = "smooth";
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const initializeScroll = () => {
        const oneThirdWidth = container.scrollWidth / 3;
        container.scrollLeft = oneThirdWidth;
      };

      const timer = setTimeout(initializeScroll, 100);
      container.addEventListener("scroll", handleInfiniteScroll);
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();

      return () => {
        clearTimeout(timer);
        container.removeEventListener("scroll", handleInfiniteScroll);
        container.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {/* Combos Section with Infinite Scroll */}
      <section className="combos-section">
        <div className="combos-header">

          {/* TOP ROW: Arrow + Title + Arrow */}
          <div className="header-top">
            <button
              className="nav-arrow"
              onClick={() => scroll("left")}
              style={{ visibility: showLeftArrow ? 'visible' : 'hidden' }}
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>

            <h2>Anara Products</h2>

            <button
              className="nav-arrow"
              onClick={() => scroll("right")}
              style={{ visibility: showRightArrow ? 'visible' : 'hidden' }}
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* SECOND ROW */}
          <a 
            href="/product" 
            className="view-all-link"
            onClick={(e) => {
              e.preventDefault();
              navigate('/product');
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
            }}
          >
            VIEW ALL
          </a>

        </div>

        <div className="scroll-container" ref={scrollRef}>
          {extendedCombos.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="card"
              onClick={() => handleNavigate(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="image-wrapper product-image-wrapper">
                {/* Badge Icon */}
                <img src={badgeIcon} alt="badge" className="product-badge-icon" />
                <ImageGallery
                  images={item.images}
                  productName={item.name}
                  onImageClick={() => handleNavigate(item.id)}
                />
              </div>

              <div className="card-body">
                <p className="product-name">{item.name}</p>
                <p className="price">Rs. {item.price}.00</p>
              </div>

              <button
                className="add-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate(item.id);
                }}
              >
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <BestSellersSection />

      {/* Flavourful Delights Section */}
      <FlavourfulDelightsSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* four logos */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-item">
            <img src={srilankaIcon} alt="Loved by Sri Lanka" className="trust-icon" />
            <h4>Loved By Sri Lanka</h4>
            <p>Loved by 5 lakh+ customers</p>
          </div>

          <div className="trust-item">
            <img src={handmadeIcon} alt="Handmade" className="trust-icon" />
            <h4>Handmade</h4>
            <p>Every piece is made with love</p>
          </div>

          <div className="trust-item">
            <img src={shippingIcon} alt="Shipping" className="trust-icon" />
            <h4>Ships In 5–7 Days</h4>
            <p>Write to us to expedite your order</p>
          </div>

          <div className="trust-item">
            <img src={noPreservativesIcon} alt="No Preservatives" className="trust-icon" />
            <h4>No Preservatives</h4>
            <p>Pure taste, naturally fresh</p>
          </div>
        </div>
      </section>

      {/* What Makes Anara Special */}
      <SpecialSection />

      {/* Press Features Section - Added after Special Section */}
      <PressFeaturesSection />

      {/* Tasted & Trusted by Millions Section */}
      <TrustedReviewsSection />

      {/* Video Reels Section - Commented out as requested */}
      {/*
      <section className="video-reels-section">
        <h2>Watch Our Reels</h2>
        <div className="video-reels-container">
          <div className="video-reel">
            <video src="/path/to/video1.mp4" controls />
          </div>
          <div className="video-reel">
            <video src="/path/to/video2.mp4" controls />
          </div>
          <div className="video-reel">
            <video src="/path/to/video3.mp4" controls />
          </div>
        </div>
      </section>
      */}

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;