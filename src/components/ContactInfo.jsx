import React from 'react';
import { studioConfig } from '../data/services';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi';
import { FaParking, FaSubway } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Address Block */}
      <div className="p-6 rounded-lg bg-studio-900/60 border border-white/5 flex items-start gap-4">
        <div className="w-10 h-10 rounded bg-studio-850 border border-studio-750 flex items-center justify-center text-brass shrink-0 mt-1">
          <HiOutlineLocationMarker className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs uppercase font-bold tracking-widest text-brass mb-1">
            Studio Location
          </h4>
          <p className="text-base font-medium text-studio-100">{studioConfig.address}</p>
          <p className="text-sm text-studio-300">{studioConfig.city}</p>
          <p className="text-xs text-studio-400 mt-1">{studioConfig.neighborhood}</p>
        </div>
      </div>

      {/* Hours Block */}
      <div className="p-6 rounded-lg bg-studio-900/60 border border-white/5 flex items-start gap-4">
        <div className="w-10 h-10 rounded bg-studio-850 border border-studio-750 flex items-center justify-center text-brass shrink-0 mt-1">
          <HiOutlineClock className="w-5 h-5" />
        </div>
        <div className="w-full">
          <h4 className="text-xs uppercase font-bold tracking-widest text-brass mb-2">
            Operating Hours (By Appointment)
          </h4>
          <div className="space-y-1.5 text-xs text-studio-300">
            {studioConfig.hours.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-0.5 border-b border-white/5 last:border-0">
                <span className="font-medium text-studio-200">{item.day}</span>
                <span className="text-studio-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transit & Parking info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-studio-900/40 border border-white/5 flex items-center gap-3">
          <FaSubway className="w-4 h-4 text-brass shrink-0" />
          <div className="text-xs text-studio-300">
            <span className="font-semibold text-studio-200 block">19th St BART</span>
            2 minute walk from station
          </div>
        </div>
        <div className="p-4 rounded-lg bg-studio-900/40 border border-white/5 flex items-center gap-3">
          <FaParking className="w-4 h-4 text-brass shrink-0" />
          <div className="text-xs text-studio-300">
            <span className="font-semibold text-studio-200 block">Nearby Parking</span>
            Franklin St Garages & Metered
          </div>
        </div>
      </div>

      {/* Direct Contact */}
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href={`tel:${studioConfig.formattedPhone}`}
          className="flex-1 min-w-[200px] p-4 rounded-lg bg-studio-900 border border-white/5 hover:border-brass/40 flex items-center gap-3 text-sm text-studio-200 transition-colors"
        >
          <HiOutlinePhone className="w-5 h-5 text-brass" />
          <div>
            <span className="text-[10px] uppercase text-studio-400 block tracking-wider">Direct Call / SMS</span>
            <span className="font-semibold">{studioConfig.phone}</span>
          </div>
        </a>

        <a
          href={`mailto:${studioConfig.email}`}
          className="flex-1 min-w-[200px] p-4 rounded-lg bg-studio-900 border border-white/5 hover:border-brass/40 flex items-center gap-3 text-sm text-studio-200 transition-colors"
        >
          <HiOutlineMail className="w-5 h-5 text-brass" />
          <div>
            <span className="text-[10px] uppercase text-studio-400 block tracking-wider">Studio Email</span>
            <span className="font-semibold">{studioConfig.email}</span>
          </div>
        </a>
      </div>
    </div>
  );
}
