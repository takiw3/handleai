import React from 'react';
import { Phone, Calendar, Target, MessageSquare, BarChart, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Phone,
      title: 'AI Receptionists',
      description: 'Answer every inbound call instantly with natural, professional conversations that never miss a beat.',
      color: 'icon-blue'
    },
    {
      icon: Calendar,
      title: 'Appointment Management',
      description: 'Bookings, confirmations, calendar sync, and rescheduling handled automatically 24/7.',
      color: 'icon-green'
    },
    {
      icon: Target,
      title: 'Lead Qualification & Nurturing',
      description: 'Outbound calls, SMS, and email follow-ups that qualify prospects and keep them engaged.',
      color: 'icon-purple'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Communication',
      description: 'AI agents work seamlessly across phone, SMS, and email for maximum reach and engagement.',
      color: 'icon-orange'
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Track calls, leads, conversions, and ROI in one comprehensive dashboard with actionable insights.',
      color: 'icon-pink'
    },
    {
      icon: Zap,
      title: 'Scalable Automations',
      description: 'Add new workflows and AI "employees" anytime as your business grows and evolves.',
      color: 'icon-green'
    }
  ];

  return (
    <section id="features" className="section-padding" style={{ backgroundColor: 'var(--bg-section-alt)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your AI Team Handles It All
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI automation that covers every aspect of lead management and customer communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className={`icon-square ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
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