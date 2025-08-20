import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-deep-navy)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Fill out the form below and we'll call you within 24 hours to set up your AI automation
          </p>
        </div>

        {/* Airtable Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              className="airtable-embed" 
              src="https://airtable.com/embed/appDCRMf4QTGnqjnN/pago6BplJNhrUAQiY/form" 
              frameBorder="0" 
              width="100%" 
              height="533" 
              style={{ background: 'transparent', border: '1px solid #ccc' }}
            />
          </div>
        </div>

        {/* Alternative CTA */}
        <div className="text-center">
          <p className="text-gray-300 mb-6">Prefer to speak with someone right away?</p>
          <Link to="/form" className="btn-primary">
            <Phone className="w-4 h-4" />
            Get Your AI Handler
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;