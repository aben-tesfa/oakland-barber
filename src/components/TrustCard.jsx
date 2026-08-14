import React from 'react';

export default function TrustCard({ icon, title, description, badge }) {
  return (
    <div className="p-6 sm:p-7 rounded-lg bg-studio-900/60 border border-white/5 hover:border-brass/30 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded bg-studio-850 border border-studio-750 flex items-center justify-center text-brass group-hover:border-brass/50 group-hover:scale-105 transition-all duration-200">
            {icon}
          </div>
          {badge && (
            <span className="text-[10px] uppercase font-bold tracking-widest text-brass/80 bg-brass/10 border border-brass/20 px-2.5 py-1 rounded">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-lg font-serif font-bold text-studio-50 mb-2">
          {title}
        </h3>
        <p className="text-sm text-studio-400 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
