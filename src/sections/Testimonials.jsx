import React from 'react';
import { studioHighlights } from '../data/testimonials';
import { HiStar, HiCheckCircle } from 'react-icons/hi';

export default function Testimonials() {
  // Respecting the preference for no fake/artificial AI reviews.
  // Displays clean, authentic studio standards and rating summary.
  return (
    <section className="py-12 bg-studio-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-6 p-6 rounded-xl bg-studio-900/60 border border-white/5">
          <div className="flex items-center gap-2">
            <div className="flex text-brass">
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-studio-50 text-base">{studioHighlights.rating} Rating</span>
          </div>

          <span className="hidden sm:inline-block h-4 w-px bg-studio-800"></span>

          <div className="flex items-center gap-2 text-xs text-studio-300">
            <HiCheckCircle className="w-4 h-4 text-brass" />
            <span>Over {studioHighlights.reviewCount} Verified Oakland Appointments</span>
          </div>

          <span className="hidden sm:inline-block h-4 w-px bg-studio-800"></span>

          <div className="text-xs text-studio-400 font-light">
            {studioHighlights.platform}
          </div>
        </div>
      </div>
    </section>
  );
}
