import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Identify and correct dysfunctional breathing habits.",
  "Understand the triggers and motivations behind your breathing patterns.",
  "Optimize your respiration for health, focus, and performance."
];

export default function ProductIntro() {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="relative">
            <h2 className="text-4xl font-bold text-teal-600 mb-8">
              What Is the
              <br />
              <span className="relative inline-block">
                CapnoTrainer® GO?
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                  <svg className="w-12 h-12 text-teal-100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z">
                      <animate
                        attributeName="d"
                        dur="4s"
                        repeatCount="indefinite"
                        values="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z;
                                M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z;
                                M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                      />
                    </path>
                  </svg>
                </div>
              </span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                The CapnoTrainer® GO isn't just a tool—it's your personal gateway to a
                healthier, more aligned you. Using advanced{' '}
                <span className="text-teal-600 font-semibold">capnography technology</span>, it
                provides real-time insights into your breathing behavior by measuring
                CO2 levels and visualizing your breathing patterns. Paired with a guided
                learning framework, it empowers you to:
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative block w-full">
                {/* Decorative waves */}
                <div className="absolute inset-0 z-0">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-16 opacity-20"
                      style={{
                        top: `${i * 30}%`,
                        background: 'linear-gradient(90deg, transparent, #0D9488 50%, transparent)',
                        transform: `rotate(${-5 + i * 2}deg)`,
                      }}
                    />
                  ))}
                </div>

                {/* Product image on wooden platform */}
                <div className="relative z-10">
                  <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/ce9a/3882/82674a601ce476532cdacb65e1cec47a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZZMXNZEwO5D5toRYCgb3SkeDF0PrLMtgebIw6mfhsrrjXR-dWnfl2Eup1x5YEAC~Pfhu3BmF5se9vO3yrB9sDoEQgcCaidNyik9reN1dwclnLei0W6UYW83a2R~Wv5GkH7y5BTt1~6V9~~ON0B1ILRJp7Zf7A~Jv3VDkss6qGUofd9V9mmHdJDEhYYCns87G8btLVDdZpH5pnGdhAnGECjECFI2nAN4vGfSuVn33fXoB4gQHKTsYsAuRYk4QEvHNus2jxX~FGIPLZ2KI1vnM-yDbglaXf4dBK03SqqDTJXo55-4b~wA44lXVTTdu-Eac77tFirTg3OXY-bNeqEhwBw__"
                      alt="CapnoTrainer GO Device"
                      className="w-80 h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}