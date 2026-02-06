import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-blue/10 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-coral/10 rounded-full z-0"></div>
            <img
              src="/download-3.png"
              alt="Auto File Claim"
              className="relative z-10 rounded-2xl shadow-medium w-full object-cover h-[400px] border-4 border-brand-white"
            />
            <div className="absolute bottom-8 left-8 z-20 bg-brand-white p-6 rounded-lg shadow-medium max-w-xs hidden md:block border-l-4 border-brand-green">
              <p className="text-brand-darkgray font-bold text-lg">"They handled everything professionally."</p>
              <div className="flex items-center mt-2 text-brand-blue">
                ★★★★★
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-darkgray mt-2 mb-6">
              Car Accident Claims USA- Comprehensive Support After Every Collision
            </h2>
            <p className="text-brand-medgray text-lg leading-relaxed mb-6">
              We specialize in simplifying the car accident claims process for drivers across the USA. Whether you were at fault or not, our expert team ensures that your claim is handled quickly, professionally, and with minimal disruption to your life.
            </p>
            <p className="text-brand-medgray leading-relaxed mb-8">
              From replacement vehicles to repairs and legal advice, we manage it all — so you don't have to.
            </p>

            <a href="tel:8886263214" className="inline-block bg-brand-charcoal text-brand-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-darkgray transition shadow-soft">
              Call For A Free Claim Assessment
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;