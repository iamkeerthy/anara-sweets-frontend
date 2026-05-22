import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Product from './pages/product';
import ProductDetails from './pages/ProductDetails';

import PrivacyPolicy from './pages/Policy/PrivacyPolicy';
import ShippingPolicy from './pages/Policy/ShippingPolicy';
import RefundPolicy from './pages/Policy/RefundPolicy';
import TermsOfService from './pages/Policy/TermsOfService';

import PageLoader from './components/PageLoader'; // 👈 ADD LOADER
import './styles/index.css';

/* =========================
   Scroll To Top
========================= */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

/* =========================
   App Wrapper with Loader
========================= */
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 👈 loader time (adjust 400–1000ms)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

      <div className="App" style={{ opacity: loading ? 0.6 : 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Product Routes */}
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Policies */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </>
  );
}

/* =========================
   Main App
========================= */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;