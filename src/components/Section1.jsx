import React from "react";
import { Wind, Power } from "lucide-react";

function Section1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600">
      {/* Navigation */}
      <nav className="p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              className="w-48 object-cover  "
              src="https://s3-alpha-sig.figma.com/img/56d4/5a66/62bbb4010a0f29ad5e21a54d0ee202fc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nZwnC-kl9OVhV6fHDXOPuEXSr05fXg4PQRS2gK8QEqxvoY3ntFqYShQHYiUh7VRY7-vC1Npuc6CMq7CUjx5G4~oEJToARjxaic6xeXNXVBlFi7gJ3kiv4jeHbEqX7SFiyxe7~eSrmKPZmDde9nChYeG5s0aGKapP5n8HrFv~MWgiXwhVCoHgmYKCWqca2MEGXt2I258AcmcwxpoPQpzcyF9eqMVqcp1goTowP9i2XgBX--hucTy3N~7ZQJUFYaNcKrC2CSrnWBHGxuSJKKSkdwelqO1yDJgXIIoQ-NNESAdch-2B-rYW4Ix248HdVixcKDHPPdG1t4Ose3W13XdAIA__"
            />
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
              Breathing is more than just an unconscious action—it's a
              foundation of health, performance, and emotional well-being. But
              what if your breathing habits are silently holding you back? Enter
              the CapnoTrainer® GO, the groundbreaking tool that merges science,
              psychology, and technology to revolutionize your breathing habits
              and transform your life.
            </p>
            <button
              className="bg-white text-teal-600 px-8 py-3 rounded-lg text-lg font-semibold 
                             hover:bg-teal-50 transition-colors inline-flex items-center space-x-2"
            >
              <Power className="w-5 h-5" />
              <span>Get Started</span>
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/ce9a/3882/82674a601ce476532cdacb65e1cec47a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZZMXNZEwO5D5toRYCgb3SkeDF0PrLMtgebIw6mfhsrrjXR-dWnfl2Eup1x5YEAC~Pfhu3BmF5se9vO3yrB9sDoEQgcCaidNyik9reN1dwclnLei0W6UYW83a2R~Wv5GkH7y5BTt1~6V9~~ON0B1ILRJp7Zf7A~Jv3VDkss6qGUofd9V9mmHdJDEhYYCns87G8btLVDdZpH5pnGdhAnGECjECFI2nAN4vGfSuVn33fXoB4gQHKTsYsAuRYk4QEvHNus2jxX~FGIPLZ2KI1vnM-yDbglaXf4dBK03SqqDTJXo55-4b~wA44lXVTTdu-Eac77tFirTg3OXY-bNeqEhwBw__"
                alt="CapnoTrainer GO Device"
                className="rounded-lg shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500 w-160 mix-blend-multiply "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
