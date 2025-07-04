import React from 'react';
import { FileText, CreditCard, Calendar, Mail, Clock, Phone } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    { 
      name: 'QuickBooks', 
      icon: FileText,
      color: 'text-blue-400'
    },
    { 
      name: 'Stripe', 
      icon: CreditCard,
      color: 'text-purple-400'
    },
    { 
      name: 'Google Calendar', 
      icon: Calendar,
      color: 'text-green-400'
    },
    { 
      name: 'Outlook', 
      icon: Mail,
      color: 'text-blue-500'
    },
    { 
      name: 'Calendly', 
      icon: Clock,
      color: 'text-orange-400'
    },
    { 
      name: 'Twilio', 
      icon: Phone,
      color: 'text-red-400'
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h3 className="text-xs font-semibold text-gray-400 tracking-wider mb-12">
            INTEGRATES WITH YOUR EXISTING TOOLS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration) => (
              <div key={integration.name} className="integration-card">
                <integration.icon className={`w-8 h-8 ${integration.color} mb-3`} />
                <span className="text-sm font-medium text-gray-300">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;