import React from 'react';
import { HiOutlineClock, HiCheck } from 'react-icons/hi';
import Button from './Button';

export default function ServiceCard({ service, onSelect }) {
  const { name, price, duration, description, included, popular } = service;

  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-lg transition-all duration-300 ${
        popular
          ? 'bg-studio-900/90 border-2 border-brass/50 shadow-xl'
          : 'bg-studio-900/50 border border-white/10 hover:border-studio-600 hover:bg-studio-900/80'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 right-6 bg-brass text-studio-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded shadow">
          Most Requested
        </div>
      )}

      <div>
        <div className="flex items-baseline justify-between gap-4 border-b border-studio-800/80 pb-4 mb-5">
          <h3 className="text-xl font-serif font-bold text-studio-50">
            {name}
          </h3>
          <div className="text-right shrink-0">
            <span className="text-2xl font-serif font-bold text-brass">${price}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-studio-400 font-medium mb-4">
          <HiOutlineClock className="w-4 h-4 text-brass/80" />
          <span>{duration} Dedicated Session</span>
        </div>

        <p className="text-sm text-studio-300 leading-relaxed mb-6 font-light">
          {description}
        </p>

        {included && included.length > 0 && (
          <div className="space-y-2 mb-8 pt-4 border-t border-studio-800/50">
            <span className="text-[11px] uppercase tracking-wider text-studio-400 font-semibold block mb-2">
              Service Details:
            </span>
            {included.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-studio-300">
                <HiCheck className="w-3.5 h-3.5 text-brass shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-2">
        <Button
          variant={popular ? 'primary' : 'outline'}
          size="sm"
          className="w-full justify-center"
          onClick={() => onSelect(service)}
        >
          Book This Service
        </Button>
      </div>
    </div>
  );
}
