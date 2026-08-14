import React, { useState } from 'react';
import { services, serviceCategories } from '../data/services';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All Services');

  const filteredServices = activeCategory === 'All Services'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-studio-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionTitle
          tag="Menu & Pricing"
          title="Craft Barbering Services"
          subtitle="Clear, transparent pricing. Every service includes a dedicated consultation, hot lather razor finish, and bespoke styling."
          centered={true}
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-brass text-studio-950 font-bold shadow'
                  : 'bg-studio-900 text-studio-300 hover:text-studio-100 hover:bg-studio-850 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
            />
          ))}
        </div>

        {/* Studio Note */}
        <div className="mt-12 text-center text-xs text-studio-400 font-light">
          Need a custom time or after-hours session? Direct inquiry via phone/SMS is always welcome.
        </div>
      </div>
    </section>
  );
}
