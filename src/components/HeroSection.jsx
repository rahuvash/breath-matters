import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative bg-teal-600">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 lg:grid lg:grid-cols-2 lg:gap-8 items-center min-h-[600px]">
          {/* Image Section */}
          <div className="relative lg:col-start-1">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full lg:h-full lg:max-h-[600px] object-cover rounded-r-3xl"
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000"
                alt="Person practicing mindful breathing"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="relative lg:col-start-2 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="relative">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Take Control of Your
                  <br />
                  <span className="relative">
                    Breath Today!
                    <div className="absolute -bottom-2 left-0 right-0">
                      <svg className="w-full" height="8" viewBox="0 0 400 8" fill="none">
                        <path d="M1 5.5C47.5 2 154.5 1.5 199 3.5C243.5 5.5 350.5 5.5 397 3.5" 
                              stroke="white" strokeWidth="2" strokeLinecap="round" 
                              strokeDasharray="0 10" />
                      </svg>
                    </div>
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Invest in the Science of Better Breathing
                  </h2>
                  <p className="text-lg text-teal-50">
                    For a limited time, get your CapnoTrainer®GO at an exclusive launch price!
                  </p>
                </div>

                <div className="mt-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105">
                    <p className="text-teal-600 font-semibold text-lg text-center">
                      Order now and receive a FREE personalized breathing evaluation plan!
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-full w-48 overflow-hidden">
        <div className="h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute right-0 h-16 w-1 bg-white opacity-20"
              style={{ top: `${i * 48}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}