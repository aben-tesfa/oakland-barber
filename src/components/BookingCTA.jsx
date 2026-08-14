import React from 'react';
import { studioConfig } from '../data/services';
import Button from './Button';
import { HiOutlineCalendar, HiOutlinePhone, HiOutlineShieldCheck } from 'react-icons/hi';

export default function BookingCTA({ onBookClick }) {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-studio-900 via-studio-850 to-studio-900 border border-brass/30 p-8 sm:p-12 shadow-2xl relative">
        {/* Subtle background detail */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-brass/5 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brass/10 border border-brass/20 text-brass text-xs font-semibold uppercase tracking-widest mb-4">
              <HiOutlineShieldCheck className="w-4 h-4" />
              <span>Private Solo Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-studio-50 mb-3">
              Ready for your next cut?
            </h2>
            <p className="text-studio-300 font-light leading-relaxed text-sm sm:text-base">
              Book directly through Calendly to view live real-time openings. No double-booking, no crowded waiting rooms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={onBookClick}
              className="w-full sm:w-auto justify-center"
              icon={<HiOutlineCalendar className="w-5 h-5" />}
            >
              Open Calendly Schedule
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={`tel:${studioConfig.formattedPhone}`}
              className="w-full sm:w-auto justify-center"
              icon={<HiOutlinePhone className="w-5 h-5" />}
            >
              Call Studio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
