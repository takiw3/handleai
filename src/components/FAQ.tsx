import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Phone } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How quickly can I get started with Propulsion AI?',
      answer: 'Under 5 minutes. Connect your tools, set preferences, and AI Handlers go live—no technical knowledge required.',
    },
    {
      question: 'What exactly counts as a "credit"?',
      answer: 'A credit is consumed for each email or SMS sent, or for every 30 seconds of voice conversation. This simple system lets you track usage across all communication channels.',
    },
    {
      question: 'How human-like are the AI conversations?',
      answer: 'Our AI uses advanced natural language processing to sound completely human. Most customers cannot tell the difference between our AI and a human representative.',
    },
    {
      question: 'Can I customize what my AI Handlers say and do?',
      answer: 'Absolutely. You can customize conversation templates, set business rules, define escalation triggers, and train the AI on your specific processes and brand voice.',
    },
    {
      question: 'What happens if a situation is too complex for AI?',
      answer: 'The AI automatically escalates complex situations to your human team with full context and conversation history, ensuring seamless handoffs.',
    },
    {
      question: 'Is my business data secure?',
      answer: 'Yes. We use enterprise-grade encryption, SOC 2 compliance, and follow strict data privacy protocols. Your data is never shared with third parties.',
    },
    {
      question: 'Do I need to cancel my existing tools?',
      answer: 'No. Propulsion AI integrates with your existing software stack. We enhance what you already have rather than replacing it.',
    },
    {
      question: 'What if I\'m not satisfied with the results?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied, we\'ll refund your first month in full.',
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-section-alt)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Propulsion AI and how it works
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="accordion-header w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <div className="accordion-icon">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white/60" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/60" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="accordion-content">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Still have questions?</p>
          <Link to="/form" className="btn-primary">
            <Phone className="w-4 h-4" />
            Call A Handler
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;