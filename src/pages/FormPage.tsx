import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Cal, { getCalApi } from "@calcom/embed-react";

const FormPage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-deep-navy)' }}>
      {/* Header */}
      <nav className="border-b border-white/6 backdrop-blur" style={{ backgroundColor: 'rgba(17, 24, 39, 0.92)' }}>
        <div className="container">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              <span className="text-lg font-bold text-white">Propulsion AI</span>
            </Link>

            {/* Back Button */}
            <Link to="/" className="btn-secondary">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Form Content */}
      <div className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Build Your AI Voice Agent Today
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Book your free strategy call and discover how AI voice agents can transform your business
          </p>
        </div>

        {/* Cal.com Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl" style={{ height: '600px' }}>
            <Cal 
              namespace="30min"
              calLink="propulsion-ai/30min"
              style={{width:"100%",height:"100%",overflow:"scroll"}}
              config={{"layout":"month_view"}}
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">30m</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Free Strategy Call</h3>
              <p className="text-gray-400 text-sm">No cost, no commitment required</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">14d</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-400 text-sm">Your AI agents ready in 2 weeks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Custom Built</h3>
              <p className="text-gray-400 text-sm">Tailored to your business needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;