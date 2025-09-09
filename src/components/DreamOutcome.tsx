import React from 'react';
import { CheckCircle, Clock, Users, TrendingUp, Shield } from 'lucide-react';

const DreamOutcome = () => {
  const outcomes = [
    {
      icon: Clock,
      text: 'Every lead answered instantly'
    },
    {
      icon: CheckCircle,
      text: 'Appointments booked automatically'
    },
    {
      icon: Users,
      text: 'Prospects qualified and nurtured'
    },
    {
      icon: Shield,
      text: 'Always professional and reliable'
    },
    {
      icon: TrendingUp,
      text: 'Scale with confidence'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Imagine this instead…
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - outcomes */}
          <div className="space-y-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <outcome.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-gray-300 leading-relaxed pt-2 font-medium">
                  {outcome.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 border border-blue-500/30">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Your Business, Supercharged
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional AI agents working around the clock to grow your business while you focus on what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamOutcome;