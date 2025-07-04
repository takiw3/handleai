import React from 'react';
import { DollarSign, Calendar, Inbox, MessageSquare, Phone, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      iconColor: 'icon-green',
      title: 'Invoice Recovery',
      description: 'Automatically chase overdue payments with personalized email, SMS, and voice follow-ups until payment is received.',
    },
    {
      icon: Calendar,
      iconColor: 'icon-blue',
      title: 'Appointment Management',
      description: 'Reduce no-shows by 40% with smart reminders, automatic rebooking, and cancellation management.',
    },
    {
      icon: Inbox,
      iconColor: 'icon-purple',
      title: 'Lead Nurturing',
      description: 'Keep prospects warm with intelligent follow-up sequences that adapt based on engagement and behavior.',
    },
    {
      icon: MessageSquare,
      iconColor: 'icon-orange',
      title: 'Multi-Channel Communication',
      description: 'Reach customers through their preferred channels – email, SMS, or voice calls with natural AI conversations.',
    },
    {
      icon: Phone,
      iconColor: 'icon-pink',
      title: 'Voice AI Handlers',
      description: 'Human-like voice conversations that can handle complex scenarios and book appointments automatically.',
    },
    {
      icon: BarChart,
      iconColor: 'icon-green',
      title: 'Real-time Analytics',
      description: 'Track recovery rates, response times, and ROI with comprehensive dashboards and automated reporting.',
    },
  ];

  return (
    <section id="features" className="section-padding" style={{ backgroundColor: 'var(--bg-section-alt)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Features
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful AI automation tools designed to handle your most time-consuming business tasks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className={`icon-square ${feature.iconColor} mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;