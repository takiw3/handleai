import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'API', href: '#api' },
    ],
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
    Resources: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Help Center', href: '#help' },
      { label: 'Community', href: '#community' },
      { label: 'Tutorials', href: '#tutorials' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Compliance', href: '#compliance' },
    ],
  };

  return (
    <footer className="border-t border-white/6" style={{ backgroundColor: 'var(--bg-footer)' }}>
      <div className="container">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🤝</span>
                <span className="text-lg font-bold text-white">Propulsion AI</span>
              </div>
              <p className="text-sm text-gray-300 mb-6 max-w-sm">
                AI-powered voice agents that handle your appointment booking, lead nurture, and customer support 24/7 for you.
              </p>
              <div className="flex gap-3">
                <a href="#twitter" className="w-9 h-9 bg-white/8 hover:bg-white/14 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#linkedin" className="w-9 h-9 bg-white/8 hover:bg-white/14 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a href="#github" className="w-9 h-9 bg-white/8 hover:bg-white/14 rounded-lg flex items-center justify-center transition-colors">
                  <Github className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-bold text-white mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Propulsion AI. All rights reserved.
            </p>
            <a href="mailto:support@gethandle.ai" className="text-sm text-white hover:text-gray-300 transition-colors">
              support@gethandle.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;