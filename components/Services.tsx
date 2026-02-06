import React from 'react';
import { Briefcase, Truck, HeartHandshake, Gavel, CarFront, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Accident Claims Management",
    description: "We take care of everything — reporting, documentation, vehicle inspections, and liaising with insurers.",
    icon: <Briefcase />
  },
  {
    title: "Vehicle Recovery",
    description: "We arrange immediate collection and safe transport of your vehicle from the accident scene.",
    icon: <Truck />
  },
  {
    title: "Non-Fault Claims",
    description: "Not your fault? Get a like-for-like replacement car and full repair service at zero cost to you.",
    icon: <HeartHandshake />
  },
  {
    title: "Legal Assistance",
    description: "Injured or need legal help? Our trusted legal partners can assist you in claiming fair compensation.",
    icon: <Gavel />
  },
  {
    title: "Replacement Vehicle",
    description: "We provide a courtesy vehicle quickly, so you're never left stranded after an accident.",
    icon: <CarFront />
  },
  {
    title: "Vehicle Repairs",
    description: "Repairs are carried out at manufacturer-approved repair centers. We ensure quality and safety.",
    icon: <Wrench />
  }
];

const colorVariants = [
    { bg: 'bg-brand-teal/15', text: 'text-brand-teal' },
    { bg: 'bg-brand-purple/15', text: 'text-brand-purple' },
    { bg: 'bg-brand-coral/15', text: 'text-brand-coral' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkgray mt-2">Services We Provide</h2>
          <p className="mt-4 text-brand-medgray max-w-2xl mx-auto text-lg">
             Full spectrum accident management to get your life back to normal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClass = colorVariants[index % colorVariants.length];
            return (
                <div key={index} className="bg-brand-white p-8 rounded-xl hover:-translate-y-2 hover:shadow-medium transition-all duration-300 border border-brand-lightgray group">
                <div className={`w-14 h-14 ${colorClass.bg} rounded-lg shadow-sm flex items-center justify-center ${colorClass.text} mb-6 group-hover:bg-brand-blue group-hover:text-brand-white transition-colors`}>
                    {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-brand-darkgray mb-3">{service.title}</h3>
                <p className="text-brand-medgray leading-relaxed">
                    {service.description}
                </p>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;