// ServicesSection.js
import React from "react";

const galleryData = [
  {
    id: 1,
    title: "Galley 1",
    image: "/assets/images/gallery-1.svg",
  },
  {
    id: 2,
    title: "Galley 2",
    image: "/assets/images/gallery-2.svg",
  },
  {
    id: 4,
    title: "Galley 4",
    image: "/assets/images/gallery-4.svg",
  },
  {
    id: 5,
    title: "Galley 5",
    image: "/assets/images/gallery-5.svg",
  },
];

const galleryData2 = [
  {
    id: 3,
    title: "Galley 3",
    image: "/assets/images/gallery-3.svg",
  },
  {
    id: 6,
    title: "Galley 6",
    image: "/assets/images/gallery-6.svg",
  },
];

const GallerySection = () => {
  return (
    <section className="services-section">
      {/* Section Heading and Description */}
      <div className="services-section-header">
        <h2 className="services-section-title">Gallery</h2>
        <p className="services-section-description">A glimpse of our work</p>
      </div>

      {/* Cards Container */}
      <div className="gallery-cards-container">
        <div className="gallery-inner-container-1">
          {galleryData.map((service) => (
            <div key={service.id} className="gallery-card">
              <img
                src={service.image}
                alt={service.title}
                className="gallery-card-image"
              />
            </div>
          ))}
        </div>
        <div className="gallery-inner-container-2">
          {galleryData2.map((service) => (
            <div key={service.id} className="gallery-card">
              <img
                src={service.image}
                alt={service.title}
                className="gallery-card-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
