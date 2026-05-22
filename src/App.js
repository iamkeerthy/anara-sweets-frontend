import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Product from './pages/product';

import AllSweets from "./pages/AllSweets";
import AllTraditional from './pages/AllTraditional';
import AllHealthMix from './pages/AllHealthMix';

import ProductDetails from './pages/ProductDetails';
import AllItems from './pages/AllItems';
import PrivacyPolicy from './pages/Policy/PrivacyPolicy';
import ShippingPolicy from './pages/Policy/ShippingPolicy';
import RefundPolicy from './pages/Policy/RefundPolicy';
import TermsOfService from './pages/Policy/TermsOfService';

import './styles/index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Product Routes */}
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Collections */}
          <Route path="/sweets" element={<AllSweets />} />
          <Route path="/all-traditional" element={<AllTraditional />} />
          <Route path="/all-health-mix" element={<AllHealthMix />} />
          <Route path="/all-items" element={<AllItems />} />
          

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Policies */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
