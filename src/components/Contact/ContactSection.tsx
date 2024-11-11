// ContactSection.js
import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Left Section */}
      <div className="contact-left">
        <img src="/assets/images/briefcase.svg" alt="Contact Icon" className="contact-icon" />
        <h2 className="contact-section-title">We would love to help Interior’s & Developer’s too.</h2>
        <h3 className="contact-section-subtitle">Help us with your details & we’ll reach out to you! OR Call us on 8660174569 or drop a hi at hello@breezyair.co</h3>
      </div>
        <div className='vertical-border'></div>
      {/* Right Section - Contact Form */}
      <div className="contact-right">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" id="name" name="name" required placeholder='Name'/>
          </div>
          <div className="form-group">
            <input type="text" id="companyName" name="companyName" required placeholder='Company Name'/>
          </div>
          <div className="form-group">
            <input type="tel" id="contactNumber" name="contactNumber" required placeholder='Contact Number'/>
          </div>
          <div className="form-group">
            <textarea id="context" name="context" rows={4} required placeholder='Context ( if you have any for us)'></textarea>
          </div>
          <button type="submit" className="contact-form-button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
