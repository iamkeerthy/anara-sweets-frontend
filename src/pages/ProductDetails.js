import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/productDetails.css';
import { products } from "../data/products";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Safe Storage Engine Fallback Strategy for Security Access Exceptions
const safeStorage = {
  memoryCart: [],

  getItem: (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      console.warn("Storage access denied. Defaulting to state memory fallback.");
      return JSON.stringify(safeStorage.memoryCart);
    }
  },

  setItem: (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      safeStorage.memoryCart = JSON.parse(value);
    }
  },

  removeItem: (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      safeStorage.memoryCart = [];
    }
  }
};





function ProductDetails() {
  const { id } = useParams();
  // Convert id to number for comparison
  const product = products.find(p => p.id === parseInt(id));

  // State Management
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [weightType, setWeightType] = useState('preset'); 
  const [selectedWeight, setSelectedWeight] = useState(150); 
  const [customWeight, setCustomWeight] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  // Modal Interactive State to monitor modifications in real-time
  const [modalCartItems, setModalCartItems] = useState([]);

  // Sync Cart badge visibility count matching state structures
  const updateCartCount = () => {
    const existingCart = JSON.parse(safeStorage.getItem('shopCart')) || [];
    const totalItems = existingCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    updateCartCount();
  }, [id]);

  // Set defaults when product shifts or loads
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    } else if (product) {
      setSelectedImage('');
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

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const activeWeight = weightType === 'custom' ? (Number(customWeight) || 0) : Number(selectedWeight);
  const calculatedPricePerUnit = Math.round((product.price / 150) * activeWeight);
  const totalPrice = calculatedPricePerUnit * quantity;
  const galleryThumbnails = product.images || [];
  const productIngredients = Array.isArray(product.ingredients) ? product.ingredients : [];

  const handlePresetWeightChange = (weight) => {
    setWeightType('preset');
    setSelectedWeight(weight);
  };

  const handleCustomWeightChange = (e) => {
    setWeightType('custom');
    const val = e.target.value;
    if (val === '' || /^[0-9]*$/.test(val)) {
      setCustomWeight(val);
    }
  };

  // Safe Multi-Product Add To Cart Configuration
  const handleAddToCart = () => {
    if (activeWeight <= 0) {
      alert("Please select a valid weight");
      return;
    }

    const existingCart = JSON.parse(safeStorage.getItem('shopCart')) || [];
    
    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === product.id && item.weight === activeWeight
    );

    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += quantity;
      existingCart[existingItemIndex].itemTotal = existingCart[existingItemIndex].quantity * existingCart[existingItemIndex].pricePerUnit;
    } else {
      existingCart.push({
        id: product.id,
        name: product.name,
        weight: activeWeight,
        quantity: quantity,
        pricePerUnit: calculatedPricePerUnit,
        itemTotal: totalPrice
      });
    }

    safeStorage.setItem('shopCart', JSON.stringify(existingCart));
    updateCartCount();
   toast.success(
   `${product.name} (${activeWeight}g) added to cart`,
   {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
   }
);
  };

  // Open confirmation view and calculate data snapshot cleanly without tricky dependency chains
  const handleOpenConfirmationModal = () => {
    const currentCart = JSON.parse(safeStorage.getItem('shopCart')) || [];
    if (currentCart.length > 0) {
      setModalCartItems(currentCart);
    } else {
      setModalCartItems([{
        id: product.id,
        name: product.name,
        weight: activeWeight,
        quantity: quantity,
        pricePerUnit: calculatedPricePerUnit,
        itemTotal: totalPrice
      }]);
    }
    setShowConfirmModal(true);
  };

  // Handles dynamic deletion of individual product objects inside the Modal Window View
  const handleRemoveItemFromModal = (indexToRemove) => {
    const updatedModalItems = modalCartItems.filter((_, idx) => idx !== indexToRemove);
    setModalCartItems(updatedModalItems);

    // Sync modifications back to global app cache
    if (updatedModalItems.length > 0) {
      safeStorage.setItem('shopCart', JSON.stringify(updatedModalItems));
    } else {
      safeStorage.removeItem('shopCart');
      setShowConfirmModal(false); // Close out automatically if nothing remains
    }
    updateCartCount();
  };

  // Compiles items directly from current modal list for message accuracy
  const sendWhatsAppMessage = () => {
    if (modalCartItems.length === 0) return;

    const phoneNumber = "+94752753522"; 
    
    let message = `*NEW ORDER SUBMISSION*\n`;
    message += `=========================\n\n`;
    
    let grandTotal = 0;

    modalCartItems.forEach((item, index) => {
      const weightDisplay = item.weight >= 1000 ? `${item.weight / 1000}kg` : `${item.weight}g`;
      message += `*${index + 1}. ${item.name}* (${weightDisplay})\n`;
      message += `   Qty: ${item.quantity} x Rs. ${item.pricePerUnit}.00\n`;
      message += `   Subtotal: Rs. ${item.itemTotal}.00\n`;
      message += `-------------------------\n`;
      grandTotal += item.itemTotal;
    });

    message += `\n*GRAND TOTAL PRICE: Rs. ${grandTotal}.00*\n\n`;
    message += `Please process my items. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Cleanup storage configurations after dispatching user
    safeStorage.removeItem('shopCart');
    updateCartCount();
    setShowConfirmModal(false);
  };

const handleClearCart = () => {
  toast(
    ({ closeToast }) => (
      <div className="clear-cart-toast">
        <p>Are you sure you want to clear your entire cart?</p>

        <div className="clear-cart-actions">
          <button
            className="clear-cart-yes"
            onClick={() => {
              safeStorage.removeItem('shopCart');
              updateCartCount();
              toast.success("Cart cleared!");
              closeToast();
            }}
          >
            Yes
          </button>

          <button
            className="clear-cart-no"
            onClick={closeToast}
          >
            No
          </button>
        </div>
      </div>
    ),
    {
      position: "top-center",
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      closeButton: false
    }
  );
};

  
  const modalGrandTotal = modalCartItems.reduce((sum, item) => sum + item.itemTotal, 0);

  return (
    <div className="details-page-wrapper">
      <Navbar />

      <div className="breadcrumb-nav-container">
        <div className="breadcrumb-inner">
          <nav className="breadcrumb-path">
            <Link to="/">Home</Link> &gt; <Link to="/product">Products</Link> &gt; <span className="current-node">{product.name}</span>
          </nav>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ fontSize: '13px', color: '#1a1a1a', fontWeight: '600' }}>
              🛒 Cart Items: <span style={{ color: '#d11b5d', fontSize: '14px' }}>{cartCount}</span>
            </div>
            {cartCount > 0 && (
              <button 
                onClick={handleClearCart}
                style={{ fontSize: '11px', background: 'none', border: 'none', color: '#888', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
              >
                Clear Cart
              </button>
            )}
            <div className="next-nav-pointer" style={{ marginLeft: '10px' }}>
              <Link to={`/product/${product.id === products.length ? 1 : product.id + 1}`}>Next &gt;</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="details-main-layout">
        {/* Left: Media Block Section */}
        <div className="details-media-gallery">
          <div className="main-preview-frame">
            {product.isBestSeller && (
              <div className="details-ribbon-tag">
                <span className="stars-line">★★★</span>
                <span className="tag-text">Best Seller</span>
              </div>
            )}
            <img src={selectedImage || (product.images && product.images[0])} alt={product.name} className="active-display-img" />
          </div>

          <div className="thumbnail-strip-row">
            {galleryThumbnails.map((thumbSrc, index) => {
              const isActive = selectedImage === thumbSrc;
              return (
                <div 
                  key={index} 
                  className={`thumb-box-item ${isActive ? 'active-border' : ''}`}
                  onClick={() => setSelectedImage(thumbSrc)}
                >
                  <img src={thumbSrc} alt={`${product.name}-thumb-${index}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Info Section */}
        <div className="details-info-panel">
          <h1 className="product-main-heading">{product.name}</h1>
          
          

          <div className="product-price-display">
            Rs. {totalPrice > 0 ? totalPrice : 0}.00 
            {quantity > 1 && <span className="price-each-label"> (Rs. {calculatedPricePerUnit}.00 each)</span>}
          </div>
          
          <div className="facility-shipping-banner">
            <span className="truck-icon">🚚</span> Ships Directly from Our Production Facility
          </div>

          <div className="variant-options-group">
            <label className="variant-field-label">Select Weight Unit</label>
            <div className="weight-selection-container">
              {[100, 500, 1000].map((wt) => {
                const isSelected = weightType === 'preset' && selectedWeight === wt;
                return (
                  <button
                    key={wt}
                    type="button"
                    onClick={() => handlePresetWeightChange(wt)}
                    className={isSelected ? 'active-weight-btn' : ''}
                  >
                    {wt >= 1000 ? `${wt/1000}kg` : `${wt}g`}
                  </button>
                );
              })}
              
              <div className="custom-weight-wrapper">
                <input
                  type="number"
                  placeholder="Custom (g)"
                  value={customWeight}
                  onChange={handleCustomWeightChange}
                  onClick={() => setWeightType('custom')}
                  className={weightType === 'custom' ? 'active-custom-input' : ''}
                />
                <span className="grams-text-label">grams</span>
              </div>
            </div>
          </div>

          <div className="quantity-counter-group">
            <label className="variant-field-label">Quantity</label>
            <div className="counter-control-wrapper">
              <button className="counter-btn" onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}>—</button>
              <div className="counter-number-box">{quantity}</div>
              <button className="counter-btn" onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
          </div>

          <div className="checkout-funnel-actions">
            <button type="button" className="primary-cart-action-btn" onClick={handleAddToCart}>
              ADD TO CART
            </button>
            <button 
              type="button" 
              className="secondary-buy-action-btn whatsapp-order-btn" 
              onClick={handleOpenConfirmationModal}
              disabled={activeWeight <= 0 && cartCount === 0}
            >
              {cartCount > 0 ? `ORDER CART VIA WHATSAPP (${cartCount})` : 'ORDER VIA WHATSAPP'}
            </button>
          </div>

          <div className="product-features-bullet-list">
            <div className="product-detail-copy-block">
              <h2>Product Details</h2>
              <p>{product.description || "Freshly prepared by Anara Sweets with carefully selected ingredients."}</p>
            </div>

            {productIngredients.length > 0 && (
              <div className="product-ingredients-block">
                <h2>Ingredients</h2>
                <ul className="product-ingredients-list">
                  {productIngredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Confirmation Step Overlay Modal Dashboard */}
     {showConfirmModal && (
        <div className="order-modal-backdrop">
          <div className="order-modal-content">
            <h3 className="modal-title">
              Review Your Cart Items
            </h3>

            <div className="modal-body-details">
              {modalCartItems.map((item, idx) => (
                <div key={idx} className="modal-item-row">
                  
                  <div className="modal-item-info">
                    <p className="modal-item-title">
                      <strong>
                        {idx + 1}. {item.name}
                      </strong>{" "}
                      ({item.weight >= 1000
                        ? `${item.weight / 1000}kg`
                        : `${item.weight}g`})
                    </p>

                    <p className="modal-item-sub">
                      Quantity: {item.quantity} — Subtotal: Rs. {item.itemTotal}.00
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveItemFromModal(idx)}
                    title="Remove item"
                    className="modal-remove-btn"
                  >
                    ✕
                  </button>

                </div>
              ))}

              <div className="modal-total-row">
                <span className="modal-total-label">Total Amount:</span>
                <span className="modal-total-value">
                  Rs. {modalGrandTotal}.00
                </span>
              </div>
            </div>

            <div className="modal-action-row">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="modal-cancel-btn"
              >
                Close
              </button>

              <button
                type="button"
                onClick={sendWhatsAppMessage}
                className="modal-whatsapp-btn"
              >
                Send Order to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
      <WhatsAppButton />
      <ToastContainer />
      
    </div>
  );
}

export default ProductDetails;
