import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Product from './pages/product';

import AllSweets from "./pages/AllSweets";
import AllTraditional from './pages/AllTraditional';
import AllHealthMix from './pages/AllHealthMix';

import ProductDetails from './pages/ProductDetails';
import AllItems from './pages/AllItems';

import './styles/index.css';

function App() {
  return (
    <Router>
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
        </Routes>

      </div>
    </Router>
  );
}

export default App;