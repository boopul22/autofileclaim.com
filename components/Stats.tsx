import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="bg-brand-offwhite py-10 sm:py-16 border-b border-brand-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-darkgray mb-3 sm:mb-4">Your Recovery Journey Starts Here</h2>
          <p className="text-brand-medgray max-w-2xl mx-auto text-base sm:text-lg">
            We're here to help every step of the way — from your first call to your compensation. Let us handle the hard work while you focus on recovery.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-8 text-center divide-x divide-brand-lightgray max-w-2xl mx-auto">
          <div className="p-2 sm:p-4">
            <div className="text-3xl sm:text-4xl font-extrabold mb-1 sm:mb-2 text-brand-blue">60</div>
            <div className="text-brand-medgray font-medium tracking-wide font-bold text-sm sm:text-base">Seconds Average time</div>
            <div className="h-1 w-10 sm:w-12 bg-brand-purple mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </div>
          <div className="p-2 sm:p-4">
            <div className="text-3xl sm:text-4xl font-extrabold mb-1 sm:mb-2 text-brand-blue">10,000</div>
            <div className="text-brand-medgray font-medium tracking-wide font-bold text-sm sm:text-base">Claims successfully handled</div>
            <div className="h-1 w-10 sm:w-12 bg-brand-purple mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;