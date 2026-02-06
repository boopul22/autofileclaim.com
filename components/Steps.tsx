import React from 'react';
import { Phone, ClipboardCheck, Car, ShieldCheck } from 'lucide-react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  {
    title: "Report Your Accident",
    description: "Submit details online or call us directly.",
    icon: <Phone className="w-8 h-8 text-brand-blue" />
  },
  {
    title: "We Assess Your Claim",
    description: "Our team verifies the details and assigns a dedicated claims handler.",
    icon: <ClipboardCheck className="w-8 h-8 text-brand-blue" />
  },
  {
    title: "We Provide a Courtesy Vehicle",
    description: "You’ll receive a similar vehicle while yours is being repaired.",
    icon: <Car className="w-8 h-8 text-brand-blue" />
  },
  {
    title: "We Manage Everything Else",
    description: "From repairs to legal help — we’ve got it covered.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />
  }
];

const Steps: React.FC = () => {
  return (
    <section className="py-24 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkgray mt-2">Step-by-Step: How It Works</h2>
          <p className="mt-4 text-brand-medgray max-w-2xl mx-auto text-lg">
            We've simplified the process to get you the help you need as quickly as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for large screens */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-brand-lightgray z-0 px-12"></div>

          {steps.map((step, index) => (
            <div key={index} className="bg-brand-white p-8 rounded-xl shadow-soft border border-brand-lightgray hover:shadow-medium transition duration-300 relative z-10 group">
              <div className="w-16 h-16 bg-brand-teal/15 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                <div className="text-brand-blue group-hover:text-brand-white transition-colors">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-brand-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-brand-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-brand-darkgray mb-3 text-center">{step.title}</h3>
              <p className="text-brand-medgray leading-relaxed text-sm text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;