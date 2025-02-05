import React from 'react';

function PowerSection() {
  const features = [
    {
      title: "See Your Breathing in Action",
      description: "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Monitor Your Progress",
      description: "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.",
      image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Receive Tailored Feedback",
      description: "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
      image: "https://images.unsplash.com/photo-1713947504256-135041318f31?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f7f7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-gray-800">EXPERIENCE THE</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-600">
            POWER OF CAPNOTRAINER® GO
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white/90 backdrop-blur">
                <h3 className="text-2xl font-bold text-teal-600 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PowerSection;