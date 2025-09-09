import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'Under 14 days for setup + launch. We handle everything from initial consultation to full deployment of your custom AI agents.',
    },
    {
      question: 'Will it sound robotic?',
      answer: 'No. Our AI voices are natural and customized to your brand. Most customers cannot tell the difference between our AI and human representatives.',
    },
    {
      question: 'Can I customize what my AI agents say?',
      answer: 'Yes, we script and optimize conversations specifically for your business, industry, and brand voice. Every interaction is tailored to your needs.',
    },
    {
      question: 'What if leads ask complex questions?',
      answer: 'AI handles FAQs & escalation paths seamlessly. Complex queries are intelligently routed to your team with full context and conversation history.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, all data is encrypted and secured with enterprise-grade security protocols. We follow strict compliance standards and never share your data.',
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'We back everything with a performance guarantee. If you\'re not seeing results within 30 days, we\'ll work with you until you are or provide a full refund.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about getting started with AI agents
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
                <span className="text-lg font-semibold">{faq.question}</span>
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
                  <p className="text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;