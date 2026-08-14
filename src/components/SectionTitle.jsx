import React from 'react';

export default function SectionTitle({
  tag,
  title,
  subtitle,
  centered = false,
  className = '',
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 mb-3 ${centered ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-brass/60"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-brass font-medium">{tag}</span>
          <span className="h-px w-6 bg-brass/60"></span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-studio-50 tracking-tight leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-studio-400 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
