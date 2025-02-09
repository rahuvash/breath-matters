import React from 'react';

const benefits = [
  {
    title: "Eliminate Stress and Anxiety",
    description: "Learn to control overbreathing, reduce hypocapnia, and maintain balance even in challenging situations.",
    image: "https://s3-alpha-sig.figma.com/img/4a8a/c1e4/91e60d364ab343794eaf71350f252475?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ERouFBi1HoZr3rri6Hwv~aN~JDQv4zjmrGP3YmmD-1Amv1Q~et7mp0M9zxHi28LESLUD55O9VBsT8gKfsmk6U2L7FO8E6k0tYE5y2y6Oj-l1pJaJmi~EQMIOUhQPSvZSgpgtZVIMkrjstKZdmliceCWqGtPaweOHW8MwHWe5NbFbmuxsLqlO7DFsfuX09p3~4hVIolAKGh-NGwq9QN4x~2y7VoT7or1H1GmRMNp5TtnN~R-~yvMGnQRyubVz7iZUQWBCzJrT~HTGaL-gwUecc2svlkd~ugCHhGepk0aZPvORtqa4WqsysYimH6P9XdhpAXlQoLfKtQpZfH9ByDRRFg__",
    alt: "Person meditating in a peaceful field at sunset"
  },
  {
    title: "Enhance Mental Clarity and Focus",
    description: "Boost oxygen and glucose supply to your brain by aligning your breathing mechanics.",
    image: "https://s3-alpha-sig.figma.com/img/da29/f2b0/88d6b8bb20b439b01132916d7c33c983?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UcxTAr2RoTccVf4l3Mbxeb8fW1aNzFuNbKgcnofcIVZ9XGLHWdhcurnpktqeLnOx4d~ONB7WlCLQEbr7-7EEL~tgAuN-f2yX1JslQa1oaEst9JfO9IGUNXywVn0mf9OouCB9COhrO6Hoq~FsRbdUOp2tgnre3vpwXILBtlz-feeSxW46puIXoX4sG8jR5JsdfXjUU7pf-8QrvpvM08tFDKFmxsvcWdTtAnsmHxqkD1cVXMiXosHCh~e5Wl7sGwOYJietIm2SS8IKuibgGTbh-e41QIorJ7OfcEJPxdwB9ymBAIur7QP9UHiJBi8MKPw2V7idRS~p~xFAX3l48fPC9g__",
    alt: "Brain visualization with neural activity"
  },
  {
    title: "Achieve Peak Performance",
    description: "Whether you're giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath.",
    image: "https://s3-alpha-sig.figma.com/img/9b94/9abb/29473b72db79bd2ae95d648d45f208d0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cbFUAGIhZs3xpAtZnieSSFI9DjE5QkZrLwyq8ekc7Gy01nKNF4rAEplSSTGaGgvF4wxxsuAZXlvGLuGDpAIdK6ReE6kMRrxwXxUmF5yNn1wQfBTfaZ1XdpEuHg5Uo7R8smKWDd12sfrWy9bHQj2Kw~B2~vHbIYxnyW3gxU5db0kr-zwzc47RnuerB~yDhTd4gKxpy9BnnYaNgqjAKQgWSw73~Cjy4FXie3rRAnc9VEFeBAxAOtkU8xnHGANzel~cH~yDtX7CcPF7yIZFpk0Z~ml8PumfjB95DdSfS2hz8ozb6Dnwbi2Thm0MunuVllwam~aJ8x5wkxHXH1W3EVYvYg__",
    alt: "Person stretching during workout"
  },
  {
    title: "Improve Physical Health",
    description: "Address symptoms like shortness of breath, dizziness, and fatigue by optimizing your acid-base physiology.",
    image: "https://s3-alpha-sig.figma.com/img/00d1/d756/1f6aaddc4fdca35acffc2d5ccdfee58e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=myRKbXg4oLeHl2JgCqQRQvJc8RepigMNPni45A5x1IXp~VLHBp311pGxG0ItMFE7dm84p89UY87lBxwobNdxyU~O6IBaaZLZtLT~yZxHLo3Av-LSnbXqpixpcjNFsTOf8ZlCJL8obKn85yab5ef-y4gpJJhNelOY4uNI5SjT1DHK7qSNf7WD3B5Z29sIWQLtTWa1~iJtjsxAnZDHOlSiS96zNiCrOK3iI7WUS5XdOP5XwkiHZxeVJ2PJOnnyemq8U1tatC4u8b5GwVDqCjVT6Rb7nMMmrOBolVc9uR5DR9H7qExJUTQ2OwV5axUB~z5L6s8Gfon3MTgHsB5CKGfa8g__",
    alt: "Personal trainer helping with exercise"
  }
];

export default function CapnoBenefits() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          What Can the CapnoTrainer<sup>®</sup>GO Do for You?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="aspect-w-16 aspect-h-9 relative h-48 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="h-full w-[800px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-teal-600 bg-opacity-60"></div>
              </div>
              
              <div className="p-6 bg-teal-600">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-teal-50 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}