import React from 'react';
import { PhoneOff, Clock, DollarSign, TrendingDown } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: PhoneOff,
      text: 'Calls go unanswered (especially after hours)',
      color: 'text-red-400'
    },
    {
      icon: Clock,
      text: 'Leads get cold because follow-up is slow or inconsistent',
      color: 'text-orange-400'
    },
    {
      icon: DollarSign,
      text: "You're relying on VAs or receptionists who make mistakes, quit, or cost too much",
      color: 'text-yellow-400'
    },
    {
      icon: TrendingDown,
      text: "Growth feels chaotic and unpredictable because you can't keep up",
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-section-alt)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            You're bleeding revenue if…
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50">
              <div className="flex-shrink-0">
                <point.icon className={`w-8 h-8 ${point.color}`} />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-400 italic max-w-2xl mx-auto">
            Your competitors don't need to outsmart you — just out-respond you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;