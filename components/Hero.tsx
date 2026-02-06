import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-brand-blue to-brand-purple py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <img
          src="/1095.jpg"
          alt="Road background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-coral rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-teal rounded-full opacity-20 blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-white leading-tight mb-6">
            Fast, Fair & Hassle-Free <br />
            <span className="text-brand-offwhite opacity-90">Car Accident Claims</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-offwhite/90 mb-8 max-w-2xl leading-relaxed">
            Been in a road traffic accident? Let us handle your claim from start to finish — no stress, no upfront costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#claim"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-blue bg-brand-white rounded-lg hover:bg-brand-offwhite transition shadow-medium"
            >
              Start your Claim
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:8886263214"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-white bg-transparent border-2 border-brand-white/30 rounded-lg hover:bg-brand-white/10 transition"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Speak to an Advisor
            </a>
          </div>

          <div className="mt-8">
            <a href="tel:8886263214" className="text-2xl md:text-3xl font-bold text-brand-white hover:text-brand-offwhite transition">
              Call : 888 626 3214
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-brand-offwhite/80 font-medium">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-lightgray border-2 border-brand-blue"></div>
              <div className="w-10 h-10 rounded-full bg-brand-medgray border-2 border-brand-blue"></div>
              <div className="w-10 h-10 rounded-full bg-brand-darkgray border-2 border-brand-blue"></div>
            </div>
            <span>Trusted by 10,000+ drivers across the USA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;