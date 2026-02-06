import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "No win, no fee services",
  "Fast and responsive team",
  "End-to-end claims management",
  "Like-for-like replacement cars",
  "24/7 support after accidents"
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-brand-offwhite overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-coral/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <span className="text-brand-coral font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us?</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-brand-darkgray">
              Key Advantages of Using <br />
              <span className="text-brand-blue">Claim Assist for Accident Claims</span>
            </h2>
            <p className="text-brand-medgray text-lg mb-8 max-w-md">
              Why choose us? Because we prioritize your peace of mind and handle the complexities so you don't have to.
            </p>
            <a href="tel:8886263214" className="bg-brand-blue text-brand-white px-8 py-3 rounded-full font-bold hover:bg-brand-deep transition inline-block shadow-glow">
              Speak to an Expert
            </a>
          </div>

          <div className="lg:w-5/12">
            <div className="bg-brand-white p-10 rounded-2xl border border-brand-lightgray shadow-medium">
              <ul className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-lg font-medium text-brand-darkgray">
                    <div className="bg-brand-green/20 rounded-full p-1 mr-4 flex-shrink-0">
                      <Check className="w-5 h-5 text-brand-green" strokeWidth={3} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;