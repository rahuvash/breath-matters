import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?",
    answer:
      "No prior experience is needed! The CapnoTrainer® GO is designed for both beginners and experienced practitioners. Our guided tutorials and personalized evaluation will help you start your journey at the right level and progress at your own pace.",
  },
  {
    question: "Is it safe to use for health conditions like asthma or anxiety?",
    answer:
      "The CapnoTrainer® GO is generally safe for most health conditions, including asthma and anxiety. However, we recommend consulting with your healthcare provider before starting any new breathing practice. Our device includes safety features and personalized settings to accommodate various health conditions.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply order your CapnoTrainer® GO, and you'll receive immediate access to our comprehensive onboarding program. This includes your FREE personalized breathing evaluation, step-by-step setup guide, and access to our beginner-friendly tutorial series.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-teal-200/20">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-xl font-semibold text-teal-700">{item.question}</span>
        <ChevronDown
          className={`w-6 h-6 text-teal-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed px-4">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">FAQs</h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
