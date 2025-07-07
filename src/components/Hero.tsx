import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const rotatingWords = ['follow ups', 'late invoices', 'no-shows', 'lead nurture', 'support'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-height flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Tag Pill */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/8 backdrop-blur-sm mb-8">
            <span className="text-xs font-semibold text-white/80 tracking-wide">
              AI-POWERED BUSINESS AUTOMATION
            </span>
          </div>

          {/* Headline with rotating text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.98] mb-6 max-w-5xl">
            Let us handle{' '}
            <span className="gradient-text rotating-text">
              {rotatingWords[currentWordIndex]}
            </span>{' '}
            for you.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            AI Handlers that chase late invoices, rescue no-shows, nurture your leads for you 24/7 across voice, email, and text.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/book" className="btn-primary">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+12893675460" className="btn-secondary">
              <Phone className="w-4 h-4" />
              Call A Handler
            </a>
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
                  <BarChart3 className="w-3 h-3 text-white" />
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
                    <span className="metric-label">Revenue Recovered</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="metric-value text-green-400">$42,350</div>
                  <div className="metric-change text-green-400">+12% this month</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-label">Active Handlers</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="metric-value text-blue-400">3</div>
                  <div className="metric-change text-blue-400">All systems active</div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <span className="metric-label">Tasks Completed</span>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="metric-value text-purple-400">1,247</div>
                  <div className="metric-change text-purple-400">+89 today</div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="activity-section">
                <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="activity-item">
                    <div className="activity-dot bg-green-500"></div>
                    <div className="activity-content">
                      <span className="activity-text">Invoice #1234 payment received</span>
                      <span className="activity-amount text-green-400">$2,500</span>
                    </div>
                    <span className="activity-time">2 min ago</span>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot bg-blue-500"></div>
                    <div className="activity-content">
                      <span className="activity-text">Appointment confirmed for John Smith</span>
                      <span className="activity-detail">Tomorrow at 2:00 PM</span>
                    </div>
                    <span className="activity-time">5 min ago</span>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot bg-purple-500"></div>
                    <div className="activity-content">
                      <span className="activity-text">Lead follow-up sent to 15 prospects</span>
                      <span className="activity-detail">Email campaign completed</span>
                    </div>
                    <span className="activity-time">12 min ago</span>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot bg-orange-500"></div>
                    <div className="activity-content">
                      <span className="activity-text">No-show recovery initiated</span>
                      <span className="activity-detail">3 appointments rescheduled</span>
                    </div>
                    <span className="activity-time">18 min ago</span>
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