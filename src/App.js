import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import AboutUs from './pages/AboutUs';

import Contact from './pages/Contact';

import AllSweets from "./pages/AllSweets";

import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/sweets" element={<AllSweets />} />
          {/* Contact Page Route */}
          <Route path="/Contact" element={<Contact />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;