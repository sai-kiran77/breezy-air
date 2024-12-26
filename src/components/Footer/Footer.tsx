// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Placeholder */}
        <div className="footer-left">
          <img
            src="/assets/images/logo.svg"
            alt="Breezy Air Logo"
            className="logo"
          />
          <div className="title-section">
            <h1 className="title">Breezy Air</h1>
            <p className="caption">Keep You Cool . All Year Round</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-column">
            <h3 className="footer-column-heading">Company</h3>
            <ul className="footer-links">
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/pricing">Our Pricing For Contract’s</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-heading">Social Links</h3>
            <div className="footer-social-icons">
              <a
                // href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/twitter.svg"
                  alt="Twitter"
                  className="social-icon"
                />
              </a>
              <a
                // href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/facebook.svg"
                  alt="Twitter"
                  className="social-icon"
                />
              </a>
              <a
                // href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/linkedin.svg"
                  alt="Linkedin"
                  className="social-icon"
                />
              </a>
              <a
                // href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/whatsapp.svg"
                  alt="whatsapp"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/breezyair.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/instagram.svg"
                  alt="instagram"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2022 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
