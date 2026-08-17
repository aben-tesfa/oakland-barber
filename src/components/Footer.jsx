import React from 'react';
import { studioConfig } from '../data/services';
import { RiScissorsCutLine, RiInstagramLine } from 'react-icons/ri';
import { HiOutlineCalendar } from 'react-icons/hi';

export default function Footer({ onBookClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-950 border-t border-studio-900 text-studio-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Col 1: Studio Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-studio-900 border border-brass/30 flex items-center justify-center text-brass">
                <RiScissorsCutLine className="w-5 h-5" />
              </div>
              <span className="font-serif text-lg font-bold tracking-wider text-studio-50">
                CLASSIC CUT
              </span>
            </div>
            <p className="text-studio-400 font-light text-sm max-w-sm leading-relaxed">
              Barbershop by Binyam. Precision haircuts ($55), kids cuts ($45), beard trims ($65), professional color ($45+ / $75), and revitalizing treatments at 3233 Grand Ave, Oakland.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${studioConfig.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-studio-900 border border-white/5 flex items-center justify-center text-studio-300 hover:text-brass hover:border-brass/40 transition-colors"
                aria-label="Instagram"
              >
                <RiInstagramLine className="w-4 h-4" />
              </a>
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-1.5 text-xs text-brass hover:text-brass-light uppercase font-semibold tracking-wider transition-colors ml-2"
              >
                <HiOutlineCalendar className="w-4 h-4" />
                <span>Book with Binyam</span>
              </button>
            </div>
          </div>

          {/* Col 2: Studio Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-studio-200">
              Location
            </h4>
            <p className="text-xs text-studio-400 leading-relaxed font-light">
              {studioConfig.address}<br />
              {studioConfig.city}<br />
              <span className="text-studio-500">{studioConfig.neighborhood}</span>
            </p>
            <p className="text-xs text-studio-300 pt-1">
              Tel: <a href={`tel:${studioConfig.formattedPhone}`} className="hover:text-brass">{studioConfig.phone}</a>
            </p>
          </div>

          {/* Col 3: Hours & Policy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-studio-200">
              Hours of Operation
            </h4>
            <ul className="space-y-1 text-xs text-studio-400 font-light">
              <li>Mon – Sat: 10:30 AM – 7:30 PM</li>
              <li>Sunday: 9:00 AM – 2:00 PM</li>
            </ul>
            <p className="text-[11px] text-brass/80 pt-1">
              Appointments & Walk-ins Welcome
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-studio-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-studio-500 font-light">
          <p>© {currentYear} Oakland Barber Studio. All rights reserved.</p>
          <p className="tracking-wide">Crafted for Oakland, CA</p>
        </div>
      </div>
    </footer>
  );
}
