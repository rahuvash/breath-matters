import React from 'react';

const benefits = [
  {
    title: "Eliminate Stress and Anxiety",
    description: "Learn to control overbreathing, reduce hypocapnia, and maintain balance even in challenging situations.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800",
    alt: "Person meditating in a peaceful field at sunset"
  },
  {
    title: "Enhance Mental Clarity and Focus",
    description: "Boost oxygen and glucose supply to your brain by aligning your breathing mechanics.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    alt: "Brain visualization with neural activity"
  },
  {
    title: "Achieve Peak Performance",
    description: "Whether you're giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800",
    alt: "Person stretching during workout"
  },
  {
    title: "Improve Physical Health",
    description: "Address symptoms like shortness of breath, dizziness, and fatigue by optimizing your acid-base physiology.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    alt: "Personal trainer helping with exercise"
  }
];

export default function CapnoBenefits() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          What Can the CapnoTrainer<sup>®</sup>GO Do for You?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="aspect-w-16 aspect-h-9 relative h-48 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-teal-600 bg-opacity-60"></div>
              </div>
              
              <div className="p-6 bg-teal-600">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-teal-50 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}