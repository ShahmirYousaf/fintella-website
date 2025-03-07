import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaTelegramPlane, FaInstagram, FaHome, FaCogs, FaRegListAlt, FaQuestionCircle, FaEnvelope } from 'react-icons/fa'; // Import social and other icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Company Information */}
        <div className="footer-left">
          <img src={`${process.env.PUBLIC_URL}/assets/Logo.png`} alt="Company Logo" className="footer-logo" />
          <p className="footer-description">
            We simplify payments and payouts with advanced financial solutions.
            Our services include automation, customization, and global reach.
            Enjoy seamless processes backed by 24/7 support.
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="footer-links">
          <h3 style={{color:' #555', textAlign: 'center'}}>Quick Links</h3>
          <div className="ql-wrapper">
          <ul>
            <li><FaHome className="footer-icon" /> <a href="/home">Home</a></li>
            <li><FaCogs className="footer-icon" /> <a href="/products">Products</a></li>
            <li><FaRegListAlt className="footer-icon" /> <a href="/submerchants">SubMerchants</a></li>
            <li><FaQuestionCircle className="footer-icon" /> <a href="/faq">FAQS</a></li>
            <li><FaEnvelope className="footer-icon" /> <a href="/contact">Contact</a></li>
          </ul>
          </div>
        </div>

        {/* Right Section: Follow Us */}
        <div className="footer-follow">
          <h3 style={{color:' #555', textAlign: 'center'}}>Follow Us</h3>
          <div className="social-icons">
            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="social-icon" />
            </a>
            <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <p>Copy@ 2025 Fintella Technologies</p>
      </div>
    </footer>
  );
}

export default Footer;
