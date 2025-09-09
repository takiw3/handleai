import React from 'react';
import { Wrench, BarChart, HandHeart, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: Wrench,
      title: 'Custom-built AI agents designed for your business',
      description: 'No generic templates. Every AI agent is tailored to your industry, brand voice, and specific processes.',
      color: 'icon-blue'
    },
    {
      icon: BarChart,
      title: 'Bespoke dashboard + website to monitor performance',
      description: 'Get real-time insights with a custom dashboard that tracks exactly what matters to your business.',
      color: 'icon-purple'
    },
    {
      icon: HandHeart,
      title: 'Hands-on setup & ongoing optimization — zero DIY headaches',
      description: 'We handle everything from setup to optimization. You focus on your business, we handle the AI.',
      color: 'icon-green'
    },
    {
      icon: TrendingUp,
      title: 'Scalable systems that grow with you',
      description: 'Add new AI agents, workflows, and capabilities as your business expands. No limits.',
      color: 'icon-orange'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Propulsion AI Is Different
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {differentiators.map((item, index) => (
            <div key={index} className="card">
              <div className={`icon-square ${item.color} mb-6`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Visual */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DIY Tools */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-red-400 mb-4">DIY AI Tools</h3>
              <ul className="space-y-3 text-gray-400">
                <li>❌ Generic, one-size-fits-all</li>
                <li>❌ Complex setup & maintenance</li>
                <li>❌ Limited customization</li>
                <li>❌ No ongoing support</li>
              </ul>
            </div>

            {/* Propulsion AI */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-4">Propulsion AI</h3>
              <ul className="space-y-3 text-gray-400">
                <li>✅ Custom-built for your business</li>
                <li>✅ Done-for-you setup & optimization</li>
                <li>✅ Unlimited customization</li>
                <li>✅ Dedicated support team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;