import React from 'react';

export default function CTASection() {
  return (
    <div className="relative bg-teal-600 py-24 overflow-hidden ">
      {/* Decorative wave patterns */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[200%] h-[60px] animate-wave"
            style={{
              top: `${i * 40}%`,
              left: '-50%',
              animation: `wave ${12 + i * 2}s infinite linear`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 50%, transparent 100%)',
              transform: 'rotate(-5deg)',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl text-white font-medium mb-2">
          Don't Wait
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Transform Your Breathing Today!
        </h3>
        <p className="text-lg md:text-xl text-teal-50 mb-12 max-w-2xl mx-auto">
          Your breath is your power. Take control with the CapnoTrainer® GO,
          and experience life with greater clarity, confidence, and vitality.
        </p>
        <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-semibold rounded-full text-teal-600 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-600 focus:ring-white transition-colors duration-200">
          Order Now and Start Your Breathing Journey!
        </button>
      </div>

      <style>{`
        @keyframes wave {
          0% {
            transform: translateX(0) rotate(-5deg);
          }
          100% {
            transform: translateX(50%) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
}