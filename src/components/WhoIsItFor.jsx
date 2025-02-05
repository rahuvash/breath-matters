import React from 'react';

const WhoIsItFor = () => {
  const userGroups = [
    {
      title: "Wellness Enthusiasts",
      description: "Achieve better sleep, reduce anxiety, and enhance overall vitality.",
      image: "https://plus.unsplash.com/premium_photo-1671305281546-81511006c94e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Health Practitioners",
      description: "Provide clients with revolutionary breathing behavior analysis for lasting results.",
      image: "https://plus.unsplash.com/premium_photo-1661690006963-7c8868418ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Athletes & Performers",
      description: "Boost endurance, focus, and physical resilience.",
      image: "https://plus.unsplash.com/premium_photo-1664304782019-614e9fb29aad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="bg-[#f0f7f7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          WHO IS THE CAPNOTRAINER® GO FOR?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {userGroups.map((group, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-teal-600/80 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {group.title}
                </h3>
                <p className="text-white/90">
                  {group.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center mt-12">
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
  );
};

export default WhoIsItFor;