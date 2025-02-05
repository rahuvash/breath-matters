import { LineChart, Activity, RefreshCcw, Briefcase } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: "Real-Time Monitoring",
    description: "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm."
  },
  {
    icon: Activity,
    title: "Capnogram Visualization",
    description: "Get instant feedback on your breathing mechanics and see the impact of adjustments in real-time."
  },
  {
    icon: RefreshCcw,
    title: "Custom Learning Plans",
    description: "Tailored strategies to help you unlearn bad habits and master new ones."
  },
  {
    icon: Briefcase,
    title: "Interactive Practicums",
    description: "Experiment with guided breathing challenges to align behavior with physiology."
  }
];

export default function KeyFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Key Features You'll Love
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-lg bg-teal-600 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}