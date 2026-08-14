import React, { useState } from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import Trust from '../sections/Trust';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import Booking from '../sections/Booking';
import BookingCTA from '../components/BookingCTA';
import Location from '../sections/Location';

export default function Home({ onOpenCalendly }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
    // Smooth scroll to booking section
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero onBookClick={onOpenCalendly} />

      {/* Services & Pricing Menu */}
      <Services onSelectService={handleSelectService} />

      {/* Solo Master Barber Story */}
      <About onBookClick={onOpenCalendly} />

      {/* Studio Experience & Perks */}
      <Trust />

      {/* Studio Lookbook Gallery */}
      <Gallery />

      {/* Clean Accreditation Banner */}
      <Testimonials />

      {/* Calendly Booking Section */}
      <Booking
        selectedService={selectedService}
        onOpenCalendly={onOpenCalendly}
      />

      {/* Booking CTA Banner */}
      <BookingCTA onBookClick={onOpenCalendly} />

      {/* Location & Directions */}
      <Location />
    </main>
  );
}
