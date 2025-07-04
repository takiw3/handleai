import React from 'react';
import { Settings, Brain, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Settings,
      number: 1,
      title: 'Connect & Configure',
      description: 'Plug in the apps you already trust, set a few guard-rails, and let your new AI employees handle the busy-work on autopilot.',
      color: 'icon-blue',
    },
    {
      icon: Brain,
      number: 2,
      title: 'Train & Set Rules',
      description: 'The platform feeds your live data to the AI employees and lets you set simple guard-rails.',
      color: 'icon-pink',
    },
    {
      icon: Zap,
      number: 3,
      title: 'Deploy & Relax',
      description: 'Your digital employees go to work instantly, running tasks and reporting results 24/7.',
      color: 'icon-orange',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Give Your Business Endless AI Employees In 3 Clicks.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className={`icon-square ${step.color} mx-auto mb-4`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;