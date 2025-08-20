import React from 'react';
import { DollarSign, Clock, UserPlus, ShieldCheck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      iconColor: 'icon-green',
      title: 'Slash Payroll by 80%',
      description: 'Replace an $80k hire with a $1k/mo AI employee—no super, holidays, or sick leave.',
    },
    {
      icon: Clock,
      iconColor: 'icon-blue',
      title: '24/7 Output, Zero Burn-Out',
      description: 'Your AI team works nights, weekends and public holidays so the backlog never piles up.',
    },
    {
      icon: UserPlus,
      iconColor: 'icon-purple',
      title: 'Hire Roles Instantly',
      description: 'Add AI roles with one click—no interviews, no onboarding, no excessive overhead.',
    },
    {
      icon: ShieldCheck,
      iconColor: 'icon-orange',
      title: 'Bulletproof SOP Execution',
      description: 'AI employees follow your exact processes every time, eliminating human error and inconsistency.',
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-section-alt)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            24/7 Personalized Conversations Always Delivering Results
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with AI employees that never sleep, never quit, and never make mistakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card">
              <div className={`icon-square ${benefit.iconColor} mb-6`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;