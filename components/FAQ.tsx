import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "What should I do immediately after a road traffic accident?",
    answer: "Ensure everyone's safety and call emergency services if needed. Exchange details with the other driver, take photos, and gather witness information. Avoid admitting fault. Then contact us— we'll handle recovery, claims, and guide you through the next steps."
  },
  {
    question: "What if the accident was my fault?",
    answer: "Even if the accident was your fault, we can still assist you with vehicle recovery and repairs. However, access to a replacement vehicle or injury compensation may differ. Contact us to discuss your specific situation."
  },
  {
    question: "Are your services free?",
    answer: "In most non-fault cases, our services come at no direct cost to you. Costs are recovered from the at-fault party's insurer. We operate on a transparent basis and will explain all financial aspects before proceeding."
  },
  {
    question: "Can I make a claim for personal injury?",
    answer: "Yes. If you have suffered an injury due to an accident that wasn't your fault, our legal partners can help you claim compensation for pain, suffering, and loss of earnings."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-darkgray">Frequently Asked Questions</h2>
          <p className="mt-3 sm:mt-4 text-brand-medgray">Have questions? We're here to help!</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-brand-white rounded-lg border border-brand-lightgray overflow-hidden shadow-soft">
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center bg-brand-white hover:bg-brand-offwhite transition focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-brand-darkgray text-base sm:text-lg pr-4">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-medgray flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 bg-brand-offwhite/50 border-t border-brand-lightgray">
                  <p className="text-brand-medgray leading-relaxed text-sm sm:text-base">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;