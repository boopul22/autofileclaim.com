import React from 'react';
import { Phone } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-brand-white py-16 sm:py-24 border-t border-brand-lightgray">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-darkgray mb-4 sm:mb-6">Need help after a car accident? <br className="hidden md:block" /> We're here for you 24/7.</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-brand-medgray mb-2">Call us for a free consultation</span>
            <a href="tel:8886263214" className="text-3xl sm:text-4xl font-black text-brand-blue flex items-center gap-2 sm:gap-3 hover:text-brand-deep transition">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              888 626 3214
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a href="#claim" className="px-6 sm:px-8 py-4 bg-brand-blue text-brand-white font-bold rounded-lg shadow-glow hover:bg-brand-deep transition">
            Start Claim
          </a>
          <a href="tel:8886263214" className="px-6 sm:px-8 py-4 bg-brand-offwhite text-brand-darkgray font-bold rounded-lg hover:bg-brand-lightgray transition border border-brand-lightgray">
            Request a Callback
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;