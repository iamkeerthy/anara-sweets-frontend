import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-section logo-column">
          <img src={logo} alt="Anara Sweets" className="footer-logo" />
        </div>


        <div className="footer-section">
          <h3 className="section-title">About Us</h3>
          <p className="story-text standard-paragraph">
            A story that began in 2004 is now a beloved and trusted name in homes
            across Tamil Nadu with more than 40+ outlets and counting.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Quick Links</h3>
          <ul className="links-list">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-column">
          <h3 className="section-title">Customer Support</h3>
          <p className="support-text standard-paragraph">
            If you haven't received information about your order after placing it,
            please get in touch with us at:
          </p>

          <div className="support-contact-row">
            <p className="phone-numbers">
              <FaPhoneAlt className="phone-icon" />
              <span>+94 75 275 3522</span>
            </p>

            <div className="footer-social-icons" aria-label="Social media links">
              <a href="https://www.facebook.com/share/17txCyc8JA/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/anarasweets.inc?igsh=MWc4aXhrcG84MWptaw==" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © Copyright {new Date().getFullYear()} Anara Sweets Made in Jaffna with 💜.
          Designed and Developed by{" "}
          <a
            href="https://www.vitalmasks.lk/"
            target="_blank"
            rel="noreferrer"
            className="vital-link"
          >
            Vital Masks
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
