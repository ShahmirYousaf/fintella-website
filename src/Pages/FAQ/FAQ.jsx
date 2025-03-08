import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../../Data/FAQs'; // Assuming you have the 'faqs' data defined elsewhere
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="faq-question-text">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="faq-icon" />
              ) : (
                <ChevronDown className="faq-icon" />
              )}
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
