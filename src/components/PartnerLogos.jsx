import React from "react";

export default function PartnerLogos() {
  const logos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEcOTweISbjyE1HqjbUyVrBqPXGDrGQvAYw&s",
      alt: "KNOSIS - Physiotherapy & Wellness",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxq4nyqKHeZz8Q8h9Pm3UWaLz1WLxI8cNdA&s",
      alt: "Medical Professional Services",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBIbusq6WSTfCFaX3CD-k6QTbrsh7eHogPA&s",
      alt: "Airway Collaborative - Breathe Sleep, Be Well",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTopB7R0I_aaa4CszgPrgztH7Lu-7pYlYFg&s",
      alt: "CCNSPIRE",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {logos.map((logo, index) => (
            <div key={index} className="w-48">
              <img
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
