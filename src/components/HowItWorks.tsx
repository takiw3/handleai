import React from 'react';
import { Phone, Target, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const pillars = [
    {
      icon: Phone,
      title: 'AI Receptionist & Lead Capture',
      description: 'Inbound AI agents answer every call, handle FAQs, and book appointments directly into your calendar.',
      color: 'icon-blue',
    },
    {
      icon: Target,
      title: 'Smart Lead Qualification & Outbound Nurture',
      description: 'Outbound AI agents qualify leads, follow up, and re-engage old opportunities. Email + SMS automations keep prospects warm.',
      color: 'icon-purple',
    },
    {
      icon: BarChart3,
      title: 'Performance Dashboard & Optimization',
      description: 'A simple dashboard tracks results, conversations, and ROI. Continuous optimization built in.',
      color: 'icon-green',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{ backgroundColor: 'var(--bg-section-alt)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Done-For-You AI Agent System
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="card text-center">
              <div className={`icon-square ${pillar.color} mx-auto mb-6`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional Add-On Highlight */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Optional Add-On</h3>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              AI-generated campaigns & content to fuel your pipeline with more ready-to-buy leads.
            </p>
            <Link to="/form" className="btn-primary">
              Learn More About Add-Ons
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;