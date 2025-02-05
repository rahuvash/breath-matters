import React from 'react';
import { Wind, Power } from 'lucide-react';

function Section1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600">
      {/* Navigation */}
      <nav className="p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full transform translate-x-1"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Breathe Matters</span>
            </div>
          <button className="bg-teal-800 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transform Your Life with the Revolutionary CapnoTrainer® GO
            </h1>
            <h2 className="text-2xl md:text-3xl text-white font-light mb-6">
              Breathe Smarter, Live Better
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Breathing is more than just an unconscious action—it's a foundation of health, performance, 
              and emotional well-being. But what if your breathing habits are silently holding you back? 
              Enter the CapnoTrainer® GO, the groundbreaking tool that merges science, psychology, and 
              technology to revolutionize your breathing habits and transform your life.
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg text-lg font-semibold 
                             hover:bg-teal-50 transition-colors inline-flex items-center space-x-2">
              <Power className="w-5 h-5" />
              <span>Get Started</span>
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?auto=format&fit=crop&w=600&q=80" 
                alt="CapnoTrainer GO Device" 
                className="rounded-lg shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;