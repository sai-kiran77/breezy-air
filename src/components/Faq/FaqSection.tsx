import React, { useState } from "react";
import "./FaqSection.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "What services does Breezy Air provide?",
      answer:
        "We offer a range of services including AC installation, repair, and comprehensive HVAC solutions for both residential and commercial clients.",
    },
    {
      question: "How do I schedule a service appointment?",
      answer:
        "You can schedule a service appointment by visiting our <a href='#contact-section'>Contact Us</a> page and filling out the form, or by calling us directly at <a href='tel:9739000294'>9739000294</a>, <a href='tel:8660174569'>8660174569</a>",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve lakksandra, Bangalore and surrounding areas. If you are outside this area, please contact us to discuss potential service options.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we provide emergency repair services to ensure that your AC or HVAC system is up and running as soon as possible. Contact us immediately if you need urgent assistance.",
    },
    {
      question: "Are your technicians certified?",
      answer:
        "Absolutely! Our technicians are highly trained, certified professionals with extensive experience in AC and HVAC services.",
    },
    {
      question: "What brands do you work with?",
      answer:
        "We work with all major AC and HVAC brands to provide you with the best possible solutions. If you have a specific brand in mind, please let us know.",
    },
    {
      question: "How often should I have my AC serviced?",
      answer:
        "We recommend having your AC serviced at least once a year to ensure optimal performance and efficiency. Regular maintenance can help prevent costly repairs and extend the life of your system.",
    },
    {
      question: "Do you offer any warranties on your services?",
      answer:
        "Yes, we stand by the quality of our work and offer warranties on both our installation and repair services. Please contact us for specific details regarding our warranty policies.",
    },
    {
      question: "Can you help improve my indoor air quality?",
      answer:
        "Definitely! We offer a range of services and products designed to improve indoor air quality, including air purifiers, filters, and regular maintenance checks.",
    },
    {
      question: "How can I reduce my energy bills with HVAC services?",
      answer:
        "Regular maintenance and energy-efficient systems can significantly reduce your energy bills. Our technicians can provide you with tips and recommend energy-efficient solutions tailored to your needs.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="uniqueFaqs-faq-section">
      <h2 className="uniqueFaqs-title">FAQS</h2>
      <p className="uniqueFaqs-subtitle">
        Clear Your Doubts: Answers to Common Questions
      </p>
      <div className="uniqueFaqs-faqs-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`uniqueFaqs-faq-card ${
              activeIndex === index ? "uniqueFaqs-active" : ""
            }`}
            onClick={() => toggleFaq(index)}
          >
            <div>
              <div className="uniqueFaqs-question">{faq.question}</div>
              {activeIndex === index && (
                <div onClick={(e) => e.stopPropagation()} className="uniqueFaqs-answer" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
              )}
            </div>
            <span
              className={`uniqueFaqs-arrow ${
                activeIndex === index ? "uniqueFaqs-open" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1eem"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#60CDFF"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="m19 12l12 12l-12 12"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
