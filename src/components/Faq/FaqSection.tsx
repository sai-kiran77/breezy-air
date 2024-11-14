import React, { useState } from "react";
import "./FaqSection.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is your favorite template from BRIX Templates?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "How do you clone a Webflow Template from the Showcase?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Why is BRIX Templates the best Webflow agency out there?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
                <div className="uniqueFaqs-answer">{faq.answer}</div>
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
