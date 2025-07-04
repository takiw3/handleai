import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  useEffect(() => {
    // Clean up any existing Cal scripts
    const existingScripts = document.querySelectorAll('script[src*="cal.com"]');
    existingScripts.forEach(script => script.remove());

    // Create and inject the Cal.com embed script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});

      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline-30min",
        config: {"layout":"month_view"},
        calLink: "propulsion-ai/30min",
      });

      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[src*="cal.com"]');
      scripts.forEach(script => script.remove());
      
      // Clean up Cal object
      if (window.Cal) {
        delete window.Cal;
      }
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-deep-navy)' }}>
      {/* Header */}
      <nav className="border-b border-white/6 backdrop-blur" style={{ backgroundColor: 'rgba(17, 24, 39, 0.92)' }}>
        <div className="container">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              <span className="text-lg font-bold text-white">Handle AI</span>
            </Link>

            {/* Back Button */}
            <Link to="/" className="btn-secondary">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Booking Content */}
      <div className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Book Your Free Consultation
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule a 30-minute call to see how Handle AI can transform your business operations
          </p>
        </div>

        {/* Cal.com Inline Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl p-4">
            <div style={{width:"100%",height:"700px",overflow:"scroll"}} id="my-cal-inline-30min"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">30</span>
              </div>
              <h3 className="text-white font-semibold mb-2">30 Minutes</h3>
              <p className="text-gray-400 text-sm">Quick consultation to understand your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">$0</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Completely Free</h3>
              <p className="text-gray-400 text-sm">No cost, no commitment required</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Custom Demo</h3>
              <p className="text-gray-400 text-sm">See Handle AI in action for your business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;