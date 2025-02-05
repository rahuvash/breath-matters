import React from 'react';

const WhyDifferent = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl p-8">
              <img
                src="https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CapnoTrainer GO equipment"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* Decorative waves */}
            <div className="absolute -top-8 -left-8">
              <svg width="120" height="60" viewBox="0 0 120 60" className="text-gray-200">
                <path
                  d="M0 30 Q30 0, 60 30 T120 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M0 40 Q30 10, 60 40 T120 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M0 50 Q30 20, 60 50 T120 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              WHAT MAKES THE CAPNOTRAINER® GO DIFFERENT?
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Unlike traditional breathing tools that focus on shallow techniques, the 
              CapnoTrainer® GO goes deeper. It integrates{' '}
              <span className="text-teal-600 font-semibold">psychophysiology</span>,{' '}
              <span className="text-teal-600 font-semibold">behavioral analysis</span>, and{' '}
              <span className="text-teal-600 font-semibold">cutting-edge technology</span>{' '}
              to provide a complete understanding of your breath's role in health and performance.
            </p>

            <blockquote className="border-l-4 border-teal-500 pl-6 my-8">
              <p className="text-xl text-teal-600 font-medium italic">
                "Breathing is behavior. And behavior can be changed. The CapnoTrainer® 
                helps you edit, optimize, and own your breath for life."
              </p>
            </blockquote>

            {/* Decorative waves */}
            <div className="relative h-16 w-32 mt-8">
              <svg width="120" height="60" viewBox="0 0 120 60" className="text-teal-200">
                <path
                  d="M0 30 Q30 0, 60 30 T120 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M0 40 Q30 10, 60 40 T120 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDifferent;