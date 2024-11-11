import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section className="intro-section">
      {/* Left Section */}
      <div className="intro-left">
        <h2 className="section-title">Welcome to <span className='brand-name'>Breezyair</span></h2>
        <h3 className="section-subtitle">Your Trustworthy Air Conditioning Partner</h3>
        
        <div className="action-items">
          <button className="schedule-button">Schedule a Service Now</button>
          <a href="#why-us" className="why-us-link">Why Us?</a>
        </div>
      </div>

      {/* Right Section */}
      <div className="intro-right">
        <img src="/assets/images/intro-section-img-1.svg" alt="Air Conditioning Service 1" className="intro-image" />
        <img src="/assets/images/intro-section-img-2.svg" alt="Air Conditioning Service 2" className="intro-image" />
        <img src="/assets/images/intro-section-img-3.svg" alt="Air Conditioning Service 3" className="intro-image" />
      </div>
    </section>
  );
};

export default IntroSection;
