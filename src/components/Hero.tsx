import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-height flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.98] mb-6 max-w-6xl">
            Never Miss Another Lead Again with{' '}
            <span className="gradient-text">24/7 AI Employees</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl leading-relaxed font-medium">
            We build custom AI Receptionists & Outbound Agents that answers every call, books appointments, qualifies leads, and nurtures prospects work for you 24/7.
          </p>

          {/* CTAs */}
          <div className="mb-12">
            <Link to="/form" className="btn-primary text-xl px-12 py-5">
              Build Your AI Voice Agent Today!
            </Link>
          </div>

          {/* Platform Mockup Window */}
          <div className="platform-mockup max-w-5xl mx-auto">
            {/* Window Header */}
            <div className="window-header">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">AI</span>
                </div>
                <span className="text-sm font-semibold">Propulsion AI Dashboard</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-white/10 rounded flex items-center justify-center">
                  <div className="w-2 h-2 border border-white/40 rounded-sm"></div>
                </div>
                <div className="w-4 h-4 bg-white/10 rounded flex items-center justify-center">
                  <div className="w-2 h-0.5 bg-white/40"></div>
                </div>
                <div className="w-4 h-4 bg-white/10 rounded flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white/40 rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="platform-content">
              {/* Top Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-label">Calls Answered Today</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="metric-value text-green-400">247</div>
                  <div className="metric-change text-green-400">100% answer rate</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-label">Appointments Booked</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="metric-value text-blue-400">89</div>
                  <div className="metric-change text-blue-400">+34% this week</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-label">Leads Qualified</span>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="metric-value text-purple-400">156</div>
                  <div className="metric-change text-purple-400">Ready for sales</div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="activity-section">
                <h3 className="text-white font-semibold mb-4">Live AI Agent Activity</h3>
                <div className="space-y-3">
                  <div className="activity-item">
                    <div className="activity-dot bg-green-500 animate-pulse"></div>
                    <div className="activity-content">
                      <span className="activity-text">AI Receptionist answered call from John Smith</span>
                      <span className="activity-detail">Appointment booked for tomorrow 2:00 PM</span>
                    </div>
                    <span className="activity-time">Live</span>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot bg-blue-500"></div>
                    <div className="activity-content">
                      <span className="activity-text">Outbound agent qualified lead: Sarah Johnson</span>
                      <span className="activity-detail">High-intent prospect, forwarded to sales</span>
                    </div>
                    <span className="activity-time">2 min ago</span>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot bg-purple-500"></div>
                    <div className="activity-content">
                      <span className="activity-text">Follow-up sequence initiated for 12 prospects</span>
                      <span className="activity-detail">Personalized SMS + email campaign</span>
                    </div>
                    <span className="activity-time">5 min ago</span>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot bg-orange-500"></div>
                    <div className="activity-content">
                      <span className="activity-text">AI handled 15 FAQ inquiries</span>
                      <span className="activity-detail">No human intervention needed</span>
                    </div>
                    <span className="activity-time">8 min ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;