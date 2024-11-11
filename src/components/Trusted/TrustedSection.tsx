// TrustedSection.js
import React from 'react';
import './TrustedSection.css';

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      {/* Left Section */}
      <div className="trusted-left">
        <h2 className="trusted-section-title">Trusted by Residents and Companies</h2>
        <p className="trusted-section-subtitle">
          Join the league of those who have chosen quality, reliability, and expertise for their cooling needs.
        </p>
        <button className="schedule-button">Schedule a Service Now</button>
      </div>

      {/* Right Section */}
      <div className="trusted-right">
        <div className="cards-container">
          {/* Replace these with the actual brand logo paths */}
          <div className="brand-card"><img src="/assets/images/voltas.svg" alt="Voltas" /></div>
          <div className="brand-card"><img src="/assets/images/daikin.svg" alt="daikin" /></div>
          <div className="brand-card"><img src="/assets/images/philips.svg" alt="philips" /></div>
          <div className="brand-card"><img src="/assets/images/ds-max.svg" alt="ds-max" /></div>
          <div className="brand-card"><img src="/assets/images/haier.svg" alt="haier" /></div>
          <div className="brand-card"><img src="/assets/images/lg.svg" alt="lg" /></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
