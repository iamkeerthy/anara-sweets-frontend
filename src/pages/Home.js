import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/home.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import WhatsAppButton from "../components/WhatsAppButton";

// Import all images (multiple angles/variants per product)
import mysorePak1 from "../assets/images/MYSORE PAK1.jpg";
import mysorePak2 from "../assets/images/MYSORE PAK.jpg";
import mysorePak3 from "../assets/images/MYSORE PAK1.jpg";

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

import eggFlour1 from "../assets/images/EGG FLOUR1.jpg";
import eggFlour2 from "../assets/images/EGG FLOUR.jpg";
import eggFlour3 from "../assets/images/EGG FLOUR.jpg";

import healthMix1 from "../assets/images/HEALTH MIX.jpg";
import healthMix2 from "../assets/images/HEALTH MIX.jpg";
import healthMix3 from "../assets/images/HEALTH MIX.jpg";

import karaBoondi1 from "../assets/images/KARA BOONDI2.jpg";
import karaBoondi2 from "../assets/images/KARA BOONDI1.jpg";
import karaBoondi3 from "../assets/images/KARA BOONDI2.jpg";

import karaSippi1 from "../assets/images/KARA SIPPI1.jpg";
import karaSippi2 from "../assets/images/KARA SIPPI2.jpg";
import karaSippi3 from "../assets/images/KARA SIPPI1.jpg";

import kuchchiMurukku1 from "../assets/images/KUCHCHIMURUKKU1.jpg";
import kuchchiMurukku2 from "../assets/images/KUCHCHIMURUKKU1.jpg";
import kuchchiMurukku3 from "../assets/images/KUCHCHIMURUKKU1.jpg";

import mixture1 from "../assets/images/MIXTURE1.jpg";
import mixture2 from "../assets/images/MIXTURE.jpg";
import mixture3 from "../assets/images/MIXTURE1.jpg";

import mulluMurukku1 from "../assets/images/MULLU MURUKKU1.jpg";
import mulluMurukku2 from "../assets/images/MULLU MURUKKU2.jpg";
import mulluMurukku3 from "../assets/images/MULLU MURUKKU3.jpg";

import payathamUrundai1 from "../assets/images/PAYATHAMURUNDAI1.jpg";
import payathamUrundai2 from "../assets/images/PAYATHAM URUNDAI.jpg";
import payathamUrundai3 from "../assets/images/PAYATHAMURUNDAI1.jpg";

import ravaLaddu1 from "../assets/images/RAVALADDU2.jpg";
import ravaLaddu2 from "../assets/images/RAVALADDU3.jpg";
import ravaLaddu3 from "../assets/images/RAVALADDU4.jpg";

import richLaddu1 from "../assets/images/RICH LADDU2.jpg";
import richLaddu2 from "../assets/images/RICH LADDU1.jpg";
import richLaddu3 from "../assets/images/RICH LADDU2.jpg";

import thattuVadai1 from "../assets/images/THATTU VADAI1.jpg";
import thattuVadai2 from "../assets/images/THATTU VADAI1.jpg";
import thattuVadai3 from "../assets/images/THATTU VADAI1.jpg";

// Video imports for the new reels section
// import reel1 from "../assets/images/anara.mp4";
// import reel2 from "../assets/images/anara.mp4";
// import reel3 from "../assets/images/anara.mp4";
// import reel4 from "../assets/images/anara.mp4";
// import reel5 from "../assets/images/anara.mp4";

// Small images for video reels (thumbnails)
// import thumbnail1 from "../assets/images/img1.jpg";
// import thumbnail2 from "../assets/images/img1.jpg";
// import thumbnail3 from "../assets/images/img1.jpg";
// import thumbnail4 from "../assets/images/img1.jpg";
// import thumbnail5 from "../assets/images/img1.jpg";

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

import srilankaIcon from "../assets/images/icon/Srilanka.png";
import handmadeIcon from "../assets/images/icon/handmade-icon.png";
import noPreservativesIcon from "../assets/images/icon/no-preservatives-icon.png";
import shippingIcon from "../assets/images/icon/shipping-icon.png";


// Data for the video reels section
// const reels = [
//   {
//     id: 1,
//     video: reel1,
//     title: "Glimpse of Anara Top Seller Achu Murukku",
//     product: "Achu Murukku - Kaaram",
//     price: 67,
//     thumbnail: thumbnail1,
//   },
//   {
//     id: 2,
//     video: reel2,
//     title: "A glimpse on how we make our Famous Thattai",
//     product: "Thattai",
//     price: 71,
//     thumbnail: thumbnail2,
//   },
//   {
//     id: 3,
//     video: reel3,
//     title: "Sneakpeek of Juicy Jamoon",
//     product: "BIG JAMUN JARS",
//     price: 145,
//     thumbnail: thumbnail3,
//   },
//   {
//     id: 4,
//     video: reel4,
//     title: "We have something Special for Christmas",
//     product: "Pocket Plum Cake",
//     price: 50,
//     thumbnail: thumbnail4,
//   },
//   {
//     id: 5,
//     video: reel5,
//     title: "It's Yummy",
//     product: "Thengai Paal Murukku",
//     price: 130,
//     thumbnail: thumbnail5,
//   },
// ];

// Data for Best Sellers section with multiple images per product - CORRECTED IDs
const bestSellers = [
  {
    id: 4,  // Corrected: Coconut Burfi should have ID 4
    name: "Coconut Burfi",
    rating: 5,
    reviews: 483,
    price: 67.00,
    images: [coconutBurfi1, coconutBurfi2, coconutBurfi3],
  },
  {
    id: 3,  // Corrected: Chocolate Brownies should have ID 3
    name: "Chocolate Brownies",
    rating: 5,
    reviews: 111,
    price: 96.00,
    images: [chocolateBrownies1, chocolateBrownies2, chocolateBrownies3],
  },
  {
    id: 1,  // CHANGED: Mysore Pak instead of Turkish Delight
    name: "Mysore Pak",
    rating: 5,
    reviews: 207,
    price: 197.00,
    images: [mysorePak1, mysorePak2, mysorePak3],
  },
  {
    id: 2,
    name: "Rava Kesari",
    rating: 5,
    reviews: 196,
    price: 105.00,
    images: [ravaKesari1, ravaKesari2, ravaKesari3],
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

// CORRECTED combos array with proper IDs matching the products data
const combos = [
  {
    id: 1,
    name: "Mysore Pak",
    price: 197,
    images: [mysorePak1, mysorePak2, mysorePak3],
    reviews: 207,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Rava Kesari",
    price: 105,
    images: [ravaKesari1, ravaKesari2, ravaKesari3],
    reviews: 196,
    isBestSeller: true
  },
  {
    id: 3,  // CORRECTED: Chocolate Brownies has ID 3
    name: "Chocolate Brownies",
    price: 96,
    images: [chocolateBrownies1, chocolateBrownies2, chocolateBrownies3],
    reviews: 111,
    isBestSeller: true
  },
  {
    id: 4,  // CORRECTED: Coconut Burfi has ID 4
    name: "Coconut Burfi",
    price: 67,
    images: [coconutBurfi1, coconutBurfi2, coconutBurfi3],
    reviews: 111,
    isBestSeller: true
  },
  {
    id: 5,
    name: "Boondi Laddu",
    price: 86,
    images: [boondiLaddu1, boondiLaddu2, boondiLaddu3],
    reviews: 72,
    isBestSeller: true
  },
  {
    id: 6,
    name: "Turkish Delight",
    price: 86,
    images: [turkishDelight1, turkishDelight2, turkishDelight3],
    reviews: 72,
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

// // Video reels section component
// const ReelsSection = () => {
//   const reelRef = useRef(null);
//   const [hoveredReelId, setHoveredReelId] = useState(null);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const checkScroll = () => {
//     if (reelRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = reelRef.current;
//       setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
//     }
//   };

//   const scrollReel = (dir) => {
//     if (!reelRef.current) return;
//     const scrollAmount = 340;
//     reelRef.current.scrollBy({
//       left: dir === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//     setTimeout(checkScroll, 300);
//   };

//   useEffect(() => {
//     const container = reelRef.current;
//     if (container) {
//       container.addEventListener('scroll', checkScroll);
//       checkScroll();
//       return () => container.removeEventListener('scroll', checkScroll);
//     }
//   }, []);

//   return (
//     <section className="reels-section">
//       <div className="reels-container" ref={reelRef}>
//         {reels.map((reel) => (
//           <div key={reel.id} className="reel-card">
//             <div
//               className="video-wrapper"
//               onMouseEnter={() => setHoveredReelId(reel.id)}
//               onMouseLeave={() => setHoveredReelId(null)}
//             >
//               <video
//                 src={reel.video}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 disablePictureInPicture
//                 controlsList="nodownload noplaybackrate nofullscreen"
//                 className="reel-video"
//               />
//               {hoveredReelId === reel.id && (
//                 <div className="video-overlay">
//                   <p>{reel.title}</p>
//                 </div>
//               )}
//             </div>
//             <div className="reel-info">
//               <div className="reel-thumbnail">
//                 <img src={reel.thumbnail} alt={reel.product} />
//               </div>
//               <div className="reel-details">
//                 <p className="reel-product-name">{reel.product}</p>
//                 <p className="reel-price">Rs. {reel.price}.00</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {canScrollRight && (
//         <button
//           className="fixed-scroll-arrow right-end-arrow"
//           onClick={() => scrollReel("right")}
//         >
//           &#8250;
//         </button>
//       )}
//     </section>
//   );
// };

// Best Sellers section component - Make entire card clickable - CORRECTED
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
              {/* <p className="bestseller-reviews">
                {'⭐'.repeat(item.rating)} <span>{item.reviews} reviews</span>
              </p> */}
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

  {/* ⭐ STAR RATING AT BOTTOM */}
  <div className="review-stars-bottom">
    ★★★★★
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
          <a href="/product" className="view-all-link">
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
              <div className="image-wrapper">
                <ImageGallery
                  images={item.images}
                  productName={item.name}
                  onImageClick={() => handleNavigate(item.id)}
                />
              </div>

              <div className="card-body">
                <p className="product-name">{item.name}</p>
                {/* <p className="reviews">
                  ⭐⭐⭐⭐⭐ <span>{item.reviews} reviews</span>
                </p> */}
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
      {/* <ReelsSection /> */}

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

      {/* Tasted & Trusted by Millions Section */}
      <TrustedReviewsSection />

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;