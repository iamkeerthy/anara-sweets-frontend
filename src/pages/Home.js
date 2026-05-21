import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/home.css";
import { products } from "../data/products";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import WhatsAppButton from "../components/WhatsAppButton";

// Import only the images actually used in this file
// import mysorePak1 from "../assets/images/MYSORE PAK1.jpg";
// import mysorePak2 from "../assets/images/MYSORE PAK.jpg";

import ravaKesari1 from "../assets/images/RAVA KESARI.jpg";
import ravaKesari2 from "../assets/images/RAVA KESARI.jpg";

import chocolateBrownies1 from "../assets/images/CHOCOLATE BROWNIES.jpg";
import chocolateBrownies2 from "../assets/images/CHOCOLATE BROWNIES.jpg";

import coconutBurfi1 from "../assets/images/COCONUT BURFI.jpg";
import coconutBurfi2 from "../assets/images/COCONUT BURFI.jpg";

import boondiLaddu1 from "../assets/images/BOONDI LADDU.jpg";
import boondiLaddu2 from "../assets/images/BOONDI LADDU.jpg";

import turkishDelight1 from "../assets/images/TURKISH DELIGHT.jpg";
import turkishDelight2 from "../assets/images/TURKISH DELIGHT.jpg";

import richLaddu1 from "../assets/images/RICH LADDU2.jpg";

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
    name: "Turkish Delight",
    rating: 5,
    reviews: 130,
    price: 71.00,
    images: [turkishDelight1, turkishDelight2, turkishDelight1],
  },
  {
    id: 2,
    name: "Coconut Burfi",
    rating: 5,
    reviews: 483,
    price: 96.00,
    images: [coconutBurfi1, coconutBurfi2, coconutBurfi1],
  },
  {
    id: 3,
    name: "Chocolate Brownies",
    rating: 5,
    reviews: 111,
    price: 67.00,
    images: [chocolateBrownies1, chocolateBrownies2, chocolateBrownies1],
  },
  {
    id: 4,
    name: "Rava Kesari",
    rating: 5,
    reviews: 196,
    price: 105.00,
    images: [ravaKesari1, ravaKesari2, ravaKesari1],
  },
  {
    id: 5,
    name: "Boondi Laddu",
    rating: 5,
    reviews: 72,
    price: 86.00,
    images: [boondiLaddu1, boondiLaddu2, boondiLaddu1],
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
    // Don't trigger if clicking on arrows or dots
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

// Best Sellers section component - Make entire card clickable
const BestSellersSection = () => {
  const bestSellersScrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleNavigate = (id) => {
    window.location.href = `/product/${id}`;
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
          <a href="/product" className="view-all-link">
            VIEW ALL
          </a>
        </div>
      </div>

      <div className="bestsellers-scroll-container" ref={bestSellersScrollRef}>
        {bestSellers.map((item) => (
          <div 
            key={item.id} 
            className="bestseller-card"
            onClick={() => handleNavigate(item.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="image-wrapper">
              <ImageGallery
                images={item.images}
                productName={item.name}
                onImageClick={() => handleNavigate(item.id)}
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

// About Us Section
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

// What Makes Anara Special Section
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
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleNavigate = (id) => {
    window.location.href = `/product/${id}`;
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

      {/* Combos Section - Make entire card clickable */}
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
            <a href="/product" className="view-all-link">
              VIEW ALL
            </a>
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
          {products.map((item) => (
            <div 
              key={item.id} 
              className="card"
              onClick={() => handleNavigate(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="image-wrapper">
                <ImageGallery
                  images={item.images}
                  productName={item.name}
                  onImageClick={() => handleNavigate(item.id)}
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

      {/* Video Reels Section */}
      <ReelsSection />

      {/* Best Sellers Section */}
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