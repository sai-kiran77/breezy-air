// ServicesSection.js
import React from 'react';
import './ServicesSection.css';

const servicesData = [
  {
    id: 1,
    title: 'AC Repair',
    description: 'Expert diagnosis and repair, extending the life of your AC',
    image: '/assets/images/ac-services.svg',
  },
  {
    id: 2,
    title: 'Installation',
    description: 'Professional and accurate installation, ensuring optimal performance',
    image: '/assets/images/installation-services.svg',
  },
  {
    id: 3,
    title: 'Contract/Retainer Work',
    description: 'Detailed inspections and tune-ups, preventing potential issues',
    image: '/assets/images/contract-services.svg',
  },
  {
    id: 4,
    title: 'Uninstallation',
    description: 'Efficient removal and disposal of your old units, simplifying the process',
    image: '/assets/images/uninstallation-services.svg',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      {/* Section Heading and Description */}
      <div className="services-section-header">
        <h2 className="services-section-title">Our Comprehensive AC Services</h2>
        <p className="services-section-description">
          Experience top-notch solutions tailored to your cooling needs
        </p>
      </div>

      {/* Cards Container */}
      <div className="services-cards-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-card-image" />
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <button className="service-card-button">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
