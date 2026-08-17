import React from 'react';
import { studioConfig } from '../data/services';
import Button from '../components/Button';
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker, HiCheckCircle } from 'react-icons/hi';

export default function Hero({ onBookClick }) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brass/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-studio-900 border border-brass/30 text-brass text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brass animate-pulse"></span>
              <span>Barbershop by Binyam • 3233 Grand Ave, Oakland</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-studio-50 leading-[1.12] tracking-tight">
              Classic Cut. <br />
              Precision style. <br />
              <span className="text-brass italic font-normal">Crafted for you.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-studio-300 font-light max-w-xl leading-relaxed">
              Welcome to Classic Cut by Binyam. Precision haircuts, sharp beard shaping, custom hair coloring, and revitalizing treatments in Oakland's Grand Lake district.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onBookClick}
                icon={<HiOutlineCalendar className="w-5 h-5" />}
              >
                Schedule Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#services"
              >
                View Services & Rates
              </Button>
            </div>

            {/* Studio Key Attributes */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-studio-300">
              <div className="flex items-center gap-2.5">
                <HiOutlineLocationMarker className="w-4 h-4 text-brass shrink-0" />
                <span>3233 Grand Ave, Oakland, CA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HiCheckCircle className="w-4 h-4 text-brass shrink-0" />
                <span>Open 7 Days • Walk-ins Welcome</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HiOutlineClock className="w-4 h-4 text-brass shrink-0" />
                <span><strong className="text-studio-100 font-semibold">Mon–Sat:</strong> 10:30 AM – 7:30 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HiOutlineClock className="w-4 h-4 text-brass shrink-0" />
                <span><strong className="text-studio-100 font-semibold">Sunday:</strong> 9:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-studio-900 border border-white/10 shadow-2xl p-2 group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-studio-950">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop"
                  alt="Oakland Barber Craftsmanship"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-950/90 via-studio-950/10 to-transparent"></div>

                {/* Floating Studio Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-studio-900/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brass block">
                        Master Barber
                      </span>
                      <span className="text-base font-serif font-bold text-studio-50">
                        {studioConfig.barberName}
                      </span>
                    </div>
                    <button
                      onClick={onBookClick}
                      className="text-xs bg-brass text-studio-950 font-bold px-3 py-1.5 rounded hover:bg-brass-light transition-colors"
                    >
                      Book Chair
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
