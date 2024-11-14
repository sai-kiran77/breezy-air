import React from 'react';
import './App.css';
import Header from './components/Header';
import IntroSection from './components/Intro/IntroSection';
import TrustedSection from './components/Trusted/TrustedSection';
import BenefitsSection from './components/Benefits/Benefits';
import ServicesSection from './components/Services/ServicesSection';
import GallerySection from './components/Gallery/Gallery';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import FaqSection from './components/Faq/FaqSection';

function App() {
  return (
    <div className="App">
      <Header />
        <IntroSection />
        <TrustedSection />
        <BenefitsSection />
        <ServicesSection />
        <ContactSection />
        <GallerySection />
        <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
