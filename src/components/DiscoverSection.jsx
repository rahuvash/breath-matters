import React from "react";
import { AlertCircle, FileWarning, Activity } from "lucide-react";

export default function DiscoverSection() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">
        DISCOVER THE HIDDEN POWER OF YOUR BREATH
      </h1>

      <div className="grid md:grid-cols-2 gap-8 overflow-hidden rounded-lg">
        {/* Left side - Image */}
        <div className="relative h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-[#FDF5F0]">

          <img
            src="https://s3-alpha-sig.figma.com/img/8f14/ddf9/572cd93a33102f960cacf4d67ab4e6b1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n9BrrULpVrpuy9CQUtWVSG1euF5RRFHHr5uYqvWGB02MTqEugF3SCzuKNUc~KIh5HuPfibcVZYn3NTf1yTzyHstS3samxch33A8VBjTld8HPfhI6eEHRmoE4L6YRGv-sU7~vpd7fHlg~o4WremvZuCIb8uAXHx~QvEdpJItickvbqbk3~7MoGNF5ScLuuVwt9SOnCsfPWYs41MIICXc1PnQg~kj0~wTiksULXnXKwz7Tu-WnWtpt5isuYPm8SOR9DDbxE87XrrDsGh0LR0B34-2CWuBZrzV~Sgn9mlYrTvj0LDpXwblbpXJCq2hPM3g-zhGBUxsAuZpihYTtEKoImA__"
            alt="Person practicing mindful breathing with CapnoTrainer GO"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col">
          {/* Light blue section */}
          <div className="bg-[#F5F9FA] p-8 space-y-6 h-auti">
         
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-full bg-red-100">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Compromise your health:</h3>
                  <p className="text-gray-600">Triggering anxiety, fatigue, and physical discomfort.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-full bg-blue-100">
                  <FileWarning className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Disrupt your performance:</h3>
                  <p className="text-gray-600">Causing focus deficits, memory issues, and suboptimal endurance.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-full bg-orange-100">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Exacerbate existing conditions:</h3>
                  <p className="text-gray-600">Like asthma, chronic pain, and even stress-related disorders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Teal section */}
          <div className="bg-teal-600 p-8 text-white flex-1 ">
            <p className="text-lg">
              Millions of people suffer the consequences of poor breathing habits. But you don't have to be one of them.
              With the <span className="font-semibold">CapnoTrainer® GO</span>, you'll unlock a scientifically-backed
              pathway to breathing mastery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
