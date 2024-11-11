// BenefitsSection.js
import React from 'react';
import './Benefits.css';

const BenefitsSection = () => {
  return (
    <>
    <section className="benefits-section">
      {/* Section Title and Description */}
      <div className="benefits-content">
        <h2 className="benefits-section-title">Benefits</h2>
        <h3 className="benefits-section-subtitle">Stay Cool</h3>
        <p className="benefits-section-description">
          Experience unmatched comfort, convenience, and quality with Breezyair's professional air conditioning services. 
          From unmatched reliability to personalized solutions, we've got your back when it comes to staying breezy all year round.
        </p>
      </div>

      {/* Cards Section */}
      <div className="benefits-cards-container">
        <div className="benefits-card">
          <img src="/assets/images/benefits-1.svg" alt="Expert Handling" className="benefits-card-icon" />
          <p className="benefits-card-text">Expert Handling</p>
          <p className="benefits-card-description">Enjoy professional workmanship</p>
        </div>
        <div className="benefits-card">
          <img src="/assets/images/benefits-2.svg" alt="Reliable Solutions" className="benefits-card-icon" />
          <p className="benefits-card-text">Reliable Solutions</p>
          <p className="benefits-card-description">Depend on us for long-term efficiency</p>
        </div>
        <div className="benefits-card">
          <img src="/assets/images/benefits-3.svg" alt="Convenient Scheduling" className="benefits-card-icon" />
          <p className="benefits-card-text">Convenient Scheduling</p>
          <p className="benefits-card-description">Book at a time that suits you</p>
        </div>
        <div className="benefits-card">
          <img src="/assets/images/benefits-4.svg" alt="Swift Response" className="benefits-card-icon" />
          <p className="benefits-card-text">Swift Response</p>
          <p className="benefits-card-description">Rapid assistance in your time of need</p>
        </div>
        <div className="benefits-card">
          <img src="/assets/images/benefits-5.svg" alt="Customized Care" className="benefits-card-icon" />
          <p className="benefits-card-text">Customized Care</p>
          <p className="benefits-card-description">Tailored services for your unique need</p>
        </div>
        <div className="benefits-card">
          <img src="/assets/images/benefits-6.svg" alt="Peace of Mind" className="benefits-card-icon" />
          <p className="benefits-card-text">Peace of Mind</p>
          <p className="benefits-card-description">Rest assured with our satisfaction guarantee</p>
        </div>
      </div>
    </section>
    <section className="repair-services-section">
      {/* Left Section */}
      <div className="repair-services-left">
        <div>
        <h2 className="repair-services-title">Expert Repair Services</h2>
        <h3 className="repair-services-subtitle">Reliable AC Performance</h3>
        <p className="repair-services-description">
          Experience hassle-free cooling with our expert repair services for improved air conditioning performance and longevity.
        </p>
        </div>

        {/* Options with Icons */}
        <div className="repair-services-options">
          <div className="repair-option">
            <img src="/assets/images/benefits-1.svg" alt="Efficiency Icon" className="repair-option-icon" />
            <p className="repair-option-text">Improved System Efficiency</p>
          </div>
          <div className="repair-option">
            <img src="/assets/images/benefits-2.svg" alt="Lifespan Icon" className="repair-option-icon" />
            <p className="repair-option-text">Longer Equipment Lifespan</p>
          </div>
          <div className="repair-option">
            <img src="/assets/images/benefits-3.svg" alt="Cost Effective Icon" className="repair-option-icon" />
            <p className="repair-option-text">Cost-Effective Solutions</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="repair-services-right">
        <img src="/assets/images/benefits-overview-1.svg" alt="Repair Services" className="repair-services-image" />
      </div>
    </section>
    <section className="repair-services-section second">
      {/* Left Section */}
      <div className="repair-services-left">
        <div>
        <h2 className="repair-services-title">Maintenance</h2>
        <h3 className="repair-services-subtitle">Proactive Maintenance</h3>
        <p className="repair-services-description">
        Experience hassle-free cooling with our expert repair services for improved air conditioning performance and longevity
        </p>
        </div>

        {/* Options with Icons */}
        <div className="repair-services-options">
          <div className="repair-option">
            <img src="/assets/images/benefits-4.svg" alt="Efficiency Icon" className="repair-option-icon" />
            <p className="repair-option-text">Preventing Unwanted Breakdowns</p>
          </div>
          <div className="repair-option">
            <img src="/assets/images/benefits-5.svg" alt="Lifespan Icon" className="repair-option-icon" />
            <p className="repair-option-text">Enhanced Energy Efficiency</p>
          </div>
          <div className="repair-option">
            <img src="/assets/images/benefits-6.svg" alt="Cost Effective Icon" className="repair-option-icon" />
            <p className="repair-option-text">Increased System Durability</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="repair-services-right">
        <img src="/assets/images/benefits-overview-2.svg" alt="Repair Services" className="repair-services-image" />
      </div>
    </section>
    </>
  );
};

export default BenefitsSection;
