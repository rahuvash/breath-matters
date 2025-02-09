import React from 'react';

const WhyDifferent = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Left side - Image (1/3rd width) */}
          <div className="relative col-span-1">
            <div className="bg-gray-100 rounded-3xl p-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/df48/27c3/fc573dcb6b5feea3aa576c4e67586b59?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hzXQ~lT-H7acc5FvWes5uo30Ey19H2AMyM18X~21jnJd3DDdJuKGbN4d06nj1Dh4jRLtqSFhR6egYWmcKI9QqMDS6d2bnyrEuuVCXIPl~057-1jdSeRL4NYMf0Brn1Y5rRr18VqlSXG~8smZk~g0RBlzjs-JcGiIxIlUb0dqld8XG4hGgDTIYGLSgXJJT3YuvJwKAmdvmwRMuDHSxQ-oyruYY7kzZF0eVclFklFrOJDt6sJsLirWEsU0i6pJmerW8KF4caJaRePxtXY6tgitvIwFnC1v612SBjVf6-LGv52MaTz~33KtgQjs7xiKN3vcYjHCcjf8CO1jdR69RcmuCw__"
                alt="CapnoTrainer GO equipment"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Right side - Content (2/3rd width) */}
          <div className="col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              WHAT MAKES THE CAPNOTRAINER® GO DIFFERENT?
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Unlike traditional breathing tools that focus on shallow techniques, the 
              CapnoTrainer® GO goes deeper. It integrates{' '}
              <span className="text-teal-600 font-semibold">psychophysiology</span>,{' '}
              <span className="text-teal-600 font-semibold">behavioral analysis</span>, and{' '}
              <span className="text-teal-600 font-semibold">cutting-edge technology</span>{' '}
              to provide a complete understanding of your breath's role in health and performance.
            </p>

            <blockquote className="border-l-4 border-teal-500 pl-6 my-8">
              <p className="text-xl text-teal-600 font-medium italic">
                "Breathing is behavior. And behavior can be changed. The CapnoTrainer® 
                helps you edit, optimize, and own your breath for life."
              </p>
            </blockquote>

            {/* Decorative waves */}
            <div className="relative h-16 w-32 mt-8">
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
      </div>
    </div>
  );
};

export default WhyDifferent;
