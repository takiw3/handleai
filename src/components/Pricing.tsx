import React from 'react';
import { Star, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      features: [
        '1 AI Handler',
        '200 monthly credits',
        'Email & SMS automation',
        'Basic analytics',
        'Standard support',
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'btn-secondary',
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      features: [
        '3 AI Handlers',
        '1,000 monthly credits',
        'Voice calls included',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'btn-primary',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited Handlers',
        'Custom credit allocation',
        'Dedicated account manager',
        'White-label options',
        'Custom integrations',
        'SLA guarantees',
      ],
      cta: 'Contact Sales',
      ctaStyle: 'btn-secondary',
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the plan that scales with your business needs
          </p>
          
          {/* Credit Note */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-white">
            <Lightbulb className="w-4 h-4" />
            <span>1 credit = 1 email/SMS or 30 seconds of voice conversation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">
                  <Star className="w-4 h-4 fill-white" />
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/book" className={`${plan.ctaStyle} w-full justify-center`}>
                {plan.cta}
                {plan.ctaStyle === 'btn-primary' && <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;