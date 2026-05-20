import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/productDetails.css';
import WhatsAppButton from '../components/WhatsAppButton';

const images = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);

const initialProducts = [
  { id: 1, name: "Aswin's Flavor Fusion", desc: 'Murukku, Bakoda, Aswin Mixer, Mini Thattai, Badusha', price: 528, rating: 5, reviews: 951, badge: 'Best Seller', image: images('./PAYATHAM URUNDAI.jpg') },
  { id: 2, name: "Aswin's Delight", desc: 'Murukku, Bakoda, Bombay Mixer, Thattai, Jangiri', price: 494, rating: 4, reviews: 429, badge: 'Best Seller', image: images('./PAYATHAM URUNDAI.jpg') },
  { id: 3, name: 'Achu Murukku + Thattai', desc: 'Traditional sweet crunchy combinations', price: 138, rating: 4, reviews: 147, badge: null, image: images('./PAYATHAM URUNDAI.jpg') },
  { id: 4, name: 'Premium Royal Sweet Box', desc: 'Milk Peda, Laddu, Kaju Katli, Gulab Jamun', price: 1250, rating: 5, reviews: 310, badge: 'Best Seller', image: images('./PAYATHAM URUNDAI.jpg') },
  { id: 5, name: 'Jaffna Spicy Special', desc: 'Fiery Mixture, Chickpeas, Cassava Chips', price: 680, rating: 5, reviews: 184, badge: null, image: images('./PAYATHAM URUNDAI.jpg') },
  { id: 6, name: 'Traditional Village Treat', desc: 'Kavum, Kokis, Aluwa, Athirasa combo', price: 850, rating: 4, reviews: 95, badge: null, image: images('./PAYATHAM URUNDAI.jpg') },
  { id: 7, name: 'Snack Attack Crunch', desc: 'Spicy Murukku, Ribbon Pakoda, Garlic Sev', price: 340, rating: 4, reviews: 212, badge: null, image: images('./PAYATHAM URUNDAI.jpg') },
  { id: 8, name: 'Anara Signature Pack', desc: 'Halwa, Muscat, Coconut Rock', price: 920, rating: 5, reviews: 440, badge: 'Best Seller', image: images('./PAYATHAM URUNDAI.jpg') },
];

function ProductDetails() {
  const { id } = useParams();
  const product = initialProducts.find((p) => p.id === parseInt(id));

  // State Management
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [weightType, setWeightType] = useState('preset'); // 'preset' or 'custom'
  const [selectedWeight, setSelectedWeight] = useState(150); // Defaulting original list price to 150g weight base
  const [customWeight, setCustomWeight] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Set defaults when product shifts
  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
    setQuantity(1);
    setSelectedWeight(150);
    setWeightType('preset');
    setCustomWeight('');
    setShowConfirmModal(false);
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

  // Calculate dynamic weight and relative dynamic pricing based on a 150g standard baseline
  const activeWeight = weightType === 'custom' ? (Number(customWeight) || 0) : Number(selectedWeight);
  const calculatedPricePerUnit = Math.round((product.price / 150) * activeWeight);
  const totalPrice = calculatedPricePerUnit * quantity;

  // Mock secondary image array using fallback items
  const galleryThumbnails = [product.image, product.image, product.image];

  // Weight handlers
  const handlePresetWeightChange = (weight) => {
    setWeightType('preset');
    setSelectedWeight(weight);
  };

  const handleCustomWeightChange = (e) => {
    setWeightType('custom');
    const val = e.target.value;
    if (val === '' || /^[0-8500]*$/.test(val)) {
      setCustomWeight(val);
    }
  };

  // WhatsApp Formatter link redirect
  const sendWhatsAppMessage = () => {
    const phoneNumber = "+94752753522"; 
    const message = `*NEW ORDER DETAILS*\n\n` +
                    `*Product:* ${product.name}\n` +
                    `*Weight:* ${activeWeight}g\n` +
                    `*Quantity:* ${quantity}\n` +
                    `*Price per Item:* Rs. ${calculatedPricePerUnit}.00\n\n` +
                    `*Total Price:* Rs. ${totalPrice}.00\n\n` +
                    `Please process my order. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setShowConfirmModal(false);
  };

  return (
    <div className="details-page-wrapper">
      <Navbar />

      {/* Sub-header Breadcrumb line */}
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
        {/* Left: Media Block Section */}
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
                style={{ cursor: 'pointer', border: selectedImage === thumbSrc ? '2px solid #ff9900' : '1px solid #ddd' }}
              >
                <img src={thumbSrc} alt={`view-${index}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Info Section */}
        <div className="details-info-panel">
          <h1 className="product-main-heading">{product.name}</h1>
          
          <div className="product-rating-summary">
            <div className="star-rating-row">
              {'★'.repeat(product.rating)}
              {'☆'.repeat(5 - product.rating)}
            </div>
            <span className="review-numerical-count">{product.reviews} reviews</span>
          </div>

          {/* Dynamic Calculated Pricing Display */}
          <div className="product-price-display">
            Rs. {totalPrice > 0 ? totalPrice : 0}.00 
            {quantity > 1 && <span style={{ fontSize: '14px', color: '#666', fontWeight: 'normal' }}> (Rs. {calculatedPricePerUnit}.00 each)</span>}
          </div>
          
          <div className="facility-shipping-banner">
            <span className="truck-icon">🚚</span> Ships Directly from Our Production Facility
          </div>

          {/* Option Settings: Weights Panel */}
          <div className="variant-options-group" style={{ marginBottom: '20px' }}>
            <label className="variant-field-label" style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>Select Weight Unit</label>
            <div className="weight-selection-container" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              {[100, 500, 1000].map((wt) => (
                <button
                  key={wt}
                  type="button"
                  onClick={() => handlePresetWeightChange(wt)}
                  style={{
                    padding: '8px 16px',
                    border: weightType === 'preset' && selectedWeight === wt ? '2px solid #ff9900' : '1px solid #ccc',
                    backgroundColor: weightType === 'preset' && selectedWeight === wt ? '#fffef0' : '#fff',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: weightType === 'preset' && selectedWeight === wt ? 'bold' : 'normal'
                  }}
                >
                  {wt >= 1000 ? `${wt/1000}kg` : `${wt}g`}
                </button>
              ))}
              
              {/* Custom Weight Manual Field Setup */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '5px' }}>
                <input
                  type="number"
                  placeholder="Custom (g)"
                  value={customWeight}
                  onChange={handleCustomWeightChange}
                  onClick={() => setWeightType('custom')}
                  style={{
                    width: '100px',
                    padding: '8px',
                    border: weightType === 'custom' ? '2px solid #ff9900' : '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#555' }}>grams</span>
              </div>
            </div>
          </div>

          {/* Incremental Quantities */}
          <div className="quantity-counter-group">
            <label className="variant-field-label">Quantity</label>
            <div className="counter-control-wrapper">
              <button className="counter-btn" onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}>—</button>
              <div className="counter-number-box">{quantity}</div>
              <button className="counter-btn" onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
          </div>

          {/* Core Checkout Buttons */}
          <div className="checkout-funnel-actions">
            <button className="primary-cart-action-btn">ADD TO CART</button>
            <button 
              type="button" 
              className="secondary-buy-action-btn" 
              style={{ backgroundColor: '#25D366', color: '#fff', fontWeight: 'bold' }}
              onClick={() => setShowConfirmModal(true)}
              disabled={activeWeight <= 0}
            >
              ORDER VIA WHATSAPP
            </button>
          </div>

          {/* Feature Lists */}
          <div className="product-features-bullet-list">
            <ul>
              <li>Crispy, golden & deeply satisfying - a must-try traditional delicacy blend.</li>
              <li>Made with high-quality lentils, fine rice flour & mild aromatic spices for a balanced flavor profile.</li>
              <li>Handcrafted and systematically packed in strictly monitored hygienic batch configurations.</li>
              <li>Perfect choice to enjoy as a crunchy tea-time snack accompaniment or festive family treat.</li>
              <li>Store in a cool dry container to maintain long-lasting savory crunchiness.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Confirmation Step Overlay Modal */}
      {showConfirmModal && (
        <div className="order-modal-backdrop" style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center',
          alignItems: 'center', zIndex: 1000
        }}>
          <div className="order-modal-content" style={{
            backgroundColor: '#fff', padding: '30px', borderRadius: '8px',
            maxWidth: '450px', width: '90%', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Confirm Your Order</h3>
            <div style={{ margin: '20px 0', lineHeight: '1.6' }}>
              <p><strong>Item:</strong> {product.name}</p>
              <p><strong>Weight per pack:</strong> {activeWeight}g</p>
              <p><strong>Quantity Ordered:</strong> {quantity}</p>
              <p style={{ fontSize: '18px', color: '#d9534f' }}><strong>Total Billing Amount:</strong> Rs. {totalPrice}.00</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button 
                onClick={() => setShowConfirmModal(false)}
                style={{ padding: '10px 15px', border: '1px solid #ccc', backgroundColor: '#fff', borderRadius: '4px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={sendWhatsAppMessage}
                style={{ padding: '10px 15px', border: 'none', backgroundColor: '#25D366', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Confirm & Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default ProductDetails;