import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          {/* Column 1: Brand */}
          <div className="col-md-3">
            <h5 className="footer-title">Heavenlymatch</h5>
            <p>
              A trusted matrimony platform connecting hearts and creating millions of happy stories.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-md-3">
            <h5 className="footer-title">Contact Us</h5>
            <p><FaEnvelope className="footer-icon" /> support@heavenlymatch.com</p>
            <p><FaPhoneAlt className="footer-icon" /> +1 123 456 7890</p>
            <p>Address: 123 Matrimony Lane, Love City, LC 56789</p>
          </div>

          {/* Column 4: Follow Us */}
          <div className="col-md-3">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Heavenlymatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
