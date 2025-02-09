import { LineChart, Activity, RefreshCcw, Briefcase } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    img: "https://s3-alpha-sig.figma.com/img/7b4c/90ca/6f044fc7a2161c6aaf094f561588075c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xpe7RETupKszW7OvlH1jb17XHQ27th4tACNZrjFWHSv5AJ2Bsth43FzCJCxFEZiVuQqMQOfXv2R5364WCFw2zZDjZH5rz76NVBNxDBeeglxasT8tmH189GG8-~TEEj874rKDboV8hfyfVo6lmQj7SC-1-MCN-rXVCa9XnGzR9BIvtXVmk4weB~LQkJcnfDsPy--Sx8RAMJ0y5dLCdRoAMqmcVaiCgWzAHBPJZBxCtF8wX1XWsNQpm6WTs8C~POEfqdjz0WuQQeqjpI-6YJ9Co5uHSM717qdMBMoHAMgGLDmzjzDQ3XIYfZhAGV5gNXjk9HhuIhj3pDuAyXYlnloNQw__",
    title: "Real-Time Monitoring",
    description: "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm."
  },
  {
    icon: Activity,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XjCAo5ZxmccE138tfGaWm_V3m1MGX2_DOw&s_",
    title: "Capnogram Visualization",
    description: "Get instant feedback on your breathing mechanics and see the impact of adjustments in real-time."
  },
  {
    icon: RefreshCcw,
    img: "https://s3-alpha-sig.figma.com/img/3928/0bb4/35598dc9491e3ed05f9c78a27ee44196?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R8DDx52XLBEWF2Xm3l5UgjAxheMoRWkl9BrRgT2UXXPrYFV6rqUOOSdYxPPWQ~ESh3C4~Kr6~wMi7tRAgTPRWg7dg8orLpFp7tzcMrwW6OkFEiAV0w4hnpzzhTwyARPo4w~LMT8UglbvyWMWTgFdWbauexduiUBtkFGnVwDbsnv4XurHDl0dUyAR5f~Jiioe~zkFLhqzjgQMxdQGtdFaK35NCKoiWD5LXRZO1fkNxM4am3Mt1rPkX3fdH4q3IEchjMSyoL95SIgXPZWB~w8PFWNrLFGuuIWc9df7dzwhHHsRA8ZEB64yjYvOiuZ10LPzhXZoU6-kJMvJChypDoyNNA__",
    title: "Custom Learning Plans",
    description: "Tailored strategies to help you unlearn bad habits and master new ones."
  },
  {
    icon: Briefcase,
    img: "https://s3-alpha-sig.figma.com/img/4df5/419c/e91bb386b507300e62711f9259fd541f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZFsMHZ5~9WSFOYlfFIgfUsBIcvFRScdQRRc8CvVgeF2-VhW2yhKhLfCkTNmQDvFAkiOSjWpANmRbf-tJpzU3rV5h6XTTqM~~C2GTFiFCa3zDZGaCoHQAEI4pnXYtaP3l3GFN4y4kdzV9tz8m1YlKdfLuM7zFc3myWbIlhrPa1XE5gnweiJ8MK8YyJblv4nG-EERdGnOjzPwnYGyhHhrtxxnrvfsLcy0WklS~kzsBn2ogqAq-olTkuCiobY-7FIpYC79U2jmMl5US7-hRruk3vDhkN5XuYG1k6paQPI0SjhtJWX8gZtl13V-v5jiLRhsdK43jzJsujq~iEG9fzU53QA__",
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
              <div className="w-24 h-24 rounded-lg overflow-hidden flex items-center justify-center mb-6">
                <img src={feature.img} className="w-full h-full object-cover" alt={feature.title} />
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
