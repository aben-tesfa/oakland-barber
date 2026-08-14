import React from 'react';
import SectionTitle from '../components/SectionTitle';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-studio-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Portfolio & Cuts"
          title="The Studio Lookbook"
          subtitle="Recent haircut architecture, beard sculpts, and studio moments captured in Oakland."
          centered={true}
        />

        <GalleryGrid />
      </div>
    </section>
  );
}
