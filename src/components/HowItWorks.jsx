import React from "react";

const HowItWorks = () => {
  const features = [
    {
      title: "Measure What Matters",
      description:
        "Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.",
    },
    {
      title: "Visualize Your Breathing",
      description:
        "See your breathing habits on a capnogram, a dynamic display of your inhalation and exhalation patterns. Pinpoint issues like overbreathing, gasps, or shallow breaths.",
    },
    {
      title: "Customized Interventions",
      description:
        "Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones.",
    },
    {
      title: "Engage in Practicums",
      description:
        "Explore playful self-intervention techniques to realign breathing mechanics with your body's needs—whether through nose-breathing challenges or CO2 biofeedback training.",
    },
  ];

  return (
    <div className="relative bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          HOW THE CAPNOTRAINER® GO WORKS
        </h2>

        <div className="relative">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-teal-600 text-white p-8 rounded-lg transform transition-transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Background Image */}
          <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CapnoTrainer Interface"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
