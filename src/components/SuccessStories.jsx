import React from 'react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Dr. Sarah Chen",
      role: "Performance Coach",
      quote: "The CapnoTrainer GO has revolutionized how I help athletes optimize their breathing. We've seen remarkable improvements in performance and recovery times.",
      image: "https://s3-alpha-sig.figma.com/img/68c0/a84f/dbdd59c5dc6e945887392a236521e656?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nBwmUWM2zBYFnZZ~KrPcVUlf5Sd~~JAIn0sXPv8Z7z7Hg~RctYYMXUTkbaSxgc5aXHlbxAtLn6d99SszrYZz9WHboJHouf8n4cu2S5DQy09nfgojo0KkfvktiE~3hwv5qRad0auEzRId~78zwh7Sp~Pvwe8Tbqe0wJiWrBEWw9MiFTcKELXNJNtjmqeM74nQY7AID5YvS-VcWb~UegC~bkuZTfVR-z-QwhFSrBIQR5vCyxo5Fr9F7bRxdpGuGVeySisisNwT5BEUvDdCHR4mspnIdE6PPsVHuEEXdxhBUydWiDJNkQiVm11q5SmmEjYVcOkg~vU~kYka4wqWl936lw__",
      achievement: "90% of clients reported improved endurance"
    },
    {
      name: "Michael Roberts",
      role: "Marathon Runner",
      quote: "After six weeks of training with CapnoTrainer GO, I shaved 12 minutes off my marathon time. The real-time feedback helped me understand my breathing like never before.",
      image: "https://s3-alpha-sig.figma.com/img/6549/bd52/9d32f77eb888327565ae799d196b248e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZWTK9P7xqlPmHu3dVKy3S0nmTbRI8FGz3U5wHnTgryS6hqYCs47Gn2~FDs2O0zWdSGtJYCV9lAPaGhGw6G7XDQG5M4IqNSmwGWPqLY7k8RLCwXg1iey0ST5SRC3yDaFKqRSkHEmdh6K7R~0wTP2KfQoRGpr5gXr2yaNemMVJCliLxGLHYG4xRvEcRp2LVjToQmrK37aBWwQSO-uCqnEZ0HNXnRL4vMZHz4TOD6ZY6NDfEBceaGyZWw2nA8M~v6hVb5b49ODGNWSiC19eeiAmbQD2CkNNu5XR02BQUqzT~5sf0YwtoHA1J17bjq422rdLalcUwhBVMvKtFq2-Pal1iQ__",
      achievement: "Personal best in Chicago Marathon"
    },
    {
      name: "Emma Thompson",
      role: "Wellness Coach",
      quote: "For my clients struggling with stress and anxiety, the CapnoTrainer GO has been a game-changer. The visual feedback makes it easy to understand and correct breathing patterns.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp3Z1hXfTVTKtbw3vE75-rtfr1ZCFcPSw4A&s",
      achievement: "Helped 200+ clients improve breathing patterns"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            SUCCESS STORIES
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real results from real people using CapnoTrainer® GO
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-[#f0f7f7] rounded-2xl p-8 transition-transform hover:scale-105"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-teal-500">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-gray-700 italic mb-4">
                  "{story.quote}"
                </p>
              </blockquote>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {story.name}
                </h3>
                <p className="text-teal-600">
                  {story.role}
                </p>
              </div>

              {/* Achievement Badge */}
              <div className="bg-teal-600 text-white py-2 px-4 rounded-full text-center text-sm">
                {story.achievement}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-2xl text-gray-700 mb-8">
            Join thousands of satisfied users who have transformed their breathing with CapnoTrainer® GO
          </p>
          <button className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-colors">
            Start Your Journey Today
          </button>
        </div>

        {/* Decorative Wave */}
        <div className="flex justify-center mt-16">
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

export default SuccessStories;