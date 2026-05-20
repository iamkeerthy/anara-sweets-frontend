import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/productDetails.css';

const images = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);

const initialProducts = [
  {
    id: 1,
    name: "Aswin's Flavor Fusion",
    desc: 'Murukku, Bakoda, Aswin Mixer, Mini Thattai, Badusha',
    price: 528,
    rating: 5,
    reviews: 951,
    badge: 'Best Seller',
    image: images('./PAYATHAM URUNDAI.jpg'),
  },
  {
    id: 2,
    name: "Aswin's Delight",
    desc: 'Murukku, Bakoda, Bombay Mixer, Thattai, Jangiri',
    price: 494,
    rating: 4,
    reviews: 429,
    badge: 'Best Seller',
    image: images('./PAYATHAM URUNDAI.jpg'),
  },
  {
    id: 3,
    name: 'Achu Murukku + Thattai',
    desc: 'Traditional sweet crunchy combinations',
    price: 138,
    rating: 4,
    reviews: 147,
    badge: null,
    image: images('./PAYATHAM URUNDAI.jpg'),
  },
  {
    id: 4,
    name: 'Premium Royal Sweet Box',
    desc: 'Milk Peda, Laddu, Kaju Katli, Gulab Jamun',
    price: 1250,
    rating: 5,
    reviews: 310,
    badge: 'Best Seller',
    image: images('./PAYATHAM URUNDAI.jpg'),
  },
  {
    id: 5,
    name: 'Jaffna Spicy Special',
    desc: 'Fiery Mixture, Chickpeas, Cassava Chips',
    price: 680,
    rating: 5,
    reviews: 184,
    badge: null,
    image: images('./PAYATHAM URUNDAI.jpg'),
  },
  {
    id: 6,
    name: 'Traditional Village Treat',
    desc: 'Kavum, Kokis, Aluwa, Athirasa combo',
    price: 850,
    rating: 4,
    reviews: 95,
    badge: null,
    image: images('./PAYATHAM URUNDAI.jpg'),
  },
  {
    id: 7,
    name: 'Snack Attack Crunch',
    desc: 'Spicy Murukku, Ribbon Pakoda, Garlic Sev',
    price: 340,
    rating: 4,
    reviews: 212,
    badge: null,
    image: images('./PAYATHAM URUNDAI.jpg'),
  },
  {
    id: 8,
    name: 'Anara Signature Pack',
    desc: 'Halwa, Muscat, Coconut Rock',
    price: 920,
    rating: 5,
    reviews: 440,
    badge: 'Best Seller',
    image: images('./PAYATHAM URUNDAI.jpg'),
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = initialProducts.find((p) => p.id === parseInt(id));

  // State Management
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  // Set the default image when the product loads or changes
  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
    // Reset view options on product change
    setQuantity(1);
    setPincode('');
  }, [product]);

  if (!product) {
    return (
      <div className="details-not-found">
        <Navbar />
        <div className="error-message-container">
          <h2>Product Not Found</h2>
          <Link to="/">Return to Shop Catalog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate a mock gallery variant sequence for thumbnail rows based on the primary image
  const galleryThumbnails = [product.image, product.image, product.image, product.image];

  return (
    <div className="details-page-wrapper">
      <Navbar />

      {/* Sub-header Context Breadcrumb bar matching your reference */}
      <div className="breadcrumb-nav-container">
        <div className="breadcrumb-inner">
          <nav className="breadcrumb-path">
            <Link to="/">Home</Link> &gt; <span className="current-node">{product.name}</span>
          </nav>
          <div className="next-nav-pointer">
            <Link to={`/product/${product.id === initialProducts.length ? 1 : product.id + 1}`}>Next &gt;</Link>
          </div>
        </div>
      </div>

      <div className="details-main-layout">
        {/* Left Side: Media Gallery Block */}
        <div className="details-media-gallery">
          <div className="main-preview-frame">
            {product.badge === 'Best Seller' && (
              <div className="details-ribbon-tag">
                <span className="stars-line">★★★</span>
                <span className="tag-text">Best Seller</span>
              </div>
            )}
            <img src={selectedImage || product.image} alt={product.name} className="active-display-img" />
          </div>

          <div className="thumbnail-strip-row">
            {galleryThumbnails.map((thumbSrc, index) => (
              <div 
                key={index} 
                className={`thumb-box-item ${selectedImage === thumbSrc && index === 0 ? 'active-border' : ''}`}
                onClick={() => setSelectedImage(thumbSrc)}
              >
                <img src={thumbSrc} alt={`view-${index}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Information Panel */}
        <div className="details-info-panel">
          <h1 className="product-main-heading">{product.name}</h1>
          
          <div className="product-rating-summary">
            <div className="star-rating-row">
              {'★'.repeat(product.rating)}
              {'☆'.repeat(5 - product.rating)}
            </div>
            <span className="review-numerical-count">{product.reviews} reviews</span>
          </div>

          <div className="product-price-display">Rs. {product.price}.00</div>
          
          <div className="facility-shipping-banner">
            <span className="truck-icon">🚚</span> Ships Directly from Our Production Facility
          </div>

          {/* Delivery Pincode Checker Component */}
          <div className="pincode-checker-widget">
            <div className="widget-label">
              <span className="pin-marker">📍</span> Check availability at
            </div>
            <div className="input-action-field">
              <input 
                type="text" 
                placeholder="Enter Pincode." 
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <button className="pincode-submit-btn">CHECK</button>
            </div>
            <p className="pincode-helper-text">Check product delivery at your location to enable Add to Cart.</p>
          </div>

          {/* Variant Spec Selector Segment */}
          <div className="variant-options-group">
            <label className="variant-field-label">Weight</label>
            <div className="variant-badge-selection">150g</div>
          </div>

          {/* Quantity Tracker Component */}
          <div className="quantity-counter-group">
            <label className="variant-field-label">Quantity</label>
            <div className="counter-control-wrapper">
              <button 
                className="counter-btn" 
                onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
              >
                —
              </button>
              <div className="counter-number-box">{quantity}</div>
              <button 
                className="counter-btn" 
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Checkout Funnel Action Buttons */}
          <div className="checkout-funnel-actions">
            <button className="primary-cart-action-btn">ADD TO CART</button>
            <button className="secondary-buy-action-btn">BUY IT NOW</button>
          </div>

          {/* Informational Product Specifications Features */}
          <div className="product-features-bullet-list">
            <ul>
              <li>Crispy, golden & deeply satisfying - a must-try traditional delicacy blend.</li>
              <li>Made with high-quality lentils, fine rice flour & mild aromatic spices for a balanced flavor profiles.</li>
              <li>Handcrafted and systematically packed in strictly monitored hygienic batch configurations.</li>
              <li>Perfect choice to enjoy as a crunchy tea-time snack accompaniment or festive family treat.</li>
              <li>Store in a cool dry container to maintain long-lasting savory crunchiness.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;