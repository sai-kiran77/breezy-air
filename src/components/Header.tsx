// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        <img src="/assets/images/logo.svg" alt="Breezy Air Logo" className="logo" />
        <div className="title-section">
          <h1 className="title">Breezy Air</h1>
          <p className="caption">Keep You Cool . All Year Round</p>
        </div>
      </div>

      {/* Right Section */}
      <nav className="header-right">
        <a href="#about" className="nav-link">About Us</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#why-us" className="nav-link">Why Us?</a>
        <a href='#contact-section'>
          <button className="enquire-button">Enquire</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
