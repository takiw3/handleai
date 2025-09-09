import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-section-alt)' }}>
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-8">
            Stop Losing Leads. Start Scaling with 24/7 AI Agents.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your free strategy call today and see how Propulsion AI can give your business a full-time sales & support team without the payroll.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/form" className="btn-primary text-xl px-12 py-5">
              <Calendar className="w-6 h-6" />
              👉 Book Your Free Strategy Call
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">14 Days</div>
                <div className="text-gray-400">Average Setup Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-400">AI Agent Availability</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-400">Performance Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;