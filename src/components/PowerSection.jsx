import React from 'react';

function PowerSection() {
  const features = [
    {
      title: "See Your Breathing in Action",
      description: "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.",
      image: "https://s3-alpha-sig.figma.com/img/cc43/05ba/ce28da76876a55a4e0981e33ece90a4f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CQ1CSNxQ6pJUiiHMXZKGBZRhoJLeQZA6sg10o7FBDMEAlivezCSlRet4F3WzgaiG~47gNTGj7rI9sbTTe5Ve6rCoC66WwcplmCpJ~nIhXmcpYyC6jdfZ6A8YRNXms9hPYAwQldo2u44Hg~TSx7lZll6xbSQNZRc06cZ7JyuNdS9Hppu621VzZ-54yMqrozotrt9MbCS1sJN6vdnhr4QG9YFckXMcY8vN4S5KSEblV7MXnzh8Eyu9O0b6AzCRUzoW-34YDD58LMAifnDvxAR7i21irSpx-3du7fZKOHbQMqB7UXY65kuTc6WbhIxHehmlhM9mSsh8Q5zfrFa~9iwOjw__"
    },
    {
      title: "Monitor Your Progress",
      description: "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.",
      image: "https://s3-alpha-sig.figma.com/img/62f8/4541/9abdeff2fefec1a77d77534997315ec7?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ET1Mt7PifSLBkud1M-GjTEfErUK6J3xo~WlPJ43qnOu5zD5-ElX~1IQX-NotEkWf6yv0BwWTMMiaYvqXp0MIi4444pzTDAu2Vvs-UnaLAbffXZyPMtSHZjHZXNgIgX2gdKEu1xBNHCA2ZpZQN-1YgQoiQCKXOiCKhUeObiOe6XTTvWtT0N0c5pEbVmRdg2jOZOiDItMLWlsCzJyRHmNUjmcKZ5giStw293mK5zW~pQ45u~ago2xRzoMnTO7snGTBqebHJPpR6YicP6CDBrdhKAUYXuBtkzURlpHzkr5XrT7SEZoRMuFbczsPEmdoMwd-pmzS9oYGiH51C-MUi~EC7Q__"
    },
    {
      title: "Receive Tailored Feedback",
      description: "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
      image: "https://s3-alpha-sig.figma.com/img/7315/8523/2004ef46eae665984fb7f04abf15522f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QHUdUilQW0SWt9OJv0xTI6hsB8sVkY6SQR3doncfSipa~ycHVuJ~f1hs7Got4zveFZXBgWBpcQ3s-Dpr2I6bSrrDuwkA5-xZsc3Ps7tOpdYpxVwhXFTfnorC-EKH9DLAWX0Ueq5Cg8G2xW0Or0ZQlFc28vaazUivpqNK7odluRxyZ6h8Y-A7OcY6RB-QDGni6kro2pMU0dEULmXG7133WkhVK4XPUD~q0tx2DZb9cFVtFlZgXMmajYMBJvM~rMEBo2svzNB2fU5GwQe0RGlwoFdbSabhfj8P28fvgqci3~qS01xzeBV~xQbXEEh3juvyeIR-r9T8Bl7BSPQBr6LqmQ__"
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