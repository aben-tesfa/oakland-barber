import React from 'react';
import { HiStar } from 'react-icons/hi';

export default function TestimonialCard({ item }) {
  if (!item) return null;

  return (
    <div className="p-6 rounded-lg bg-studio-900/60 border border-white/5">
      <div className="flex items-center gap-1 text-brass mb-3">
        {[...Array(5)].map((_, i) => (
          <HiStar key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-sm text-studio-300 italic mb-4 font-light leading-relaxed">
        "{item.quote || item.text}"
      </p>
      <div className="flex items-center justify-between text-xs text-studio-400">
        <span className="font-semibold text-studio-200">{item.name || item.client}</span>
        <span>{item.service || 'Verified Client'}</span>
      </div>
    </div>
  );
}
